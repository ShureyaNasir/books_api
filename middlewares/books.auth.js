function auth(req,res,next) {
    let isverified = true;
    if (isverified) {
        console.log("Logged in successfully");
        next()
    } else
    console.loq("Not authorized");
    throw Error;
}

module.exports = auth;
    
