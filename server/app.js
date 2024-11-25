require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const helmet = require('helmet');
const favicon = require('serve-favicon');
const session = require('express-session');
const RedisStore = require('connect-redis').default;
const redis = require('redis');
const router = require('./router.js');
const { devCSP, prodCSP } = require('./csp.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const redisClient = redis.createClient({
  password: process.env.REDISCLOUD_PASS,
  socket: {
    host: process.env.REDISCLOUD_URL,
    port: process.env.REDISCLOUD_PORT,
  },
});
redisClient.on('error', (err) => console.log('Redis error: ', err));

redisClient.connect().then(() => {
  const app = express();

  app.use(helmet());
  app.use(
    helmet.contentSecurityPolicy(prodCSP),
  );
  if (process.env.NODE_ENV === 'development') {
    app.use(
      helmet.contentSecurityPolicy(devCSP),
    );
  }

  app.use('/assets', express.static(path.resolve(`${__dirname}/../hosted`)));
  app.use(favicon(`${__dirname}/../hosted/img/favicon.png`));
  app.use(compression());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());
  app.use(session({
    key: 'sessionid',
    store: new RedisStore({ client: redisClient }),
    secret: 'jkldSSD98lk*71nsd1803&23d',
    resave: false,
    saveUninitialized: false,
  }));

  app.engine('handlebars', expressHandlebars.engine(
    {
      defaultLayout: '',
      helpers: {
        eq: (a, b) => a === b,
      },
    },
  ));
  app.set('view engine', 'handlebars');
  app.set('views', `${__dirname}/../views`);

  router(app);

  app.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Listening on port ${port}`);
  });
});
