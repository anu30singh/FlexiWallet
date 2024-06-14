const express = require("express");
const mainRoute = require("./Routes/index")

app.use("/api/v1" , mainRoute );
const app = express();
