(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-master-master-module"],{

/***/ "./src/app/shared/services/benefit.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/benefit.service.ts ***!
  \****************************************************/
/*! exports provided: BenefitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitService", function() { return BenefitService; });
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



var BenefitService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function BenefitService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    BenefitService.prototype.getBenefits = function () {
        return this.http.get(this.apiURL + "/benefits", this.httpOptions);
    };
    BenefitService.prototype.createBenefit = function (data) {
        return this.http.post(this.apiURL + "/benefits", data, this.httpOptions);
    };
    BenefitService.prototype.deleteBenefit = function (id) {
        return this.http.delete(this.apiURL + "/benefits/" + id, this.httpOptions);
    };
    BenefitService.prototype.showBenefit = function (id) {
        return this.http.get(this.apiURL + "/benefits/" + id, this.httpOptions);
    };
    BenefitService.prototype.updateBenefit = function (id, data) {
        return this.http.put(this.apiURL + "/benefits/" + id, data, this.httpOptions);
    };
    BenefitService.prototype.updateBenefitMember = function (id, data) {
        return this.http.put(this.apiURL + "/benefits_member/" + id, data, this.httpOptions);
    };
    BenefitService.prototype.createBenefitMember = function (data) {
        return this.http.post(this.apiURL + "/benefits_member/", data, this.httpOptions);
    };
    BenefitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], BenefitService);
    return BenefitService;
}());



/***/ }),

/***/ "./src/app/shared/services/device.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/device.service.ts ***!
  \***************************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
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



var DeviceService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function DeviceService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    DeviceService.prototype.getDevices = function () {
        return this.http.get(this.apiURL + "/devices", this.httpOptions);
    };
    DeviceService.prototype.createDevice = function (data) {
        return this.http.post(this.apiURL + "/devices", data, this.httpOptions);
    };
    DeviceService.prototype.deleteDevice = function (id) {
        return this.http.delete(this.apiURL + "/devices/" + id, this.httpOptions);
    };
    DeviceService.prototype.showDevice = function (id) {
        return this.http.get(this.apiURL + "/devices/" + id, this.httpOptions);
    };
    DeviceService.prototype.updateDevice = function (id, data) {
        return this.http.put(this.apiURL + "/devices/" + id, data, this.httpOptions);
    };
    DeviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], DeviceService);
    return DeviceService;
}());



/***/ }),

/***/ "./src/app/shared/services/dropin-company.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/dropin-company.service.ts ***!
  \***********************************************************/
/*! exports provided: DropinCompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropinCompanyService", function() { return DropinCompanyService; });
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



var DropinCompanyService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function DropinCompanyService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    DropinCompanyService.prototype.getDropinCompanies = function () {
        return this.http.get(this.apiURL + "/dropin_companies", this.httpOptions);
    };
    DropinCompanyService.prototype.createDropinCompany = function (data) {
        return this.http.post(this.apiURL + "/dropin_companies", data, this.httpOptions);
    };
    DropinCompanyService.prototype.deleteDropinCompany = function (id) {
        return this.http.delete(this.apiURL + "/dropin_companies/" + id, this.httpOptions);
    };
    DropinCompanyService.prototype.showDropinCompany = function (id) {
        return this.http.get(this.apiURL + "/dropin_companies/" + id, this.httpOptions);
    };
    DropinCompanyService.prototype.updateDropinCompany = function (id, data) {
        return this.http.put(this.apiURL + "/dropin_companies/" + id, data, this.httpOptions);
    };
    DropinCompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], DropinCompanyService);
    return DropinCompanyService;
}());



/***/ }),

/***/ "./src/app/shared/services/instructure.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/instructure.service.ts ***!
  \********************************************************/
/*! exports provided: InstructureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructureService", function() { return InstructureService; });
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



var InstructureService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function InstructureService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    InstructureService.prototype.getInstructures = function () {
        return this.http.get(this.apiURL + "/instructures", this.httpOptions);
    };
    InstructureService.prototype.createInstructure = function (data) {
        return this.http.post(this.apiURL + "/instructures", data, this.httpOptions);
    };
    InstructureService.prototype.deleteInstructure = function (id) {
        return this.http.delete(this.apiURL + "/instructures/" + id, this.httpOptions);
    };
    InstructureService.prototype.showInstructure = function (id) {
        return this.http.get(this.apiURL + "/instructures/" + id, this.httpOptions);
    };
    InstructureService.prototype.updateInstructure = function (id, data) {
        return this.http.put(this.apiURL + "/instructures/" + id, data, this.httpOptions);
    };
    InstructureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], InstructureService);
    return InstructureService;
}());



/***/ }),

/***/ "./src/app/shared/services/payment-type.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/payment-type.service.ts ***!
  \*********************************************************/
/*! exports provided: PaymentTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTypeService", function() { return PaymentTypeService; });
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



var PaymentTypeService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function PaymentTypeService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    PaymentTypeService.prototype.getPaymentTypes = function () {
        return this.http.get(this.apiURL + "/payment_types", this.httpOptions);
    };
    PaymentTypeService.prototype.createPaymentType = function (data) {
        return this.http.post(this.apiURL + "/payment_types", data, this.httpOptions);
    };
    PaymentTypeService.prototype.deletePaymentType = function (id) {
        return this.http.delete(this.apiURL + "/payment_types/" + id, this.httpOptions);
    };
    PaymentTypeService.prototype.showPaymentType = function (id) {
        return this.http.get(this.apiURL + "/payment_types/" + id, this.httpOptions);
    };
    PaymentTypeService.prototype.updatePaymentType = function (id, data) {
        return this.http.put(this.apiURL + "/payment_types/" + id, data, this.httpOptions);
    };
    PaymentTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], PaymentTypeService);
    return PaymentTypeService;
}());



/***/ }),

/***/ "./src/app/shared/services/permission.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/permission.service.ts ***!
  \*******************************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
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



var PermissionService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function PermissionService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    PermissionService.prototype.getPermissions = function () {
        return this.http.get(this.apiURL + "/permissions", this.httpOptions);
    };
    PermissionService.prototype.createPermission = function (data) {
        return this.http.post(this.apiURL + "/permissions", data, this.httpOptions);
    };
    PermissionService.prototype.deletePermission = function (id) {
        return this.http.delete(this.apiURL + "/permissions/" + id, this.httpOptions);
    };
    PermissionService.prototype.showPermission = function (id) {
        return this.http.get(this.apiURL + "/permissions/" + id, this.httpOptions);
    };
    PermissionService.prototype.updatePermission = function (id, data) {
        return this.http.put(this.apiURL + "/permissions/" + id, data, this.httpOptions);
    };
    PermissionService.prototype.createPermissionRole = function (id, data) {
        return this.http.post(this.apiURL + "/store_permission_role/" + id, data, this.httpOptions);
    };
    PermissionService.prototype.permission_role = function (id) {
        return this.http.get(this.apiURL + "/permission_role/" + id, this.httpOptions);
    };
    PermissionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], PermissionService);
    return PermissionService;
}());



/***/ }),

/***/ "./src/app/shared/services/price.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/price.service.ts ***!
  \**************************************************/
/*! exports provided: PriceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceService", function() { return PriceService; });
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



var PriceService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function PriceService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    PriceService.prototype.showPrice = function (id) {
        return this.http.get(this.apiURL + "/prices/" + id, this.httpOptions);
    };
    PriceService.prototype.getPrices = function () {
        return this.http.get(this.apiURL + "/prices", this.httpOptions);
    };
    PriceService.prototype.updatePrice = function (id, data) {
        return this.http.put(this.apiURL + "/prices/" + id, data, this.httpOptions);
    };
    PriceService.prototype.createPrice = function (data) {
        return this.http.post(this.apiURL + "/prices", data, this.httpOptions);
    };
    PriceService.prototype.deletePrice = function (id) {
        return this.http.delete(this.apiURL + "/prices/" + id, this.httpOptions);
    };
    PriceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], PriceService);
    return PriceService;
}());



/***/ }),

/***/ "./src/app/shared/services/role.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/role.service.ts ***!
  \*************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
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



var RoleService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function RoleService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    RoleService.prototype.getRoles = function () {
        return this.http.get(this.apiURL + "/roles/", this.httpOptions);
    };
    RoleService.prototype.createRole = function (data) {
        return this.http.post(this.apiURL + "/roles", data, this.httpOptions);
    };
    RoleService.prototype.deleteRole = function (id) {
        return this.http.delete(this.apiURL + "/roles/" + id, this.httpOptions);
    };
    RoleService.prototype.showRole = function (id) {
        return this.http.get(this.apiURL + "/roles/" + id, this.httpOptions);
    };
    RoleService.prototype.updateRole = function (id, data) {
        return this.http.put(this.apiURL + "/roles/" + id, data, this.httpOptions);
    };
    RoleService.prototype.getPermissions = function (id) {
        return this.http.get(this.apiURL + "/permission_role/" + id, this.httpOptions);
    };
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/shared/services/schedule.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/schedule.service.ts ***!
  \*****************************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
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



var ScheduleService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function ScheduleService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    ScheduleService.prototype.getSchedules = function () {
        return this.http.get(this.apiURL + "/schedules", this.httpOptions);
    };
    ScheduleService.prototype.createSchedule = function (data) {
        return this.http.post(this.apiURL + "/schedules", data, this.httpOptions);
    };
    ScheduleService.prototype.deleteSchedule = function (id) {
        return this.http.delete(this.apiURL + "/schedules/" + id, this.httpOptions);
    };
    ScheduleService.prototype.showSchedule = function (id) {
        return this.http.get(this.apiURL + "/schedules/" + id, this.httpOptions);
    };
    ScheduleService.prototype.updateSchedule = function (id, data) {
        return this.http.put(this.apiURL + "/schedules/" + id, data, this.httpOptions);
    };
    ScheduleService.prototype.showCoach = function (id) {
        return this.http.get(this.apiURL + "/show_coach/" + id, this.httpOptions);
    };
    ScheduleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], ScheduleService);
    return ScheduleService;
}());



/***/ }),

/***/ "./src/app/views/master/bank/bank-create/bank-create.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/master/bank/bank-create/bank-create.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Bank</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Bank</div>\n        <form [formGroup]=\"bankForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"code\">Bank Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"code\"\n                placeholder=\"Enter bank name \"\n                formControlName=\"bank_name\"\n              />\n              <i\n                *ngIf=\"\n                  !bankForm.get('bank_name').valid &&\n                  bankForm.get('bank_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter bank name</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"code\">Code</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"code\"\n                placeholder=\"Enter code bank \"\n                formControlName=\"code\"\n              />\n              <i\n                *ngIf=\"\n                  !bankForm.get('code').valid && bankForm.get('code').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter code bank</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/bank/bank-create/bank-create.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/master/bank/bank-create/bank-create.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9iYW5rL2JhbmstY3JlYXRlL2JhbmstY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/bank/bank-create/bank-create.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/master/bank/bank-create/bank-create.component.ts ***!
  \************************************************************************/
