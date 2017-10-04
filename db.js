    const dynamoose = require('dynamoose');
    // setting to the local dynamoDB...
    dynamoose.local();
    dynamoose.AWS.config.update({
        region: "asia-pacific-mumbai",        
    });

    const Car = dynamoose.model('Car' , {name:String});

    var sure = Car.create({name:'Surendar'});

    Car.delete({ update: true })
