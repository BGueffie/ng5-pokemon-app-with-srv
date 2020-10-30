"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_service_1 = require("./login.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.user = { username: '', password: '' };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('user', this.user);
        this.loginService
            .login(this.user)
            .subscribe(function (data) { return _this.handleSuccess(data); }, function (error) { return _this.handleError(error); });
    };
    LoginComponent.prototype.handleSuccess = function (data) {
        console.log('logged in', data);
        this.router.navigate(['/pokemon/all']);
    };
    LoginComponent.prototype.handleError = function (error) {
        console.error('NOT logged in', error);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-component',
            templateUrl: './app/login.component.html'
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map