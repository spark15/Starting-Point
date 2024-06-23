import { Model, DataTypes, CreationOptional } from 'sequelize';
import db from '@/models/MySQL';

class Example extends Model {
    declare id: number;
    declare name: string;
    declare content: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Example.init(
    {
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize: db.sequelize,
        tableName: 'example',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        indexes: [
            {
                fields: ['id'],
            },
        ],
    },
);

export default Example;
