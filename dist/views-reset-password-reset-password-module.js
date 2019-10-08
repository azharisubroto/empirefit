(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-reset-password-reset-password-module"],{

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-store.service */ "./src/app/shared/services/local-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function UserService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "https://api.empirefit.club/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    UserService.prototype.showUser = function (id) {
        return this.http.get(this.apiURL + "/users/" + id, this.httpOptions);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.apiURL + "/users", this.httpOptions);
    };
    UserService.prototype.getSingleUser = function () {
        return this.http.get(this.apiURL + "/get_user", this.httpOptions);
    };
    UserService.prototype.userCheckPassword = function (id, data) {
        return this.http.post(this.apiURL + "/check_password/" + id, data, this.httpOptions);
    };
    UserService.prototype.updateUser = function (id, data) {
        return this.http.put(this.apiURL + "/users/" + id, data, this.httpOptions);
    };
    UserService.prototype.createUser = function (data) {
        return this.http.post(this.apiURL + "/users", data, this.httpOptions);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.apiURL + "/users/" + id, this.httpOptions);
    };
    UserService.prototype.resetPassword = function (data) {
        return this.http.post(this.apiURL + "/reset_password", data, this.httpOptions);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/views/reset-password/reset-password-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/reset-password/reset-password-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordRoutingModule", function() { return ResetPasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/views/reset-password/reset/reset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_2__["ResetComponent"]
    },
];
var ResetPasswordRoutingModule = /** @class */ (function () {
    function ResetPasswordRoutingModule() {
    }
    ResetPasswordRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ResetPasswordRoutingModule);
    return ResetPasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/reset-password/reset-password.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/reset-password/reset-password.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function() { return ResetPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password-routing.module */ "./src/app/views/reset-password/reset-password-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset/reset.component */ "./src/app/views/reset-password/reset/reset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"],
                _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordRoutingModule"]
            ],
            declarations: [_reset_reset_component__WEBPACK_IMPORTED_MODULE_5__["ResetComponent"]]
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());



/***/ }),

/***/ "./src/app/views/reset-password/reset/reset.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/views/reset-password/reset/reset.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Reset Password</h1>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form reset password</div>\n        <form [formGroup]=\"resetForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"old_password\">Old password</label>\n              <input autofocus type=\"password\" class=\"form-control \" id=\"old_password\" placeholder=\"Enter old password \"\n                formControlName=\"old_password\" />\n              <i *ngIf=\"\n                  !resetForm.get('old_password').valid &&\n                  resetForm.get('old_password').touched\n                \" class=\"i-Information text-danger\">\n                Please enter old password</i>\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"new_password\">New password</label>\n              <input type=\"password\" class=\"form-control \" id=\"new_password\" placeholder=\"Enter new password \"\n                formControlName=\"new_password\" />\n              <i *ngIf=\"!resetForm.get('new_password').valid && resetForm.get('new_password').touched\"\n                class=\"i-Information text-danger\">\n                Please enter new password</i>\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"password_confirmation\">Confirmation password</label>\n              <input type=\"password\" class=\"form-control \" id=\"password_confirmation\"\n                placeholder=\"Enter confirmation password \" formControlName=\"password_confirmation\">\n              <i *ngIf=\"!resetForm.get('password_confirmation').valid && resetForm.get('password_confirmation').touched\"\n                class=\"i-Information text-danger\">\n                Please enter confirmation password</i>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading btnClass=\"btn-primary btn-rounded\" [loading]=\"loading\">Save</btn-loading>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/reset-password/reset/reset.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/reset-password/reset/reset.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0L3Jlc2V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/reset-password/reset/reset.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/reset-password/reset/reset.component.ts ***!
  \***************************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/local-store.service */ "./src/app/shared/services/local-store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetComponent = /** @class */ (function () {
    function ResetComponent(fb, toastr, router, userService, store, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.userService = userService;
        this.store = store;
        this.activatedRoute = activatedRoute;
    }
    ResetComponent.prototype.ngOnInit = function () {
        this.resetForm = this.fb.group({
            old_password: ["*****", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            new_password: ["*****"],
            password_confirmation: ["*****", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ResetComponent.prototype.submit = function () {
        var _this = this;
        if (this.resetForm.invalid) {
            this.loading = false;
            return alert('Please completed form');
        }
        else {
            this.loading = true;
            this.userService
                .resetPassword(this.resetForm.value)
                .toPromise()
                .then(function (res) {
                _this.loading = false;
                if (res['status'] == '200') {
                    _this.toastr.success(res["message"], "Success!", {
                        progressBar: true
                    });
                    _this.store.clear();
                    _this.router.navigateByUrl("/sessions/signin");
                }
                else {
                    _this.toastr.error(res["message"], "Error!", {
                        progressBar: true
                    });
                }
            })
                .catch(function (res) {
                _this.loading = false;
                _this.toastr.error(res["statusText"], "Error!", {
                    progressBar: true
                });
            });
        }
    };
    ResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-reset-form",
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/views/reset-password/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.scss */ "./src/app/views/reset-password/reset/reset.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-reset-password-reset-password-module.js.map