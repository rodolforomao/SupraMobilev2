import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DatabaseProvider } from './database';
var contrato_provider = /** @class */ (function () {
    function contrato_provider(dbProvider) {
        this.dbProvider = dbProvider;
    }
    contrato_provider.prototype.onBuscarContrato = function () {
        return this.dbProvider.getDB()
            .then(function (db) {
            return db.executeSql('select * from teste', [])
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
    contrato_provider.prototype.onSalvarContrato = function () {
        return this.dbProvider.getDB()
            .then(function (db) {
            return db.executeSql('select * from teste', [])
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
    contrato_provider = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [DatabaseProvider])
    ], contrato_provider);
    return contrato_provider;
}());
export { contrato_provider };
//# sourceMappingURL=contrato_provider.js.map