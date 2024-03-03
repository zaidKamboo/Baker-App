const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/users", require("./Routes/userRoutes.js"));

app.listen(port, () => {
    console.log(`Server Baking App listening on port ${port}`);
});
