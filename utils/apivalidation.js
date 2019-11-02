module.exports = (req, res, next) => {
    if(req.headers.api_key && req.headers.api_key === 'dkjsgjdngkjadbfkgjasbgmangd'){
        next();
    } else {
        res.status(403).json({error : "API KEY NOT FOUND"});
    }
}