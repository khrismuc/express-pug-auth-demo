const path = require('path');
const express = require('express');
const auth = require('./middlewares/auth');

// routes
const apiNewspapers = require('./routes/api_newspapers');

const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join("public")));

app.get("/", (req, res) => {
    res.render("index", { title: "Hello World" });
});

app.use("/api/newspapers", auth, apiNewspapers);

app.listen(3000, () => {
    console.log(`listening on http://localhost:${3000}`);
});