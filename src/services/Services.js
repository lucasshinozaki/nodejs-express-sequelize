const { where } = require('sequelize')
const dataSource = require('../database/models')

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel
    }

    async pegaTodosOsRegistros(where = {}) {
        return dataSource[this.model].findAll({where : { ...where}})
    }

    async pegaRegistroPorEscopo(escopo) {
        return dataSource[this.model].scope(escopo).findAll()
    }

    async pegaUmRegistroPorId(id) {
        return dataSource[this.model].findByPk(id)
    }

    async pegaUmRegistro(where) {
        return dataSource[this.model].findOne({where: {...where}})
    }

    async pegaEContaRegistros(options) {
        return dataSource[this.model].findAndCountAll({...options})
    }

    async criaRegistro(dadosRegistro) {
        return dataSource[this.model].create(dadosRegistro)
    }

    async atualizaRegistro(where, dadosAtualizados, transacao = {}) {
        try {
            const [numeroDeRegistrosAtualizados] = await dataSource[this.model]
            .update(dadosAtualizados, {
                where: { ...where },
                transaction: transacao
            })
    
            if (numeroDeRegistrosAtualizados === 0) {
                return false;
            }
            return true;
        } catch (error) {
            console.error('Erro ao atualizar registro:', error);
            return false;
        }
    }

    async excluiRegistro(id) {
        return dataSource[this.model].destroy({where: {id: id}})
    }

}

module.exports = Services