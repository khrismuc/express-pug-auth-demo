function auth(req, res, next) {
    if (Math.random() < 0.5) res.send("Randomly not authenticated!");
    else next();
}

module.exports = auth;