/*! exports provided: BankCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankCreateComponent", function() { return BankCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_bank_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/bank.service */ "./src/app/shared/services/bank.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BankCreateComponent = /** @class */ (function () {
    function BankCreateComponent(fb, toastr, router, bankService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.bankService = bankService;
        this.activatedRoute = activatedRoute;
    }
    BankCreateComponent.prototype.ngOnInit = function () {
        this.bankForm = this.fb.group({
            bank_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    BankCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.bankForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.bankService.createBank(this.bankForm.value).subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/bank");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    BankCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./bank-create.component.html */ "./src/app/views/master/bank/bank-create/bank-create.component.html"),
            styles: [__webpack_require__(/*! ./bank-create.component.scss */ "./src/app/views/master/bank/bank-create/bank-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_bank_service__WEBPACK_IMPORTED_MODULE_4__["BankService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BankCreateComponent);
    return BankCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/bank/bank-form/bank-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/master/bank/bank-form/bank-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Bank</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Bank</div>\n        <form [formGroup]=\"bankForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"code\">Bank Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"code\"\n                placeholder=\"Enter bank_name \"\n                formControlName=\"bank_name\"\n              />\n              <i\n                *ngIf=\"\n                  !bankForm.get('bank_name').valid &&\n                  bankForm.get('bank_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter bank name</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"code\">Code</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"code\"\n                placeholder=\"Enter code bank \"\n                formControlName=\"code\"\n              />\n              <i\n                *ngIf=\"\n                  !bankForm.get('code').valid && bankForm.get('code').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter code bank</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/bank/bank-form/bank-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/master/bank/bank-form/bank-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9iYW5rL2JhbmstZm9ybS9iYW5rLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/bank/bank-form/bank-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/master/bank/bank-form/bank-form.component.ts ***!
  \********************************************************************/
/*! exports provided: BankFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankFormComponent", function() { return BankFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_bank_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/bank.service */ "./src/app/shared/services/bank.service.ts");
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






var BankFormComponent = /** @class */ (function () {
    function BankFormComponent(fb, toastr, router, store, bankService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.store = store;
        this.bankService = bankService;
        this.activatedRoute = activatedRoute;
    }
    BankFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bankForm = this.fb.group({
            bank_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.bankService
            .showBank(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.bankForm.setValue({
                bank_name: data["data"].bank_name,
                code: data["data"].code
            });
        });
    };
    BankFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.bankForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.bankService
                .updateBank(this.activatedRoute.snapshot.params["id"], this.bankForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/bank");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    BankFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./bank-form.component.html */ "./src/app/views/master/bank/bank-form/bank-form.component.html"),
            styles: [__webpack_require__(/*! ./bank-form.component.scss */ "./src/app/views/master/bank/bank-form/bank-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"],
            src_app_shared_services_bank_service__WEBPACK_IMPORTED_MODULE_4__["BankService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BankFormComponent);
    return BankFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/bank/bank-list/bank-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/master/bank/bank-list/bank-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL2JhbmsvYmFuay1saXN0L2JhbmstbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL2JhbmsvYmFuay1saXN0L2JhbmstbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/bank/bank-list/bank-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/master/bank/bank-list/bank-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Bank</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['bank-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Bank</th>\n                      <th>Code</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let bank of banks\">\n                      <td>{{ bank.bank_name }}</td>\n                      <td>{{ bank.code }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"['bank-edit/', bank.id]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, bank.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Bank deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete\n                                <span class=\"text-primary\"\n                                  >\"{{ bank.bank_name }}\"</span\n                                >\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this bank will be\n                              permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/bank/bank-list/bank-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/master/bank/bank-list/bank-list.component.ts ***!
  \********************************************************************/
/*! exports provided: BankListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankListComponent", function() { return BankListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_bank_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/bank.service */ "./src/app/shared/services/bank.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BankListComponent = /** @class */ (function () {
    function BankListComponent(bankService, router, chRef, modalService, toastr) {
        this.bankService = bankService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    BankListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bankService.getBanks().subscribe(function (data) {
            _this.banks = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    BankListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.bankService.deleteBank(id).subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    BankListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./bank-list.component.html */ "./src/app/views/master/bank/bank-list/bank-list.component.html"),
            styles: [__webpack_require__(/*! ./bank-list.component.css */ "./src/app/views/master/bank/bank-list/bank-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_bank_service__WEBPACK_IMPORTED_MODULE_8__["BankService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], BankListComponent);
    return BankListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/benefit/benefit-create/benefit-create.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/master/benefit/benefit-create/benefit-create.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Benefit</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Benefit</div>\n        <form [formGroup]=\"benefitForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"benefit_name\">Benefit Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"benefit_name\"\n                placeholder=\"Enter member type \"\n                formControlName=\"benefit_name\"\n              />\n              <i\n                *ngIf=\"\n                  !benefitForm.get('benefit_name').valid &&\n                  benefitForm.get('benefit_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter benefit name</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/benefit/benefit-create/benefit-create.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/master/benefit/benefit-create/benefit-create.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9iZW5lZml0L2JlbmVmaXQtY3JlYXRlL2JlbmVmaXQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/benefit/benefit-create/benefit-create.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/master/benefit/benefit-create/benefit-create.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BenefitCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitCreateComponent", function() { return BenefitCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_benefit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/benefit.service */ "./src/app/shared/services/benefit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BenefitCreateComponent = /** @class */ (function () {
    function BenefitCreateComponent(fb, toastr, router, benefitService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.benefitService = benefitService;
        this.activatedRoute = activatedRoute;
    }
    BenefitCreateComponent.prototype.ngOnInit = function () {
        this.benefitForm = this.fb.group({
            benefit_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    BenefitCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.benefitForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.benefitService
                .createBenefit(this.benefitForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/benefit-type");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    BenefitCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./benefit-create.component.html */ "./src/app/views/master/benefit/benefit-create/benefit-create.component.html"),
            styles: [__webpack_require__(/*! ./benefit-create.component.scss */ "./src/app/views/master/benefit/benefit-create/benefit-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_benefit_service__WEBPACK_IMPORTED_MODULE_4__["BenefitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BenefitCreateComponent);
    return BenefitCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/benefit/benefit-form/benefit-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/views/master/benefit/benefit-form/benefit-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Benefit</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Benefit</div>\n        <form [formGroup]=\"benefitForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"benefit_name\">Benefit Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"benefit_name\"\n                placeholder=\"Enter member type \"\n                formControlName=\"benefit_name\"\n              />\n              <i\n                *ngIf=\"\n                  !benefitForm.get('benefit_name').valid &&\n                  benefitForm.get('benefit_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter benefit name</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/benefit/benefit-form/benefit-form.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/views/master/benefit/benefit-form/benefit-form.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9iZW5lZml0L2JlbmVmaXQtZm9ybS9iZW5lZml0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/benefit/benefit-form/benefit-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/master/benefit/benefit-form/benefit-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BenefitFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitFormComponent", function() { return BenefitFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_benefit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/benefit.service */ "./src/app/shared/services/benefit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BenefitFormComponent = /** @class */ (function () {
    function BenefitFormComponent(fb, toastr, router, benefitService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.benefitService = benefitService;
        this.activatedRoute = activatedRoute;
    }
    BenefitFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.benefitForm = this.fb.group({
            benefit_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.benefitService
            .showBenefit(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.benefitForm.setValue({
                benefit_name: data["data"].benefit_name
            });
        });
    };
    BenefitFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.benefitForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.benefitService
                .updateBenefit(this.activatedRoute.snapshot.params["id"], this.benefitForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/benefit");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    BenefitFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./benefit-form.component.html */ "./src/app/views/master/benefit/benefit-form/benefit-form.component.html"),
            styles: [__webpack_require__(/*! ./benefit-form.component.scss */ "./src/app/views/master/benefit/benefit-form/benefit-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_benefit_service__WEBPACK_IMPORTED_MODULE_4__["BenefitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BenefitFormComponent);
    return BenefitFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/benefit/benefit-list/benefit-list.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/views/master/benefit/benefit-list/benefit-list.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL2JlbmVmaXQvYmVuZWZpdC1saXN0L2JlbmVmaXQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL2JlbmVmaXQvYmVuZWZpdC1saXN0L2JlbmVmaXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/benefit/benefit-list/benefit-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/views/master/benefit/benefit-list/benefit-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Benefit</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['benefit-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Benefit Name</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let benefit of benefits\">\n                      <td>{{ benefit.benefit_name }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"['benefit-edit/', benefit.id]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, benefit.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Benefit deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete\n                                <span class=\"text-primary\"\n                                  >\"{{ benefit.benefit_name }}\"</span\n                                >\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this benefit will be\n                              permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/benefit/benefit-list/benefit-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/master/benefit/benefit-list/benefit-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BenefitListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefitListComponent", function() { return BenefitListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_benefit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/benefit.service */ "./src/app/shared/services/benefit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BenefitListComponent = /** @class */ (function () {
    function BenefitListComponent(benefitService, router, chRef, modalService, toastr) {
        this.benefitService = benefitService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    BenefitListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.benefitService.getBenefits().subscribe(function (data) {
            _this.benefits = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    BenefitListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.benefitService.deleteBenefit(id).subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    BenefitListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./benefit-list.component.html */ "./src/app/views/master/benefit/benefit-list/benefit-list.component.html"),
            styles: [__webpack_require__(/*! ./benefit-list.component.css */ "./src/app/views/master/benefit/benefit-list/benefit-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_benefit_service__WEBPACK_IMPORTED_MODULE_8__["BenefitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], BenefitListComponent);
    return BenefitListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/branch/branch-create/branch-create.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/master/branch/branch-create/branch-create.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Branch</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Branch</div>\n        <form [formGroup]=\"branchForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"branch_name\">Branch Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"branch_name\"\n                placeholder=\"Enter branch name \"\n                formControlName=\"branch_name\"\n              />\n              <i\n                *ngIf=\"\n                  !branchForm.get('branch_name').valid &&\n                  branchForm.get('branch_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter branch name</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/branch/branch-create/branch-create.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/master/branch/branch-create/branch-create.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9icmFuY2gvYnJhbmNoLWNyZWF0ZS9icmFuY2gtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/branch/branch-create/branch-create.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/master/branch/branch-create/branch-create.component.ts ***!
  \******************************************************************************/
/*! exports provided: BranchCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchCreateComponent", function() { return BranchCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/branch.service */ "./src/app/shared/services/branch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BranchCreateComponent = /** @class */ (function () {
    function BranchCreateComponent(fb, toastr, router, branchService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.branchService = branchService;
        this.activatedRoute = activatedRoute;
    }
    BranchCreateComponent.prototype.ngOnInit = function () {
        this.branchForm = this.fb.group({
            branch_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    BranchCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.branchForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.branchService
                .createBranch(this.branchForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/branch");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    BranchCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./branch-create.component.html */ "./src/app/views/master/branch/branch-create/branch-create.component.html"),
            styles: [__webpack_require__(/*! ./branch-create.component.scss */ "./src/app/views/master/branch/branch-create/branch-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BranchCreateComponent);
    return BranchCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/branch/branch-form/branch-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/master/branch/branch-form/branch-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Branch</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Branch</div>\n        <form [formGroup]=\"branchForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"branch_name\">Branch Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"branch_name\"\n                placeholder=\"Enter branch name \"\n                formControlName=\"branch_name\"\n              />\n              <i\n                *ngIf=\"\n                  !branchForm.get('branch_name').valid &&\n                  branchForm.get('branch_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter branch name</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/branch/branch-form/branch-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/master/branch/branch-form/branch-form.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9icmFuY2gvYnJhbmNoLWZvcm0vYnJhbmNoLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/branch/branch-form/branch-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/master/branch/branch-form/branch-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: BranchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchFormComponent", function() { return BranchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/branch.service */ "./src/app/shared/services/branch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BranchFormComponent = /** @class */ (function () {
    function BranchFormComponent(fb, toastr, router, branchService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.branchService = branchService;
        this.activatedRoute = activatedRoute;
    }
    BranchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchForm = this.fb.group({
            branch_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.branchService
            .showBranch(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.branchForm.setValue({
                branch_name: data["data"].branch_name
            });
        });
    };
    BranchFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.branchForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.branchService
                .updateBranch(this.activatedRoute.snapshot.params["id"], this.branchForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/branch");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    BranchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./branch-form.component.html */ "./src/app/views/master/branch/branch-form/branch-form.component.html"),
            styles: [__webpack_require__(/*! ./branch-form.component.scss */ "./src/app/views/master/branch/branch-form/branch-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BranchFormComponent);
    return BranchFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/branch/branch-list/branch-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/master/branch/branch-list/branch-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL2JyYW5jaC9icmFuY2gtbGlzdC9icmFuY2gtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL2JyYW5jaC9icmFuY2gtbGlzdC9icmFuY2gtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/branch/branch-list/branch-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/master/branch/branch-list/branch-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Branch</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['branch-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Branch Name</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let branch of branches\">\n                      <td>{{ branch.branch_name }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"['branch-edit/', branch.id]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, branch.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Dropin Company deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete\n                                <span class=\"text-primary\"\n                                  >\"{{ branch.branch_name }}\"</span\n                                >\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this branch will be\n                              permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/branch/branch-list/branch-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/master/branch/branch-list/branch-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: BranchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchListComponent", function() { return BranchListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_branch_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/branch.service */ "./src/app/shared/services/branch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BranchListComponent = /** @class */ (function () {
    function BranchListComponent(branchService, router, chRef, modalService, toastr) {
        this.branchService = branchService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    BranchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchService.getBranches().subscribe(function (data) {
            _this.branches = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    BranchListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.branchService.deleteBranch(id).subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    BranchListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./branch-list.component.html */ "./src/app/views/master/branch/branch-list/branch-list.component.html"),
            styles: [__webpack_require__(/*! ./branch-list.component.css */ "./src/app/views/master/branch/branch-list/branch-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_branch_service__WEBPACK_IMPORTED_MODULE_8__["BranchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], BranchListComponent);
    return BranchListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/dropin-company/dropin-company-create/dropin-company-create.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/master/dropin-company/dropin-company-create/dropin-company-create.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Dropin Company</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Dropin Company</div>\n        <form [formGroup]=\"dropinCompanyForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"partner_name\">Dropin Company</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"partner_name\"\n                placeholder=\"Enter dropin company \"\n                formControlName=\"partner_name\"\n              />\n              <i\n                *ngIf=\"\n                  !dropinCompanyForm.get('partner_name').valid &&\n                  dropinCompanyForm.get('partner_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter dropin company name</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/dropin-company/dropin-company-create/dropin-company-create.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/master/dropin-company/dropin-company-create/dropin-company-create.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9kcm9waW4tY29tcGFueS9kcm9waW4tY29tcGFueS1jcmVhdGUvZHJvcGluLWNvbXBhbnktY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/dropin-company/dropin-company-create/dropin-company-create.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/master/dropin-company/dropin-company-create/dropin-company-create.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DropinCompanyCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropinCompanyCreateComponent", function() { return DropinCompanyCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_dropin_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/dropin-company.service */ "./src/app/shared/services/dropin-company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DropinCompanyCreateComponent = /** @class */ (function () {
    function DropinCompanyCreateComponent(fb, toastr, router, dropinCompanyService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.dropinCompanyService = dropinCompanyService;
        this.activatedRoute = activatedRoute;
    }
    DropinCompanyCreateComponent.prototype.ngOnInit = function () {
        this.dropinCompanyForm = this.fb.group({
            partner_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    DropinCompanyCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.dropinCompanyForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.dropinCompanyService
                .createDropinCompany(this.dropinCompanyForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/dropin-company");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    DropinCompanyCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./dropin-company-create.component.html */ "./src/app/views/master/dropin-company/dropin-company-create/dropin-company-create.component.html"),
            styles: [__webpack_require__(/*! ./dropin-company-create.component.scss */ "./src/app/views/master/dropin-company/dropin-company-create/dropin-company-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_dropin_company_service__WEBPACK_IMPORTED_MODULE_4__["DropinCompanyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DropinCompanyCreateComponent);
    return DropinCompanyCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/dropin-company/dropin-company-form/dropin-company-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/master/dropin-company/dropin-company-form/dropin-company-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Dropin Company</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Dropin Company</div>\n        <form [formGroup]=\"dropinCompanyForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"partner_name\">Dropin Company</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"partner_name\"\n                placeholder=\"Enter dropin company \"\n                formControlName=\"partner_name\"\n              />\n              <i\n                *ngIf=\"\n                  !dropinCompanyForm.get('partner_name').valid &&\n                  dropinCompanyForm.get('partner_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter dropin company name</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/dropin-company/dropin-company-form/dropin-company-form.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/master/dropin-company/dropin-company-form/dropin-company-form.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9kcm9waW4tY29tcGFueS9kcm9waW4tY29tcGFueS1mb3JtL2Ryb3Bpbi1jb21wYW55LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/dropin-company/dropin-company-form/dropin-company-form.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/master/dropin-company/dropin-company-form/dropin-company-form.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DropinCompanyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropinCompanyFormComponent", function() { return DropinCompanyFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_dropin_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/dropin-company.service */ "./src/app/shared/services/dropin-company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DropinCompanyFormComponent = /** @class */ (function () {
    function DropinCompanyFormComponent(fb, toastr, router, dropinCompanyService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.dropinCompanyService = dropinCompanyService;
        this.activatedRoute = activatedRoute;
    }
    DropinCompanyFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropinCompanyForm = this.fb.group({
            partner_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.dropinCompanyService
            .showDropinCompany(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.dropinCompanyForm.setValue({
                partner_name: data["data"].partner_name
            });
        });
    };
    DropinCompanyFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.dropinCompanyForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.dropinCompanyService
                .updateDropinCompany(this.activatedRoute.snapshot.params["id"], this.dropinCompanyForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/dropin-company");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    DropinCompanyFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./dropin-company-form.component.html */ "./src/app/views/master/dropin-company/dropin-company-form/dropin-company-form.component.html"),
            styles: [__webpack_require__(/*! ./dropin-company-form.component.scss */ "./src/app/views/master/dropin-company/dropin-company-form/dropin-company-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_dropin_company_service__WEBPACK_IMPORTED_MODULE_4__["DropinCompanyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DropinCompanyFormComponent);
    return DropinCompanyFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/dropin-company/dropin-company-list/dropin-company-list.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/master/dropin-company/dropin-company-list/dropin-company-list.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL2Ryb3Bpbi1jb21wYW55L2Ryb3Bpbi1jb21wYW55LWxpc3QvZHJvcGluLWNvbXBhbnktbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL2Ryb3Bpbi1jb21wYW55L2Ryb3Bpbi1jb21wYW55LWxpc3QvZHJvcGluLWNvbXBhbnktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/dropin-company/dropin-company-list/dropin-company-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/master/dropin-company/dropin-company-list/dropin-company-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Dropin Company</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['dropin-company-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Dropin Company</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let dropincompany of dropincompanies\">\n                      <td>{{ dropincompany.partner_name }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"[\n                            'dropin-company-edit/',\n                            dropincompany.id\n                          ]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, dropincompany.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Dropin Company deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete\n                                <span class=\"text-primary\"\n                                  >\"{{ dropincompany.partner_name }}\"</span\n                                >\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this dropin company\n                              will be permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/dropin-company/dropin-company-list/dropin-company-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/master/dropin-company/dropin-company-list/dropin-company-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DropinCompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropinCompanyListComponent", function() { return DropinCompanyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_dropin_company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/dropin-company.service */ "./src/app/shared/services/dropin-company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DropinCompanyListComponent = /** @class */ (function () {
    function DropinCompanyListComponent(dropinCompanyService, router, chRef, modalService, toastr) {
        this.dropinCompanyService = dropinCompanyService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    DropinCompanyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropinCompanyService.getDropinCompanies().subscribe(function (data) {
            _this.dropincompanies = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    DropinCompanyListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.dropinCompanyService
                .deleteDropinCompany(id)
                .subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    DropinCompanyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./dropin-company-list.component.html */ "./src/app/views/master/dropin-company/dropin-company-list/dropin-company-list.component.html"),
            styles: [__webpack_require__(/*! ./dropin-company-list.component.css */ "./src/app/views/master/dropin-company/dropin-company-list/dropin-company-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_dropin_company_service__WEBPACK_IMPORTED_MODULE_8__["DropinCompanyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], DropinCompanyListComponent);
    return DropinCompanyListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/finger/device-create/device-create.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/master/finger/device-create/device-create.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9maW5nZXIvZGV2aWNlLWNyZWF0ZS9kZXZpY2UtY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/finger/device-create/device-create.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/master/finger/device-create/device-create.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Device</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Device</div>\n        <form [formGroup]=\"deviceForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"sn\">SN</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"sn\"\n                placeholder=\"Enter SN \"\n                formControlName=\"sn\"\n              />\n              <i\n                *ngIf=\"\n                  !deviceForm.get('sn').valid && deviceForm.get('sn').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter Serial Number</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"device_name\">Device Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"device_name\"\n                placeholder=\"Enter Device \"\n                formControlName=\"device_name\"\n              />\n              <i\n                *ngIf=\"\n                  !deviceForm.get('device_name').valid &&\n                  deviceForm.get('device_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter Device name</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"vc\">VC</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"vc\"\n                placeholder=\"Enter VC \"\n                formControlName=\"vc\"\n              />\n              <i\n                *ngIf=\"\n                  !deviceForm.get('vc').valid && deviceForm.get('vc').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter VC</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"ac\">AC</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"ac\"\n                placeholder=\"Enter AC \"\n                formControlName=\"ac\"\n              />\n              <i\n                *ngIf=\"\n                  !deviceForm.get('ac').valid && deviceForm.get('ac').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter AC</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"vkey\">VKEY</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"vkey\"\n                placeholder=\"Enter VKEY \"\n                formControlName=\"vkey\"\n              />\n              <i\n                *ngIf=\"\n                  !deviceForm.get('vkey').valid &&\n                  deviceForm.get('vkey').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter VKEY</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/finger/device-create/device-create.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/master/finger/device-create/device-create.component.ts ***!
  \******************************************************************************/
/*! exports provided: DeviceCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceCreateComponent", function() { return DeviceCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_device_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/device.service */ "./src/app/shared/services/device.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeviceCreateComponent = /** @class */ (function () {
    function DeviceCreateComponent(fb, toastr, router, deviceService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.deviceService = deviceService;
        this.activatedRoute = activatedRoute;
    }
    DeviceCreateComponent.prototype.ngOnInit = function () {
        this.deviceForm = this.fb.group({
            sn: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            device_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vc: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ac: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vkey: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    DeviceCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.deviceForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.deviceService
                .createDevice(this.deviceForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/device");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    DeviceCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./device-create.component.html */ "./src/app/views/master/finger/device-create/device-create.component.html"),
            styles: [__webpack_require__(/*! ./device-create.component.css */ "./src/app/views/master/finger/device-create/device-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_device_service__WEBPACK_IMPORTED_MODULE_4__["DeviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DeviceCreateComponent);
    return DeviceCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/finger/device-form/device-form.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/master/finger/device-form/device-form.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9maW5nZXIvZGV2aWNlLWZvcm0vZGV2aWNlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/master/finger/device-form/device-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/master/finger/device-form/device-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Device</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Device</div>\n        <form [formGroup]=\"deviceForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"sn\">SN</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"sn\"\n                placeholder=\"Enter SN \"\n                formControlName=\"sn\"\n              />\n              <i\n                *ngIf=\"\n                  !deviceForm.get('sn').valid && deviceForm.get('sn').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter Serial Number</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"device_name\">Device Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"device_name\"\n                placeholder=\"Enter Device \"\n                formControlName=\"device_name\"\n              />\n              <i\n                *ngIf=\"\n                  !deviceForm.get('device_name').valid &&\n                  deviceForm.get('device_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter Device name</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"vc\">VC</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"vc\"\n                placeholder=\"Enter VC \"\n                formControlName=\"vc\"\n              />\n              <i\n                *ngIf=\"\n                  !deviceForm.get('vc').valid && deviceForm.get('vc').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter VC</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"ac\">AC</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"ac\"\n                placeholder=\"Enter AC \"\n                formControlName=\"ac\"\n              />\n              <i\n                *ngIf=\"\n                  !deviceForm.get('ac').valid && deviceForm.get('ac').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter AC</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"vkey\">VKEY</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"vkey\"\n                placeholder=\"Enter VKEY \"\n                formControlName=\"vkey\"\n              />\n              <i\n                *ngIf=\"\n                  !deviceForm.get('vkey').valid &&\n                  deviceForm.get('vkey').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter VKEY</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/finger/device-form/device-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/master/finger/device-form/device-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: DeviceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceFormComponent", function() { return DeviceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_device_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/device.service */ "./src/app/shared/services/device.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeviceFormComponent = /** @class */ (function () {
    function DeviceFormComponent(fb, toastr, router, deviceService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.deviceService = deviceService;
        this.activatedRoute = activatedRoute;
    }
    DeviceFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deviceForm = this.fb.group({
            sn: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            device_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vc: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ac: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vkey: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.deviceService
            .showDevice(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.deviceForm.setValue({
                sn: data["data"]["0"].sn,
                device_name: data["data"]["0"].device_name,
                vc: data["data"]["0"].vc,
                ac: data["data"]["0"].ac,
                vkey: data["data"]["0"].vkey
            });
        });
    };
    DeviceFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.deviceForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.deviceService
                .updateDevice(this.activatedRoute.snapshot.params["id"], this.deviceForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/device");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    DeviceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./device-form.component.html */ "./src/app/views/master/finger/device-form/device-form.component.html"),
            styles: [__webpack_require__(/*! ./device-form.component.css */ "./src/app/views/master/finger/device-form/device-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_device_service__WEBPACK_IMPORTED_MODULE_4__["DeviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DeviceFormComponent);
    return DeviceFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/finger/device-list/device-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/master/finger/device-list/device-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL2Zpbmdlci9kZXZpY2UtbGlzdC9kZXZpY2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL2Zpbmdlci9kZXZpY2UtbGlzdC9kZXZpY2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/finger/device-list/device-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/master/finger/device-list/device-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Device</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['device-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>SN</th>\n                      <th>Device Name</th>\n                      <th>VC</th>\n                      <th>AC</th>\n                      <th>VKEY</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let device of devices\">\n                      <td>{{ device.sn }}</td>\n                      <td>{{ device.device_name }}</td>\n                      <td>{{ device.vc }}</td>\n                      <td>{{ device.ac }}</td>\n                      <td>{{ device.vkey }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"['device-edit/', device.sn]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, device.sn)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Device deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete this device?\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this Device will be\n                              permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/finger/device-list/device-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/master/finger/device-list/device-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: DeviceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceListComponent", function() { return DeviceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_device_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/device.service */ "./src/app/shared/services/device.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DeviceListComponent = /** @class */ (function () {
    function DeviceListComponent(deviceService, router, chRef, modalService, toastr) {
        this.deviceService = deviceService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    DeviceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deviceService.getDevices().subscribe(function (data) {
            _this.devices = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    DeviceListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.deviceService.deleteDevice(id).subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    DeviceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./device-list.component.html */ "./src/app/views/master/finger/device-list/device-list.component.html"),
            styles: [__webpack_require__(/*! ./device-list.component.css */ "./src/app/views/master/finger/device-list/device-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_device_service__WEBPACK_IMPORTED_MODULE_8__["DeviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], DeviceListComponent);
    return DeviceListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/health-questions/health-questions-create/health-questions-create.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/master/health-questions/health-questions-create/health-questions-create.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Health Questions</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Health Questions</div>\n        <form [formGroup]=\"healthQuestionForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"question\">Question</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"question\"\n                placeholder=\"Enter question\"\n                formControlName=\"question\"\n              />\n              <i\n                *ngIf=\"\n                  !healthQuestionForm.get('question').valid &&\n                  healthQuestionForm.get('question').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter question</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"published\">Published</label>\n              <select\n                name=\"published\"\n                id=\"published\"\n                class=\"form-control \"\n                formControlName=\"published\"\n              >\n                <option value=\"1\">True</option>\n                <option value=\"2\">False</option>\n              </select>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/health-questions/health-questions-create/health-questions-create.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/master/health-questions/health-questions-create/health-questions-create.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9oZWFsdGgtcXVlc3Rpb25zL2hlYWx0aC1xdWVzdGlvbnMtY3JlYXRlL2hlYWx0aC1xdWVzdGlvbnMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/health-questions/health-questions-create/health-questions-create.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/master/health-questions/health-questions-create/health-questions-create.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: HealthQuestionsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthQuestionsCreateComponent", function() { return HealthQuestionsCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_health_questions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/health-questions.service */ "./src/app/shared/services/health-questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HealthQuestionsCreateComponent = /** @class */ (function () {
    function HealthQuestionsCreateComponent(fb, toastr, router, healthQuestionsService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.healthQuestionsService = healthQuestionsService;
        this.activatedRoute = activatedRoute;
    }
    HealthQuestionsCreateComponent.prototype.ngOnInit = function () {
        this.healthQuestionForm = this.fb.group({
            question: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            published: ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    HealthQuestionsCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.healthQuestionForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.healthQuestionsService
                .createQuestion(this.healthQuestionForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/health-questions");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    HealthQuestionsCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./health-questions-create.component.html */ "./src/app/views/master/health-questions/health-questions-create/health-questions-create.component.html"),
            styles: [__webpack_require__(/*! ./health-questions-create.component.scss */ "./src/app/views/master/health-questions/health-questions-create/health-questions-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_health_questions_service__WEBPACK_IMPORTED_MODULE_4__["HealthQuestionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HealthQuestionsCreateComponent);
    return HealthQuestionsCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/health-questions/health-questions-form/health-questions-form.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/master/health-questions/health-questions-form/health-questions-form.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Health Questions</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Health Questions</div>\n        <form [formGroup]=\"healthQuestionForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"question\">Question</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"question\"\n                placeholder=\"Enter question\"\n                formControlName=\"question\"\n              />\n              <i\n                *ngIf=\"\n                  !healthQuestionForm.get('question').valid &&\n                  healthQuestionForm.get('question').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter question</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"published\">Published</label>\n              <select\n                name=\"published\"\n                id=\"published\"\n                class=\"form-control \"\n                formControlName=\"published\"\n              >\n                <option value=\"1\">True</option>\n                <option value=\"2\">False</option>\n              </select>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/health-questions/health-questions-form/health-questions-form.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/master/health-questions/health-questions-form/health-questions-form.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9oZWFsdGgtcXVlc3Rpb25zL2hlYWx0aC1xdWVzdGlvbnMtZm9ybS9oZWFsdGgtcXVlc3Rpb25zLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/health-questions/health-questions-form/health-questions-form.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/master/health-questions/health-questions-form/health-questions-form.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: HealthQuestionsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthQuestionsFormComponent", function() { return HealthQuestionsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_health_questions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/health-questions.service */ "./src/app/shared/services/health-questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HealthQuestionsFormComponent = /** @class */ (function () {
    function HealthQuestionsFormComponent(fb, toastr, router, healthQuestionsService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.healthQuestionsService = healthQuestionsService;
        this.activatedRoute = activatedRoute;
    }
    HealthQuestionsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.healthQuestionForm = this.fb.group({
            question: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            published: ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.healthQuestionsService
            .showQuestion(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.healthQuestionForm.setValue({
                question: data["data"].question,
                published: data["data"].published
            });
        });
    };
    HealthQuestionsFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.healthQuestionForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.healthQuestionsService
                .updateQuestion(this.activatedRoute.snapshot.params["id"], this.healthQuestionForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/health-questions");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    HealthQuestionsFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./health-questions-form.component.html */ "./src/app/views/master/health-questions/health-questions-form/health-questions-form.component.html"),
            styles: [__webpack_require__(/*! ./health-questions-form.component.scss */ "./src/app/views/master/health-questions/health-questions-form/health-questions-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_health_questions_service__WEBPACK_IMPORTED_MODULE_4__["HealthQuestionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HealthQuestionsFormComponent);
    return HealthQuestionsFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/health-questions/health-questions-list/health-questions-list.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/master/health-questions/health-questions-list/health-questions-list.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL2hlYWx0aC1xdWVzdGlvbnMvaGVhbHRoLXF1ZXN0aW9ucy1saXN0L2hlYWx0aC1xdWVzdGlvbnMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL2hlYWx0aC1xdWVzdGlvbnMvaGVhbHRoLXF1ZXN0aW9ucy1saXN0L2hlYWx0aC1xdWVzdGlvbnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/health-questions/health-questions-list/health-questions-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/master/health-questions/health-questions-list/health-questions-list.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Health Questions</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['health-questions-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Health Questions</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let healthquestion of healthquestions\">\n                      <td>{{ healthquestion.question }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"[\n                            'health-questions-edit/',\n                            healthquestion.id\n                          ]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, healthquestion.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Health Questions deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete this questions\n                                ?\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this health\n                              questions will be permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/health-questions/health-questions-list/health-questions-list.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/master/health-questions/health-questions-list/health-questions-list.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: HealthQuestionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthQuestionsListComponent", function() { return HealthQuestionsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_health_questions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/health-questions.service */ "./src/app/shared/services/health-questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HealthQuestionsListComponent = /** @class */ (function () {
    function HealthQuestionsListComponent(healthQuestionsService, router, chRef, modalService, toastr) {
        this.healthQuestionsService = healthQuestionsService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    HealthQuestionsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.healthQuestionsService.getQuestions().subscribe(function (data) {
            _this.healthquestions = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    HealthQuestionsListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.healthQuestionsService
                .deleteQuestion(id)
                .subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    HealthQuestionsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./health-questions-list.component.html */ "./src/app/views/master/health-questions/health-questions-list/health-questions-list.component.html"),
            styles: [__webpack_require__(/*! ./health-questions-list.component.css */ "./src/app/views/master/health-questions/health-questions-list/health-questions-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_health_questions_service__WEBPACK_IMPORTED_MODULE_8__["HealthQuestionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], HealthQuestionsListComponent);
    return HealthQuestionsListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/instructure/instructure-create/instructure-create.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/master/instructure/instructure-create/instructure-create.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Coach</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Coach</div>\n        <form [formGroup]=\"instructureForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"staff_id\">Name</label>\n              <select\n                name=\"staff_id\"\n                id=\"staff_id\"\n                class=\"form-control \"\n                formControlName=\"staff_id\"\n              >\n                <option [ngValue]=\"staff.id\" *ngFor=\"let staff of staffs\">{{\n                  staff.name\n                }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/instructure/instructure-create/instructure-create.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/master/instructure/instructure-create/instructure-create.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9pbnN0cnVjdHVyZS9pbnN0cnVjdHVyZS1jcmVhdGUvaW5zdHJ1Y3R1cmUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/instructure/instructure-create/instructure-create.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/master/instructure/instructure-create/instructure-create.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: InstructureCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructureCreateComponent", function() { return InstructureCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_instructure_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/instructure.service */ "./src/app/shared/services/instructure.service.ts");
/* harmony import */ var src_app_shared_services_staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/staff.service */ "./src/app/shared/services/staff.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InstructureCreateComponent = /** @class */ (function () {
    function InstructureCreateComponent(fb, toastr, router, instructureService, staffService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.instructureService = instructureService;
        this.staffService = staffService;
    }
    InstructureCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instructureForm = this.fb.group({
            id: [""],
            staff_id: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.staffService.getStaffs().subscribe(function (data) {
            _this.staffs = data["data"];
        });
    };
    InstructureCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.instructureForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.instructureService
                .createInstructure(this.instructureForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/coach");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    InstructureCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./instructure-create.component.html */ "./src/app/views/master/instructure/instructure-create/instructure-create.component.html"),
            styles: [__webpack_require__(/*! ./instructure-create.component.scss */ "./src/app/views/master/instructure/instructure-create/instructure-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_instructure_service__WEBPACK_IMPORTED_MODULE_4__["InstructureService"],
            src_app_shared_services_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"]])
    ], InstructureCreateComponent);
    return InstructureCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/instructure/instructure-list/instructure-list.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/views/master/instructure/instructure-list/instructure-list.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL2luc3RydWN0dXJlL2luc3RydWN0dXJlLWxpc3QvaW5zdHJ1Y3R1cmUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL2luc3RydWN0dXJlL2luc3RydWN0dXJlLWxpc3QvaW5zdHJ1Y3R1cmUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/instructure/instructure-list/instructure-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/master/instructure/instructure-list/instructure-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Coach</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['coach-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Name</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let instructure of instructures\">\n                      <td>{{ instructure.name }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"[\n                            '/staff/staff-edit/',\n                            instructure.staff_id\n                          ]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, instructure.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Coach deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete\n                                <span class=\"text-primary\"\n                                  >\"{{ instructure.name }}\"</span\n                                >\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this coach will be\n                              permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/instructure/instructure-list/instructure-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/master/instructure/instructure-list/instructure-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: InstructureListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructureListComponent", function() { return InstructureListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_instructure_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/instructure.service */ "./src/app/shared/services/instructure.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InstructureListComponent = /** @class */ (function () {
    function InstructureListComponent(instructureService, router, chRef, modalService, toastr) {
        this.instructureService = instructureService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    InstructureListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instructureService.getInstructures().subscribe(function (data) {
            _this.instructures = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    InstructureListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.instructureService
                .deleteInstructure(id)
                .subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    InstructureListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./instructure-list.component.html */ "./src/app/views/master/instructure/instructure-list/instructure-list.component.html"),
            styles: [__webpack_require__(/*! ./instructure-list.component.css */ "./src/app/views/master/instructure/instructure-list/instructure-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_instructure_service__WEBPACK_IMPORTED_MODULE_8__["InstructureService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], InstructureListComponent);
    return InstructureListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/master-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/master/master-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterRoutingModule", function() { return MasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user-list/user-list.component */ "./src/app/views/master/user/user-list/user-list.component.ts");
/* harmony import */ var _role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role/role-list/role-list.component */ "./src/app/views/master/role/role-list/role-list.component.ts");
/* harmony import */ var _role_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role/role-form/role-form.component */ "./src/app/views/master/role/role-form/role-form.component.ts");
/* harmony import */ var _permission_permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permission/permission-list/permission-list.component */ "./src/app/views/master/permission/permission-list/permission-list.component.ts");
/* harmony import */ var _permission_permission_form_permission_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permission/permission-form/permission-form.component */ "./src/app/views/master/permission/permission-form/permission-form.component.ts");
/* harmony import */ var _personal_trainer_personal_trainer_list_personal_trainer_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personal-trainer/personal-trainer-list/personal-trainer-list.component */ "./src/app/views/master/personal-trainer/personal-trainer-list/personal-trainer-list.component.ts");
/* harmony import */ var _personal_trainer_personal_trainer_form_personal_trainer_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./personal-trainer/personal-trainer-form/personal-trainer-form.component */ "./src/app/views/master/personal-trainer/personal-trainer-form/personal-trainer-form.component.ts");
/* harmony import */ var _schedule_schedule_list_schedule_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./schedule/schedule-list/schedule-list.component */ "./src/app/views/master/schedule/schedule-list/schedule-list.component.ts");
/* harmony import */ var _schedule_schedule_form_schedule_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schedule/schedule-form/schedule-form.component */ "./src/app/views/master/schedule/schedule-form/schedule-form.component.ts");
/* harmony import */ var _payment_type_payment_type_list_payment_type_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payment-type/payment-type-list/payment-type-list.component */ "./src/app/views/master/payment-type/payment-type-list/payment-type-list.component.ts");
/* harmony import */ var _payment_type_payment_type_form_payment_type_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payment-type/payment-type-form/payment-type-form.component */ "./src/app/views/master/payment-type/payment-type-form/payment-type-form.component.ts");
/* harmony import */ var _member_type_member_type_list_member_type_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./member-type/member-type-list/member-type-list.component */ "./src/app/views/master/member-type/member-type-list/member-type-list.component.ts");
/* harmony import */ var _member_type_member_type_form_member_type_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./member-type/member-type-form/member-type-form.component */ "./src/app/views/master/member-type/member-type-form/member-type-form.component.ts");
/* harmony import */ var _price_price_list_price_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./price/price-list/price-list.component */ "./src/app/views/master/price/price-list/price-list.component.ts");
/* harmony import */ var _price_price_form_price_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./price/price-form/price-form.component */ "./src/app/views/master/price/price-form/price-form.component.ts");
/* harmony import */ var _benefit_benefit_list_benefit_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./benefit/benefit-list/benefit-list.component */ "./src/app/views/master/benefit/benefit-list/benefit-list.component.ts");
/* harmony import */ var _benefit_benefit_form_benefit_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./benefit/benefit-form/benefit-form.component */ "./src/app/views/master/benefit/benefit-form/benefit-form.component.ts");
/* harmony import */ var _dropin_company_dropin_company_list_dropin_company_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dropin-company/dropin-company-list/dropin-company-list.component */ "./src/app/views/master/dropin-company/dropin-company-list/dropin-company-list.component.ts");
/* harmony import */ var _dropin_company_dropin_company_form_dropin_company_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dropin-company/dropin-company-form/dropin-company-form.component */ "./src/app/views/master/dropin-company/dropin-company-form/dropin-company-form.component.ts");
/* harmony import */ var _user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/user-form/user-form.component */ "./src/app/views/master/user/user-form/user-form.component.ts");
/* harmony import */ var _user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/user-create/user-create.component */ "./src/app/views/master/user/user-create/user-create.component.ts");
/* harmony import */ var _role_role_create_role_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./role/role-create/role-create.component */ "./src/app/views/master/role/role-create/role-create.component.ts");
/* harmony import */ var _permission_permission_create_permission_create_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./permission/permission-create/permission-create.component */ "./src/app/views/master/permission/permission-create/permission-create.component.ts");
/* harmony import */ var _personal_trainer_personal_trainer_create_personal_trainer_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./personal-trainer/personal-trainer-create/personal-trainer-create.component */ "./src/app/views/master/personal-trainer/personal-trainer-create/personal-trainer-create.component.ts");
/* harmony import */ var _role_role_permission_role_permission_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./role/role-permission/role-permission.component */ "./src/app/views/master/role/role-permission/role-permission.component.ts");
/* harmony import */ var _schedule_schedule_create_schedule_create_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./schedule/schedule-create/schedule-create.component */ "./src/app/views/master/schedule/schedule-create/schedule-create.component.ts");
/* harmony import */ var _payment_type_payment_type_create_payment_type_create_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./payment-type/payment-type-create/payment-type-create.component */ "./src/app/views/master/payment-type/payment-type-create/payment-type-create.component.ts");
/* harmony import */ var _member_type_member_type_create_member_type_create_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./member-type/member-type-create/member-type-create.component */ "./src/app/views/master/member-type/member-type-create/member-type-create.component.ts");
/* harmony import */ var _dropin_company_dropin_company_create_dropin_company_create_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dropin-company/dropin-company-create/dropin-company-create.component */ "./src/app/views/master/dropin-company/dropin-company-create/dropin-company-create.component.ts");
/* harmony import */ var _price_price_create_price_create_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./price/price-create/price-create.component */ "./src/app/views/master/price/price-create/price-create.component.ts");
/* harmony import */ var _health_questions_health_questions_list_health_questions_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./health-questions/health-questions-list/health-questions-list.component */ "./src/app/views/master/health-questions/health-questions-list/health-questions-list.component.ts");
/* harmony import */ var _health_questions_health_questions_create_health_questions_create_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./health-questions/health-questions-create/health-questions-create.component */ "./src/app/views/master/health-questions/health-questions-create/health-questions-create.component.ts");
/* harmony import */ var _health_questions_health_questions_form_health_questions_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./health-questions/health-questions-form/health-questions-form.component */ "./src/app/views/master/health-questions/health-questions-form/health-questions-form.component.ts");
/* harmony import */ var _bank_bank_list_bank_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./bank/bank-list/bank-list.component */ "./src/app/views/master/bank/bank-list/bank-list.component.ts");
/* harmony import */ var _bank_bank_create_bank_create_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./bank/bank-create/bank-create.component */ "./src/app/views/master/bank/bank-create/bank-create.component.ts");
/* harmony import */ var _bank_bank_form_bank_form_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./bank/bank-form/bank-form.component */ "./src/app/views/master/bank/bank-form/bank-form.component.ts");
/* harmony import */ var _branch_branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./branch/branch-list/branch-list.component */ "./src/app/views/master/branch/branch-list/branch-list.component.ts");
/* harmony import */ var _branch_branch_create_branch_create_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./branch/branch-create/branch-create.component */ "./src/app/views/master/branch/branch-create/branch-create.component.ts");
/* harmony import */ var _branch_branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./branch/branch-form/branch-form.component */ "./src/app/views/master/branch/branch-form/branch-form.component.ts");
/* harmony import */ var _benefit_benefit_create_benefit_create_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./benefit/benefit-create/benefit-create.component */ "./src/app/views/master/benefit/benefit-create/benefit-create.component.ts");
/* harmony import */ var _position_position_list_position_list_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./position/position-list/position-list.component */ "./src/app/views/master/position/position-list/position-list.component.ts");
/* harmony import */ var _position_position_create_position_create_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./position/position-create/position-create.component */ "./src/app/views/master/position/position-create/position-create.component.ts");
/* harmony import */ var _position_position_form_position_form_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./position/position-form/position-form.component */ "./src/app/views/master/position/position-form/position-form.component.ts");
/* harmony import */ var _finger_device_form_device_form_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./finger/device-form/device-form.component */ "./src/app/views/master/finger/device-form/device-form.component.ts");
/* harmony import */ var _finger_device_create_device_create_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./finger/device-create/device-create.component */ "./src/app/views/master/finger/device-create/device-create.component.ts");
/* harmony import */ var _finger_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./finger/device-list/device-list.component */ "./src/app/views/master/finger/device-list/device-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var routes = [
    {
        path: "user",
        component: _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"]
    },
    {
        path: "user/user-edit/:id",
        component: _user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_21__["UserFormComponent"]
    },
    {
        path: "user/user-create",
        component: _user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_22__["UserCreateComponent"]
    },
    {
        path: "role",
        component: _role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_3__["RoleListComponent"]
    },
    {
        path: "role/role-create",
        component: _role_role_create_role_create_component__WEBPACK_IMPORTED_MODULE_23__["RoleCreateComponent"]
    },
    {
        path: "role/role-edit/:id",
        component: _role_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_4__["RoleFormComponent"]
    },
    {
        path: "role/role-permission/:id",
        component: _role_role_permission_role_permission_component__WEBPACK_IMPORTED_MODULE_26__["RolePermissionComponent"]
    },
    {
        path: "permission",
        component: _permission_permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_5__["PermissionListComponent"]
    },
    {
        path: "permission/permission-edit/:id",
        component: _permission_permission_form_permission_form_component__WEBPACK_IMPORTED_MODULE_6__["PermissionFormComponent"]
    },
    {
        path: "permission/permission-create",
        component: _permission_permission_create_permission_create_component__WEBPACK_IMPORTED_MODULE_24__["PermissionCreateComponent"]
    },
    {
        path: "pricing-pt",
        component: _personal_trainer_personal_trainer_list_personal_trainer_list_component__WEBPACK_IMPORTED_MODULE_7__["PersonalTrainerListComponent"]
    },
    {
        path: "pricing-pt/pricing-pt-create",
        component: _personal_trainer_personal_trainer_create_personal_trainer_create_component__WEBPACK_IMPORTED_MODULE_25__["PersonalTrainerCreateComponent"]
    },
    {
        path: "pricing-pt/pricing-pt-edit/:id",
        component: _personal_trainer_personal_trainer_form_personal_trainer_form_component__WEBPACK_IMPORTED_MODULE_8__["PersonalTrainerFormComponent"]
    },
    // {
    //   path: "coach",
    //   component: InstructureListComponent
    // },
    // {
    //   path: "coach/coach-create",
    //   component: InstructureCreateComponent
    // },
    {
        path: "schedule",
        component: _schedule_schedule_list_schedule_list_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleListComponent"]
    },
    {
        path: "schedule/schedule-create",
        component: _schedule_schedule_create_schedule_create_component__WEBPACK_IMPORTED_MODULE_27__["ScheduleCreateComponent"]
    },
    {
        path: "schedule/schedule-edit/:id",
        component: _schedule_schedule_form_schedule_form_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleFormComponent"]
    },
    {
        path: "payment-type",
        component: _payment_type_payment_type_list_payment_type_list_component__WEBPACK_IMPORTED_MODULE_11__["PaymentTypeListComponent"]
    },
    {
        path: "payment-type/payment-type-create",
        component: _payment_type_payment_type_create_payment_type_create_component__WEBPACK_IMPORTED_MODULE_28__["PaymentTypeCreateComponent"]
    },
    {
        path: "payment-type/payment-type-edit/:id",
        component: _payment_type_payment_type_form_payment_type_form_component__WEBPACK_IMPORTED_MODULE_12__["PaymentTypeFormComponent"]
    },
    {
        path: "bank",
        component: _bank_bank_list_bank_list_component__WEBPACK_IMPORTED_MODULE_35__["BankListComponent"]
    },
    {
        path: "bank/bank-create",
        component: _bank_bank_create_bank_create_component__WEBPACK_IMPORTED_MODULE_36__["BankCreateComponent"]
    },
    {
        path: "bank/bank-edit/:id",
        component: _bank_bank_form_bank_form_component__WEBPACK_IMPORTED_MODULE_37__["BankFormComponent"]
    },
    {
        path: "member-type",
        component: _member_type_member_type_list_member_type_list_component__WEBPACK_IMPORTED_MODULE_13__["MemberTypeListComponent"]
    },
    {
        path: "member-type/member-type-create",
        component: _member_type_member_type_create_member_type_create_component__WEBPACK_IMPORTED_MODULE_29__["MemberTypeCreateComponent"]
    },
    {
        path: "member-type/member-type-edit/:id",
        component: _member_type_member_type_form_member_type_form_component__WEBPACK_IMPORTED_MODULE_14__["MemberTypeFormComponent"]
    },
    {
        path: "pricing-non-pt",
        component: _price_price_list_price_list_component__WEBPACK_IMPORTED_MODULE_15__["PriceListComponent"]
    },
    {
        path: "pricing-non-pt/price-create",
        component: _price_price_create_price_create_component__WEBPACK_IMPORTED_MODULE_31__["PriceCreateComponent"]
    },
    {
        path: "pricing-non-pt/price-edit/:id",
        component: _price_price_form_price_form_component__WEBPACK_IMPORTED_MODULE_16__["PriceFormComponent"]
    },
    {
        path: "benefit",
        component: _benefit_benefit_list_benefit_list_component__WEBPACK_IMPORTED_MODULE_17__["BenefitListComponent"]
    },
    {
        path: "benefit/benefit-create",
        component: _benefit_benefit_create_benefit_create_component__WEBPACK_IMPORTED_MODULE_41__["BenefitCreateComponent"]
    },
    {
        path: "benefit/benefit-edit/:id",
        component: _benefit_benefit_form_benefit_form_component__WEBPACK_IMPORTED_MODULE_18__["BenefitFormComponent"]
    },
    {
        path: "dropin-company",
        component: _dropin_company_dropin_company_list_dropin_company_list_component__WEBPACK_IMPORTED_MODULE_19__["DropinCompanyListComponent"]
    },
    {
        path: "dropin-company/dropin-company-edit/:id",
        component: _dropin_company_dropin_company_form_dropin_company_form_component__WEBPACK_IMPORTED_MODULE_20__["DropinCompanyFormComponent"]
    },
    {
        path: "dropin-company/dropin-company-create",
        component: _dropin_company_dropin_company_create_dropin_company_create_component__WEBPACK_IMPORTED_MODULE_30__["DropinCompanyCreateComponent"]
    },
    {
        path: "health-questions",
        component: _health_questions_health_questions_list_health_questions_list_component__WEBPACK_IMPORTED_MODULE_32__["HealthQuestionsListComponent"]
    },
    {
        path: "health-questions/health-questions-create",
        component: _health_questions_health_questions_create_health_questions_create_component__WEBPACK_IMPORTED_MODULE_33__["HealthQuestionsCreateComponent"]
    },
    {
        path: "health-questions/health-questions-edit/:id",
        component: _health_questions_health_questions_form_health_questions_form_component__WEBPACK_IMPORTED_MODULE_34__["HealthQuestionsFormComponent"]
    },
    {
        path: "branch",
        component: _branch_branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_38__["BranchListComponent"]
    },
    {
        path: "branch/branch-create",
        component: _branch_branch_create_branch_create_component__WEBPACK_IMPORTED_MODULE_39__["BranchCreateComponent"]
    },
    {
        path: "branch/branch-edit/:id",
        component: _branch_branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_40__["BranchFormComponent"]
    },
    {
        path: "position",
        component: _position_position_list_position_list_component__WEBPACK_IMPORTED_MODULE_42__["PositionListComponent"]
    },
    {
        path: "position/position-edit/:id",
        component: _position_position_form_position_form_component__WEBPACK_IMPORTED_MODULE_44__["PositionFormComponent"]
    },
    {
        path: "position/position-create",
        component: _position_position_create_position_create_component__WEBPACK_IMPORTED_MODULE_43__["PositionCreateComponent"]
    },
    {
        path: "device",
        component: _finger_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_47__["DeviceListComponent"]
    },
    {
        path: "device/device-edit/:id",
        component: _finger_device_form_device_form_component__WEBPACK_IMPORTED_MODULE_45__["DeviceFormComponent"]
    },
    {
        path: "device/device-create",
        component: _finger_device_create_device_create_component__WEBPACK_IMPORTED_MODULE_46__["DeviceCreateComponent"]
    }
];
var MasterRoutingModule = /** @class */ (function () {
    function MasterRoutingModule() {
    }
    MasterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MasterRoutingModule);
    return MasterRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/master/master.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/master/master.module.ts ***!
  \***********************************************/
/*! exports provided: MasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterModule", function() { return MasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/form-wizard/form-wizard.module */ "./src/app/shared/components/form-wizard/form-wizard.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _master_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./master-routing.module */ "./src/app/views/master/master-routing.module.ts");
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user-list/user-list.component */ "./src/app/views/master/user/user-list/user-list.component.ts");
/* harmony import */ var _role_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./role/role-form/role-form.component */ "./src/app/views/master/role/role-form/role-form.component.ts");
/* harmony import */ var _role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./role/role-list/role-list.component */ "./src/app/views/master/role/role-list/role-list.component.ts");
/* harmony import */ var _permission_permission_form_permission_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./permission/permission-form/permission-form.component */ "./src/app/views/master/permission/permission-form/permission-form.component.ts");
/* harmony import */ var _permission_permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./permission/permission-list/permission-list.component */ "./src/app/views/master/permission/permission-list/permission-list.component.ts");
/* harmony import */ var _personal_trainer_personal_trainer_form_personal_trainer_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./personal-trainer/personal-trainer-form/personal-trainer-form.component */ "./src/app/views/master/personal-trainer/personal-trainer-form/personal-trainer-form.component.ts");
/* harmony import */ var _personal_trainer_personal_trainer_list_personal_trainer_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./personal-trainer/personal-trainer-list/personal-trainer-list.component */ "./src/app/views/master/personal-trainer/personal-trainer-list/personal-trainer-list.component.ts");
/* harmony import */ var _instructure_instructure_list_instructure_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./instructure/instructure-list/instructure-list.component */ "./src/app/views/master/instructure/instructure-list/instructure-list.component.ts");
/* harmony import */ var _schedule_schedule_form_schedule_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./schedule/schedule-form/schedule-form.component */ "./src/app/views/master/schedule/schedule-form/schedule-form.component.ts");
/* harmony import */ var _schedule_schedule_list_schedule_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./schedule/schedule-list/schedule-list.component */ "./src/app/views/master/schedule/schedule-list/schedule-list.component.ts");
/* harmony import */ var _payment_type_payment_type_form_payment_type_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payment-type/payment-type-form/payment-type-form.component */ "./src/app/views/master/payment-type/payment-type-form/payment-type-form.component.ts");
/* harmony import */ var _payment_type_payment_type_list_payment_type_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./payment-type/payment-type-list/payment-type-list.component */ "./src/app/views/master/payment-type/payment-type-list/payment-type-list.component.ts");
/* harmony import */ var _member_type_member_type_list_member_type_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./member-type/member-type-list/member-type-list.component */ "./src/app/views/master/member-type/member-type-list/member-type-list.component.ts");
/* harmony import */ var _member_type_member_type_form_member_type_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./member-type/member-type-form/member-type-form.component */ "./src/app/views/master/member-type/member-type-form/member-type-form.component.ts");
/* harmony import */ var _price_price_list_price_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./price/price-list/price-list.component */ "./src/app/views/master/price/price-list/price-list.component.ts");
/* harmony import */ var _price_price_form_price_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./price/price-form/price-form.component */ "./src/app/views/master/price/price-form/price-form.component.ts");
/* harmony import */ var _benefit_benefit_list_benefit_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./benefit/benefit-list/benefit-list.component */ "./src/app/views/master/benefit/benefit-list/benefit-list.component.ts");
/* harmony import */ var _benefit_benefit_form_benefit_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./benefit/benefit-form/benefit-form.component */ "./src/app/views/master/benefit/benefit-form/benefit-form.component.ts");
/* harmony import */ var _dropin_company_dropin_company_list_dropin_company_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dropin-company/dropin-company-list/dropin-company-list.component */ "./src/app/views/master/dropin-company/dropin-company-list/dropin-company-list.component.ts");
/* harmony import */ var _dropin_company_dropin_company_form_dropin_company_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dropin-company/dropin-company-form/dropin-company-form.component */ "./src/app/views/master/dropin-company/dropin-company-form/dropin-company-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/user-form/user-form.component */ "./src/app/views/master/user/user-form/user-form.component.ts");
/* harmony import */ var _user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./user/user-create/user-create.component */ "./src/app/views/master/user/user-create/user-create.component.ts");
/* harmony import */ var _role_role_create_role_create_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./role/role-create/role-create.component */ "./src/app/views/master/role/role-create/role-create.component.ts");
/* harmony import */ var _role_role_permission_role_permission_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./role/role-permission/role-permission.component */ "./src/app/views/master/role/role-permission/role-permission.component.ts");
/* harmony import */ var _permission_permission_create_permission_create_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./permission/permission-create/permission-create.component */ "./src/app/views/master/permission/permission-create/permission-create.component.ts");
/* harmony import */ var _personal_trainer_personal_trainer_create_personal_trainer_create_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./personal-trainer/personal-trainer-create/personal-trainer-create.component */ "./src/app/views/master/personal-trainer/personal-trainer-create/personal-trainer-create.component.ts");
/* harmony import */ var _instructure_instructure_create_instructure_create_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./instructure/instructure-create/instructure-create.component */ "./src/app/views/master/instructure/instructure-create/instructure-create.component.ts");
/* harmony import */ var _schedule_schedule_create_schedule_create_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./schedule/schedule-create/schedule-create.component */ "./src/app/views/master/schedule/schedule-create/schedule-create.component.ts");
/* harmony import */ var _payment_type_payment_type_create_payment_type_create_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./payment-type/payment-type-create/payment-type-create.component */ "./src/app/views/master/payment-type/payment-type-create/payment-type-create.component.ts");
/* harmony import */ var _member_type_member_type_create_member_type_create_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./member-type/member-type-create/member-type-create.component */ "./src/app/views/master/member-type/member-type-create/member-type-create.component.ts");
/* harmony import */ var _benefit_benefit_create_benefit_create_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./benefit/benefit-create/benefit-create.component */ "./src/app/views/master/benefit/benefit-create/benefit-create.component.ts");
/* harmony import */ var _dropin_company_dropin_company_create_dropin_company_create_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./dropin-company/dropin-company-create/dropin-company-create.component */ "./src/app/views/master/dropin-company/dropin-company-create/dropin-company-create.component.ts");
/* harmony import */ var _price_price_create_price_create_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./price/price-create/price-create.component */ "./src/app/views/master/price/price-create/price-create.component.ts");
/* harmony import */ var _health_questions_health_questions_list_health_questions_list_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./health-questions/health-questions-list/health-questions-list.component */ "./src/app/views/master/health-questions/health-questions-list/health-questions-list.component.ts");
/* harmony import */ var _health_questions_health_questions_form_health_questions_form_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./health-questions/health-questions-form/health-questions-form.component */ "./src/app/views/master/health-questions/health-questions-form/health-questions-form.component.ts");
/* harmony import */ var _health_questions_health_questions_create_health_questions_create_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./health-questions/health-questions-create/health-questions-create.component */ "./src/app/views/master/health-questions/health-questions-create/health-questions-create.component.ts");
/* harmony import */ var _bank_bank_list_bank_list_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./bank/bank-list/bank-list.component */ "./src/app/views/master/bank/bank-list/bank-list.component.ts");
/* harmony import */ var _bank_bank_form_bank_form_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./bank/bank-form/bank-form.component */ "./src/app/views/master/bank/bank-form/bank-form.component.ts");
/* harmony import */ var _bank_bank_create_bank_create_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./bank/bank-create/bank-create.component */ "./src/app/views/master/bank/bank-create/bank-create.component.ts");
/* harmony import */ var _branch_branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./branch/branch-list/branch-list.component */ "./src/app/views/master/branch/branch-list/branch-list.component.ts");
/* harmony import */ var _branch_branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./branch/branch-form/branch-form.component */ "./src/app/views/master/branch/branch-form/branch-form.component.ts");
/* harmony import */ var _branch_branch_create_branch_create_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./branch/branch-create/branch-create.component */ "./src/app/views/master/branch/branch-create/branch-create.component.ts");
/* harmony import */ var _position_position_list_position_list_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./position/position-list/position-list.component */ "./src/app/views/master/position/position-list/position-list.component.ts");
/* harmony import */ var _position_position_form_position_form_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./position/position-form/position-form.component */ "./src/app/views/master/position/position-form/position-form.component.ts");
/* harmony import */ var _position_position_create_position_create_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./position/position-create/position-create.component */ "./src/app/views/master/position/position-create/position-create.component.ts");
/* harmony import */ var _finger_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./finger/device-list/device-list.component */ "./src/app/views/master/finger/device-list/device-list.component.ts");
/* harmony import */ var _finger_device_form_device_form_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./finger/device-form/device-form.component */ "./src/app/views/master/finger/device-form/device-form.component.ts");
/* harmony import */ var _finger_device_create_device_create_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./finger/device-create/device-create.component */ "./src/app/views/master/finger/device-create/device-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























































