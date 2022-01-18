const info = require('../data/info')


exports.getproduct = (req, res, next)=>{
    return res.json(info.data[req.body.id-1])
}

exports.getallproduct = (req, res, next)=>{
    return res.json(info.data)
}