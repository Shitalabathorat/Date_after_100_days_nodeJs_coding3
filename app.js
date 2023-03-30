const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.get("/date", (request, response) => {
  const dateTime = new Date();

  const result = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100
  );

  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});
module.exports = app;
