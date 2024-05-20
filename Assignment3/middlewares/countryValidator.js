const geoip = require('geoip-lite');
const expectedCountryCode = 'IN'; 
const countryvalidator = (req, res, next) => {
    const ip = req.ip || req.headers['x-forwarded-for']; 
    if (!ip) {
      return res.status(400).send('Unable to determine your location');
    }
    
    const geo = geoip.lookup(ip);
    if (!geo || geo.country !== expectedCountryCode) {
      return res.status(403).send('Access restricted for your region');
    }
  
    next();
}

module.exports=countryvalidator;