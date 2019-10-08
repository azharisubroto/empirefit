(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-member-member-module~views-member-partner-member-partner-module"],{

/***/ "./src/app/shared/services/classes.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/classes.service.ts ***!
  \****************************************************/
/*! exports provided: ClassesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassesService", function() { return ClassesService; });
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



var ClassesService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function ClassesService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "https://api.empirefit.club/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    ClassesService.prototype.getClasses = function (member_type) {
        return this.http.get(this.apiURL + "/show_class_registration/" + member_type, this.httpOptions);
    };
    ClassesService.prototype.classCheck = function (memberID) {
        return this.http.get(this.apiURL + "/class_registrations/" + memberID, this.httpOptions);
    };
    ClassesService.prototype.classCheckIn = function (data) {
        return this.http.post(this.apiURL + "/class_registrations/", data, this.httpOptions);
    };
    ClassesService.prototype.classCancel = function (id, userid) {
        return this.http.put(this.apiURL + "/cancel_class_registration/" + id, userid, this.httpOptions);
    };
    ClassesService.prototype.classesByDay = function (date) {
        return this.http.get(this.apiURL + "/schedules/day/" + date, this.httpOptions);
    };
    ClassesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], ClassesService);
    return ClassesService;
}());



/***/ }),

/***/ "./src/app/shared/services/finger.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/finger.service.ts ***!
  \***************************************************/
/*! exports provided: FingerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerService", function() { return FingerService; });
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



var FingerService = /** @class */ (function () {
    // readonly localURL = "http://45.118.132.77/efc/api";
    function FingerService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "https://api.empirefit.club/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    FingerService.prototype.checkStaffRegistration = function (id, vc) {
        return this.http.get(this.apiURL + "/finger/staff_registrations/check/" + id + "/" + vc);
    };
    FingerService.prototype.checkMemberRegistration = function (id, vc) {
        return this.http.get(this.apiURL + "/finger/registrations/check/" + id + "/" + vc);
    };
    FingerService.prototype.classAttendance = function (id) {
        return this.http.get(this.apiURL + "/finger/member_auto_attendance/" + id);
    };
    // Auto Attendance
    FingerService.prototype.checkAttendance = function (member_id) {
        return this.http.get(this.apiURL + "/finger/member_attendance/check/" + member_id, this.httpOptions);
    };
    // Auto Registration
    FingerService.prototype.checkAutoRegClass = function (member_id, data) {
        return this.http.post(this.apiURL + "/finger/member_register_class/check/" + member_id, data, this.httpOptions);
    };
    //  Pt Attendance
    FingerService.prototype.checkPtAttendance = function (member_id, vc) {
        return this.http.get(this.apiURL + "/finger/member_pt_attendances/check/" + member_id + "/" + vc);
    };
    //  Pt Attendance
    FingerService.prototype.checkPtAttendance2 = function (pt_id, vc) {
        return this.http.get(this.apiURL + "/finger/pt_attendances/check/" + pt_id + "/" + vc);
    };
    FingerService.prototype.checkStaffAttendance = function (staff_id, data) {
        return this.http.post(this.apiURL + "/finger/staff_attendance/check/" + staff_id, data, this.httpOptions);
    };
    FingerService.prototype.checkStaffAttendanceOut = function (staff_id, data) {
        return this.http.post(this.apiURL + "/finger/staff_attendance_out/check/" + staff_id, data, this.httpOptions);
    };
    FingerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], FingerService);
    return FingerService;
}());



/***/ }),

/***/ "./src/app/shared/services/member.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/member.service.ts ***!
  \***************************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
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



var MemberService = /** @class */ (function () {
    //readonly apiURL = "http://localhost/efc_api/api";
    function MemberService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "https://api.empirefit.club/api";
        this.localurl = "http://localhost/efc_api/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    MemberService.prototype.getMember = function () {
        return this.http.get(this.apiURL + "/members", this.httpOptions);
    };
    MemberService.prototype.updateMember = function (id, data) {
        return this.http.put(this.apiURL + "/members/" + id, data, this.httpOptions);
    };
    MemberService.prototype.checkFinger = function (member_id, vc) {
        return this.http.get(this.apiURL + "/members_check_finger_status/" + member_id + "/" + vc, this.httpOptions);
    };
    MemberService.prototype.getUrlFingerReg = function (member_id, vc) {
        return this.http.get(this.apiURL + "/members_get_url_finger/" + member_id + "/" + vc, this.httpOptions);
    };
    MemberService.prototype.updateLiability = function (id, data) {
        return this.http.put(this.apiURL + "/update_liability/" + id, data, this.httpOptions);
    };
    MemberService.prototype.updateIdentification = function (id, data) {
        return this.http.put(this.apiURL + "/identification_member/" + id, data, this.httpOptions);
    };
    MemberService.prototype.createAutoDebet = function (member_id, data) {
        return this.http.put(this.apiURL + "/auto_debet/" + member_id, data, this.httpOptions);
    };
    MemberService.prototype.updateStatus = function (member_id, data) {
        return this.http.put(this.apiURL + "/update_status/" + member_id, data, this.httpOptions);
    };
    MemberService.prototype.updateStatusLeave = function (member_id, data) {
        return this.http.put(this.apiURL + "/update_status_leave/" + member_id, data, this.httpOptions);
    };
    MemberService.prototype.getSingleMember = function ($id) {
        return this.http.get(this.apiURL + "/members/" + $id, this.httpOptions);
    };
    MemberService.prototype.memberLeave = function (member_id, data) {
        return this.http.put(this.apiURL + "/member_leave/" + member_id, data, this.httpOptions);
    };
    MemberService.prototype.reactiveLeave = function (member_id, data) {
        return this.http.put(this.apiURL + "/reactive_leave/" + member_id, data, this.httpOptions);
    };
    MemberService.prototype.updateMembership = function (member_id, data) {
        return this.http.put(this.apiURL + "/update_membership/" + member_id, data, this.httpOptions);
    };
    MemberService.prototype.updatePayment = function (member_id, data) {
        return this.http.put(this.apiURL + "/update_payment/" + member_id, data, this.httpOptions);
    };
    MemberService.prototype.deactivateCC = function (member_id, data) {
        return this.http.put(this.apiURL + "/deactivate_cc/" + member_id, data, this.httpOptions);
    };
    MemberService.prototype.updateCC = function (member_id, data) {
        return this.http.put(this.apiURL + "/update_cc/" + member_id, data, this.httpOptions);
    };
    MemberService.prototype.upgradeMembership = function (member_id, data) {
        return this.http.put(this.apiURL + "/upgrade_membership/" + member_id, data, this.httpOptions);
    };
    MemberService.prototype.sendMail = function (member_id, data) {
        return this.http.post(this.apiURL + "/members/verified/" + member_id, data, this.httpOptions);
    };
    MemberService.prototype.downloadBioLiability = function (member_id, data) {
        return this.http.put(this.apiURL + "/download_bio_liability/" + member_id, data, this.httpOptions);
    };
    MemberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], MemberService);
    return MemberService;
}());



/***/ })

}]);
//# sourceMappingURL=default~views-member-member-module~views-member-partner-member-partner-module.js.map