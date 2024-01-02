const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        // define columns
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            default: DataTypes.UUIDV4
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;