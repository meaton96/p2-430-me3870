const { S3 } = require('@aws-sdk/client-s3');
const { Upload } = require('@aws-sdk/lib-storage');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

// Configure S3 client
const s3 = new S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const uploadImage = async (req, res) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `uploads/${Date.now()}_${req.file.originalname}`,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };
  //  console.log(params);
  try {
    // Use @aws-sdk/lib-storage for the upload
    const _upload = new Upload({
      client: s3,
      params,
    });

    const data = await _upload.done(); // Wait for the upload to complete
    res.status(200).json({ url: `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`, data });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  uploadImage,
  uploadMid: upload.single('image'),
};
