'use strict'

const Product = use('App/Models/Product')

class ProductController {

  async index({ params }) {
    const products = await Product.query()
      .where('snack_bar_id', params.snackbar_id)
      .with('category')
      .fetch()

    return products
  }

  async store({ request, params }) {
    const data = request.all()
    const product = await Product.create({ ...data, snack_bar_id: params.snackbar_id })
    return product
  }

  async show({ params, response }) {
    const { snackbar_id, id } = params
    const product = await Product.query()
      .where('snack_bar_id', snackbar_id)
      .with('category')
      .where('id', id)
      .fetch()
    return product
  }

  async update({ params, request, response }) {
  }

  async destroy({ params, request, response }) {
  }
}

module.exports = ProductController
