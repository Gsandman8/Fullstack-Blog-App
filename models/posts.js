const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            default: DataTypes.UUIDV4
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
    }
);

module.exports = Post;
