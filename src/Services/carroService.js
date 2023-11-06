const db = require('../connection')

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros', (error, result) => {
                if (error) {
                    rejeitado(error)
                    return
                }
                aceito(result)
            })
        })
    },

    buscar: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros WHERE id = ?', [codigo], (error, result) => {
                if (error) {
                    rejeitado(error)
                    return
                } else if (result.length > 0) {
                    aceito(result[0])
                } else {
                    aceito(false)
                }

            })
        })
    }
}