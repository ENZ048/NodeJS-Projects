const logger = (req, res, next) => {
    const startTime = Date.now();
    const {method, url} = req;
    const timestamp = new Date().toISOString();


    console.log("-----Incoming Request------")
    console.log("Timestamp : ", timestamp);
    console.log("Method : ", method);
    console.log("Url : ", url);

    res.on('finish', ()=> {
        const timeTaken = Date.now() - startTime;
        console.log(`Request Completed in : ${timeTaken}ms`);
    });

    next();
};

module.exports = logger;
