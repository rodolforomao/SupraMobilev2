import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite/ngx';
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
    }
    /**
     * Cria um banco caso não exista ou pega um banco existente com o nome no parametro
     */
    DatabaseProvider.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'SupraMobile.db',
            location: 'default'
        });
    };
    /**
     * Cria a estrutura inicial do banco de dados
     */
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        return this.getDB()
            .then(function (db) {
            // Criando as tabelas
            _this.createTables(db);
            // Inserindo dados padrão
            //this.insertDefaultItems(db);
        })
            .catch(function (e) { return console.log(e); });
    };
    /**
     * Criando as tabelas no banco de dados
     * @param db
     */
    DatabaseProvider.prototype.createTables = function (db) {
        // Criando as tabelas
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS TbUsuario (IdUsuarioApp integer primary key AUTOINCREMENT NOT NULL, IdUsuario NUMERIC, Nome TEXT), Email TEXT, Senha TEXT, Foto TEXT)'],
            ['CREATE TABLE IF NOT EXISTS TbContrato (IdContratoApp integer primary key AUTOINCREMENT NOT NULL, IdContrato NUMERIC , EmailUsuario TEXT , IdUsuarioApp TEXT,NumeroContrato TEXT,Coordenacao TEXT, EmpresaContrato TEXT, IsSelecionado BOOLEAN)'],
        ])
            .then(function () { return console.log('Tabelas criadas'); })
            .catch(function (e) { return console.error('Erro ao criar as tabelas', e); });
    };
    /**
     * Incluindo os dados padrões
     * @param db
     */
    DatabaseProvider.prototype.insertDefaultItems = function (db) {
        db.executeSql('select COUNT(id) as qtd from categories', [])
            .then(function (data) {
            //Se não existe nenhum registro
            if (data.rows.item(0).qtd == 0) {
                // Criando as tabelas
                db.sqlBatch([
                    ['insert into categories (name) values (?)', ['Hambúrgueres']],
                    ['insert into categories (name) values (?)', ['Bebidas']],
                    ['insert into categories (name) values (?)', ['Sobremesas']]
                ])
                    .then(function () { return console.log('Dados padrões incluídos'); })
                    .catch(function (e) { return console.error('Erro ao incluir dados padrões', e); });
            }
        })
            .catch(function (e) { return console.error('Erro ao consultar a qtd de categorias', e); });
    };
    DatabaseProvider = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [SQLite])
    ], DatabaseProvider);
    return DatabaseProvider;
}());
export { DatabaseProvider };
//# sourceMappingURL=database.js.map