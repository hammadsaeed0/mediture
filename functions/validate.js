function validateInputs(inputArr) {
    return (req, res, next) => {
        if (!inputArr || inputArr.length === 0) {
            return next();
        }

        let errors = [];
        reqBody = req.body;
        inputArr.forEach((input) => {
            if (reqBody[input] === undefined) {
                errors.push(input);
            }
            // var { input } = req.body;
        });
        // console.log(user_id, "afsf");
        if (errors.length > 0) {
            return res.status(400).json({
                status: "fail",
                message: "provide the correct parameters",
                missedInputs: errors
            });
        }
        return next();
    }
}

module.exports = {
    validateInputs
}
