const { user } = require("../modals/userModel")
const bcrypt = require("bcrypt")

module.exports = {
    signup: (req, res) => {
        try {
            let userInfo = user.findOne({email: req.body.email})
            let { email, password } = req.body
   
            bcrypt.hash(password, 10, function (err, hashedPassword) {
                console.log(hashedPassword);
                let userTemplate = new user({
                    email: email,
                    password: hashedPassword
                })
                userTemplate.save().then(() => {
                    console.log("user added");
                    res.send("user ADDED")
                }).catch((err) => {
                    res.status(500)
                })
            });
        } catch (error) {
            res.status(500)
        }

    },
    login: async (req, res) => {
        try {
            let { email, password } = req.body
            let userInfo = await user.findOne({ email: email })

            if (userInfo) {
                bcrypt.compare(password, userInfo.password, function (err, result) {
                    if (result == true) {
                        res.status(200).json({userId:userInfo._id})
                    } else {
                        res.send(401)
                    }
                });
            } else {
                res.status(401)
            }
        } catch (error) {

        }
    }
}