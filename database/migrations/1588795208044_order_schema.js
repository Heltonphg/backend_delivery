'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up() {
    this.create('orders', (table) => {
      table.increments()
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.integer('snack_bar_id')
        .unsigned()
        .references('id')
        .inTable('snack_bars')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.string('status').defaultTo('Em Análise...')
      table.string('comment').defaultTo('')
      table.string('motivo_negado').defaultTo('')
      table.timestamps()
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrderSchema
