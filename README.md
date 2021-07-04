# BIRTHDAY NODE APP

A Simple birthday app build using node.js, express.js and mongoose.

# To Run Locally

1. npm install
2. npm run dev

# Routes Description

1. POST BIRTHDAY ROUTE

- This route is used to add a new person's birthday details.
- Params required : name, dob, relationship

Ex:
    
    POST localhost:portno/birthday
    
    params {
        'name': 'value',
        'dob': 'value',
        'relationship': 'value'
        }

2. GET BIRTHDAY ROUTE

- This route is used to get the birthday details.
- In this route sorting is applied on name, dob and relationship i.e. how you want to get the data in asc or desc and if no params is passed it is return the default order.

Ex: 
    
    1.  GET localhost:portno/birthday
        OUTPUT: RETURNS all the person's birthday in default order

    2.  GET localhost:portno/birthday?name=asc
        OUTPUT: RETURNS all the person's birthday in ascending order by name.
