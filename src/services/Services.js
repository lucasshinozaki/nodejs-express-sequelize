const { where } = require('sequelize')
const dataSource = require('../database/models')

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll()
    }

    async pegaRegistroPorEscopo(escopo) {
        return dataSource[this.model].scope(escopo).findAll()
    }

    async pegaUmRegistroPorId(id) {
        return dataSource[this.model].findByPk(id)
    }

    async criaRegistro(dadosRegistro) {
        return dataSource[this.model].create(dadosRegistro)
    }

    async atualizaRegistro(id, dadosAtualizados) {
        try {
            if (!id || !dadosAtualizados) {
                throw new Error('ID ou dadosAtualizados não fornecidos');
            }
            const [numeroDeRegistrosAtualizados] = await dataSource[this.model].update(dadosAtualizados, {
                where: { id: id }
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