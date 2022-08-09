/*var env = process.env.NODE_ENV || 'develpoment';
var config = require('./config.json');
var envConfig = config[env];
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);*/
const config = require('./config.json');
const env = process.env.NODE_ENV|| 'development';
if(env === 'production' || env === 'development') {
    const envConfig = config[env];
    Object.keys(envConfig).forEach(key => {
        process.env[key] = envConfig[key];
    });
};
console.log(env);