(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/rxjs-compat/_esm5/observable/interval.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/interval.js ***!
  \***************************************************************/
/*! exports provided: interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"]; });


//# sourceMappingURL=interval.js.map

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
        this.apiURL = "https://api.empirefit.club/api";
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
    DeviceService.prototype.getByBranch = function (branch_id) {
        return this.http.get(this.apiURL + "/devices_branch/" + branch_id, this.httpOptions);
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

/***/ "./src/app/shared/services/position.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/position.service.ts ***!
  \*****************************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
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



var PositionService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function PositionService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "https://api.empirefit.club/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    PositionService.prototype.getPositions = function () {
        return this.http.get(this.apiURL + "/positions", this.httpOptions);
    };
    PositionService.prototype.createPosition = function (data) {
        return this.http.post(this.apiURL + "/positions", data, this.httpOptions);
    };
    PositionService.prototype.deletePosition = function (id) {
        return this.http.delete(this.apiURL + "/positions/" + id, this.httpOptions);
    };
    PositionService.prototype.showPosition = function (id) {
        return this.http.get(this.apiURL + "/positions/" + id, this.httpOptions);
    };
    PositionService.prototype.updatePosition = function (id, data) {
        return this.http.put(this.apiURL + "/positions/" + id, data, this.httpOptions);
    };
    PositionService.prototype.updateGroupPosition = function (id, data) {
        return this.http.put(this.apiURL + "/group_positions/" + id, data, this.httpOptions);
    };
    PositionService.prototype.createGroupPosition = function (data) {
        return this.http.post(this.apiURL + "/group_positions/", data, this.httpOptions);
    };
    PositionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/shared/services/staff.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/staff.service.ts ***!
  \**************************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
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



var StaffService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function StaffService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "https://api.empirefit.club/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    StaffService.prototype.getStaffs = function () {
        return this.http.get(this.apiURL + "/staff/", this.httpOptions);
    };
    StaffService.prototype.createStaff = function (data) {
        return this.http.post(this.apiURL + "/staff", data, this.httpOptions);
    };
    StaffService.prototype.deleteStaff = function (id) {
        return this.http.delete(this.apiURL + "/staff/" + id, this.httpOptions);
    };
    StaffService.prototype.showStaff = function (id) {
        return this.http.get(this.apiURL + "/staff/" + id, this.httpOptions);
    };
    StaffService.prototype.updateStaff = function (id, data) {
        return this.http.put(this.apiURL + "/staff/" + id, data, this.httpOptions);
    };
    StaffService.prototype.getStaffCoach = function () {
        return this.http.get(this.apiURL + "/staff_coach/", this.httpOptions);
    };
    StaffService.prototype.getStaffPt = function () {
        return this.http.get(this.apiURL + "/staff_pt/", this.httpOptions);
    };
    StaffService.prototype.updatePhoto = function (id, data) {
        return this.http.post(this.apiURL + "/staff_photo/" + id, data, this.httpOptions);
    };
    StaffService.prototype.staffAttendance = function (id) {
        return this.http.get(this.apiURL + "/staff_attendances/" + id, this.httpOptions);
    };
    StaffService.prototype.staffManualAttendance = function (data) {
        return this.http.post(this.apiURL + "/staff_attendances", data, this.httpOptions);
    };
    StaffService.prototype.staffManualAttendanceOut = function (data) {
        return this.http.post(this.apiURL + "/attendance_out", data, this.httpOptions);
    };
    StaffService.prototype.searchAttendance = function (id, data) {
        return this.http.post(this.apiURL + "/search_staff_attendance/" + id, data, this.httpOptions);
    };
    StaffService.prototype.checkFinger = function (member_id, vc) {
        return this.http.get(this.apiURL + "/staff_check_finger_status/" + member_id + "/" + vc, this.httpOptions);
    };
    StaffService.prototype.getUrlFingerReg = function (member_id, vc) {
        return this.http.get(this.apiURL + "/staff_get_url_finger/" + member_id + "/" + vc, this.httpOptions);
    };
    StaffService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], StaffService);
    return StaffService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map