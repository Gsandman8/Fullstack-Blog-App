const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            default: DataTypes.UUIDV4
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
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
        },
        post_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
    }
);

module.exports = Comment;