const client = require('../db/client')
const {DataTypes, Model} = require('sequelize')

class Meal extends Model {}

Meal.init(
  // Describe the columns and values
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    serving_size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    day_of_week: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: client,
    modelName: 'meal',
    // timestamps: false
  }
)

module.exports = Meal