const app = require('./index');

const connect = require('./config/db');

app.listen(5000, async () => {
    await connect();
    console.log("App is listening on Port 5000...");
});