const CarroService = require('../Services/carroService')

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {
            error: '',
            result: []
        }

        let carros = await CarroService.buscarTodos()

        for (let i in carros) {
            json.result.push({
                codigo: carros[i].id,
                descricao: carros[i].modelo
            })
        }

        res.json(json)
    },

    buscar: async (req, res) => {
        let json = {
            error: '',
            result: []
        }

        let codigo = req.params.codigo
        let carro = await CarroService.buscar(codigo)

        if (carro) {
            json.result = carro
        }

        res.json(json)
    },

    inserir: async(req, res)=> {
        let json = {
            error: '',
            result: {}
        }

        let modelo = req.body.modelo
        let placa = req.body.placa

        if (modelo && placa) {
            let id = await CarroService.inserir(modelo, placa)
            json.result = {
                id: id,
                modelo,
                placa
            }
        } else {
            json.error = 'Campos não enviados'
        }

        res.json(json)
    },

    alterar: async (req, res)=>{
        let json = {
            error: '',
            result: {}
        }

        let id =  req.params.codigo
        let modelo = req.body.modelo
        let placa = req.body.placa

        if (id && modelo && placa) {
            await CarroService.alterar(id, modelo, placa)
            json.result = {
                id,
                modelo,
                placa
            }
        } else {
            json.error = 'Campos não enviados'
        }

        res.json(json)
    }
}