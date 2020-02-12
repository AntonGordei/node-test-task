const fs = require('fs');







fs.readFile('contacts.csv', (err, data) => {
        if (err) throw err;
        let jsonArrContacts = []
        data = data.toString();
        data = data.match(/.*(?:\n)/gi)
        //console.log(data[0])
        //let keys = data[0].split(',')

        for (i = 0; i < data.length; i++) {
            let keys = data[i].split(',')
            jsonArrContacts.push(
                {
                    location_id: keys[1],
                    name: keys[4]
                }
            )
        }

        
    });

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
                number: keys[8]
            }
        )
    }

})


