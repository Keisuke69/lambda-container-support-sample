"use strict";
const axios = require("axios");

exports.lambdaHandler = async (event, context, callback) => {
  const url = "https://google.com/";
  console.log(url);
  const res = await axios.get(url).then((res) =>
    callback(null, {
      statusCode: res.status,
      body: res.data,
      headers: {
        "Content-Type": "text/html",
      },
    })
  );
};
