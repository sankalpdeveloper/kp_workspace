const { json } = require('express/lib/response')
const Product = require('../models/product')
const Enquiry = require('../models/enquiry')
const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "sankalpchoudhary8@gmail.com",
        pass: "wilimqhstknvaqpq"
    }
});

// verify connection configuration
transport.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

exports.getproduct = (req, res, next) => {
    console.log(req.body);
    Product.findOne({ '_id': req.body.id }, (err, result) => {
        if (err) { next(err) }
        // console.log(result);
        return res.json(result)
    })
}

exports.getallproduct = (req, res, next) => {
    Product.find((err, productData) => {
        if (err) { next(err) }
        console.log(productData);
        res.json(productData)
    })
}

exports.insertproduct = (req, res, next) => {
    Product.findOne({ 'item_name': req.body.item_name }, (err, result) => {
        if (err) { next(err) }
        if (result === null) {
            Product.insertMany({ 'item_name': req.body.item_name, 'item_category': req.body.item_category, 'item_price': req.body.item_price, 'item_available': 1, item_delivery_capacity: req.body.item_delivery_capacity, 'image_url': req.body.image_url, modified: new Date().getTime(), created: new Date().getTime() }, (err, result) => {
                if (err) { next(err) }
                res.json({ message: "item added in db" })
            })
        }
        else {
            res.json({ message: "item already in db" })
        }
    })
}

exports.updateproducts = (req, res, next) => {
    Product.findByIdAndUpdate(req.body.id, req.body, (err, result) => {
        // res.json(err)
        if (err) { next(err) }
        console.log(result);
        res.json(result)
    })
}

exports.enquiry = async (req, res, next) => {
    
    let info = await transport.sendMail({
        from: '"Sankalp Choudhary" <sankalpchoudhary8@gmail.com>', // sender address
        to: "admin@sankalpchoudhary.com", // list of receivers
        subject: req.body.discription, // Subject line
        text: `This is Customer Number ${req.body.customer_number}`, // plain text body
        html: `This is Customer Number ${req.body.customer_number} and this is customer discription: ${req.body.discription}`, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
    console.log(req.body);
    Enquiry.insertMany({ 'customer_number': req.body.customer_number, 'discription': req.body.discription, created: new Date().getTime() })
}