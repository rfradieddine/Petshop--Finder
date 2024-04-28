/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('petshops', function(table) {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.decimal('distancia_km').notNullable();
        table.decimal('preco_pequeno_dia_util').notNullable();
        table.decimal('preco_grande_dia_util').notNullable();
        table.decimal('preco_pequeno_fim_semana').notNullable();
        table.decimal('preco_grande_fim_semana').notNullable();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('petshops');
};
