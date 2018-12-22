exports.greet = (req, res) => {
    res.status(200).send("Hello " + req.body.message)
}
