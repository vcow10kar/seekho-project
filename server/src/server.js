const app = require('./index');
require("dotenv").config();

const connect = require('./config/db');

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    await connect();
    console.log("App is listening on Port 5000...");
});