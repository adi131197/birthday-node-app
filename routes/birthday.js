const express = require('express');
const router = express.Router();
const validator = require('validator')
const Birthday = require('../models/birthdaySchema')

// @route GET /birthday
// @desc Get all birthdays
router.get('/birthday', async (req,res)=> {
    const {name, dob, type} = req.query;

    try {
        if(name === 'asc') {
            const birthdays = await Birthday.find().sort('name')
            return res.status(201).json({
                    msg: 'Success',
                    birthdays
                })
            
        } else if(name === 'desc') {
            const birthdays = await Birthday.find().sort('-name')
            return res.status(201).json({
                    msg: 'Success',
                    birthdays
                })
        } else if(dob === 'asc') {
            const birthdays = await Birthday.find().sort('dob')
            return res.status(201).json({
                    msg: 'Success',
                    birthdays
                })
        } else if(dob === 'desc') {
            const birthdays = await Birthday.find().sort('-dob')
            return res.status(201).json({
                    msg: 'Success',
                    birthdays
                })
        } else if(type === 'asc') {
            const birthdays = await Birthday.find().sort('relationship')
            return res.status(201).json({
                    msg: 'Success',
                    birthdays
                })
        } else if(type === 'desc') {
            const birthdays = await Birthday.find().sort('-relationship')
            return res.status(201).json({
                    msg: 'Success',
                    birthdays
                })
        } else {
            const birthdays = await Birthday.find()
            return res.status(201).json({
                msg: 'Success',
                birthdays
            })
        }
        
    } catch (err) {
        console.log('An Error Occurred => ', err)
        return res.status(500).json({
            msg: 'Error Occurred'
        })
    }
})

//@route POST /birthday
//@desc Create new birthday
router.post('/birthday', async(req,res) => {
    const {name, dob, relationship} = req.body;
    try {
        const validateName = validator.isLength(name, {
            min: 3,
            max: 15
        })
        if(validateName) {
            const newBirthday = new Birthday({
                name,
                dob,
                relationship
            })
            
            const birthday = await newBirthday.save()
    
            return res.status(201).json({
                msg: 'success',
                birthday
            })
        } else {
            return res.status(400).json({
                msg: 'Please provide proper inputs'
            })
        } 
    } catch (err) {
        console.log('An Error Occurred => ', err)
        return res.status(500).json({
            msg: 'Error Occurred'
        })
    }
})

module.exports = router;