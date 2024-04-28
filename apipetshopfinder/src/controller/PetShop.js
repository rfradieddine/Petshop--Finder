const connection = require("../../database/connection");
const { isWeekend, parse } = require('date-fns');


module.exports = {


    async getAll(res) {
        const petshops = await connection("petshops");
        return res.json(petshops);
    },

    async melhorPetshop(req, res) {
        const { data, qtdCaesPequenos, qtdCaesGrandes } = req.body;
        console.log(req.body);

        

        if (!data || !qtdCaesPequenos || !qtdCaesGrandes) {
            return res.status(400).json({ error: 'Dados não fornecidos.' });
        }
        
        // Verifica se a data está no formato 'dd/MM/yyyy' antes de tentar realizar o parse
        const dataFormat = /^\d{2}\/\d{2}\/\d{4}$/.test(data) ? parse(data, 'dd/MM/yyyy', new Date()) : null;
        
        if (!dataFormat) {
            return res.status(400).json({ error: 'Formato de data inválido. Use o formato dd/MM/yyyy.' });
        }
    
        const petshops = await connection("petshops");
        const petshopsComPrecos = petshops.map(petshop => {
            const precoPequeno = isWeekend(dataFormat) ? petshop.preco_pequeno_fim_semana : petshop.preco_pequeno_dia_util;
            const precoGrande = isWeekend(dataFormat) ? petshop.preco_grande_fim_semana : petshop.preco_grande_dia_util;
            const precoTotal = (qtdCaesPequenos * precoPequeno) + (qtdCaesGrandes * precoGrande);
            return { 
                nome: petshop.nome, precoTotal, 
                precoPequenoDiaUtil: petshop.preco_pequeno_dia_util, 
                precoGrandeDiaUtil: petshop.preco_grande_dia_util, 
                precoPequenoFimSemana: petshop.preco_pequeno_fim_semana, 
                precoGrandeFimSemana: petshop.preco_grande_fim_semana, 
                distancia: petshop.distancia_km};
        });
    
        const petshopsOrdenados = petshopsComPrecos.sort((a, b) => {
            if (a.precoTotal === b.precoTotal) {
                return a.distancia - b.distancia;
            } else {
            return a.precoTotal - b.precoTotal;
        }
        });
    
        const melhorPetshop = petshopsOrdenados[0];
    
        return res.json(melhorPetshop);
    }
}

