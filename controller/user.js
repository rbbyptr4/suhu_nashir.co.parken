const sequelize = require("../models/index").sequelize
const {DataTypes} = require("sequelize")
const User = require("../models/user")(sequelize, DataTypes)

module.exports = {
    createUser:async(req, res) => {
        try{
            const data = await User.create({
                name: req.body.name,
                email: req.body.email
            })
            res.json({message: "berhasil", data}) 
        } catch(error){
            res.json({message: "gagal"})
        }
    },
    getUser:async(req, res) => {
        const data = await User.findAll({})
        res.json({message: "berhasil ambil data", data})
    }
}