var MasterModule = /** @class */ (function () {
    function MasterModule() {
    }
    MasterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__["NgbModule"],
                _master_routing_module__WEBPACK_IMPORTED_MODULE_7__["MasterRoutingModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"],
                src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_5__["FormWizardModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__["TextMaskModule"]
            ],
            declarations: [
                _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__["UserListComponent"],
                _role_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_9__["RoleFormComponent"],
                _role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_10__["RoleListComponent"],
                _permission_permission_form_permission_form_component__WEBPACK_IMPORTED_MODULE_11__["PermissionFormComponent"],
                _permission_permission_list_permission_list_component__WEBPACK_IMPORTED_MODULE_12__["PermissionListComponent"],
                _personal_trainer_personal_trainer_form_personal_trainer_form_component__WEBPACK_IMPORTED_MODULE_13__["PersonalTrainerFormComponent"],
                _personal_trainer_personal_trainer_list_personal_trainer_list_component__WEBPACK_IMPORTED_MODULE_14__["PersonalTrainerListComponent"],
                _instructure_instructure_list_instructure_list_component__WEBPACK_IMPORTED_MODULE_15__["InstructureListComponent"],
                _schedule_schedule_form_schedule_form_component__WEBPACK_IMPORTED_MODULE_16__["ScheduleFormComponent"],
                _schedule_schedule_list_schedule_list_component__WEBPACK_IMPORTED_MODULE_17__["ScheduleListComponent"],
                _payment_type_payment_type_form_payment_type_form_component__WEBPACK_IMPORTED_MODULE_18__["PaymentTypeFormComponent"],
                _payment_type_payment_type_list_payment_type_list_component__WEBPACK_IMPORTED_MODULE_19__["PaymentTypeListComponent"],
                _member_type_member_type_form_member_type_form_component__WEBPACK_IMPORTED_MODULE_21__["MemberTypeFormComponent"],
                _member_type_member_type_list_member_type_list_component__WEBPACK_IMPORTED_MODULE_20__["MemberTypeListComponent"],
                _price_price_form_price_form_component__WEBPACK_IMPORTED_MODULE_23__["PriceFormComponent"],
                _price_price_list_price_list_component__WEBPACK_IMPORTED_MODULE_22__["PriceListComponent"],
                _benefit_benefit_form_benefit_form_component__WEBPACK_IMPORTED_MODULE_25__["BenefitFormComponent"],
                _benefit_benefit_list_benefit_list_component__WEBPACK_IMPORTED_MODULE_24__["BenefitListComponent"],
                _dropin_company_dropin_company_form_dropin_company_form_component__WEBPACK_IMPORTED_MODULE_27__["DropinCompanyFormComponent"],
                _dropin_company_dropin_company_list_dropin_company_list_component__WEBPACK_IMPORTED_MODULE_26__["DropinCompanyListComponent"],
                _user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_30__["UserFormComponent"],
                _user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_31__["UserCreateComponent"],
                _role_role_create_role_create_component__WEBPACK_IMPORTED_MODULE_32__["RoleCreateComponent"],
                _role_role_permission_role_permission_component__WEBPACK_IMPORTED_MODULE_33__["RolePermissionComponent"],
                _permission_permission_create_permission_create_component__WEBPACK_IMPORTED_MODULE_34__["PermissionCreateComponent"],
                _personal_trainer_personal_trainer_create_personal_trainer_create_component__WEBPACK_IMPORTED_MODULE_35__["PersonalTrainerCreateComponent"],
                _instructure_instructure_create_instructure_create_component__WEBPACK_IMPORTED_MODULE_36__["InstructureCreateComponent"],
                _schedule_schedule_create_schedule_create_component__WEBPACK_IMPORTED_MODULE_37__["ScheduleCreateComponent"],
                _payment_type_payment_type_create_payment_type_create_component__WEBPACK_IMPORTED_MODULE_38__["PaymentTypeCreateComponent"],
                _member_type_member_type_create_member_type_create_component__WEBPACK_IMPORTED_MODULE_39__["MemberTypeCreateComponent"],
                _benefit_benefit_create_benefit_create_component__WEBPACK_IMPORTED_MODULE_40__["BenefitCreateComponent"],
                _dropin_company_dropin_company_create_dropin_company_create_component__WEBPACK_IMPORTED_MODULE_41__["DropinCompanyCreateComponent"],
                _price_price_create_price_create_component__WEBPACK_IMPORTED_MODULE_42__["PriceCreateComponent"],
                _health_questions_health_questions_list_health_questions_list_component__WEBPACK_IMPORTED_MODULE_43__["HealthQuestionsListComponent"],
                _health_questions_health_questions_form_health_questions_form_component__WEBPACK_IMPORTED_MODULE_44__["HealthQuestionsFormComponent"],
                _health_questions_health_questions_create_health_questions_create_component__WEBPACK_IMPORTED_MODULE_45__["HealthQuestionsCreateComponent"],
                _bank_bank_list_bank_list_component__WEBPACK_IMPORTED_MODULE_46__["BankListComponent"],
                _bank_bank_form_bank_form_component__WEBPACK_IMPORTED_MODULE_47__["BankFormComponent"],
                _bank_bank_create_bank_create_component__WEBPACK_IMPORTED_MODULE_48__["BankCreateComponent"],
                _branch_branch_list_branch_list_component__WEBPACK_IMPORTED_MODULE_49__["BranchListComponent"],
                _branch_branch_form_branch_form_component__WEBPACK_IMPORTED_MODULE_50__["BranchFormComponent"],
                _branch_branch_create_branch_create_component__WEBPACK_IMPORTED_MODULE_51__["BranchCreateComponent"],
                _position_position_list_position_list_component__WEBPACK_IMPORTED_MODULE_52__["PositionListComponent"],
                _position_position_form_position_form_component__WEBPACK_IMPORTED_MODULE_53__["PositionFormComponent"],
                _position_position_create_position_create_component__WEBPACK_IMPORTED_MODULE_54__["PositionCreateComponent"],
                _finger_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_55__["DeviceListComponent"],
                _finger_device_form_device_form_component__WEBPACK_IMPORTED_MODULE_56__["DeviceFormComponent"],
                _finger_device_create_device_create_component__WEBPACK_IMPORTED_MODULE_57__["DeviceCreateComponent"]
            ]
        })
    ], MasterModule);
    return MasterModule;
}());



