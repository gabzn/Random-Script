const fs = require('fs');
const cyberProfiles = require('./profiles.json');
let profiles = [];

cyberProfiles.forEach(cyberProfile => addProfile(cyberProfile));
function addProfile(cyberProfile)
{
    let profile = {"id" : "",
    "name" : cyberProfile.name,
    "email" : cyberProfile.email,
    "payment" : {
        "cardHolder" : cyberProfile.delivery.firstName + " " + cyberProfile.delivery.lastName,
        "cardNumber" : cyberProfile.card.number.replaceAll(" ",""),
        "expiryMonth": cyberProfile.card.expiryMonth,
        "expiryYear": cyberProfile.card.expiryYear.substring(2),
        "cvv": cyberProfile.card.cvv
        },
    "sameAsShipping" : false,
    "oneItemPerSite": true,
    "countrySpecific": "",
    "groupId":"",
    "shipping": {
        "firstName": cyberProfile.delivery.firstName,
        "lastName": cyberProfile.delivery.lastName,
        "address1": cyberProfile.delivery.address1,
        "address2": cyberProfile.delivery.address2,
        "city": cyberProfile.delivery.city,
        "zip": cyberProfile.delivery.zip,
        "phone": cyberProfile.phone,
        "countryCode": "US",
        "stateCode": "NY"
    },
    "billing": {
        "firstName": cyberProfile.delivery.firstName,
        "lastName": cyberProfile.delivery.lastName,
        "address1": cyberProfile.delivery.address1,
        "address2": cyberProfile.delivery.address2,
        "city": cyberProfile.delivery.city,
        "zip": cyberProfile.delivery.zip,
        "phone": cyberProfile.phone,
        "countryCode": "US",
        "stateCode": "NY"
    }
    };
    profiles.push(profile);
}

profiles = JSON.stringify(profiles);
console.log(profiles);

fs.writeFile("Gargantua.json", profiles,(err)=>{
    if(err) throw err;
})