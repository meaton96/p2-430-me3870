

const getCssVariable = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};
const handleError = (message) => {

  console.log(message);
};

const sendPost = async (url, data, handler) => {
  // console.log(data);
  //console.log(JSON.stringify(data));
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });


  const result = await response.json();
  //console.log(result);
  // console.log(result);
  // Hide any previous messages
  // document.getElementById("domoMessage").classList.add("hidden");

  if (result.redirect) {
    window.location = result.redirect;
  }

  if (result.error) {
    handleError(result.error);
  }

  // Call the optional handler if provided
  if (handler) {
    handler(result);
  }

  return result; // Return the result for async/await calls
};

const sendGet = async (url, handler) => {

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const result = await response.json();

  if (result.redirect) {
    window.location = result.redirect;
  }

  if (result.error) {
    handleError(result.error);
  }

  if (handler) {
    handler(result);
  }

  return result;
}

const fetchUsername = async () => {
  try {
      const res = await sendGet("/getUsername");
      if (res.username) {
          return res.username;
      }
  } catch (err) {
      console.error("Error fetching username:", err);
  }
  return "";
};
const getUserAvatar = async () => {
  try {
      const res = await sendGet("/getAvatar");
      if (res.avatar) {
          return res.avatar;
      }
  } catch (err) {
      console.error("Error fetching avatar:", err);
  }
  return "";
};

function formatDateTime(isoDate) {
  const date = new Date(isoDate);

  const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
  };

  return date.toLocaleString('en-US', options);
}


const hideError = () => {
  // document.querySelector('#domoMessage').classList.add('hidden');
}

module.exports = {
  handleError,
  sendPost,
  hideError,
  sendGet,
  getCssVariable,
  fetchUsername,
  getUserAvatar,
  formatDateTime,
};