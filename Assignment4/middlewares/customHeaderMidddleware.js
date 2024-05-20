const customHeaderMiddleware = (headerName, headerValue) => {
    return (req, res, next) => {
        req.headers.headerName = headerValue;
        next();
    };
};

module.exports = { customHeaderMiddleware };