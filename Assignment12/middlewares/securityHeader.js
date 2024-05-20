class SecurityHeaders {
    static setHeaders(req, res, next) {
        res.setHeader('X-XSS-Protection', '1; mode=block');
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'SAMEORIGIN');
        res.setHeader('Content-Security-Policy', "default-src 'self'");
        next();
    }
  }
  
  module.exports = SecurityHeaders;