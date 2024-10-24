const axios = require("axios");

const summarizeText = async (text) => {
  let data = JSON.stringify({
    inputs: text,
    parameters: {
      max_length: 100,
      min_length: 30,
    },
  });

  // A config object that contains instructions for API call
  let config = {
    method: "post",
    url: "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.ACCESS_TOKEN,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    // Return the summary text from res
    return response.data[0].summary_text;
  } catch (err) {
    console.log(err);
  }
};

module.exports = summarizeText;
