import { Knex } from 'knex'

export async function up( knex : Knex) {
  // adicionar acao
  return knex.schema.createTable('items', table => {

    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  })
}

export async function down( knex : Knex) {
  // remover acao
  return knex.schema.dropTable('items')
}