import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DatabaseProvider } from './database';
var usuario_provider = /** @class */ (function () {
    function usuario_provider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    usuario_provider.prototype.onSalvarUsuario = function () {
        return this.dbProvider.getDB()
            .then(function (db) {
            return db.executeSql('select * from categories', [])
                .then(function (data) {
                if (data.rows.length > 0) {
                    var categories = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var category = data.rows.item(i);
                        categories.push(category);
                    }
                    return categories;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    usuario_provider.prototype.onSelecionarUsuarioLogado = function () {
        return this.dbProvider.getDB()
            .then(function (db) {
            return db.executeSql('select * from categories', [])
                .then(function (data) {
                if (data.rows.length > 0) {
                    var categories = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var category = data.rows.item(i);
                        categories.push(category);
                    }
                    return categories;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    usuario_provider = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [DatabaseProvider])
    ], usuario_provider);
    return usuario_provider;
}());
export { usuario_provider };
//# sourceMappingURL=usuario_provider.js.map