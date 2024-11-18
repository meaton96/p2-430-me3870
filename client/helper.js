
const handleError = (message) => {
   console.log(message);
  };
  
const sendPost = async (url, data, handler) => {
  console.log(data);
  //console.log(JSON.stringify(data));
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  

  const result = await response.json();
  console.log(result);
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

const getUserAvatar = async (username) => {

  if (!username) {
    return handleError('Username is required');
  }

  const response  = await fetch(`/getAvatar/${username}`);

  const result = await response.json();
  console.log(result);
  if (result.error) {
    console.log(result.error);
  }
  else {
    return result.avatar;
  }
};
    

const hideError = () => {
  // document.querySelector('#domoMessage').classList.add('hidden');
}

module.exports = {
  handleError,
  sendPost,
  hideError,
  sendGet,
  getUserAvatar,
};