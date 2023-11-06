const db = require('../connection')

module.exports = {
    buscarTodos: ()=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('SELECT * FROM carros', (error, result)=>{
                if (error) {
                    rejeitado(error) 
                    return
                }
                aceito(result)
            })
        })
    }
}