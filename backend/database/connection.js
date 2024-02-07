let Sequelize=require('sequelize');

let sequelize= new Sequelize('appointments','root','shivam12',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;
