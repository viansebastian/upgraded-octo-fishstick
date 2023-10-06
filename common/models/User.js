const { Datatypes } = require('sequalize');
const { roles } = require('../../config');
const UserModel = {
    id:{
        type: Datatypes.INTEGER, //
        autoIncrement: true,
        primaryKey: true,
    }, 
    username: {
        type: Datatypes.STRING,
        allowNull: false,
        unique: true, 
    }
};

module.exports = {
    initialize: (sequelize) => {
        this.model = sequelize.define('user', UserModel);
    }, 

    createUser: (user) => {
        return this.model.create(user);
    }
}

