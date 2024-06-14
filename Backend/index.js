const express = require("express");
const mainRoute = require("./Routes/index")
const cors = require("cors")

app.use(cors());
app.use(express.json());
app.use("/api/v1" , mainRoute );
app.use("/api/v2" , v2Router );

app.listen(3000);

const app = express();
