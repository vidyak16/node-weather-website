const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0e3f297b748d38b78481cdd091384831&query=' + latitude + ',' + longitude
    request({ url, json: true}, (error, { body } = {}) => {
        if(error){
            callback('unable to connect to weather service', undefined)
        }
        else if(body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] +'. It is currently ' +body.current.temperature + ' degrees out. It feels like ' +body.current.feelslike +' degrees out. And the humidity is ' +body.current.humidity)
        }
    })
}

module.exports = forecast