/***/ }),

/***/ "./src/app/views/master/member-type/member-type-create/member-type-create.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/master/member-type/member-type-create/member-type-create.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Member Type</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Member Type</div>\n        <form [formGroup]=\"memberTypeForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"member_type_name\">Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"member_type_name\"\n                class=\"form-control\"\n                formControlName=\"member_type_name\"\n              />\n              <i\n                *ngIf=\"\n                  !memberTypeForm.get('member_type_name').valid &&\n                  memberTypeForm.get('member_type_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter member type name</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"duration\">Duration</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"duration\"\n                placeholder=\"Enter duration\"\n                formControlName=\"duration\"\n              />\n              <i\n                *ngIf=\"\n                  !memberTypeForm.get('duration').valid &&\n                  memberTypeForm.get('duration').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter total duration</i\n              >\n            </div>\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"period\">Period</label>\n              <select\n                name=\"period\"\n                id=\"period\"\n                class=\"form-control\"\n                formControlName=\"period\"\n              >\n                <option value=\"Month\">Month</option>\n                <option value=\"Day\">Day</option>\n              </select>\n            </div>\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"session\">Session</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"session\"\n                placeholder=\"Enter Session\"\n                formControlName=\"session\"\n              />\n            </div>\n\n            <!-- <div class=\"col-md-12 mb-3\">\n              <hr />\n              <h4>Benefit :</h4>\n            </div>\n            <div class=\"col-md-12\" *ngFor=\"let benefit of benefits\">\n              <label class=\"checkbox checkbox-secondary\">\n                <input\n                  checked\n                  type=\"checkbox\"\n                  name=\"benefit\"\n                  value=\"{{ benefit.id }}\"\n                />\n                <span>{{ benefit.benefit_name }}</span>\n                <span class=\"checkmark\"></span>\n              </label>\n            </div> -->\n\n            <div class=\"col-md-12\">\n              <hr />\n              <h4>Benefit :</h4>\n            </div>\n            <div class=\"col-md-12\" *ngFor=\"let benefit of benefits\">\n              <input\n                checked\n                type=\"checkbox\"\n                name=\"benefit\"\n                value=\"{{ benefit.id }}\"\n              />\n              <span class=\"ml-3\">{{ benefit.benefit_name }}</span>\n              <span class=\"checkmark\"></span>\n            </div>\n            <hr />\n\n            <div class=\"col-md-12\">\n              <input type=\"hidden\" class=\"benefit-final\" value=\"\" />\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/member-type/member-type-create/member-type-create.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/master/member-type/member-type-create/member-type-create.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9tZW1iZXItdHlwZS9tZW1iZXItdHlwZS1jcmVhdGUvbWVtYmVyLXR5cGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/member-type/member-type-create/member-type-create.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/master/member-type/member-type-create/member-type-create.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MemberTypeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberTypeCreateComponent", function() { return MemberTypeCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/member-type.service */ "./src/app/shared/services/member-type.service.ts");
/* harmony import */ var src_app_shared_services_benefit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/benefit.service */ "./src/app/shared/services/benefit.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberTypeCreateComponent = /** @class */ (function () {
    function MemberTypeCreateComponent(fb, toastr, router, memberTypeService, benefitService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.memberTypeService = memberTypeService;
        this.benefitService = benefitService;
        this.activatedRoute = activatedRoute;
    }
    MemberTypeCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberTypeForm = this.fb.group({
            member_type_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            duration: ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            period: ["Month", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            session: [""]
        });
        this.benefitService.getBenefits().subscribe(function (data) {
            _this.benefits = data["data"];
        });
        //Checbox
        jquery__WEBPACK_IMPORTED_MODULE_6__(".selectall").click(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).is(":checked")) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('input[name="benefit"]').prop("checked", true);
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_6__('input[name="benefit"]').prop("checked", false);
            }
        });
    };
    MemberTypeCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.memberTypeForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            var dataBenefits_1 = [];
            var benefit = void 0;
            jquery__WEBPACK_IMPORTED_MODULE_6__["each"](jquery__WEBPACK_IMPORTED_MODULE_6__("input[name='benefit']:checked"), function () {
                dataBenefits_1.push(jquery__WEBPACK_IMPORTED_MODULE_6__(this).val());
            });
            jquery__WEBPACK_IMPORTED_MODULE_6__(".benefit-final").val(dataBenefits_1);
            benefit = dataBenefits_1;
            this.benefitService
                .createBenefitMember(benefit)
                .subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.loading = true;
                    _this.memberTypeService
                        .createMemberType(_this.memberTypeForm.value)
                        .subscribe(function (res) {
                        setTimeout(function () {
                            _this.loading = false;
                            if (res["status"] === "200") {
                                _this.toastr.success(res["message"], "Success!", {
                                    progressBar: true
                                });
                                _this.router.navigateByUrl("master/member-type");
                            }
                            else {
                                _this.toastr.error(res["message"], "Error!", {
                                    progressBar: true
                                });
                            }
                        }, 3000);
                    });
                }
                else {
                    _this.loading = false;
                    _this.toastr.success(data["message"], "Error!", {
                        progressBar: true
                    });
                }
            });
        }
    };
    MemberTypeCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./member-type-create.component.html */ "./src/app/views/master/member-type/member-type-create/member-type-create.component.html"),
            styles: [__webpack_require__(/*! ./member-type-create.component.scss */ "./src/app/views/master/member-type/member-type-create/member-type-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_4__["MemberTypeService"],
            src_app_shared_services_benefit_service__WEBPACK_IMPORTED_MODULE_5__["BenefitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MemberTypeCreateComponent);
    return MemberTypeCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/member-type/member-type-form/member-type-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/master/member-type/member-type-form/member-type-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Member Type</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Member Type</div>\n        <form [formGroup]=\"memberTypeForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"member_type_name\">Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"member_type_name\"\n                class=\"form-control\"\n                formControlName=\"member_type_name\"\n              />\n              <i\n                *ngIf=\"\n                  !memberTypeForm.get('member_type_name').valid &&\n                  memberTypeForm.get('member_type_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter member type name</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"duration\">Duration</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"duration\"\n                placeholder=\"Enter duration\"\n                formControlName=\"duration\"\n              />\n              <i\n                *ngIf=\"\n                  !memberTypeForm.get('duration').valid &&\n                  memberTypeForm.get('duration').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter total duration</i\n              >\n            </div>\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"period\">Period</label>\n              <select\n                name=\"period\"\n                id=\"period\"\n                class=\"form-control\"\n                formControlName=\"period\"\n              >\n                <option value=\"Month\">Month</option>\n                <option value=\"Day\">Day</option>\n              </select>\n            </div>\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"session\">Session</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"session\"\n                placeholder=\"Enter Session\"\n                formControlName=\"session\"\n              />\n            </div>\n\n            <!-- <div class=\"col-md-12 mb-3\">\n              <hr />\n              <h4>Benefit :</h4>\n            </div>\n            <div class=\"col-md-12\" *ngFor=\"let benefit of benefits\">\n              <label class=\"checkbox checkbox-secondary\">\n                <input\n                  type=\"checkbox\"\n                  name=\"benefit\"\n                  value=\"{{ benefit.id }}\"\n                />\n                <span>{{ benefit.benefit_name }}</span>\n                <span class=\"checkmark\"></span>\n              </label>\n            </div> -->\n\n            <div class=\"col-md-12\">\n              <hr />\n              <h4>Benefit :</h4>\n            </div>\n            <div class=\"col-md-12\" *ngFor=\"let benefit of benefits\">\n              <input type=\"checkbox\" name=\"benefit\" value=\"{{ benefit.id }}\" />\n              <span class=\"ml-3\">{{ benefit.benefit_name }}</span>\n              <span class=\"checkmark\"></span>\n            </div>\n            <hr />\n\n            <div class=\"col-md-12\">\n              <input type=\"hidden\" class=\"benefit-final\" value=\"\" />\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/member-type/member-type-form/member-type-form.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/master/member-type/member-type-form/member-type-form.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9tZW1iZXItdHlwZS9tZW1iZXItdHlwZS1mb3JtL21lbWJlci10eXBlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/member-type/member-type-form/member-type-form.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/master/member-type/member-type-form/member-type-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MemberTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberTypeFormComponent", function() { return MemberTypeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/member-type.service */ "./src/app/shared/services/member-type.service.ts");
/* harmony import */ var src_app_shared_services_benefit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/benefit.service */ "./src/app/shared/services/benefit.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberTypeFormComponent = /** @class */ (function () {
    function MemberTypeFormComponent(fb, toastr, router, memberTypeService, benefitService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.memberTypeService = memberTypeService;
        this.benefitService = benefitService;
        this.activatedRoute = activatedRoute;
    }
    MemberTypeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberTypeForm = this.fb.group({
            member_type_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            duration: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            period: ["Month", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            session: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.benefitService.getBenefits().subscribe(function (data) {
            _this.benefits = data["data"];
        });
        //Checbox
        jquery__WEBPACK_IMPORTED_MODULE_6__(".selectall").click(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).is(":checked")) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('input[name="benefit"]').prop("checked", true);
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_6__('input[name="benefit"]').prop("checked", false);
            }
        });
        this.memberTypeService
            .showMemberType(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.getbenefits = data["data"].club_benefits;
            jquery__WEBPACK_IMPORTED_MODULE_6__["each"](_this.getbenefits, function (i, item) {
                jquery__WEBPACK_IMPORTED_MODULE_6__("input[name='benefit'][value=" + item.benefit_id + "]").prop("checked", true);
            });
        });
        this.memberTypeService
            .showMemberType(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.memberTypeForm.setValue({
                member_type_name: data["data"].member_type_name,
                duration: data["data"].duration,
                period: data["data"].period,
                session: data["data"].session
            });
        });
    };
    MemberTypeFormComponent.prototype.submit = function () {
        var _this = this;
        var dataBenefits = [];
        var benefit;
        jquery__WEBPACK_IMPORTED_MODULE_6__["each"](jquery__WEBPACK_IMPORTED_MODULE_6__("input[name='benefit']:checked"), function () {
            dataBenefits.push(jquery__WEBPACK_IMPORTED_MODULE_6__(this).val());
        });
        jquery__WEBPACK_IMPORTED_MODULE_6__(".benefit-final").val(dataBenefits);
        benefit = dataBenefits;
        this.benefitService
            .updateBenefitMember(this.activatedRoute.snapshot.params["id"], benefit)
            .subscribe(function (data) {
            if (data["status"] == "200") {
                _this.loading = true;
                _this.memberTypeService
                    .updateMemberType(_this.activatedRoute.snapshot.params["id"], _this.memberTypeForm.value)
                    .subscribe(function (res) {
                    setTimeout(function () {
                        _this.loading = false;
                        if (res["status"] === "200") {
                            _this.toastr.success(res["message"], "Success!", {
                                progressBar: true
                            });
                            _this.router.navigateByUrl("master/member-type");
                        }
                        else {
                            _this.toastr.error(res["message"], "Error!", {
                                progressBar: true
                            });
                        }
                    }, 3000);
                });
            }
            else {
                _this.loading = false;
                _this.toastr.success(data["message"], "Error!", {
                    progressBar: true
                });
            }
        });
    };
    MemberTypeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./member-type-form.component.html */ "./src/app/views/master/member-type/member-type-form/member-type-form.component.html"),
            styles: [__webpack_require__(/*! ./member-type-form.component.scss */ "./src/app/views/master/member-type/member-type-form/member-type-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_4__["MemberTypeService"],
            src_app_shared_services_benefit_service__WEBPACK_IMPORTED_MODULE_5__["BenefitService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MemberTypeFormComponent);
    return MemberTypeFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/member-type/member-type-list/member-type-list.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/views/master/member-type/member-type-list/member-type-list.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL21lbWJlci10eXBlL21lbWJlci10eXBlLWxpc3QvbWVtYmVyLXR5cGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL21lbWJlci10eXBlL21lbWJlci10eXBlLWxpc3QvbWVtYmVyLXR5cGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/member-type/member-type-list/member-type-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/master/member-type/member-type-list/member-type-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Member Type</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['member-type-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Member Type</th>\n                      <th>Duration</th>\n                      <th>Session</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let membertype of membertypes\">\n                      <td>{{ membertype.member_type_name }}</td>\n                      <td>{{ membertype.duration }} {{ membertype.period }}</td>\n                      <td>{{ membertype.session }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"['member-type-edit/', membertype.id]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, membertype.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Member Type deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete\n                                <span class=\"text-primary\"\n                                  >\"{{ membertype.member_type_name }}\"</span\n                                >\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this member type\n                              will be permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/member-type/member-type-list/member-type-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/master/member-type/member-type-list/member-type-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MemberTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberTypeListComponent", function() { return MemberTypeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/member-type.service */ "./src/app/shared/services/member-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MemberTypeListComponent = /** @class */ (function () {
    function MemberTypeListComponent(memberTypeService, router, chRef, modalService, toastr) {
        this.memberTypeService = memberTypeService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    MemberTypeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberTypeService.getMemberTypes().subscribe(function (data) {
            _this.membertypes = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    MemberTypeListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.memberTypeService.deleteMemberType(id).subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    MemberTypeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./member-type-list.component.html */ "./src/app/views/master/member-type/member-type-list/member-type-list.component.html"),
            styles: [__webpack_require__(/*! ./member-type-list.component.css */ "./src/app/views/master/member-type/member-type-list/member-type-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_8__["MemberTypeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], MemberTypeListComponent);
    return MemberTypeListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/payment-type/payment-type-create/payment-type-create.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/master/payment-type/payment-type-create/payment-type-create.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Payment Type</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Payment Type</div>\n        <form [formGroup]=\"paymentTypeForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"payment_type_name\">Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"payment_type_name\"\n                placeholder=\"Enter payment type\"\n                formControlName=\"payment_type_name\"\n              />\n              <i\n                *ngIf=\"\n                  !paymentTypeForm.get('payment_type_name').valid &&\n                  paymentTypeForm.get('payment_type_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter payment type name</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/payment-type/payment-type-create/payment-type-create.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/master/payment-type/payment-type-create/payment-type-create.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9wYXltZW50LXR5cGUvcGF5bWVudC10eXBlLWNyZWF0ZS9wYXltZW50LXR5cGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/payment-type/payment-type-create/payment-type-create.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/views/master/payment-type/payment-type-create/payment-type-create.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PaymentTypeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTypeCreateComponent", function() { return PaymentTypeCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_payment_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/payment-type.service */ "./src/app/shared/services/payment-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentTypeCreateComponent = /** @class */ (function () {
    function PaymentTypeCreateComponent(fb, toastr, router, paymentTypeService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.paymentTypeService = paymentTypeService;
        this.activatedRoute = activatedRoute;
    }
    PaymentTypeCreateComponent.prototype.ngOnInit = function () {
        this.paymentTypeForm = this.fb.group({
            payment_type_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    PaymentTypeCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.paymentTypeForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.paymentTypeService
                .createPaymentType(this.paymentTypeForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/payment-type");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    PaymentTypeCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./payment-type-create.component.html */ "./src/app/views/master/payment-type/payment-type-create/payment-type-create.component.html"),
            styles: [__webpack_require__(/*! ./payment-type-create.component.scss */ "./src/app/views/master/payment-type/payment-type-create/payment-type-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_payment_type_service__WEBPACK_IMPORTED_MODULE_4__["PaymentTypeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PaymentTypeCreateComponent);
    return PaymentTypeCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/payment-type/payment-type-form/payment-type-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/master/payment-type/payment-type-form/payment-type-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Payment Type</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Payment Type</div>\n        <form [formGroup]=\"paymentTypeForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"payment_type_name\">Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"payment_type_name\"\n                placeholder=\"Enter payment type name\"\n                formControlName=\"payment_type_name\"\n              />\n              <i\n                *ngIf=\"\n                  !paymentTypeForm.get('payment_type_name').valid &&\n                  paymentTypeForm.get('payment_type_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter payment type name</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/payment-type/payment-type-form/payment-type-form.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/master/payment-type/payment-type-form/payment-type-form.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9wYXltZW50LXR5cGUvcGF5bWVudC10eXBlLWZvcm0vcGF5bWVudC10eXBlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/payment-type/payment-type-form/payment-type-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/master/payment-type/payment-type-form/payment-type-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PaymentTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTypeFormComponent", function() { return PaymentTypeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_payment_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/payment-type.service */ "./src/app/shared/services/payment-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentTypeFormComponent = /** @class */ (function () {
    function PaymentTypeFormComponent(fb, toastr, router, paymentTypeService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.paymentTypeService = paymentTypeService;
        this.activatedRoute = activatedRoute;
    }
    PaymentTypeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentTypeForm = this.fb.group({
            payment_type_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.paymentTypeService
            .showPaymentType(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.paymentTypeForm.setValue({
                payment_type_name: data["data"].payment_type_name
            });
        });
    };
    PaymentTypeFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.paymentTypeForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.paymentTypeService
                .updatePaymentType(this.activatedRoute.snapshot.params["id"], this.paymentTypeForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/payment-type");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    PaymentTypeFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./payment-type-form.component.html */ "./src/app/views/master/payment-type/payment-type-form/payment-type-form.component.html"),
            styles: [__webpack_require__(/*! ./payment-type-form.component.scss */ "./src/app/views/master/payment-type/payment-type-form/payment-type-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_payment_type_service__WEBPACK_IMPORTED_MODULE_4__["PaymentTypeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PaymentTypeFormComponent);
    return PaymentTypeFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/payment-type/payment-type-list/payment-type-list.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/master/payment-type/payment-type-list/payment-type-list.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL3BheW1lbnQtdHlwZS9wYXltZW50LXR5cGUtbGlzdC9wYXltZW50LXR5cGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL3BheW1lbnQtdHlwZS9wYXltZW50LXR5cGUtbGlzdC9wYXltZW50LXR5cGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/payment-type/payment-type-list/payment-type-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/master/payment-type/payment-type-list/payment-type-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Payment Type</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['payment-type-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Name</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let paymenttype of paymenttypes\">\n                      <td>{{ paymenttype.payment_type_name }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"[\n                            '/master/payment-type/payment-type-edit',\n                            paymenttype.id\n                          ]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, paymenttype.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Payment type deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete\n                                <span class=\"text-primary\"\n                                  >\"{{ paymenttype.payment_type_name }}\"</span\n                                >\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this payment type\n                              will be permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              > \n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/payment-type/payment-type-list/payment-type-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/master/payment-type/payment-type-list/payment-type-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PaymentTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentTypeListComponent", function() { return PaymentTypeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_payment_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/payment-type.service */ "./src/app/shared/services/payment-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PaymentTypeListComponent = /** @class */ (function () {
    function PaymentTypeListComponent(paymentTypeService, router, chRef, modalService, toastr) {
        this.paymentTypeService = paymentTypeService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    PaymentTypeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentTypeService.getPaymentTypes().subscribe(function (data) {
            _this.paymenttypes = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    PaymentTypeListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.paymentTypeService
                .deletePaymentType(id)
                .subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    PaymentTypeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./payment-type-list.component.html */ "./src/app/views/master/payment-type/payment-type-list/payment-type-list.component.html"),
            styles: [__webpack_require__(/*! ./payment-type-list.component.css */ "./src/app/views/master/payment-type/payment-type-list/payment-type-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_payment_type_service__WEBPACK_IMPORTED_MODULE_8__["PaymentTypeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], PaymentTypeListComponent);
    return PaymentTypeListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/permission/permission-create/permission-create.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/views/master/permission/permission-create/permission-create.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Permission</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Permission</div>\n        <form [formGroup]=\"permissionForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"name\">Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"name\"\n                placeholder=\"Enter permission name\"\n                formControlName=\"name\"\n              />\n              <i\n                *ngIf=\"\n                  !permissionForm.get('name').valid &&\n                  permissionForm.get('name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter permission name</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"display_name\">Display Name</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"display_name\"\n                placeholder=\"Enter display name\"\n                formControlName=\"display_name\"\n              />\n              <i\n                *ngIf=\"\n                  !permissionForm.get('display_name').valid &&\n                  permissionForm.get('display_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter display name</i\n              >\n            </div>\n\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"description\">Description</label>\n              <textarea\n                class=\"form-control \"\n                placeholder=\"Optional\"\n                name=\"description\"\n                id=\"description\"\n                cols=\"30\"\n                rows=\"5\"\n                formControlName=\"description\"\n              >\n              </textarea>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/permission/permission-create/permission-create.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/views/master/permission/permission-create/permission-create.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9wZXJtaXNzaW9uL3Blcm1pc3Npb24tY3JlYXRlL3Blcm1pc3Npb24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/permission/permission-create/permission-create.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/views/master/permission/permission-create/permission-create.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PermissionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionCreateComponent", function() { return PermissionCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/permission.service */ "./src/app/shared/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PermissionCreateComponent = /** @class */ (function () {
    function PermissionCreateComponent(fb, toastr, router, permissionService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.permissionService = permissionService;
    }
    PermissionCreateComponent.prototype.ngOnInit = function () {
        this.permissionForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            display_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: []
        });
    };
    PermissionCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.permissionForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.permissionService
                .createPermission(this.permissionForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/permission");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    PermissionCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./permission-create.component.html */ "./src/app/views/master/permission/permission-create/permission-create.component.html"),
            styles: [__webpack_require__(/*! ./permission-create.component.scss */ "./src/app/views/master/permission/permission-create/permission-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"]])
    ], PermissionCreateComponent);
    return PermissionCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/permission/permission-form/permission-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/views/master/permission/permission-form/permission-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Permission</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Permission</div>\n        <form [formGroup]=\"permissionForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"name\">Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"name\"\n                placeholder=\"Enter permission name\"\n                formControlName=\"name\"\n              />\n              <i\n                *ngIf=\"\n                  !permissionForm.get('name').valid &&\n                  permissionForm.get('name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter permission name</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"display_name\">Display Name</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"display_name\"\n                placeholder=\"Enter display name\"\n                formControlName=\"display_name\"\n              />\n              <i\n                *ngIf=\"\n                  !permissionForm.get('display_name').valid &&\n                  permissionForm.get('display_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter display name</i\n              >\n            </div>\n\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"description\">Description</label>\n              <textarea\n                class=\"form-control \"\n                placeholder=\"Optional\"\n                name=\"description\"\n                id=\"description\"\n                cols=\"30\"\n                rows=\"5\"\n                formControlName=\"description\"\n              >\n              </textarea>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/permission/permission-form/permission-form.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/views/master/permission/permission-form/permission-form.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9wZXJtaXNzaW9uL3Blcm1pc3Npb24tZm9ybS9wZXJtaXNzaW9uLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/permission/permission-form/permission-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/master/permission/permission-form/permission-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PermissionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionFormComponent", function() { return PermissionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/permission.service */ "./src/app/shared/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PermissionFormComponent = /** @class */ (function () {
    function PermissionFormComponent(fb, toastr, router, permissionService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.permissionService = permissionService;
        this.activatedRoute = activatedRoute;
    }
    PermissionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.permissionForm = this.fb.group({
            id: [""],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            display_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: []
        });
        this.permissionService
            .showPermission(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.permissionForm.setValue({
                id: data["data"].id,
                name: data["data"].name,
                display_name: data["data"].display_name,
                description: data["data"].description
            });
        });
    };
    PermissionFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.permissionForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.permissionService
                .updatePermission(this.activatedRoute.snapshot.params["id"], this.permissionForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/permission");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    PermissionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./permission-form.component.html */ "./src/app/views/master/permission/permission-form/permission-form.component.html"),
            styles: [__webpack_require__(/*! ./permission-form.component.scss */ "./src/app/views/master/permission/permission-form/permission-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PermissionFormComponent);
    return PermissionFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/permission/permission-list/permission-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/views/master/permission/permission-list/permission-list.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL3Blcm1pc3Npb24vcGVybWlzc2lvbi1saXN0L3Blcm1pc3Npb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL3Blcm1pc3Npb24vcGVybWlzc2lvbi1saXN0L3Blcm1pc3Npb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/permission/permission-list/permission-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/views/master/permission/permission-list/permission-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Permission</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a href=\"#\" [routerLink]=\"['permission-create']\" class=\"btn btn-primary btn-rounded\">\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Name</th>\n                      <th>Display Name</th>\n                      <th>Description</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let permission of permissions\">\n                      <td>{{ permission.name }}</td>\n                      <td>{{ permission.display_name }}</td>\n                      <td>{{ permission.description }}</td>\n                      <td>\n                        <a href=\"#\" [routerLink]=\"['permission-edit/', permission.id]\" class=\"btn btn-sm btn-warning mr-2\" title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\">\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"confirm(modalConfirm, permission.id)\">\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Permission deletion\n                            </h4>\n                            <button type=\"button\" triggers=\"mouseenter:mouseleave\" title=\"Show\" class=\"close\"\n                              aria-label=\"Close button\" aria-describedby=\"modal-title\" (click)=\"modal.dismiss('Cross click')\">\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong>Are you sure you want to delete\n                                <span class=\"text-primary\">\"{{ permission.name }}\"</span>\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this role\n                              will be permanently deleted.\n                              <span class=\"text-danger\">This operation can not be undone.</span>\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded\" (click)=\"modal.dismiss('cancel')\">\n                              Cancel\n                            </button>\n                            <button type=\"button\" ngbAutofocus class=\"btn btn-danger btn-rounded\" (click)=\"modal.close('Ok')\">\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/master/permission/permission-list/permission-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/master/permission/permission-list/permission-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PermissionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionListComponent", function() { return PermissionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_permission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/permission.service */ "./src/app/shared/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PermissionListComponent = /** @class */ (function () {
    function PermissionListComponent(permissionService, router, chRef, modalService, toastr) {
        this.permissionService = permissionService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    PermissionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.permissionService.getPermissions().subscribe(function (data) {
            _this.permissions = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    PermissionListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.permissionService.deletePermission(id).subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    location.reload();
                    _this.confirmResut = "Closed with: " + result;
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    PermissionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./permission-list.component.html */ "./src/app/views/master/permission/permission-list/permission-list.component.html"),
            styles: [__webpack_require__(/*! ./permission-list.component.css */ "./src/app/views/master/permission/permission-list/permission-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_permission_service__WEBPACK_IMPORTED_MODULE_8__["PermissionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], PermissionListComponent);
    return PermissionListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/personal-trainer/personal-trainer-create/personal-trainer-create.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/master/personal-trainer/personal-trainer-create/personal-trainer-create.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Pricing PT</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Pricing PT</div>\n        <form [formGroup]=\"ptForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"staff_id\">Name</label>\n              <select\n                name=\"staff_id\"\n                id=\"staff_id\"\n                class=\"form-control\"\n                formControlName=\"staff_id\"\n              >\n                <option [ngValue]=\"staff.id\" *ngFor=\"let staff of staffs\">{{\n                  staff.name\n                }}</option>\n              </select>\n              <i\n                *ngIf=\"\n                  !ptForm.get('staff_id').valid &&\n                  ptForm.get('staff_id').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please choose personal trainer</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"session\">Session</label>\n              <select\n                name=\"session\"\n                id=\"session\"\n                class=\"form-control\"\n                formControlName=\"session\"\n              >\n                <option\n                  [ngValue]=\"member_type.session\"\n                  *ngFor=\"let member_type of member_types\"\n                  >{{ member_type.session }}</option\n                >\n              </select>\n              <i\n                *ngIf=\"\n                  !ptForm.get('session').valid && ptForm.get('session').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please choose session</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"quota\">Quota</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"quota\"\n                placeholder=\"Enter quota min 1\"\n                formControlName=\"quota\"\n              />\n              <i\n                *ngIf=\"\n                  !ptForm.get('quota').valid && ptForm.get('quota').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter total quota</i\n              >\n            </div>\n            <!-- <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"remains\">Remains</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"remains\"\n                placeholder=\"Enter remains min 0\"\n                formControlName=\"remains\"\n              />\n              <i\n                *ngIf=\"\n                  !ptForm.get('remains').valid && ptForm.get('remains').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter total remains min 0</i\n              >\n            </div> -->\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"price\">Price</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"price\"\n                placeholder=\"Enter price min 0\"\n                formControlName=\"price\"\n              />\n              <i\n                *ngIf=\"\n                  !ptForm.get('price').valid && ptForm.get('price').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter total price min 0</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/personal-trainer/personal-trainer-create/personal-trainer-create.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/master/personal-trainer/personal-trainer-create/personal-trainer-create.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9wZXJzb25hbC10cmFpbmVyL3BlcnNvbmFsLXRyYWluZXItY3JlYXRlL3BlcnNvbmFsLXRyYWluZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/personal-trainer/personal-trainer-create/personal-trainer-create.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/master/personal-trainer/personal-trainer-create/personal-trainer-create.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: PersonalTrainerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalTrainerCreateComponent", function() { return PersonalTrainerCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_personaltrainer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/personaltrainer.service */ "./src/app/shared/services/personaltrainer.service.ts");
/* harmony import */ var src_app_shared_services_staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/staff.service */ "./src/app/shared/services/staff.service.ts");
/* harmony import */ var src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/member-type.service */ "./src/app/shared/services/member-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PersonalTrainerCreateComponent = /** @class */ (function () {
    function PersonalTrainerCreateComponent(fb, toastr, router, personalTrainerService, staffService, memberTypeService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.personalTrainerService = personalTrainerService;
        this.staffService = staffService;
        this.memberTypeService = memberTypeService;
    }
    PersonalTrainerCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ptForm = this.fb.group({
            id: [""],
            staff_id: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            quota: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            session: [10, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.memberTypeService.memberTypePt().subscribe(function (data) {
            _this.member_types = data["data"];
        });
        this.staffService.getStaffPt().subscribe(function (data) {
            _this.staffs = data["data"];
        });
    };
    PersonalTrainerCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.ptForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.personalTrainerService
                .createPersonalTrainer(this.ptForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/pricing-pt");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    PersonalTrainerCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./personal-trainer-create.component.html */ "./src/app/views/master/personal-trainer/personal-trainer-create/personal-trainer-create.component.html"),
            styles: [__webpack_require__(/*! ./personal-trainer-create.component.scss */ "./src/app/views/master/personal-trainer/personal-trainer-create/personal-trainer-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_personaltrainer_service__WEBPACK_IMPORTED_MODULE_4__["PersonaltrainerService"],
            src_app_shared_services_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"],
            src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_6__["MemberTypeService"]])
    ], PersonalTrainerCreateComponent);
    return PersonalTrainerCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/personal-trainer/personal-trainer-form/personal-trainer-form.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/master/personal-trainer/personal-trainer-form/personal-trainer-form.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Pricing PT</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Pricing PT</div>\n        <form [formGroup]=\"ptForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"name\">Name</label>\n              <input\n                readonly\n                name=\"name\"\n                id=\"name\"\n                class=\"form-control \"\n                formControlName=\"name\"\n              />\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"session\">Session</label>\n              <select\n                name=\"session\"\n                id=\"session\"\n                class=\"form-control\"\n                formControlName=\"session\"\n              >\n                <option\n                  [ngValue]=\"member_type.session\"\n                  *ngFor=\"let member_type of member_types\"\n                  >{{ member_type.session }}</option\n                >\n              </select>\n              <i\n                *ngIf=\"\n                  !ptForm.get('session').valid && ptForm.get('session').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please choose session</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"quota\">Quota</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"quota\"\n                placeholder=\"Enter quota min 1\"\n                formControlName=\"quota\"\n              />\n              <i\n                *ngIf=\"\n                  !ptForm.get('quota').valid && ptForm.get('quota').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter total quota</i\n              >\n            </div>\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"remains\">Remains</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"remains\"\n                placeholder=\"Enter remains min 0\"\n                formControlName=\"remains\"\n              />\n              <i\n                *ngIf=\"\n                  !ptForm.get('remains').valid && ptForm.get('remains').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter total remains min 0</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"price\">Price</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"price\"\n                placeholder=\"Enter price min 0\"\n                formControlName=\"price\"\n              />\n              <i\n                *ngIf=\"\n                  !ptForm.get('price').valid && ptForm.get('price').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter total price min 0</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/personal-trainer/personal-trainer-form/personal-trainer-form.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/master/personal-trainer/personal-trainer-form/personal-trainer-form.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9wZXJzb25hbC10cmFpbmVyL3BlcnNvbmFsLXRyYWluZXItZm9ybS9wZXJzb25hbC10cmFpbmVyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/personal-trainer/personal-trainer-form/personal-trainer-form.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/master/personal-trainer/personal-trainer-form/personal-trainer-form.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: PersonalTrainerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalTrainerFormComponent", function() { return PersonalTrainerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_personaltrainer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/personaltrainer.service */ "./src/app/shared/services/personaltrainer.service.ts");
/* harmony import */ var src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/member-type.service */ "./src/app/shared/services/member-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonalTrainerFormComponent = /** @class */ (function () {
    function PersonalTrainerFormComponent(fb, toastr, router, activatedRoute, personalTrainerService, memberTypeService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.personalTrainerService = personalTrainerService;
        this.memberTypeService = memberTypeService;
    }
    PersonalTrainerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ptForm = this.fb.group({
            id: [""],
            name: [],
            quota: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remains: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            session: [10, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.personalTrainerService
            .showPersonalTrainer(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            console.log(data["data"]);
            _this.ptForm.setValue({
                id: data["data"].id,
                name: data["data"].name,
                quota: data["data"].quota,
                remains: data["data"].remains,
                price: data["data"].price,
                session: data["data"].session
            });
        });
        this.memberTypeService.memberTypePt().subscribe(function (data) {
            _this.member_types = data["data"];
        });
    };
    PersonalTrainerFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.ptForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.personalTrainerService
                .updatePersonalTrainer(this.activatedRoute.snapshot.params["id"], this.ptForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/pricing-pt");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    PersonalTrainerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./personal-trainer-form.component.html */ "./src/app/views/master/personal-trainer/personal-trainer-form/personal-trainer-form.component.html"),
            styles: [__webpack_require__(/*! ./personal-trainer-form.component.scss */ "./src/app/views/master/personal-trainer/personal-trainer-form/personal-trainer-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_shared_services_personaltrainer_service__WEBPACK_IMPORTED_MODULE_4__["PersonaltrainerService"],
            src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_5__["MemberTypeService"]])
    ], PersonalTrainerFormComponent);
    return PersonalTrainerFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/personal-trainer/personal-trainer-list/personal-trainer-list.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/master/personal-trainer/personal-trainer-list/personal-trainer-list.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL3BlcnNvbmFsLXRyYWluZXIvcGVyc29uYWwtdHJhaW5lci1saXN0L3BlcnNvbmFsLXRyYWluZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL3BlcnNvbmFsLXRyYWluZXIvcGVyc29uYWwtdHJhaW5lci1saXN0L3BlcnNvbmFsLXRyYWluZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/personal-trainer/personal-trainer-list/personal-trainer-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/master/personal-trainer/personal-trainer-list/personal-trainer-list.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Pricing PT</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['pricing-pt-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Name</th>\n                      <th>Quota</th>\n                      <th>Remains</th>\n                      <th>Price</th>\n                      <th>Status</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let personaltrainer of personaltrainers\">\n                      <td>{{ personaltrainer.name }}</td>\n                      <td>{{ personaltrainer.quota }}</td>\n                      <td>{{ personaltrainer.remains }}</td>\n                      <td>Rp. {{ personaltrainer.price }}</td>\n                      <td>{{ personaltrainer.state }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"[\n                            'pricing-pt-edit/',\n                            personaltrainer.id\n                          ]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, personaltrainer.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Personal Trainer deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete\n                                <span class=\"text-primary\"\n                                  >\"{{ personaltrainer.name }}\"</span\n                                >\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this role will be\n                              permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/personal-trainer/personal-trainer-list/personal-trainer-list.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/master/personal-trainer/personal-trainer-list/personal-trainer-list.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: PersonalTrainerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalTrainerListComponent", function() { return PersonalTrainerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_personaltrainer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/personaltrainer.service */ "./src/app/shared/services/personaltrainer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PersonalTrainerListComponent = /** @class */ (function () {
    function PersonalTrainerListComponent(personalTrainerService, router, chRef, modalService, toastr) {
        this.personalTrainerService = personalTrainerService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    PersonalTrainerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personalTrainerService.getPersonalTrainers().subscribe(function (data) {
            _this.personaltrainers = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    PersonalTrainerListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.personalTrainerService
                .deletePersonalTrainer(id)
                .subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    PersonalTrainerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./personal-trainer-list.component.html */ "./src/app/views/master/personal-trainer/personal-trainer-list/personal-trainer-list.component.html"),
            styles: [__webpack_require__(/*! ./personal-trainer-list.component.css */ "./src/app/views/master/personal-trainer/personal-trainer-list/personal-trainer-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_personaltrainer_service__WEBPACK_IMPORTED_MODULE_8__["PersonaltrainerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], PersonalTrainerListComponent);
    return PersonalTrainerListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/position/position-create/position-create.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/views/master/position/position-create/position-create.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Position</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Position</div>\n        <form [formGroup]=\"positionForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"position_name\">Position</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"position_name\"\n                placeholder=\"Enter Position \"\n                formControlName=\"position_name\"\n              />\n              <i\n                *ngIf=\"\n                  !positionForm.get('position_name').valid &&\n                  positionForm.get('position_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter Position name</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/position/position-create/position-create.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/master/position/position-create/position-create.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9wb3NpdGlvbi9wb3NpdGlvbi1jcmVhdGUvcG9zaXRpb24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/position/position-create/position-create.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/master/position/position-create/position-create.component.ts ***!
  \************************************************************************************/
/*! exports provided: PositionCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionCreateComponent", function() { return PositionCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/position.service */ "./src/app/shared/services/position.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PositionCreateComponent = /** @class */ (function () {
    function PositionCreateComponent(fb, toastr, router, positionService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.positionService = positionService;
        this.activatedRoute = activatedRoute;
    }
    PositionCreateComponent.prototype.ngOnInit = function () {
        this.positionForm = this.fb.group({
            position_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    PositionCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.positionForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.positionService
                .createPosition(this.positionForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/position");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    PositionCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./position-create.component.html */ "./src/app/views/master/position/position-create/position-create.component.html"),
            styles: [__webpack_require__(/*! ./position-create.component.scss */ "./src/app/views/master/position/position-create/position-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_position_service__WEBPACK_IMPORTED_MODULE_4__["PositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PositionCreateComponent);
    return PositionCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/position/position-form/position-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/master/position/position-form/position-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Position</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Position</div>\n        <form [formGroup]=\"positionForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"position_name\">Position</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"position_name\"\n                placeholder=\"Enter Position \"\n                formControlName=\"position_name\"\n              />\n              <i\n                *ngIf=\"\n                  !positionForm.get('position_name').valid &&\n                  positionForm.get('position_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter Position name</i\n              >\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/position/position-form/position-form.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/views/master/position/position-form/position-form.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9wb3NpdGlvbi9wb3NpdGlvbi1mb3JtL3Bvc2l0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/position/position-form/position-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/master/position/position-form/position-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: PositionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionFormComponent", function() { return PositionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/position.service */ "./src/app/shared/services/position.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PositionFormComponent = /** @class */ (function () {
    function PositionFormComponent(fb, toastr, router, positionService, activatedRoute) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.positionService = positionService;
        this.activatedRoute = activatedRoute;
    }
    PositionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.positionForm = this.fb.group({
            position_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.positionService
            .showPosition(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.positionForm.setValue({
                position_name: data["data"].position_name
            });
        });
    };
    PositionFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.positionForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.positionService
                .updatePosition(this.activatedRoute.snapshot.params["id"], this.positionForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/position");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    PositionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./position-form.component.html */ "./src/app/views/master/position/position-form/position-form.component.html"),
            styles: [__webpack_require__(/*! ./position-form.component.scss */ "./src/app/views/master/position/position-form/position-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_position_service__WEBPACK_IMPORTED_MODULE_4__["PositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PositionFormComponent);
    return PositionFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/position/position-list/position-list.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/views/master/position/position-list/position-list.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL3Bvc2l0aW9uL3Bvc2l0aW9uLWxpc3QvcG9zaXRpb24tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL3Bvc2l0aW9uL3Bvc2l0aW9uLWxpc3QvcG9zaXRpb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/position/position-list/position-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/master/position/position-list/position-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Position</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a href=\"#\" [routerLink]=\"['position-create']\" class=\"btn btn-primary btn-rounded\">\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Position</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let position of positions\">\n                      <td>{{ position.position_name }}</td>\n                      <td>\n                        <a href=\"#\" [routerLink]=\"[\n                            'position-edit/',\n                            position.id\n                          ]\"\n                          class=\"btn btn-sm btn-warning mr-2\" title=\"Edit\" triggers=\"mouseenter:mouseleave\">\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button class=\"btn btn-sm btn-danger\" (click)=\"confirm(modalConfirm, position.id)\">\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Position deletion\n                            </h4>\n                            <button type=\"button\" triggers=\"mouseenter:mouseleave\" title=\"Show\" class=\"close\"\n                              aria-label=\"Close button\" aria-describedby=\"modal-title\" (click)=\"modal.dismiss('Cross click')\">\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong>Are you sure you want to delete\n                                <span class=\"text-primary\">\"{{ position.position_name }}\"</span>\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this Position\n                              will be permanently deleted.\n                              <span class=\"text-danger\">This operation can not be undone.</span>\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded\" (click)=\"modal.dismiss('cancel')\">\n                              Cancel\n                            </button>\n                            <button type=\"button\" ngbAutofocus class=\"btn btn-danger btn-rounded\" (click)=\"modal.close('Ok')\">\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/master/position/position-list/position-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/master/position/position-list/position-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: PositionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionListComponent", function() { return PositionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_position_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/position.service */ "./src/app/shared/services/position.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PositionListComponent = /** @class */ (function () {
    function PositionListComponent(positionService, router, chRef, modalService, toastr) {
        this.positionService = positionService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    PositionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.positionService.getPositions().subscribe(function (data) {
            _this.positions = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    PositionListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.positionService.deletePosition(id).subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    PositionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./position-list.component.html */ "./src/app/views/master/position/position-list/position-list.component.html"),
            styles: [__webpack_require__(/*! ./position-list.component.css */ "./src/app/views/master/position/position-list/position-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_position_service__WEBPACK_IMPORTED_MODULE_8__["PositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], PositionListComponent);
    return PositionListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/price/price-create/price-create.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/views/master/price/price-create/price-create.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Pricing - NON PT</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Pricing - NON PT</div>\n        <form [formGroup]=\"priceForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"payment_type_id\">Payment Type</label>\n              <select\n                name=\"payment_type_id\"\n                id=\"payment_type_id\"\n                class=\"form-control \"\n                formControlName=\"payment_type_id\"\n              >\n                <option\n                  [ngValue]=\"paymenttype.id\"\n                  *ngFor=\"let paymenttype of paymenttypes\"\n                  >{{ paymenttype.payment_type_name }}</option\n                >\n              </select>\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"recuring\">Recuring</label>\n              <select\n                name=\"recuring\"\n                id=\"recuring\"\n                class=\"form-control \"\n                formControlName=\"recuring\"\n              >\n                <option value=\"1\">YES</option>\n                <option value=\"0\">NO</option>\n              </select>\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"member_type_id\">Member Type</label>\n              <select\n                name=\"member_type_id\"\n                id=\"member_type_id\"\n                class=\"form-control \"\n                formControlName=\"member_type_id\"\n              >\n                <option\n                  [ngValue]=\"membertype.id\"\n                  *ngFor=\"let membertype of membertypes\"\n                  >{{ membertype.member_type_name }}</option\n                >\n              </select>\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"price\">Price</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"price\"\n                placeholder=\"Enter price\"\n                formControlName=\"price\"\n              />\n              <i\n                *ngIf=\"\n                  !priceForm.get('price').valid &&\n                  priceForm.get('price').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter price</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"periode\">Periode</label>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <input\n                    id=\"start_date\"\n                    class=\"form-control\"\n                    placeholder=\"yyyy-mm-dd\"\n                    name=\"start_date\"\n                    ngbDatepicker\n                    #start_date=\"ngbDatepicker\"\n                    formControlName=\"start_date\"\n                  />\n                  <div class=\"input-group-append\">\n                    <button\n                      class=\"btn btn-secondary\"\n                      (click)=\"start_date.toggle()\"\n                      type=\"button\"\n                    >\n                      <i class=\"icon-regular i-Calendar-4\"></i>\n                    </button>\n                  </div>\n                </div>\n                <div class=\"col-md-1\">\n                  -\n                </div>\n                <div class=\"col-md-5\">\n                  <input\n                    id=\"end_date\"\n                    class=\"form-control\"\n                    placeholder=\"yyyy-mm-dd\"\n                    name=\"end_date\"\n                    ngbDatepicker\n                    #end_date=\"ngbDatepicker\"\n                    formControlName=\"end_date\"\n                  />\n                  <div class=\"input-group-append\">\n                    <button\n                      class=\"btn btn-secondary\"\n                      (click)=\"end_date.toggle()\"\n                      type=\"button\"\n                    >\n                      <i class=\"icon-regular i-Calendar-4\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/price/price-create/price-create.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/views/master/price/price-create/price-create.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9wcmljZS9wcmljZS1jcmVhdGUvcHJpY2UtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/price/price-create/price-create.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/master/price/price-create/price-create.component.ts ***!
  \***************************************************************************/
/*! exports provided: PriceCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceCreateComponent", function() { return PriceCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_price_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/price.service */ "./src/app/shared/services/price.service.ts");
/* harmony import */ var src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/member-type.service */ "./src/app/shared/services/member-type.service.ts");
/* harmony import */ var src_app_shared_services_payment_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/payment-type.service */ "./src/app/shared/services/payment-type.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PriceCreateComponent = /** @class */ (function () {
    function PriceCreateComponent(fb, toastr, router, activatedRoute, paymentTypeService, priceService, memberTypeService, parserFormatter) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.paymentTypeService = paymentTypeService;
        this.priceService = priceService;
        this.memberTypeService = memberTypeService;
        this.parserFormatter = parserFormatter;
    }
    PriceCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.priceForm = this.fb.group({
            payment_type_id: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            member_type_id: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            recuring: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            start_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            end_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.memberTypeService.getMemberTypes().subscribe(function (data) {
            _this.membertypes = data["data"];
        });
        this.paymentTypeService.getPaymentTypes().subscribe(function (data) {
            _this.paymenttypes = data["data"];
        });
    };
    PriceCreateComponent.prototype.submit = function () {
        var _this = this;
        var start_date = this.priceForm.controls["start_date"].value;
        var end_date = this.priceForm.controls["end_date"].value;
        var payment_type_id = this.priceForm.controls["payment_type_id"].value;
        var member_type_id = this.priceForm.controls["member_type_id"].value;
        var price = this.priceForm.controls["price"].value;
        var recuring = this.priceForm.controls["recuring"].value;
        var formValues = this.priceForm.value;
        formValues["start_date"] = this.parserFormatter.format(start_date);
        formValues["end_date"] = this.parserFormatter.format(end_date);
        formValues["member_type_id"] = member_type_id;
        formValues["payment_type_id"] = payment_type_id;
        formValues["price"] = price;
        formValues["recuring"] = recuring;
        if (this.priceForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.priceService.createPrice(formValues).subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/pricing-non-pt");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    PriceCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./price-create.component.html */ "./src/app/views/master/price/price-create/price-create.component.html"),
            styles: [__webpack_require__(/*! ./price-create.component.scss */ "./src/app/views/master/price/price-create/price-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_shared_services_payment_type_service__WEBPACK_IMPORTED_MODULE_6__["PaymentTypeService"],
            src_app_shared_services_price_service__WEBPACK_IMPORTED_MODULE_4__["PriceService"],
            src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_5__["MemberTypeService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDateParserFormatter"]])
    ], PriceCreateComponent);
    return PriceCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/price/price-form/price-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/master/price/price-form/price-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Pricing - NON PT</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Pricing - NON PT</div>\n        <form [formGroup]=\"priceForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"payment_type_id\">Payment Type</label>\n              <select\n                name=\"payment_type_id\"\n                id=\"payment_type_id\"\n                class=\"form-control \"\n                formControlName=\"payment_type_id\"\n              >\n                <option\n                  [ngValue]=\"paymenttype.id\"\n                  *ngFor=\"let paymenttype of paymenttypes\"\n                  >{{ paymenttype.payment_type_name }}</option\n                >\n              </select>\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"recuring\">Recuring</label>\n              <select\n                name=\"recuring\"\n                id=\"recuring\"\n                class=\"form-control \"\n                formControlName=\"recuring\"\n              >\n                <option value=\"1\">YES</option>\n                <option value=\"0\">NO</option>\n              </select>\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"member_type_id\">Member Type</label>\n              <select\n                name=\"member_type_id\"\n                id=\"member_type_id\"\n                class=\"form-control \"\n                formControlName=\"member_type_id\"\n              >\n                <option\n                  [ngValue]=\"membertype.id\"\n                  *ngFor=\"let membertype of membertypes\"\n                  >{{ membertype.member_type_name }}</option\n                >\n              </select>\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"price\">Price</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"price\"\n                placeholder=\"Enter price\"\n                formControlName=\"price\"\n              />\n              <i\n                *ngIf=\"\n                  !priceForm.get('price').valid &&\n                  priceForm.get('price').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter price</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"periode\">Periode</label>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <input\n                    type=\"text\"\n                    id=\"start_date\"\n                    class=\"form-control\"\n                    placeholder=\"yyyy-mm-dd\"\n                    name=\"start_date\"\n                    formControlName=\"start_date\"\n                  />\n                  <!-- <div class=\"input-group-append\">\n                    <button\n                      class=\"btn btn-secondary\"\n                      (click)=\"start_date.toggle()\"\n                      type=\"button\"\n                    >\n                      <i class=\"icon-regular i-Calendar-4\"></i>\n                    </button>\n                  </div> -->\n                </div>\n                <div class=\"col-md-1\">\n                  -\n                </div>\n                <div class=\"col-md-5\">\n                  <input\n                    type=\"text\"\n                    id=\"end_date\"\n                    class=\"form-control\"\n                    placeholder=\"yyyy-mm-dd\"\n                    name=\"end_date\"\n                    formControlName=\"end_date\"\n                  />\n                  <!-- <div class=\"input-group-append\">\n                    <button\n                      class=\"btn btn-secondary\"\n                      (click)=\"end_date.toggle()\"\n                      type=\"button\"\n                    >\n                      <i class=\"icon-regular i-Calendar-4\"></i>\n                    </button>\n                  </div> -->\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/price/price-form/price-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/master/price/price-form/price-form.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9wcmljZS9wcmljZS1mb3JtL3ByaWNlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/price/price-form/price-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/master/price/price-form/price-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: PriceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceFormComponent", function() { return PriceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_price_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/price.service */ "./src/app/shared/services/price.service.ts");
/* harmony import */ var src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/member-type.service */ "./src/app/shared/services/member-type.service.ts");
/* harmony import */ var src_app_shared_services_payment_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/payment-type.service */ "./src/app/shared/services/payment-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PriceFormComponent = /** @class */ (function () {
    function PriceFormComponent(fb, toastr, router, activatedRoute, paymentTypeService, priceService, memberTypeService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.paymentTypeService = paymentTypeService;
        this.priceService = priceService;
        this.memberTypeService = memberTypeService;
    }
    PriceFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.priceForm = this.fb.group({
            payment_type_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            member_type_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            recuring: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            start_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            end_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.memberTypeService.getMemberTypes().subscribe(function (data) {
            _this.membertypes = data["data"];
        });
        this.paymentTypeService.getPaymentTypes().subscribe(function (data) {
            _this.paymenttypes = data["data"];
        });
        this.priceService
            .showPrice(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.priceForm.setValue({
                payment_type_id: data["data"].payment_type_id,
                member_type_id: data["data"].member_type_id,
                price: data["data"].price,
                recuring: data["data"].recuring,
                start_date: data["data"].start_date,
                end_date: data["data"].end_date
            });
        });
    };
    PriceFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.priceForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.priceService
                .updatePrice(this.activatedRoute.snapshot.params["id"], this.priceForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/pricing-non-pt");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    PriceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./price-form.component.html */ "./src/app/views/master/price/price-form/price-form.component.html"),
            styles: [__webpack_require__(/*! ./price-form.component.scss */ "./src/app/views/master/price/price-form/price-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_shared_services_payment_type_service__WEBPACK_IMPORTED_MODULE_6__["PaymentTypeService"],
            src_app_shared_services_price_service__WEBPACK_IMPORTED_MODULE_4__["PriceService"],
            src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_5__["MemberTypeService"]])
    ], PriceFormComponent);
    return PriceFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/price/price-list/price-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/master/price/price-list/price-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL3ByaWNlL3ByaWNlLWxpc3QvcHJpY2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL3ByaWNlL3ByaWNlLWxpc3QvcHJpY2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/price/price-list/price-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/master/price/price-list/price-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Pricing - NON PT</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['price-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Payment Type</th>\n                      <th>Member Type</th>\n                      <th>recuring</th>\n                      <th>Price</th>\n                      <th>Period</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let price of prices\">\n                      <td>{{ price.payment_type_name }}</td>\n                      <td>{{ price.member_type_name }}</td>\n                      <td>{{ price.recuring }}</td>\n                      <td>Rp. {{ price.price }}</td>\n                      <td>{{ price.start_date }} - {{ price.end_date }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"['price-edit/', price.id]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, price.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Price deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete this price?\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this price will be\n                              permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/price/price-list/price-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/master/price/price-list/price-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: PriceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceListComponent", function() { return PriceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_price_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/price.service */ "./src/app/shared/services/price.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PriceListComponent = /** @class */ (function () {
    function PriceListComponent(priceService, router, chRef, modalService, toastr) {
        this.priceService = priceService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    PriceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.priceService.getPrices().subscribe(function (data) {
            _this.prices = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_6__("#mytable").DataTable();
        });
    };
    PriceListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.priceService.deletePrice(id).subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    PriceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./price-list.component.html */ "./src/app/views/master/price/price-list/price-list.component.html"),
            styles: [__webpack_require__(/*! ./price-list.component.css */ "./src/app/views/master/price/price-list/price-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_price_service__WEBPACK_IMPORTED_MODULE_1__["PriceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], PriceListComponent);
    return PriceListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/role/role-create/role-create.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/master/role/role-create/role-create.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Role</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Role</div>\n        <form [formGroup]=\"roleForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"name\">Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"name\"\n                placeholder=\"Enter role name\"\n                formControlName=\"name\"\n              />\n              <i\n                *ngIf=\"\n                  !roleForm.get('name').valid && roleForm.get('name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter role name</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"display_name\">Display Name</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"display_name\"\n                placeholder=\"Enter display name\"\n                formControlName=\"display_name\"\n              />\n              <i\n                *ngIf=\"\n                  !roleForm.get('display_name').valid &&\n                  roleForm.get('display_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter display name</i\n              >\n            </div>\n\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"description\">Description</label>\n              <textarea\n                class=\"form-control \"\n                placeholder=\"Optional\"\n                name=\"description\"\n                id=\"description\"\n                cols=\"30\"\n                rows=\"5\"\n                formControlName=\"description\"\n              >\n              </textarea>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/role/role-create/role-create.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/master/role/role-create/role-create.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9yb2xlL3JvbGUtY3JlYXRlL3JvbGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/role/role-create/role-create.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/master/role/role-create/role-create.component.ts ***!
  \************************************************************************/
/*! exports provided: RoleCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleCreateComponent", function() { return RoleCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/role.service */ "./src/app/shared/services/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoleCreateComponent = /** @class */ (function () {
    function RoleCreateComponent(fb, toastr, router, roleService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.roleService = roleService;
    }
    RoleCreateComponent.prototype.ngOnInit = function () {
        this.roleForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            display_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: []
        });
    };
    RoleCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.roleForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.roleService.createRole(this.roleForm.value).subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/role");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    RoleCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./role-create.component.html */ "./src/app/views/master/role/role-create/role-create.component.html"),
            styles: [__webpack_require__(/*! ./role-create.component.scss */ "./src/app/views/master/role/role-create/role-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]])
    ], RoleCreateComponent);
    return RoleCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/role/role-form/role-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/master/role/role-form/role-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Role</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Role</div>\n        <form [formGroup]=\"roleForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"name\">Name</label>\n              <input\n                autofocus\n                type=\"text\"\n                class=\"form-control \"\n                id=\"name\"\n                placeholder=\"Enter role name\"\n                formControlName=\"name\"\n              />\n              <i\n                *ngIf=\"\n                  !roleForm.get('name').valid && roleForm.get('name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter role name</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"display_name\">Display Name</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"display_name\"\n                placeholder=\"Enter display name\"\n                formControlName=\"display_name\"\n              />\n              <i\n                *ngIf=\"\n                  !roleForm.get('display_name').valid &&\n                  roleForm.get('display_name').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter display name</i\n              >\n            </div>\n\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"description\">Description</label>\n              <textarea\n                formControlName=\"description\"\n                class=\"form-control \"\n                placeholder=\"Optional\"\n                name=\"description\"\n                id=\"description\"\n                cols=\"30\"\n                rows=\"5\"\n              >\n              </textarea>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/role/role-form/role-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/master/role/role-form/role-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9yb2xlL3JvbGUtZm9ybS9yb2xlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/role/role-form/role-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/master/role/role-form/role-form.component.ts ***!
  \********************************************************************/
/*! exports provided: RoleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleFormComponent", function() { return RoleFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/role.service */ "./src/app/shared/services/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoleFormComponent = /** @class */ (function () {
    function RoleFormComponent(fb, toastr, router, activatedRoute, roleService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.roleService = roleService;
    }
    RoleFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roleForm = this.fb.group({
            id: [""],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            display_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: []
        });
        this.roleService
            .showRole(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.roleForm.setValue({
                id: data["data"].id,
                name: data["data"].name,
                display_name: data["data"].display_name,
                description: data["data"].description
            });
        });
    };
    RoleFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.roleForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.roleService
                .updateRole(this.activatedRoute.snapshot.params["id"], this.roleForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/role");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    RoleFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./role-form.component.html */ "./src/app/views/master/role/role-form/role-form.component.html"),
            styles: [__webpack_require__(/*! ./role-form.component.scss */ "./src/app/views/master/role/role-form/role-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]])
    ], RoleFormComponent);
    return RoleFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/role/role-list/role-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/master/role/role-list/role-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL3JvbGUvcm9sZS1saXN0L3JvbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL3JvbGUvcm9sZS1saXN0L3JvbGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/role/role-list/role-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/master/role/role-list/role-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Role</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['role-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Name</th>\n                      <th>Display Name</th>\n                      <th>Description</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let role of roles\">\n                      <td>{{ role.name }}</td>\n                      <td>{{ role.display_name }}</td>\n                      <td>{{ role.description }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"['role-edit/', role.id]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"['role-permission/', role.id]\"\n                          class=\"btn btn-sm btn-success mr-2\"\n                          title=\"Set Permission\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Information\"></i>\n                        </a>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, role.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Role deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete\n                                <span class=\"text-primary\"\n                                  >\"{{ role.name }}\"</span\n                                >\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this role will be\n                              permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/role/role-list/role-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/master/role/role-list/role-list.component.ts ***!
  \********************************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/role.service */ "./src/app/shared/services/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RoleListComponent = /** @class */ (function () {
    function RoleListComponent(roleService, router, chRef, modalService, toastr) {
        this.roleService = roleService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    RoleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roleService.getRoles().subscribe(function (data) {
            _this.roles = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    // showPermission(id) {
    //   this.permissionService.showPermissionRole(id).subscribe((data: any) => {
    //     if (data["status"] == "200") {
    //       this.detail = data["data"];
    //     }
    //   });
    // }
    RoleListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.roleService.deleteRole(id).subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    RoleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/views/master/role/role-list/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role-list.component.css */ "./src/app/views/master/role/role-list/role-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_8__["RoleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], RoleListComponent);
    return RoleListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/role/role-permission/role-permission.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/views/master/role/role-permission/role-permission.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL3JvbGUvcm9sZS1wZXJtaXNzaW9uL3JvbGUtcGVybWlzc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL3JvbGUvcm9sZS1wZXJtaXNzaW9uL3JvbGUtcGVybWlzc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/role/role-permission/role-permission.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/master/role/role-permission/role-permission.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Permission</h1>\n    <ul>\n      <li>{{ role }}</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"mt-4\">\n        <form (ngSubmit)=\"submit()\">\n          <div class=\"card o-hidden\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"table table-responsive\">\n                    <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                      <thead class=\"text-center\">\n                        <tr>\n                          <th>Permission Name</th>\n                          <th>Display Name</th>\n                          <th>Description</th>\n                          <th>\n                            <input type=\"checkbox\" class=\"selectall\" />\n                            <span class=\"checkmark\"></span>\n                          </th>\n                        </tr>\n                      </thead>\n                      <tbody class=\"text-center\">\n                        <tr *ngFor=\"let list of permissions\">\n                          <td>{{ list.name }}</td>\n                          <td>{{ list.display_name }}</td>\n                          <td>{{ list.description }}</td>\n                          <td>\n                            <input\n                              type=\"checkbox\"\n                              name=\"permission\"\n                              value=\"{{ list.id }}\"\n                            />\n                            <span class=\"checkmark\"></span>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row mt-4\">\n            <div class=\"col-12 text-right\">\n              <input type=\"hidden\" class=\"permission-final\" value=\"\" />\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/role/role-permission/role-permission.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/master/role/role-permission/role-permission.component.ts ***!
  \********************************************************************************/
/*! exports provided: RolePermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePermissionComponent", function() { return RolePermissionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/role.service */ "./src/app/shared/services/role.service.ts");
/* harmony import */ var src_app_shared_services_permission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/permission.service */ "./src/app/shared/services/permission.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RolePermissionComponent = /** @class */ (function () {
    function RolePermissionComponent(roleService, permissionService, router, chRef, toastr, activatedRoute) {
        this.roleService = roleService;
        this.permissionService = permissionService;
        this.router = router;
        this.chRef = chRef;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    RolePermissionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roleService
            .getPermissions(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.permissionsRole = data["data"];
        });
        this.permissionService.getPermissions().subscribe(function (data) {
            _this.permissions = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_4__("#mytable").DataTable();
        });
        this.roleService
            .showRole(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.role = data["data"].name;
        });
        //Checbox
        jquery__WEBPACK_IMPORTED_MODULE_4__(".selectall").click(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_4__(this).is(":checked")) {
                jquery__WEBPACK_IMPORTED_MODULE_4__('input[name="permission"]').prop("checked", true);
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__('input[name="permission"]').prop("checked", false);
            }
        });
        this.permissionService
            .permission_role(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.getpermissions = data["data"];
            //console.log(this.getpermissions);
            var perms = JSON.parse(JSON.stringify(_this.getpermissions));
            jquery__WEBPACK_IMPORTED_MODULE_4__["each"](perms, function (i, item) {
                jquery__WEBPACK_IMPORTED_MODULE_4__("input[name='permission'][value=" + item.permission_id + "]").prop("checked", true);
            });
        });
    };
    RolePermissionComponent.prototype.submit = function () {
        var _this = this;
        var dataPermission = [];
        var permission;
        jquery__WEBPACK_IMPORTED_MODULE_4__["each"](jquery__WEBPACK_IMPORTED_MODULE_4__("input[name='permission']:checked"), function () {
            dataPermission.push(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val());
        });
        jquery__WEBPACK_IMPORTED_MODULE_4__(".permission-final").val(dataPermission.join(","));
        permission = "[" + dataPermission.join(",") + "]";
        this.loading = true;
        this.permissionService
            .createPermissionRole(this.activatedRoute.snapshot.params["id"], permission)
            .subscribe(function (res) {
            setTimeout(function () {
                _this.loading = false;
                if (res["status"] === "200") {
                    _this.toastr.success(res["message"], "Success!", {
                        progressBar: true
                    });
                    _this.router.navigateByUrl("master/role");
                }
                else {
                    _this.toastr.error(res["message"], "Error!", {
                        progressBar: true
                    });
                }
            }, 3000);
        });
    };
    RolePermissionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./role-permission.component.html */ "./src/app/views/master/role/role-permission/role-permission.component.html"),
            styles: [__webpack_require__(/*! ./role-permission.component.css */ "./src/app/views/master/role/role-permission/role-permission.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"],
            src_app_shared_services_permission_service__WEBPACK_IMPORTED_MODULE_8__["PermissionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RolePermissionComponent);
    return RolePermissionComponent;
}());



/***/ }),

/***/ "./src/app/views/master/schedule/schedule-create/schedule-create.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/views/master/schedule/schedule-create/schedule-create.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Schedule</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create Schedule</div>\n        <form [formGroup]=\"scheduleForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"exercise\">Exercise</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"exercise\"\n                placeholder=\"Enter exercise\"\n                formControlName=\"exercise\"\n              />\n              <i\n                *ngIf=\"\n                  !scheduleForm.get('exercise').valid &&\n                  scheduleForm.get('exercise').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter exercise</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"day\">Day</label>\n              <select\n                name=\"day\"\n                id=\"day\"\n                class=\"form-control \"\n                formControlName=\"day\"\n              >\n                <option *ngFor=\"let item of days\" [ngValue]=\"item\">{{\n                  item\n                }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"time\">Time</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"time\"\n                placeholder=\"Enter time : 00:00:00\"\n                formControlName=\"time\"\n              />\n              <i\n                *ngIf=\"\n                  !scheduleForm.get('time').valid &&\n                  scheduleForm.get('time').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter time : 00:00:00</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"periode\">Periode</label>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <div class=\"row\">\n                    <div class=\"col-9 col-md-10\">\n                      <input\n                        id=\"start_date\"\n                        class=\"form-control\"\n                        placeholder=\"yyyy-mm-dd\"\n                        name=\"dp1\"\n                        ngbDatepicker\n                        formControlName=\"start_date\"\n                        #dp1=\"ngbDatepicker\"\n                      />\n                    </div>\n                    <div class=\"col-3 col-md-2\">\n                      <button\n                        class=\"btn btn-secondary\"\n                        (click)=\"dp1.toggle()\"\n                        type=\"button\"\n                      >\n                        <i class=\"icon-regular i-Calendar-4\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-1\">\n                  -\n                </div>\n                <div class=\"col-md-5\">\n                  <div class=\"row\">\n                    <div class=\"col-9 col-md-10\">\n                      <input\n                        id=\"end_date\"\n                        class=\"form-control\"\n                        placeholder=\"yyyy-mm-dd\"\n                        name=\"dp\"\n                        ngbDatepicker\n                        #dp=\"ngbDatepicker\"\n                        formControlName=\"end_date\"\n                      />\n                    </div>\n                    <div class=\"col-3 col-md-2\">\n                      <button\n                        class=\"btn btn-secondary\"\n                        (click)=\"dp.toggle()\"\n                        type=\"button\"\n                      >\n                        <i class=\"icon-regular i-Calendar-4\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"branch_id\">Branch</label>\n              <select\n                name=\"branch_id\"\n                id=\"branch_id\"\n                class=\"form-control \"\n                formControlName=\"branch_id\"\n              >\n                <option *ngFor=\"let item of branches\" [ngValue]=\"item.id\">{{\n                  item.branch_name\n                }}</option>\n              </select>\n            </div>\n\n            <div class=\"container\">\n              <hr />\n              <div class=\"row mb-3\">\n                <div class=\"col-md-12\">\n                  <h4>Coach :</h4>\n                </div>\n                <div class=\"col-md-6 mt-3\" *ngFor=\"let staff of staffs\">\n                  <input\n                    checked\n                    type=\"checkbox\"\n                    name=\"staff\"\n                    value=\"{{ staff.id }}\"\n                  />\n                  <span class=\"ml-3\">{{ staff.name }}</span>\n                  <span class=\"checkmark\"></span>\n                </div>\n                <input type=\"hidden\" class=\"staff-final\" value=\"\" />\n              </div>\n              <hr />\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <h4>Member Type :</h4>\n                </div>\n                <div\n                  class=\"col-md-6 mt-3\"\n                  *ngFor=\"let member_type of member_types\"\n                >\n                  <input\n                    checked\n                    type=\"checkbox\"\n                    name=\"member_type\"\n                    value=\"{{ member_type.id }}\"\n                  />\n                  <span class=\"ml-3\">{{ member_type.member_type_name }}</span>\n                  <span class=\"checkmark\"></span>\n                </div>\n                <input type=\"hidden\" class=\"member_type-final\" value=\"\" />\n              </div>\n              <hr />\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/schedule/schedule-create/schedule-create.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/master/schedule/schedule-create/schedule-create.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9zY2hlZHVsZS9zY2hlZHVsZS1jcmVhdGUvc2NoZWR1bGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/schedule/schedule-create/schedule-create.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/master/schedule/schedule-create/schedule-create.component.ts ***!
  \************************************************************************************/
/*! exports provided: ScheduleCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleCreateComponent", function() { return ScheduleCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/schedule.service */ "./src/app/shared/services/schedule.service.ts");
/* harmony import */ var src_app_shared_services_branch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/branch.service */ "./src/app/shared/services/branch.service.ts");
/* harmony import */ var src_app_shared_services_staff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/staff.service */ "./src/app/shared/services/staff.service.ts");
/* harmony import */ var src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/member-type.service */ "./src/app/shared/services/member-type.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ScheduleCreateComponent = /** @class */ (function () {
    function ScheduleCreateComponent(fb, toastr, router, scheduleService, parserFormatter, branchService, memberTypeService, staffService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.scheduleService = scheduleService;
        this.parserFormatter = parserFormatter;
        this.branchService = branchService;
        this.memberTypeService = memberTypeService;
        this.staffService = staffService;
    }
    ScheduleCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleForm = this.fb.group({
            day: ["Monday", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            time: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            exercise: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            start_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            end_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            branch_id: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.staffService.getStaffCoach().subscribe(function (data) {
            _this.staffs = data["data"];
        });
        this.days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];
        this.memberTypeService.getMemberTypes().subscribe(function (data) {
            _this.member_types = data["data"];
        });
        this.branchService.getBranches().subscribe(function (data) {
            _this.branches = data["data"];
        });
    };
    ScheduleCreateComponent.prototype.submit = function () {
        var _this = this;
        var dataStaff = [];
        var dataMt = [];
        $.each($("input[name='staff']:checked"), function () {
            dataStaff.push($(this).val());
        });
        $(".staff-final").val(dataStaff);
        $.each($("input[name='member_type']:checked"), function () {
            dataMt.push($(this).val());
        });
        $(".member_type-final").val(dataMt);
        var start_date = this.scheduleForm.controls["start_date"].value;
        var end_date = this.scheduleForm.controls["end_date"].value;
        var day = this.scheduleForm.controls["day"].value;
        var time = this.scheduleForm.controls["time"].value;
        var exercise = this.scheduleForm.controls["exercise"].value;
        var branch_id = this.scheduleForm.controls["branch_id"].value;
        var formValues = this.scheduleForm.value;
        formValues["start_date"] = this.parserFormatter.format(start_date);
        formValues["end_date"] = this.parserFormatter.format(end_date);
        formValues["day"] = day;
        formValues["time"] = time;
        formValues["exercise"] = exercise;
        formValues["branch_id"] = branch_id;
        formValues["staff"] = dataStaff;
        formValues["member_types"] = dataMt;
        if (this.scheduleForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.scheduleService.createSchedule(formValues).subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/schedule");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    ScheduleCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./schedule-create.component.html */ "./src/app/views/master/schedule/schedule-create/schedule-create.component.html"),
            styles: [__webpack_require__(/*! ./schedule-create.component.scss */ "./src/app/views/master/schedule/schedule-create/schedule-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_shared_services_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDateParserFormatter"],
            src_app_shared_services_branch_service__WEBPACK_IMPORTED_MODULE_5__["BranchService"],
            src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_7__["MemberTypeService"],
            src_app_shared_services_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"]])
    ], ScheduleCreateComponent);
    return ScheduleCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/schedule/schedule-form/schedule-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/master/schedule/schedule-form/schedule-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Schedule</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update Schedule</div>\n        <form [formGroup]=\"scheduleForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"exercise\">Exercise</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"exercise\"\n                placeholder=\"Enter exercise\"\n                formControlName=\"exercise\"\n              />\n              <i\n                *ngIf=\"\n                  !scheduleForm.get('exercise').valid &&\n                  scheduleForm.get('exercise').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter exercise</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"day\">Day</label>\n              <select\n                name=\"day\"\n                id=\"day\"\n                class=\"form-control \"\n                formControlName=\"day\"\n              >\n                <option *ngFor=\"let item of days\" [ngValue]=\"item\">{{\n                  item\n                }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"time\">Time</label>\n              <input\n                type=\"text\"\n                class=\"form-control \"\n                id=\"time\"\n                placeholder=\"Enter time : 00:00\"\n                formControlName=\"time\"\n              />\n              <i\n                *ngIf=\"\n                  !scheduleForm.get('time').valid &&\n                  scheduleForm.get('time').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter time : 00:00</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"periode\">Periode</label>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <input\n                    type=\"text\"\n                    id=\"start_date\"\n                    class=\"form-control\"\n                    placeholder=\"yyyy-mm-dd\"\n                    name=\"start_date\"\n                    formControlName=\"start_date\"\n                  />\n                  <!-- <div class=\"input-group-append\">\n                    <button\n                      class=\"btn btn-secondary\"\n                      (click)=\"start_date.toggle()\"\n                      type=\"button\"\n                    >\n                      <i class=\"icon-regular i-Calendar-4\"></i>\n                    </button>\n                  </div> -->\n                </div>\n                <div class=\"col-md-1\">\n                  -\n                </div>\n                <div class=\"col-md-5\">\n                  <input\n                    type=\"text\"\n                    id=\"end_date\"\n                    class=\"form-control\"\n                    placeholder=\"yyyy-mm-dd\"\n                    name=\"end_date\"\n                    formControlName=\"end_date\"\n                  />\n                  <!-- <div class=\"input-group-append\">\n                    <button\n                      class=\"btn btn-secondary\"\n                      (click)=\"end_date.toggle()\"\n                      type=\"button\"\n                    >\n                      <i class=\"icon-regular i-Calendar-4\"></i>\n                    </button>\n                  </div> -->\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12 form-group mb-3\">\n              <label for=\"branch_id\">Branch</label>\n              <select\n                name=\"branch_id\"\n                id=\"branch_id\"\n                class=\"form-control \"\n                formControlName=\"branch_id\"\n              >\n                <option *ngFor=\"let item of branches\" [ngValue]=\"item.id\">{{\n                  item.branch_name\n                }}</option>\n              </select>\n            </div>\n\n            <div class=\"container\">\n              <hr />\n              <div class=\"row mb-3\">\n                <div class=\"col-md-12\">\n                  <h4>Coach :</h4>\n                </div>\n                <div class=\"col-md-6 mt-3\" *ngFor=\"let staff of staffs\">\n                  <input type=\"checkbox\" name=\"staff\" value=\"{{ staff.id }}\" />\n                  <span class=\"ml-3\">{{ staff.name }}</span>\n                  <span class=\"checkmark\"></span>\n                </div>\n                <input type=\"hidden\" class=\"staff-final\" value=\"\" />\n              </div>\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <h4>Member Type :</h4>\n                </div>\n                <div\n                  class=\"col-md-6 mt-3\"\n                  *ngFor=\"let member_type of member_types\"\n                >\n                  <input\n                    type=\"checkbox\"\n                    name=\"member_type\"\n                    value=\"{{ member_type.id }}\"\n                  />\n                  <span class=\"ml-3\">{{ member_type.member_type_name }}</span>\n                  <span class=\"checkmark\"></span>\n                </div>\n                <input type=\"hidden\" class=\"member_type-final\" value=\"\" />\n              </div>\n              <hr />\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/schedule/schedule-form/schedule-form.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/views/master/schedule/schedule-form/schedule-form.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci9zY2hlZHVsZS9zY2hlZHVsZS1mb3JtL3NjaGVkdWxlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/schedule/schedule-form/schedule-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/master/schedule/schedule-form/schedule-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: ScheduleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleFormComponent", function() { return ScheduleFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/schedule.service */ "./src/app/shared/services/schedule.service.ts");
/* harmony import */ var src_app_shared_services_staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/staff.service */ "./src/app/shared/services/staff.service.ts");
/* harmony import */ var src_app_shared_services_branch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/branch.service */ "./src/app/shared/services/branch.service.ts");
/* harmony import */ var src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/member-type.service */ "./src/app/shared/services/member-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ScheduleFormComponent = /** @class */ (function () {
    function ScheduleFormComponent(fb, toastr, router, activatedRoute, scheduleService, staffService, memberTypeService, branchService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.scheduleService = scheduleService;
        this.staffService = staffService;
        this.memberTypeService = memberTypeService;
        this.branchService = branchService;
    }
    ScheduleFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleForm = this.fb.group({
            day: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            time: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            exercise: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            start_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            end_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            branch_id: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.memberTypeService.getMemberTypes().subscribe(function (data) {
            _this.member_types = data["data"];
        });
        this.branchService.getBranches().subscribe(function (data) {
            _this.branches = data["data"];
        });
        this.staffService.getStaffCoach().subscribe(function (data) {
            _this.staffs = data["data"];
        });
        this.days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];
        this.scheduleService
            .showCoach(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) { });
        this.scheduleService
            .showSchedule(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.scheduleForm.setValue({
                day: data["data"].day,
                time: data["data"].time,
                exercise: data["data"].exercise,
                start_date: data["data"].start_date,
                end_date: data["data"].end_date,
                branch_id: data["data"].branch_id
            });
            _this.getMt = data["data"].member_type_schedules;
            $.each(_this.getMt, function (i, item) {
                $("input[name='member_type'][value=" + item.member_type_id + "]").prop("checked", true);
            });
            _this.getCoaches = data["data"].group_schedules;
            $.each(_this.getCoaches, function (i, item) {
                $("input[name='staff'][value=" + item.staff_id + "]").prop("checked", true);
            });
        });
    };
    ScheduleFormComponent.prototype.submit = function () {
        var _this = this;
        var dataStaff = [];
        var dataMt = [];
        $.each($("input[name='staff']:checked"), function () {
            dataStaff.push($(this).val());
        });
        $(".staff-final").val(dataStaff);
        $.each($("input[name='member_type']:checked"), function () {
            dataMt.push($(this).val());
        });
        $(".member_type-final").val(dataMt);
        var start_date = this.scheduleForm.controls["start_date"].value;
        var end_date = this.scheduleForm.controls["end_date"].value;
        var day = this.scheduleForm.controls["day"].value;
        var time = this.scheduleForm.controls["time"].value;
        var exercise = this.scheduleForm.controls["exercise"].value;
        var branch_id = this.scheduleForm.controls["branch_id"].value;
        var formValues = this.scheduleForm.value;
        formValues["start_date"] = start_date;
        formValues["end_date"] = end_date;
        formValues["day"] = day;
        formValues["time"] = time;
        formValues["exercise"] = exercise;
        formValues["branch_id"] = branch_id;
        formValues["staff"] = dataStaff;
        formValues["member_types"] = dataMt;
        if (this.scheduleForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.scheduleService
                .updateSchedule(this.activatedRoute.snapshot.params["id"], this.scheduleForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/schedule");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    ScheduleFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./schedule-form.component.html */ "./src/app/views/master/schedule/schedule-form/schedule-form.component.html"),
            styles: [__webpack_require__(/*! ./schedule-form.component.scss */ "./src/app/views/master/schedule/schedule-form/schedule-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_shared_services_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"],
            src_app_shared_services_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"],
            src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_7__["MemberTypeService"],
            src_app_shared_services_branch_service__WEBPACK_IMPORTED_MODULE_6__["BranchService"]])
    ], ScheduleFormComponent);
    return ScheduleFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/schedule/schedule-list/schedule-list.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/views/master/schedule/schedule-list/schedule-list.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL3NjaGVkdWxlL3NjaGVkdWxlLWxpc3Qvc2NoZWR1bGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL3NjaGVkdWxlL3NjaGVkdWxlLWxpc3Qvc2NoZWR1bGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/schedule/schedule-list/schedule-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/master/schedule/schedule-list/schedule-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Schedule</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['schedule-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Day</th>\n                      <th>Time</th>\n                      <th>Exercise</th>\n                      <th>Period</th>\n                      <th>Status</th>\n                      <th>Branch</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let schedule of schedules\">\n                      <td>{{ schedule.day }}</td>\n                      <td>{{ schedule.time }}</td>\n                      <td>{{ schedule.exercise }}</td>\n                      <td>\n                        {{ schedule.start_date }} - {{ schedule.end_date }}\n                      </td>\n                      <td>{{ schedule.state }}</td>\n                      <td>{{ schedule.branch_name }}</td>\n                      <td>\n                        <button\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          (click)=\"gotoEdit(schedule.id)\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </button>\n                        <!-- <a\n                          href=\"#\"\n                          [routerLink]=\"[\n                            'schedule-edit/',\n                            schedule.schedule_id\n                          ]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a> -->\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, schedule.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Schedule deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete this schedule?\n                              </strong>\n                            </p>\n                            <p>\n                              All information associated to this schedule will\n                              be permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/schedule/schedule-list/schedule-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/master/schedule/schedule-list/schedule-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: ScheduleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleListComponent", function() { return ScheduleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/schedule.service */ "./src/app/shared/services/schedule.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ScheduleListComponent = /** @class */ (function () {
    function ScheduleListComponent(scheduleService, router, chRef, modalService, toastr) {
        this.scheduleService = scheduleService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    ScheduleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scheduleService.getSchedules().subscribe(function (data) {
            _this.schedules = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#mytable").DataTable();
        });
    };
    ScheduleListComponent.prototype.gotoEdit = function (id) {
        this.redirect = "master/schedule/schedule-edit/" + id;
        window.location = this.redirect;
        console.log(window.location);
    };
    ScheduleListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.scheduleService.deleteSchedule(id).subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    ScheduleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./schedule-list.component.html */ "./src/app/views/master/schedule/schedule-list/schedule-list.component.html"),
            styles: [__webpack_require__(/*! ./schedule-list.component.css */ "./src/app/views/master/schedule/schedule-list/schedule-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_schedule_service__WEBPACK_IMPORTED_MODULE_8__["ScheduleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ScheduleListComponent);
    return ScheduleListComponent;
}());



/***/ }),

/***/ "./src/app/views/master/user/user-create/user-create.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/master/user/user-create/user-create.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>User</h1>\n  <ul>\n    <li>Create</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Create User</div>\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"staff_id\">Name</label>\n              <select\n                name=\"staff_id\"\n                id=\"staff_id\"\n                class=\"form-control\"\n                formControlName=\"staff_id\"\n                (change)=\"select()\"\n              >\n                <option\n                  value=\"{{ staff.id }}\"\n                  [ngValue]=\"staff.id\"\n                  *ngFor=\"let staff of staffs\"\n                  >{{ staff.name }}</option\n                >\n              </select>\n              <i\n                *ngIf=\"\n                  !userForm.get('staff_id').valid &&\n                  userForm.get('staff_id').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please choose user</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"email\">Email address</label>\n              <input\n                readonly\n                type=\"email\"\n                class=\"form-control\"\n                id=\"email\"\n                aria-describedby=\"emailHelp\"\n                placeholder=\"Enter email\"\n                formControlName=\"email\"\n              />\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"password\">Password</label>\n              <input\n                type=\"password\"\n                class=\"form-control \"\n                name=\"password\"\n                id=\"password\"\n                placeholder=\"Confirm Password\"\n                formControlName=\"password\"\n              />\n              <i\n                *ngIf=\"\n                  !userForm.get('password').valid &&\n                  userForm.get('password').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter password</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"password_confirmation\">Password Confirmation</label>\n              <input\n                type=\"password\"\n                class=\"form-control \"\n                name=\"password_confirmation\"\n                id=\"password_confirmation\"\n                placeholder=\"Confirm Password\"\n                formControlName=\"password_confirmation\"\n              />\n              <i\n                *ngIf=\"\n                  !userForm.get('password_confirmation').valid &&\n                  userForm.get('password_confirmation').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter same password</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"role\">Role</label>\n              <select\n                name=\"role\"\n                id=\"role\"\n                class=\"form-control \"\n                formControlName=\"role\"\n              >\n                <option [ngValue]=\"role.name\" *ngFor=\"let role of roles\">{{\n                  role.display_name\n                }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/user/user-create/user-create.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/master/user/user-create/user-create.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci91c2VyL3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/master/user/user-create/user-create.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/master/user/user-create/user-create.component.ts ***!
  \************************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/role.service */ "./src/app/shared/services/role.service.ts");
/* harmony import */ var src_app_shared_services_staff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/staff.service */ "./src/app/shared/services/staff.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(fb, toastr, userService, router, roleService, staffService) {
        this.fb = fb;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.roleService = roleService;
        this.staffService = staffService;
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm = this.fb.group({
            staff_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password_confirmation: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            role: ["cs", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.roleService.getRoles().subscribe(function (res) {
            _this.roles = res["data"];
        });
        this.staffService.getStaffs().subscribe(function (data) {
            _this.staffs = data["data"];
        });
    };
    UserCreateComponent.prototype.select = function () {
        var _this = this;
        var staff_id = jquery__WEBPACK_IMPORTED_MODULE_7__("#staff_id").val();
        this.staffService.showStaff(staff_id).subscribe(function (data) {
            _this.email = data["data"].email;
            _this.userForm.controls["email"].setValue(_this.email);
        });
    };
    UserCreateComponent.prototype.submit = function () {
        var _this = this;
        if (this.userForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.userService.createUser(this.userForm.value).subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/user");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    UserCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./user-create.component.html */ "./src/app/views/master/user/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/views/master/user/user-create/user-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"],
            src_app_shared_services_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/views/master/user/user-form/user-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/master/user/user-form/user-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>User</h1>\n  <ul>\n    <li>Update</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Form Update User</div>\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"staff_name\">Name</label>\n              <input\n                readonly\n                type=\"text\"\n                class=\"form-control \"\n                id=\"staff_name\"\n                name=\"staff_name\"\n                placeholder=\"Enter Staff\"\n                formControlName=\"staff_name\"\n              />\n              <input\n                type=\"hidden\"\n                class=\"form-control \"\n                id=\"staff_id\"\n                name=\"staff_id\"\n                placeholder=\"Enter Staff\"\n                formControlName=\"staff_id\"\n              />\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"email\">Email address</label>\n              <input\n                readonly\n                type=\"email\"\n                class=\"form-control \"\n                id=\"email\"\n                aria-describedby=\"emailHelp\"\n                placeholder=\"Enter email\"\n                formControlName=\"email\"\n              />\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"password\">Password</label>\n              <input\n                type=\"password\"\n                class=\"form-control \"\n                name=\"password\"\n                id=\"password\"\n                placeholder=\"Confirm Password\"\n                formControlName=\"password\"\n              />\n              <i\n                *ngIf=\"\n                  !userForm.get('password').valid &&\n                  userForm.get('password').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter password</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"password_confirmation\">Password Confirmation</label>\n              <input\n                type=\"password\"\n                class=\"form-control \"\n                name=\"password_confirmation\"\n                id=\"password_confirmation\"\n                placeholder=\"Confirm Password\"\n                formControlName=\"password_confirmation\"\n              />\n              <i\n                *ngIf=\"\n                  !userForm.get('password_confirmation').valid &&\n                  userForm.get('password_confirmation').touched\n                \"\n                class=\"i-Information text-danger\"\n              >\n                Please enter same password</i\n              >\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"role\">Role</label>\n              <select\n                name=\"role\"\n                id=\"role\"\n                class=\"form-control \"\n                formControlName=\"role\"\n              >\n                <option [ngValue]=\"role.name\" *ngFor=\"let role of roles\">{{\n                  role.display_name\n                }}</option>\n              </select>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Save</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/user/user-form/user-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/master/user/user-form/user-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hc3Rlci91c2VyL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/master/user/user-form/user-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/master/user/user-form/user-form.component.ts ***!
  \********************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/role.service */ "./src/app/shared/services/role.service.ts");
/* harmony import */ var src_app_shared_services_staff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/staff.service */ "./src/app/shared/services/staff.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(fb, toastr, userService, router, activatedRoute, roleService, staffService) {
        this.fb = fb;
        this.toastr = toastr;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.roleService = roleService;
        this.staffService = staffService;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm = this.fb.group({
            id: [""],
            staff_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            staff_name: [],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ["kosong"],
            password_confirmation: ["kosong"],
            role: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.userService
            .showUser(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.userForm.setValue({
                id: data["data"].id,
                staff_id: data["data"].staff_id,
                staff_name: data["data"].name,
                email: data["data"].email,
                password: "kosong",
                password_confirmation: "kosong",
                role: data["data"].role
            });
        });
        this.roleService.getRoles().subscribe(function (res) {
            _this.roles = res["data"];
        });
        this.staffService.getStaffs().subscribe(function (data) {
            _this.staffs = data["data"];
        });
    };
    UserFormComponent.prototype.buildFormBasic = function () {
        this.formBasic = this.fb.group({
            experience: []
        });
    };
    UserFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.userForm.invalid) {
            this.loading = false;
            return;
        }
        else {
            this.loading = true;
            this.userService
                .updateUser(this.activatedRoute.snapshot.params["id"], this.userForm.value)
                .subscribe(function (res) {
                setTimeout(function () {
                    _this.loading = false;
                    if (res["status"] === "200") {
                        _this.toastr.success(res["message"], "Success!", {
                            progressBar: true
                        });
                        _this.router.navigateByUrl("master/user");
                    }
                    else {
                        _this.toastr.error(res["message"], "Error!", {
                            progressBar: true
                        });
                    }
                }, 3000);
            });
        }
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/views/master/user/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.scss */ "./src/app/views/master/user/user-form/user-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"],
            src_app_shared_services_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/views/master/user/user-list/user-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/master/user/user-list/user-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.dataTable thead .sorting,\ntable.dataTable thead .sorting_asc,\ntable.dataTable thead .sorting_desc {\n  background: none;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFzdGVyL3VzZXIvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFzdGVyL3VzZXIvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nLFxudGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYyxcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/master/user/user-list/user-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/master/user/user-list/user-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>User</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <a\n          href=\"#\"\n          [routerLink]=\"['user-create']\"\n          class=\"btn btn-primary btn-rounded\"\n        >\n          Create\n        </a>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card o-hidden\">\n        <div class=\"table table-responsive mt-4\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"container\">\n                <table id=\"mytable\" class=\"table table-hover\" cellspacing=\"0\">\n                  <thead class=\"text-center\">\n                    <tr>\n                      <th>Name</th>\n                      <th>Email</th>\n                      <th>Branch</th>\n                      <th>Role</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody class=\"text-center\">\n                    <tr *ngFor=\"let user of users\">\n                      <td>{{ user.name }}</td>\n                      <td>{{ user.email }}</td>\n                      <td>{{ user.branch_name }}</td>\n                      <td>{{ user.role }}</td>\n                      <td>\n                        <a\n                          href=\"#\"\n                          [routerLink]=\"['user-edit/', user.id]\"\n                          class=\"btn btn-sm btn-warning mr-2\"\n                          title=\"Edit\"\n                          triggers=\"mouseenter:mouseleave\"\n                        >\n                          <i class=\"i-Pen-5\"></i>\n                        </a>\n                        <button\n                          triggers=\"mouseenter:mouseleave\"\n                          title=\"Show\"\n                          class=\"btn btn-success btn-sm mr-2\"\n                          (click)=\"showUser(modalLong, user.id)\"\n                        >\n                          <i class=\"i-Information\"></i>\n                        </button>\n                        <button\n                          class=\"btn btn-sm btn-danger\"\n                          (click)=\"confirm(modalConfirm, user.id)\"\n                        >\n                          <i class=\"i-Close-Window\"></i>\n                        </button>\n\n                        <!-- Delete Modal -->\n                        <ng-template #modalConfirm let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-title\">\n                              Profile deletion\n                            </h4>\n                            <button\n                              type=\"button\"\n                              triggers=\"mouseenter:mouseleave\"\n                              title=\"Show\"\n                              class=\"close\"\n                              aria-label=\"Close button\"\n                              aria-describedby=\"modal-title\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>\n                              <strong\n                                >Are you sure you want to delete\n                                <span class=\"text-primary\"\n                                  >\"{{ user.name }}\"</span\n                                >\n                                profile?</strong\n                              >\n                            </p>\n                            <p>\n                              All information associated to this user profile\n                              will be permanently deleted.\n                              <span class=\"text-danger\"\n                                >This operation can not be undone.</span\n                              >\n                            </p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-secondary btn-rounded\"\n                              (click)=\"modal.dismiss('cancel')\"\n                            >\n                              Cancel\n                            </button>\n                            <button\n                              type=\"button\"\n                              ngbAutofocus\n                              class=\"btn btn-danger btn-rounded\"\n                              (click)=\"modal.close('Ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n\n                        <!-- Show Modal -->\n                        <ng-template #modalLong let-modal>\n                          <div class=\"modal-header\">\n                            <h4 class=\"modal-title\" id=\"modal-basic-title\">\n                              Detail :\n                            </h4>\n                            <button\n                              type=\"button\"\n                              class=\"close\"\n                              aria-label=\"Close\"\n                              (click)=\"modal.dismiss('Cross click')\"\n                            >\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            <table class=\"table table-responsive\">\n                              <tr>\n                                <td>Name</td>\n                                <td>:</td>\n                                <td>{{ detail.name }}</td>\n                              </tr>\n                              <tr>\n                                <td>Email</td>\n                                <td>:</td>\n                                <td>{{ detail.email }}</td>\n                              </tr>\n                              <tr>\n                                <td>Branch</td>\n                                <td>:</td>\n                                <td>{{ detail.branch_name }}</td>\n                              </tr>\n                              <tr>\n                                <td>Role</td>\n                                <td>:</td>\n                                <td>{{ detail.role }}</td>\n                              </tr>\n                              <tr>\n                                <td>Created At</td>\n                                <td>:</td>\n                                <td>{{ detail.created }}</td>\n                              </tr>\n                            </table>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button\n                              type=\"button\"\n                              class=\"btn btn-outline-dark btn-rounded\"\n                              (click)=\"modal.close('ok')\"\n                            >\n                              Ok\n                            </button>\n                          </div>\n                        </ng-template>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/master/user/user-list/user-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/master/user/user-list/user-list.component.ts ***!
  \********************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, router, chRef, modalService, toastr) {
        this.userService = userService;
        this.router = router;
        this.chRef = chRef;
        this.modalService = modalService;
        this.toastr = toastr;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) {
            _this.users = data["data"];
            _this.chRef.detectChanges();
            jquery__WEBPACK_IMPORTED_MODULE_6__("#mytable").DataTable();
        });
    };
    UserListComponent.prototype.showUser = function (content, id) {
        var _this = this;
        this.userService.showUser(id).subscribe(function (data) {
            if (data["status"] == "200") {
                _this.detail = data["data"];
                _this.open(content, id);
            }
        });
    };
    UserListComponent.prototype.open = function (content, id) {
        this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" });
    };
    UserListComponent.prototype.confirm = function (content, id) {
        var _this = this;
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title", centered: true })
            .result.then(function (result) {
            _this.userService.deleteUser(id).subscribe(function (data) {
                if (data["status"] == "200") {
                    _this.toastr.success(data["message"], "Success!", {
                        progressBar: true
                    });
                    _this.confirmResut = "Closed with: " + result;
                    location.reload();
                }
            });
        }, function (reason) {
            _this.confirmResut = "Dismissed with: " + reason;
        });
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/views/master/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/views/master/user/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-master-master-module.js.map