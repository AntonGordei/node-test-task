Parse contacts and phones by `location_id` and create Object where key will 
be `location_id` and it's values will be name and phones that person have

```json
    '1': {
        "name": "Bla bla bla",
        "phones": [
            {
                "phone_type_1": "650 780-7525"
            },
            {
                "phone_type_2": "650 701-0856"
            },
        ]
    }
```
and write this object into `data.json` file same as it's shown in example above