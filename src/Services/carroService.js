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
    },

    inserir: (modelo, placa) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)',
                [modelo, placa],
                (error, result) => {
                    if (error) {
                        rejeitado(error)
                        return
                    }
                    aceito(result.insertCodigo)
                })
        })
    },

    alterar: (id, modelo, placa) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE id = ?',
                [modelo, placa, id],
                (error, result) => {
                    if (error) {
                        rejeitado(error)
                        return
                    }
                    aceito(result.insertCodigo)
                }
            )
        })
    },

    excluir: (id) =>{
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM carros WHERE id = ?',[id], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        })
    }
}