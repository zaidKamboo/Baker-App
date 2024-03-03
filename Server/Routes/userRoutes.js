const express = require("express");
const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { username, password, email } = req.body;
        console.log(req.body);
        console.log("inside route");
        return res
            .status(200)
            .json({ message: "Ok", user: { username, password, email } });
    } catch (error) {
        return res.status(500).json({ message: error.message, type: "Error" });
    }
});
router.post("/login", async (req, res) => {
    try {
        const { password, email } = req.body;
        console.log(req.body);
        console.log("inside route");
        return res
            .status(200)
            .json({ message: "Ok", user: { password, email } });
    } catch (error) {
        return res.status(500).json({ message: error.message, type: "Error" });
    }
});

module.exports = router;
