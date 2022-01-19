const info = require('../data/info')
const Product = require('../models/product')

exports.getproduct = (req, res, next) => {
    Product.findOne({ 'item_name': 'dona' }, (err, result) => {
        console.log(result);
    })

    return res.json(info.data[req.body.id - 1])
}

exports.getallproduct = (req, res, next) => {
    Product.find().limit(10).toArray()
    return res.json(info.data)
}
exports.insertproduct = (req, res, next) => {
    console.log("Insert >>>>>>>>>>>>>");
    Product.findOne({ 'item_name': req.body.item_name},(err, result)=>{
        if(err){next(err)}
        if (result === null) {
            Product.insertMany({ 'item_name': req.body.item_name, 'item_category': req.body.item_category, 'item_price': req.body.item_price, 'item_available': 1, item_delivery_capacity: req.body.item_delivery_capacity, modified: new Date().getTime(), created: new Date().getTime() },(err, result)=>{
                if(err){next(err)}
                res.json({message:"item added in db"})
            })
        }
        else{
            res.json({message:"item already in db"})
        }
    })
  
    // return res.json({status:"inserted"})
}