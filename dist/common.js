(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/health-questions.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/health-questions.service.ts ***!
  \*************************************************************/
/*! exports provided: HealthQuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthQuestionsService", function() { return HealthQuestionsService; });
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



var HealthQuestionsService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function HealthQuestionsService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    HealthQuestionsService.prototype.getQuestions = function () {
        return this.http.get(this.apiURL + "/health_questions", this.httpOptions);
    };
    HealthQuestionsService.prototype.createQuestion = function (data) {
        return this.http.post(this.apiURL + "/health_questions", data, this.httpOptions);
    };
    HealthQuestionsService.prototype.deleteQuestion = function (id) {
        return this.http.delete(this.apiURL + "/health_questions/" + id, this.httpOptions);
    };
    HealthQuestionsService.prototype.showQuestion = function (id) {
        return this.http.get(this.apiURL + "/health_questions/" + id, this.httpOptions);
    };
    HealthQuestionsService.prototype.updateQuestion = function (id, data) {
        return this.http.put(this.apiURL + "/health_questions/" + id, data, this.httpOptions);
    };
    HealthQuestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], HealthQuestionsService);
    return HealthQuestionsService;
}());



/***/ }),

/***/ "./src/app/shared/services/member-type.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/member-type.service.ts ***!
  \********************************************************/
/*! exports provided: MemberTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberTypeService", function() { return MemberTypeService; });
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



var MemberTypeService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function MemberTypeService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    MemberTypeService.prototype.getMemberTypes = function () {
        return this.http.get(this.apiURL + "/member_types", this.httpOptions);
    };
    MemberTypeService.prototype.createMemberType = function (data) {
        return this.http.post(this.apiURL + "/member_types", data, this.httpOptions);
    };
    MemberTypeService.prototype.deleteMemberType = function (id) {
        return this.http.delete(this.apiURL + "/member_types/" + id, this.httpOptions);
    };
    MemberTypeService.prototype.showMemberType = function (id) {
        return this.http.get(this.apiURL + "/member_types/" + id, this.httpOptions);
    };
    MemberTypeService.prototype.updateMemberType = function (id, data) {
        return this.http.put(this.apiURL + "/member_types/" + id, data, this.httpOptions);
    };
    MemberTypeService.prototype.memberTypePt = function () {
        return this.http.get(this.apiURL + "/member_type_pt", this.httpOptions);
    };
    MemberTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], MemberTypeService);
    return MemberTypeService;
}());



/***/ }),

/***/ "./src/app/shared/services/personaltrainer.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/personaltrainer.service.ts ***!
  \************************************************************/
/*! exports provided: PersonaltrainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaltrainerService", function() { return PersonaltrainerService; });
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



var PersonaltrainerService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function PersonaltrainerService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    PersonaltrainerService.prototype.getPersonalTrainers = function () {
        return this.http.get(this.apiURL + "/personaltrainers", this.httpOptions);
    };
    PersonaltrainerService.prototype.createPersonalTrainer = function (data) {
        return this.http.post(this.apiURL + "/personaltrainers", data, this.httpOptions);
    };
    PersonaltrainerService.prototype.deletePersonalTrainer = function (id) {
        return this.http.delete(this.apiURL + "/personaltrainers/" + id, this.httpOptions);
    };
    PersonaltrainerService.prototype.showPersonalTrainer = function (id) {
        return this.http.get(this.apiURL + "/personaltrainers/" + id, this.httpOptions);
    };
    PersonaltrainerService.prototype.updatePersonalTrainer = function (id, data) {
        return this.http.put(this.apiURL + "/personaltrainers/" + id, data, this.httpOptions);
    };
    PersonaltrainerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], PersonaltrainerService);
    return PersonaltrainerService;
}());



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get('api/products');
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

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
        this.apiURL = "http://45.118.132.77/api";
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
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map