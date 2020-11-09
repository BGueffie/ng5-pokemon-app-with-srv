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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var login_service_1 = require("./login.service");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(loginService, router, titleService) {
        this.loginService = loginService;
        this.router = router;
        this.titleService = titleService;
        this.user = { username: '', password: '' };
        this.errorFromServer = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Register');
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loginService.register(this.user)
            .subscribe(function (data) { return _this.handleSuccess(data); }, function (err) { return _this.handleError(err); });
    };
    RegisterComponent.prototype.handleSuccess = function (data) {
        this.loginService.dispatchUserCreated(data._id);
        this.router.navigate(['/pokemon/all']);
    };
    RegisterComponent.prototype.handleError = function (error) {
        this.errorFromServer = "Error " + error.status + " - Wrong Password or Username";
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register-component',
            templateUrl: './app/register.component.html'
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router, platform_browser_1.Title])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map