const db = require('../models')
const Category = db.Category
// const Restaurant = db.Restaurant

const categoryService = {
  getCategories: (req, res, callback) => {
    return Category.findAll({
      raw: true,
      nest: true
    }).then(categories => {
      callback({ categories: categories })
    })
  }

}

module.exports = categoryService