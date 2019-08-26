const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let idToken;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")
    ) {
        idToken = req.headers.authorization.split(" ")[1];
    } else {
        return res.status(403).json({ error: "Unauthorized. No token found!!" });
    }
    console.log(idToken);
    jwt.verify(idToken, 'secretkey', (err, authData) => {
        if(err){
            res.status(403).json({ error: "error while verify token" });
        } else {
           return next();
        }
    });
}