const request= require('request')




const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=94bae21268fef663d85e95e46c4acd92&query='+latitude+','+longitude+'&units=f'

    request({url, json: true},(error, {body})=>{
            if (error){
                callback("unable to connect to weather service",undefined)
        
        
            }else if(body.error){
                callback("Unable to find location ",undefined)
                
            }else{
            
            callback(undefined, body.current.weather_descriptions[0]+". It is currently "+body.current.temperature +" Degrees Out. Feels like " + body.current.feelslike +" The windspeed is "+ body.current.wind_speed +" The wind is blowing "+ body.current.wind_dir )
            }
        })

}

module.exports= forecast

