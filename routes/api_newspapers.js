const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("some newspapers here");
});

module.exports = router;