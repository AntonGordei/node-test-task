const fs = require('fs');







fs.readFile('contacts.csv', (err, data1) => {
    if (err) throw err;
    let jsonArrContacts = []
    data1 = data1.toString();
    data1 = data1.match(/.*(?:\n)/gi)
    //console.log(data[0])
    //let keys = data[0].split(',')

    for (i = 0; i < data1.length; i++) {
        let keys = data1[i].split(',')
        jsonArrContacts.push(
            {
                location_id: keys[1],
                name: keys[4]
            }
        )
    }

    fs.readFile('phones.csv', (err, data) => {
        let jsonArrPhones = []
        if (err) throw err;

        data = data.toString();
        data = data.match(/.*(?:\n)/gi)
        //console.log(data[0])
        //let keys = data[0].split(',')

        for (i = 0; i < data.length; i++) {
            let keys = data[i].split(',')
            jsonArrPhones.push(
                {
                    location_id: keys[2],
                    number: keys[8],
                    number_type: keys[9]
                }
            )
        }

        let jsonResult = []

        console.log(jsonArrPhones)
        for (i = 1; i < jsonArrContacts.length; i++) {
            let obj = {
                name: jsonArrContacts[i].name,
                phones: []
            }
            for (j = 1, count = 0; j < jsonArrPhones.length; j++) {
                console.log(jsonArrContacts[i].location_id === jsonArrPhones[j].location_id)
                if (jsonArrContacts[i].location_id === jsonArrPhones[j].location_id) {
                    obj.phones.push({[jsonArrPhones[j].number_type]:jsonArrPhones[j].number})
                }
                // if (count === 0) obj.phones[0].phone_type_1 = jsonArrPhones[j].number
                // if (count === 1) obj.phones[1].phone_type_2 = jsonArrPhones[j].number

            }
            jsonResult.push({[i]:obj})
        }
        fs.writeFileSync('people.json', JSON.stringify(jsonResult,null, ' '))
    })

});




