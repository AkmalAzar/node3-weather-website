const request = require('request')


const forecast = (latitude,longitude,callback) =>{
    const url ='https://api.darksky.net/forecast/7f37f234b0a80a50587baa11369dae05/'+latitude+','+longitude+'?lang=en'

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect the location services!',undefined)
        }else if(body.error){
            callback('Ubable to find the location.Try again',undefined)
        }else{
            console.log(body.daily.data[0])
            callback(undefined,body.daily.data[0].summary +' It is currently '+body.currently.temperature + ' degrees out. This high today is '+ body.daily.data[0].temperatureHigh + ' with a low of '+body.daily.data[0].temperatureLow +'. Threre is a '+body.currently.precipProbability + ' % chance of rain.')
        }
        
    })
}

module.exports = forecast