import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var LoginPage = /** @class */ (function () {
    function LoginPage(httpClient) {
        this.httpClient = httpClient;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.getData();
    };
    LoginPage.prototype.getData = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url, params, headers, response, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        url = 'http://supra.dnit.gov.br/geral/getcontratos_ws';
                        params = {};
                        headers = new HttpHeaders();
                        //headers =  headers.append("Access-Control-Allow-Origin", "http://supra.dnit.gov.br/geral/getcontratos_ws")
                        //headers =  headers.append("Access-Control-Allow-Credentials", "true")
                        //headers =  headers.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
                        //headers =  headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
                        headers = headers.append("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoic3VwcmFfYXBwQHN1cHJhLmNvbSIsInBhc3MiOiIxMjM0NTYiLCJjb250cmF0byI6bnVsbCwicGVyaW9kb19yZWZlcmVuY2lhIjoiMjAxOS0wOC0wMSJ9.34YluiRUB2EfLhE5WI8k8fa0wM44jp3HNozN9jVk_ow");
                        //headers = headers.append('Content-Type', 'application/json');
                        //headers = headers.append('Type', 'No Auth');
                        //headers = headers.append('x-corralation-id', '12345');
                        console.log(headers);
                        return [4 /*yield*/, this.httpClient.get(url, { headers: headers })];
                    case 1:
                        response = _a.sent();
                        console.log("RODOLFO");
                        //console.log(response);
                        response.subscribe(function (res) {
                            console.log(res);
                        });
                        console.log("RODOLFO--");
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1.status);
                        console.error(error_1.error); // Error message as string
                        console.error(error_1.headers);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.getUsers = function () {
        var headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            id: '105',
            user_id: '90'
        });
        this.httpClient.get("http://supra.dnit.gov.br/geral/getcontratos_ws")
            .subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map