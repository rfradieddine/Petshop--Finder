/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('petshops').del()
    .then(function () {
      return knex('petshops').insert([
        { 
          nome: 'Meu Canino Feliz', 
          distancia_km: 2, 
          preco_pequeno_dia_util: 20, 
          preco_grande_dia_util: 40, 
          preco_pequeno_fim_semana: 24, 
          preco_grande_fim_semana: 48 
        },
        { 
          nome: 'Vai Rex', 
          distancia_km: 1.7, 
          preco_pequeno_dia_util: 15, 
          preco_grande_dia_util: 50, 
          preco_pequeno_fim_semana: 20, 
          preco_grande_fim_semana: 55 
        },
        { 
          nome: 'ChowChawgas', 
          distancia_km: 0.8, 
          preco_pequeno_dia_util: 30, 
          preco_grande_dia_util: 45, 
          preco_pequeno_fim_semana: 30, 
          preco_grande_fim_semana: 45 
        }
      ]);
    });
};