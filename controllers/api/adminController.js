const db = require('../../models')
// const imgur = require('imgur-node-api')
// const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID
const Restaurant = db.Restaurant
const Category = db.Category
// const User = db.User

const adminController = {

  getRestaurants: (req, res) => {
    return Restaurant.findAll({
      raw: true,
      nest: true,
      include: [Category]
    })
      .then(restaurants => {
        return res.json({ restaurants: restaurants })
      })
  },

}


module.exports = adminController