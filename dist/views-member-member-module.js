(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-member-member-module"],{

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
    // readonly apiURL = "http://localhost/efc/api";
    function MemberService(http, store) {
        this.http = http;
        this.store = store;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
    }
    MemberService.prototype.getMember = function () {
        return this.http.get(this.apiURL + "/members", this.httpOptions);
    };
    MemberService.prototype.getSingleMember = function ($id) {
        return this.http.get(this.apiURL + "/members/" + $id, this.httpOptions);
    };
    MemberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "./src/app/views/member/member-activation-success/member-activation-success.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/member/member-activation-success/member-activation-success.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <h1>Member</h1>\n    <ul>\n      <li>Activation Status</li>\n    </ul>\n  </div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"p5 text-center mt-5\">\n  <img src=\"assets/images/success.png\" alt=\"\" width=\"100\">\n\n  <h2 class=\"mt-5\">REGISTRATION PROCESS IS SUCCESSFULL</h2>\n\n  <div class=\"row mt-5 justify-content-center\">\n    <div class=\"col-md-4\">\n      <a href=\"#\" class=\"btn btn-primary btn-block py-3\">ATTENDANCE</a>\n    </div>\n    <div class=\"col-md-4\">\n      <a href=\"#\" class=\"btn btn-primary btn-block py-3\">SELECT CLASS</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/member/member-activation-success/member-activation-success.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/member/member-activation-success/member-activation-success.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21lbWJlci9tZW1iZXItYWN0aXZhdGlvbi1zdWNjZXNzL21lbWJlci1hY3RpdmF0aW9uLXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/member/member-activation-success/member-activation-success.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/member/member-activation-success/member-activation-success.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MemberActivationSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberActivationSuccessComponent", function() { return MemberActivationSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MemberActivationSuccessComponent = /** @class */ (function () {
    function MemberActivationSuccessComponent() {
    }
    MemberActivationSuccessComponent.prototype.ngOnInit = function () {
    };
    MemberActivationSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-activation-success',
            template: __webpack_require__(/*! ./member-activation-success.component.html */ "./src/app/views/member/member-activation-success/member-activation-success.component.html"),
            styles: [__webpack_require__(/*! ./member-activation-success.component.scss */ "./src/app/views/member/member-activation-success/member-activation-success.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MemberActivationSuccessComponent);
    return MemberActivationSuccessComponent;
}());



/***/ }),

/***/ "./src/app/views/member/member-activation/member-activation.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/member/member-activation/member-activation.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n\t<h1>{{member.name}}</h1>\n\t<ul>\n\t\t<li>Registration</li>\n\t</ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\t\n\t<div class=\"row\" id=\"form-step\">\n\t\t<div class=\"col-md-12\">\n\t\n\t\t\t<form-wizard>\n\t\t\t\t<wizard-step [title]=\"'Agreement'\" [isValid]=\"basicForm.form.valid\" (onNext)=\"onStep1Next($event)\">\n\t\t\t\t\t<h4 class=\"text-medium text-bold\">ASSUMPTION OF RISK; WAIVER; and LIABILITY RELEASE (the \"Agreement'')</h4>\n\n\t\t\t\t\t<p class=\"text-plain my-3\">THIS IS A LIABILITY RELEASE BY AFFIRMATIVELY AGREEING TO IT BY SIGNING THE AGREEMENT, YOU ARE WAIVING CERTAIN LEGAL RIGHTS AND ARE COMPLETELY RELEASING POTENTIAL CLAIMS. PLEASE READ IT CAREFULLY.</p>\n\n\t\t\t\t\t<form #basicForm=\"ngForm\">\n\t\t\t\t\t\t<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n\t\t\t\t\t\t\t<ngb-panel title=\"I. Personal Data of the Participant\">\n\t\t\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\t\t\t<ul class=\"list no-list-style\">\n\t\t\t\t\t\t\t\t\t\t<li><strong>Name:</strong> <div class=\"text-medium\">{{member.name}}</div></li>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t<li><strong>Address:</strong> <div class=\"text-medium\">{{member.address}}</div></li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<li><strong>Date of Birth:</strong> <div class=\"text-medium\">{{member.date_of_birth}}</div></li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<li><strong>Contact Number:</strong> <div class=\"text-medium\">{{member.phone}}</div></li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<li><strong>In an emergency, I would like EMPIRE FIT CLUB to Call:</strong> <div class=\"text-medium\">{{ member.phone }}</div></li>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<li><strong>Email:</strong> <div class=\"text-medium\">{{member.email}}</div></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t\t\t<ngb-panel title=\"II. Health Questions\">\n\t\t\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\t\t\t<ul class=\"list\" style=\"list-style:none;\">\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Do you: Smoke?</strong>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-medium\">Yes</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Drink Drink alcohol?</strong>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-medium\">Yes</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Take prescription meds?</strong>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-medium\">Yes</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Are you exercising now?</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-medium\">Yes</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>How many times  per week?</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-medium\">5 Times</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Do you have: Back pain, Knee pain or Shoulder pain?</strong>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-medium\">Yes</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 mb-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Previous Injuries or Surgeries?</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-medium\">Yes</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>If  Yes what injuries or surgeries </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-medium\">Ketimpa dumble</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<strong>High blood pressure, Asthma, Diabetes, or a Heart condition?</strong>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-medium\">Yes</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<strong>Any other health conditions or pre-existing conditions not listed?</strong>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-medium\">Yes</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t\t\t<ngb-panel title=\"III. Reviewer Notes:\">\n\t\t\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, impedit enim voluptatum beatae rerum illo pariatur nam praesentium vel consequuntur iusto, nihil magnam. Iure omnis dignissimos placeat eos commodi consequuntur!\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t\t\t<ngb-panel title=\"IV. Photography and/or Video Release\">\n\t\t\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\t\t\tPhotography and/or Video Release of Participant involved in any activities offered by EMPIRE FIT CLUB may be photographed  or  videotaped  during  training.  The  undersigned  hereby  consents  to   the   use  of   these photographs and/or videos without compensation, on the EMPIRE FIT CLUB website or in any editorial, promotional or marketing material produced and/or published by EMPIRE FIT CLUB.\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-panel>\n\t\t\t\t\t\t\t<ngb-panel title=\"V. Waiver and Release of Liability\">\n\t\t\t\t\t\t\t\t<ng-template ngbPanelContent>\n\t\t\t\t\t\t\t\t\t<ul style=\"list-style:none\" class=\"p-0 m-0 p-list\">\n\t\t\t\t\t\t\t\t\t\t<li><strong>(i)</strong> Express Assumption of Risk: I, the undersigned, am aware that there are significant risks involved in all aspects of physical training. These risks include, but are not limited to: falls, muscle strains, muscle pulls,  muscle tears,  broken  bones,  shin  splints,  heat  prostration,  injuries  to  knees; , injuries to back, injuries to foot, heart attacks, or any other illness or soreness  that I may  incur  which  can  result  in serious injury or death; injury or death  due to negligence  on  the  part of myself,  my training  partner, or other people around me; injury or death due to improper use or failure of equipment; strains and sprains. I am aware that any of these above mentioned risks may result in serious injury or death to myself and or my partner(s). I willingly assume full responsibility for  the  risks that I am exposing myself to and accept full responsibility for  any injury or death that may result from participation  in any activity or class while at, or under direction of EMPIRE FIT CLUB. I acknowledge that I have no physical impairments, injuries , or illnesses that will endanger me or others.</li>\n\n\t\t\t\t\t\t\t\t\t\t<li><strong>(ii)</strong> Release: In consideration of the above  mentioned  risks  and  hazards  and  in  consideration  of  the  fact that I am willingly and voluntarily participating in the activities offered by EMPIRE FIT CLUB, I,  the undersigned hereby release EMPIRE FIT CLUB,  their  directors,  coaches,  officers,  employees,  agents, from any and all liability, claims, demands,  actions or  rights  of  action, which are related  to,  arise  out  of,  or are in any way connected  with  my participation in this activity,  including  those  allegedly  attributed  to the negligent acts or omissions of the  above mentioned  parties . This  agreement  shall be binding  upon me, my spouse, my children, my guardians, my successors, representatives, heirs, executors, assigns, or transferees (collectively, the \"Releasors\"). I accept full and  complete  responsibility  for  the  safety  of myself, any guests, observers or other individuals who I have  invited  to  the  venue of  EMPIRE  FIT CLUB, and property, and I assume the risk of  damage, theft, loss  or  injury caused  by others  to  me,  my guests and property <br><br>\n\n\t\t\t\t\t\t\t\t\t\tIf any portion of this agreement is held invalid, I agree that  the  remainder  of  the  agreement  shall remain in full legal force and effect. If I am signing on behalf of a minor child, I also give full permission for any person connected with EMPIRE FIT CLUB to administer first aid deemed necessary, and in case of serious illness or injury, I give permission to call for medical and or surgical care for the child and to transport the child to a medical facility deemed necessary for the wellbeing of the child </li>\n\n\t\t\t\t\t\t\t\t\t\t<li><strong>(iii)</strong> Indemnification: On behalf of the Releasers, the Participant recognizes that there is risk involved in the types of activities offered by EMPIRE FIT CLUB. Therefore the Participant accepts financial responsibility for any injury that the Participant may cause either to him/herself or to any other participant due to his/her negligence. Should the above mentioned parties, or anyone acting on their behalf, be required to incur attorney's fees and costs to enforce this agreement, I agree to reimburse them for such fees and costs. I further agree to indemnify and hold harmless EMPIRE FIT CLUB, their directors, coaches, officers, employees, agents from liability for the injury or death of any person(s) and damage to property that may result from my negligent or intentional act or omission while participating in <br>\n\t\t\t\t\t\t\t\t\t\t_____ activities offered by EMPIRE FIT CLUB, at the main building or aboard. This includes but is not limited to parks, recreational areas, playgrounds, areas adjacent to main building, and/or any area selected for training by EMPIRE FIT CLUB. <br><br>\n\n\t\t\t\t\t\t\t\t\t\tI Have read and understood the foregoing assumption of risk, and release of liability and I understand that by signing it obligates me to indemnify the parties named for any liability for injury or death of any person and damage to property caused by my negligent or intentional act or omission. I understand that by signing this form I am waiving valuable legal rights.</li>\n\n\t\t\t\t\t\t\t\t\t\t<li><strong>(iv)</strong> Promise Not To Bring Suit: I hereby agree and covenant not to, and shall cause the Releasors not to, bring a claim against, sue, demand compensation from or attach the property or assets of EMPIRE FIT CLUB or any of their directors, coaches, officers, employees, agents, for any loss or damage arising or resulting from my participation in EMPIRE FIT CLUB or my travel to or from or presence at the venue, 2nd forever release and discharge EMPIRE FIT CLUB or any of their directors, coaches, officers, employees, agents them from liability under such claims.</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ngb-panel>\n\n\t\t\t\t\t\t</ngb-accordion>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row mt-5\">\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6 mb-3\">\n\t\t\t\t\t\t\t\t<label for=\"firstName\" class=\"d-block mb-2 text-medium\"><strong>Signature 1</strong></label>\n\t\t\t\t\t\t\t\t<img src=\"https://via.placeholder.com/250x150\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6 mb-3\">\n\t\t\t\t\t\t\t\t<label for=\"lastName\" class=\"d-block mb-2 text-medium\"><strong>Signature 2</strong></label>\n\t\t\t\t\t\t\t\t<img src=\"https://via.placeholder.com/250x150\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</wizard-step>\n\t\n\t\t\t\t<wizard-step [title]=\"'Identification'\" [isValid]=\"step2Form.valid\" (onNext)=\"onStep2Next($event)\">\n\t\t\t\t\t<form [formGroup]=\"step2Form\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center mb-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"text-muted mb-0\">\n\t\t\t\t\t\t\t\t\t\t<strong>Name</strong>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"text-medium\">\n\t\t\t\t\t\t\t\t\t\t{{member.name}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h4 class=\"fancy-head\"><span>Photo</span></h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t\t\t\t<img src=\"{{member.photo}}\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-lg btn-block py-3\">Take a Picture</a>\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-lg btn-block py-3\">Retry</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-12 mt-4\">\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"fancy-head\"><span>Fingerprint</span></h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://via.placeholder.com/150\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://via.placeholder.com/150\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-2\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"https://via.placeholder.com/150\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row mt-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center mb-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-muted mb-0\">\n\t\t\t\t\t\t\t\t\t\t\t\tstatus\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-medium mt-1\">\n\t\t\t\t\t\t\t\t\t\t\t\tSUCCESS\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row mt-2 mb-5\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-lg btn-block py-3\">Retry</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</wizard-step>\n\t\n\t\t\t\t<wizard-step [title]=\"'Membership'\" (onNext)=\"onStep3Next($event)\">\n\t\t\t\t\t<form #paymentForm=\"ngForm\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<h4 class=\"fancy-head\"><span>Membership</span></h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row mb-4\">\n\t\t\t\t\t\t\t<div class=\"form-group col-md-6 mb-3\">\n\t\t\t\t\t\t\t\t<label for=\"card\">Type</label>\n\t\t\t\t\t\t\t\t<select name=\"type_membership\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let title of type\" [value]=\"title.id\">\n\t\t\t\t\t\t\t\t\t\t{{title.member_type_name}}\n\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"form-group col-md-6 mb-3\">\n\t\t\t\t\t\t\t\t<label for=\"card\">Package</label>\n\t\t\t\t\t\t\t\t<select name=\"package\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let title of package\" [value]=\"title.id\">\n\t\t\t\t\t\t\t\t\t\t{{title.package_name}}\n\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<h4 class=\"fancy-head\"><span>Payment</span></h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 mb-3 form-group\">\n\t\t\t\t\t\t\t\t<label for=\"card\">Type</label>\n\t\t\t\t\t\t\t\t<select name=\"type_membership\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let title of type\" [value]=\"title.id\">\n\t\t\t\t\t\t\t\t\t\t{{title.member_type_name}}\n\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6 mb-3 form-group\">\n\t\t\t\t\t\t\t\t<label for=\"card\">Bank</label>\n\t\t\t\t\t\t\t\t<select name=\"bank\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let title of banks\" [value]=\"title.id\">\n\t\t\t\t\t\t\t\t\t\t{{title.bank_name}}\n\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 mb-3 form-group\">\n\t\t\t\t\t\t\t\t<label for=\"card\">Card</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"card_type\" class=\"form-control\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6 mb-3 form-group\">\n\t\t\t\t\t\t\t\t<label for=\"card\">Exp Date</label>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"mm\" class=\"form-control d-inline-block\" style=\"width:100px\">\n\t\t\t\t\t\t\t\t/\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"yy\" class=\"form-control d-inline-block\" style=\"width:100px\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t<div class=\"col-md-6 mb-3 form-group\">\n\t\t\t\t\t\t\t\t<label for=\"card\">Auto Debit</label>\n\t\t\t\t\t\t\t\t<select name=\"auto_debit\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<option value=\"Yes\">Yes</option>\n\t\t\t\t\t\t\t\t\t<option value=\"No\">No</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t<h4 class=\"fancy-head\"><span>Trainer</span></h4>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<table id=\"mytable\" class=\"table table-hover table-bordered\" cellspacing=\"0\">\n\t\t\t\t\t\t\t\t\t<thead class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Trainer Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Price (IDR)</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let trainer of trainers; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ i+1 }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ trainer.name }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ trainer.state }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"#\" class=\"btn btn-primary\">Select</a></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</form>\n\t\t\t\t</wizard-step>\n\t\n\t\t\t\t<wizard-step [title]=\"'Autodebet'\" (onNext)=\"onStep4Next($event)\">\n\t\t\t\t\t<div class=\"mt-0 mb-4\">\n\t\t\t\t\t\t<p>have agreed to allow Empire Fit Club to deduct IDR                          from my credit card in order to pay the monthly subscriptions. I understand that this payment process is a reoccurringpaymentprocess and the agreed amount of money will be automatically deducted unless I instructed them other wise.</p>\n\t\t\t\t\t\t<p>Terms &amp; Condition.</p>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Within the 2 months of initial sign up the members are not encouraged to stop the monthly subscription. (stopping within two months will result on IDR 200.000 process fee)</li>\n\t\t\t\t\t\t\t<li>Members are allowed to cancel the automatic payment anytime after the initial 2 months after the sign up</li>\n\t\t\t\t\t\t\t<li>The Member are allowed to freeze the account for the minimum of 15 days and maximum of 3 months</li>\n\t\t\t\t\t\t\t<li>To freeze or stop the membership, the member will have to notify 2 weeks prior.</li>\n\t\t\t\t\t\t\t<li>Empire has the right to stop the membership or auto deduction at anytime they see fit.</li>\n\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t\t\t\t\t\tName on Card\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"boxvalue\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{member.name}}\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t\t\t\t\t\tCard Number\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"boxvalue\">\n\t\t\t\t\t\t\t\t\t\t\t\t2342-2342-2342-6567\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t\t\t\t\t\tEXP Date\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"boxvalue d-inline-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t01\n\t\t\t\t\t\t\t\t\t\t\t</div>/\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"boxvalue d-inline-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t19\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t\t\t\t\t\tSignature\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"boxvalue\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"https://via.placeholder.com/350x150\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-3\">\n\t\t\t\t\t\t\t\t\t\t\tDate\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"boxvalue\">\n\t\t\t\t\t\t\t\t\t\t\t\t12 Agustus 2019\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</wizard-step>\n\n\t\t\t\t<wizard-step [title]=\"'Final'\" (onComplete)=\"onComplete($event)\">\n\t\t\t\t\t<div class=\"p5 text-center mt-5\">\n\t\t\t\t\t\t<i class=\"text-50 i-Checked-User text-success\"></i>\n\t\t\t\t\t\n\t\t\t\t\t\t<h2 class=\"mt-5\">Thank you! you have completed all the steps. &amp; Registration is successful</h2>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row mt-5 justify-content-center\">\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-block py-3\">ATTENDANCE</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-block py-3\">SELECT CLASS</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</wizard-step>\n\t\t\t\t\n\t\t\t</form-wizard>\n\t\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/views/member/member-activation/member-activation.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/member/member-activation/member-activation.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.list {\n  margin: 0;\n  padding: 0; }\n  ul.list li {\n    margin: 0 0 20px 0;\n    padding: 20px;\n    border: 1px solid #e5e5e5; }\n  ul.list li .switch {\n      margin-bottom: 0; }\n  .boxvalue {\n  background: #f6f6f6;\n  border: 1px solid #e5e5e5;\n  border-radius: 5px;\n  padding: 10px; }\n  .p-list {\n  margin: 0;\n  padding: 0; }\n  .p-list li {\n    margin-bottom: 20px; }\n  .p-list li:last-of-type {\n      margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZW1waXJlZmUvc3JjL2FwcC92aWV3cy9tZW1iZXIvbWVtYmVyLWFjdGl2YXRpb24vbWVtYmVyLWFjdGl2YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFTO0VBQ1QsVUFBVSxFQUFBO0VBRmQ7SUFJUSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUF5QixFQUFBO0VBTmpDO01BU1ksZ0JBQWdCLEVBQUE7RUFLNUI7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7RUFHakI7RUFDSSxTQUFTO0VBQ1QsVUFBVSxFQUFBO0VBRmQ7SUFJUSxtQkFBbUIsRUFBQTtFQUozQjtNQU1ZLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21lbWJlci9tZW1iZXItYWN0aXZhdGlvbi9tZW1iZXItYWN0aXZhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLmxpc3Qge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuXG4gICAgICAgIC5zd2l0Y2gge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJveHZhbHVlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wLWxpc3Qge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/member/member-activation/member-activation.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/member/member-activation/member-activation.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MemberActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberActivationComponent", function() { return MemberActivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/member.service */ "./src/app/shared/services/member.service.ts");
/* harmony import */ var src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/member-type.service */ "./src/app/shared/services/member-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_bank_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/bank.service */ "./src/app/shared/services/bank.service.ts");
/* harmony import */ var src_app_shared_services_personaltrainer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/personaltrainer.service */ "./src/app/shared/services/personaltrainer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MemberActivationComponent = /** @class */ (function () {
    function MemberActivationComponent(fb, toastr, memberService, MemberTypeService, router, activatedRoute, bank, PersonalTrainer) {
        this.fb = fb;
        this.toastr = toastr;
        this.memberService = memberService;
        this.MemberTypeService = MemberTypeService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.bank = bank;
        this.PersonalTrainer = PersonalTrainer;
        this.data = {
            email: ""
        };
    }
    MemberActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.member = { make: "" };
        this.expirydate = { make: "" };
        this.radioGroup = this.fb.group({
            radio: []
        });
        this.step2Form = this.fb.group({
            experience: [2]
        });
        // get user data
        this.memberService
            .getSingleMember(this.activatedRoute.snapshot.params["id"])
            .subscribe(function (data) {
            _this.member = data["data"];
            var date = new Date(data["data"]["expairy_date"]);
            var list = date.toUTCString().split(" ");
            //results.push(list[1]+" "+list[2]);
            _this.expirydate = list[1] + " " + list[2] + " " + list[3];
            console.log(_this.member);
        });
        // get member type
        this.MemberTypeService.getMemberTypes().subscribe(function (data) {
            _this.type = data["data"];
            console.log(_this.type);
        });
        this.bank.getBanks().subscribe(function (data) {
            _this.banks = data["data"];
            console.log(_this.banks);
        });
        this.PersonalTrainer.getPersonalTrainers().subscribe(function (data) {
            _this.trainers = data["data"];
            console.log(_this.trainers);
        });
    };
    MemberActivationComponent.prototype.onStep1Next = function (e) { };
    MemberActivationComponent.prototype.onStep2Next = function (e) { };
    MemberActivationComponent.prototype.onStep3Next = function (e) { };
    MemberActivationComponent.prototype.onStep4Next = function (e) { };
    MemberActivationComponent.prototype.onComplete = function (e) { };
    MemberActivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-member-activation",
            template: __webpack_require__(/*! ./member-activation.component.html */ "./src/app/views/member/member-activation/member-activation.component.html"),
            styles: [__webpack_require__(/*! ./member-activation.component.scss */ "./src/app/views/member/member-activation/member-activation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_shared_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"],
            src_app_shared_services_member_type_service__WEBPACK_IMPORTED_MODULE_4__["MemberTypeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_shared_services_bank_service__WEBPACK_IMPORTED_MODULE_6__["BankService"],
            src_app_shared_services_personaltrainer_service__WEBPACK_IMPORTED_MODULE_7__["PersonaltrainerService"]])
    ], MemberActivationComponent);
    return MemberActivationComponent;
}());



/***/ }),

/***/ "./src/app/views/member/member-attendance/member-attendance.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/member/member-attendance/member-attendance.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n\t<h1>Customer Search</h1>\n\t<ul>\n\t\t<li>Detail</li>\n\t</ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row mb-4\">\n\t<div class=\"col-md-6 mb-4 mb-md-0\">\n\t\t<div class=\"card mb-4\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"fancy-head\"><span>Biodata</span></div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t<img src=\"{{!! member.photo ? member.photo : 'https://randomuser.me/api/portraits/women/65.jpg' }}\" class=\"img-fluid rounded-circle\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"mb-4\">\n\t\t\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Name</span>\n\t\t\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t\t\t{{member.name}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Phone</span>\n\t\t\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t\t\t{{member.phone}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<div class=\"mb-4\">\n\t\t\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Club</span>\n\t\t\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t\t\t{{member.branch_name}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">ID Card Number</span>\n\t\t\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t\t\t{{member.id_card_number}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12 mb-3\">\n\t\t\t\t\t\t<div class=\"fancy-head\"><span>Membership</span></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 mb-3\">\n\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center mb-4\">\n\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Type</span>\n\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t{{member.member_type_name}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Expiry Date</span>\n\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t{{expirydate}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 mb-3\">\n\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Session Remains</span>\n\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t{{member.session_remains}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row mt-2\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<a routerLink=\"/dashboard/member/activation/{{ member.id }}\" class=\"btn btn-primary btn-lg btn-block py-3\">Membership Update</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- PAYMENT -->\n\t\t<div class=\"card mb-4\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"fancy-head mb-3\">\n\t\t\t\t\t<span>Payment</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row mb-4\">\n\t\t\t\t\t<div class=\"col-md-6 mb-4 mb-md-0\">\n\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Type</span>\n\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t{{member.payment_type_name}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 mb-4 mb-md-0\">\n\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Auto Debit</span>\n\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t{{!! member.auto_debet === false ?  \"No\" : \"Yes\" }}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 mb-4 mb-md-0\">\n\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Recurring Date</span>\n\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t{{ member.recuring_date }} Every Month\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 mb-4 mb-md-0\">\n\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Payment Unpaid</span>\n\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\tRp {{ member.payment_unpaid }}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row mt-4\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-lg btn-block py-3\">Auto Attendance</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-6 mb-4 mb-md-0\">\n\t\t<!-- PAYMENT -->\n\t\t<div class=\"card mb-4\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"fancy-head mb-3\">\n\t\t\t\t\t<span>Today's Attendance</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row mb-4\">\n\t\t\t\t\t<div class=\"col-md-6 mb-4 mb-md-0\">\n\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Date</span>\n\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t{{todayDate}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 mb-4 mb-md-0\">\n\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Branch</span>\n\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t{{member.branch_name}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row mb-4\">\n\t\t\t\t\t<div class=\"col-md-6 mb-4 mb-md-0\">\n\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">First Time</span>\n\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1 first_time\">\n\t\t\t\t\t\t\t\t<code>n/a</code>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 mb-4 mb-md-0\">\n\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Last Time</span>\n\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1 last_time\">\n\t\t\t\t\t\t\t\t<code>n/a</code>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-6 mb-4 mb-md-0\">\n\t\t\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t\t\t<span class=\"text-muted mb-0\">Finger Print Status</span>\n\t\t\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t\t\t{{member.state}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row mt-4\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-lg btn-block py-3\">Attendance</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row mt-4\">\n\t\t\t\t\t<div class=\"col-md-6 mb-3 mb-md-0\">\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg btn-block py-3\"  (click)=\"open(manualAttendance)\">Manual Attendance</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-lg btn-block py-3\">Attendance History</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div class=\"fancy-head mb-3\">\n\t\t\t\t\t<span>Today's Class</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t<span class=\"text-muted mb-0\">Time &amp; Exercise and Coach</span>\n\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\tYES\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mt-4 jadwal\">\n\t\t\t\t\t\n\t\t\t\t\t<label class=\"checkbox checkbox-success\">\n\t\t\t\t\t\t<input checked type=\"checkbox\" disabled>\n\t\t\t\t\t\t<span>10:00 - STRENGTH &amp; CONDITIONING - SUSY</span><span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"checkbox checkbox-success notyet\">\n\t\t\t\t\t\t<input type=\"checkbox\" disabled>\n\t\t\t\t\t\t<span>12:00 - Fit Express</span><span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"checkbox checkbox-success notyet\">\n\t\t\t\t\t\t<input type=\"checkbox\" disabled>\n\t\t\t\t\t\t<span>12:00 - Goyang Zumba</span><span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row mt-4\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-lg btn-block py-3\">AUTO REGISTER</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row mt-4\">\n\t\t\t\t\t<div class=\"col-md-6 mb-3 mb-md-0\">\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg btn-block py-3\"  (click)=\"open(manualClass)\">Manual Register</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-lg btn-block py-3\">Class History</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<ng-template #manualAttendance let-modal let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Manual Attendance</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"c('Close')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form>\n            <div class=\"form-group\">\n                <div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t<span class=\"text-muted mb-0\">Front Officer</span>\n\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t{{!! user.name ? user.name : user.role }} \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<form [formGroup]=\"userForm\" (ngSubmit)=\"attendanceCheck()\">\n\t\t\t\t\t<label class=\"text-muted mb-0\">Your Password</label>\n\t\t\t\t\t<input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"...\" class=\"form-control mb-3\">\n\t\t\t\t\t<btn-loading\n\t\t\t\t\t\tbtnClass=\"btn btn-outline-dark btn-rounded btn-block\"\n\t\t\t\t\t\t[loading]=\"loading\"\n\t\t\t\t\t\t>Proceed</btn-loading\n\t\t\t\t\t>\n\t\t\t\t</form>\n            </div>\n        </form>\n    </div>\n</ng-template>\n\n<ng-template #manualClass let-modal>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title2\">Manual Register</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <form>\n            <div class=\"form-group\">\n                <div class=\"px-4 py-3 border border-light rounded align-items-center\">\n\t\t\t\t\t<span class=\"text-muted mb-0\">Front Officer</span>\n\t\t\t\t\t<div class=\"text-medium text-primary mt-1\">\n\t\t\t\t\t\t{{!! user.name ? user.name : user.role }} \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<form [formGroup]=\"userForm\" (ngSubmit)=\"classCheck()\">\n\t\t\t\t\t<label class=\"text-muted mb-0\">Your Password</label>\n\t\t\t\t\t<input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"...\" class=\"form-control mb-3\">\n\t\t\t\t\t<btn-loading\n\t\t\t\t\t\tbtnClass=\"btn btn-outline-dark btn-rounded btn-block\"\n\t\t\t\t\t\t[loading]=\"loading\"\n\t\t\t\t\t\t>Proceed</btn-loading\n\t\t\t\t\t>\n\t\t\t\t</form>\n            </div>\n        </form>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/views/member/member-attendance/member-attendance.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/member/member-attendance/member-attendance.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox input[type=\"checkbox\"][readonly] {\n  pointer-events: none !important; }\n\n.checkbox input[disabled] ~ *, .radio input[disabled] ~ * {\n  color: inherit !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZW1waXJlZmUvc3JjL2FwcC92aWV3cy9tZW1iZXIvbWVtYmVyLWF0dGVuZGFuY2UvbWVtYmVyLWF0dGVuZGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSwrQkFBK0IsRUFBQTs7QUFJdkM7RUFDSSx5QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21lbWJlci9tZW1iZXItYXR0ZW5kYW5jZS9tZW1iZXItYXR0ZW5kYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveCB7XG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdW3JlYWRvbmx5XSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uY2hlY2tib3ggaW5wdXRbZGlzYWJsZWRdIH4gKiwgLnJhZGlvIGlucHV0W2Rpc2FibGVkXSB+ICoge1xuICAgIGNvbG9yOiBpbmhlcml0IWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/member/member-attendance/member-attendance.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/member/member-attendance/member-attendance.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MemberAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberAttendanceComponent", function() { return MemberAttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/member.service */ "./src/app/shared/services/member.service.ts");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberAttendanceComponent = /** @class */ (function () {
    function MemberAttendanceComponent(fb, toastr, memberService, router, activatedRoute, modalService, UserService) {
        this.fb = fb;
        this.toastr = toastr;
        this.memberService = memberService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.UserService = UserService;
    }
    MemberAttendanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.member = { make: "" };
        this.expirydate = { make: "" };
        this.user = { make: "" };
        this.firstTime = { make: "" };
        this.buildFormBasic();
        this.radioGroup = this.fb.group({
            radio: []
        });
        this.userForm = this.fb.group({
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.memberService.getSingleMember(this.activatedRoute.snapshot.params["id"]).subscribe(function (data) {
            _this.member = data["data"];
            var date = new Date(data["data"]["expairy_date"]);
            var list = date.toUTCString().split(" ");
            //results.push(list[1]+" "+list[2]);
            _this.expirydate = list[1] + " " + list[2] + " " + list[3];
            //console.log( this.member ); 
            _this.todayDate = _this.getTanggal();
            console.log(_this.member);
        });
        this.UserService.getSingleUser().subscribe(function (data) {
            _this.user = data["data"];
            console.log(_this.user);
        });
    };
    MemberAttendanceComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then(function (result) {
            console.log(result);
        });
    };
    MemberAttendanceComponent.prototype.attendanceCheck = function () {
        // password true
        // if( this.checkPass() == true ) {
        var _this = this;
        // }
        this.UserService.userCheckPassword(this.user.staff_id, this.userForm.value).subscribe(function (data) {
            var pass = data;
            _this.loading = true;
            if (pass != null && pass['status'] == 200) {
                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = time;
                _this.firstTime = dateTime;
                $('.first_time').text(dateTime);
                _this.loading = false;
                $('.modal-header .close').trigger('click');
            }
            else {
                alert('Your password is incorrect');
                _this.loading = false;
            }
        });
    };
    MemberAttendanceComponent.prototype.classCheck = function () {
        var _this = this;
        this.UserService.userCheckPassword(this.user.staff_id, this.userForm.value).subscribe(function (data) {
            var pass = data;
            _this.loading = true;
            if (pass != null && pass['status'] == 200) {
                $('.jadwal').find('.notyet:eq(0)').removeClass('notyet').find('input').prop('checked', true);
                _this.loading = false;
                $('.modal-header .close').trigger('click');
            }
            else {
                alert('Your password is incorrect');
                _this.loading = false;
            }
        });
    };
    MemberAttendanceComponent.prototype.getTanggal = function () {
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var output = d.getFullYear() + '/' +
            (month < 10 ? '0' : '') + month + '/' +
            (day < 10 ? '0' : '') + day;
        return output;
    };
    MemberAttendanceComponent.prototype.buildFormBasic = function () {
        this.formBasic = this.fb.group({
            experience: []
        });
    };
    MemberAttendanceComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            _this.toastr.success('Profile updated.', 'Success!', { progressBar: true });
        }, 3000);
    };
    MemberAttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-form',
            template: __webpack_require__(/*! ./member-attendance.component.html */ "./src/app/views/member/member-attendance/member-attendance.component.html"),
            styles: [__webpack_require__(/*! ./member-attendance.component.scss */ "./src/app/views/member/member-attendance/member-attendance.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_shared_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], MemberAttendanceComponent);
    return MemberAttendanceComponent;
}());



/***/ }),

/***/ "./src/app/views/member/member-edit/member-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/member/member-edit/member-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21lbWJlci9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/member/member-edit/member-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/member/member-edit/member-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Member</h1>\n  <ul>\n    <li>Edit</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <form-wizard>\n      <wizard-step\n        [title]=\"'Bio Form'\"\n        [isValid]=\"basicForm.form.valid\"\n        (onNext)=\"onStep1Next($event)\"\n      >\n        <form #basicForm=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"form-group col-md-6 mb-3\">\n              <label for=\"firstName\">First Name</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"firstName\"\n                name=\"firstName\"\n                placeholder=\"First name\"\n                [(ngModel)]=\"data.firstName\"\n              />\n            </div>\n            <div class=\"form-group col-md-6 mb-3\">\n              <label for=\"lastName\">Last Name</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"lastName\"\n                name=\"lastName\"\n                placeholder=\"Last name\"\n                [(ngModel)]=\"data.lastName\"\n              />\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"exampleInputEmail1\">Email address</label>\n              <input\n                type=\"email\"\n                class=\"form-control\"\n                id=\"exampleInputEmail1\"\n                name=\"exampleInputEmail1\"\n                aria-describedby=\"emailHelp\"\n                placeholder=\"Enter email\"\n                [(ngModel)]=\"data.email\"\n              />\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"phone\">Phone number</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"phone\"\n                name=\"phone\"\n                placeholder=\"Phone number\"\n                [(ngModel)]=\"data.phone\"\n              />\n            </div>\n          </div>\n        </form>\n      </wizard-step>\n\n      <wizard-step\n        [title]=\"'Identification'\"\n        [isValid]=\"step2Form.valid\"\n        (onNext)=\"onStep2Next($event)\"\n      >\n        <form [formGroup]=\"step2Form\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <h6 class=\"mb-2\">Employees</h6>\n              <label class=\"checkbox checkbox-primary\">\n                <input type=\"checkbox\" checked />\n                <span>Designer</span>\n                <span class=\"checkmark\"></span>\n              </label>\n              <label class=\"checkbox checkbox-secondary\">\n                <input type=\"checkbox\" checked />\n                <span>Coder</span>\n                <span class=\"checkmark\"></span>\n              </label>\n              <label class=\"checkbox checkbox-success\">\n                <input type=\"checkbox\" checked />\n                <span>QA</span>\n                <span class=\"checkmark\"></span>\n              </label>\n            </div>\n            <div class=\"col-md-6\">\n              <h6 class=\"mb-2\">Company age</h6>\n              <label class=\"radio radio-outline-primary\">\n                <input\n                  type=\"radio\"\n                  name=\"experience\"\n                  [value]=\"1\"\n                  formControlName=\"experience\"\n                />\n                <span>Less than 1 Year</span>\n                <span class=\"checkmark\"></span>\n              </label>\n              <label class=\"radio radio-outline-success\">\n                <input\n                  type=\"radio\"\n                  name=\"experience\"\n                  [value]=\"3\"\n                  formControlName=\"experience\"\n                />\n                <span>1-5 Years</span>\n                <span class=\"checkmark\"></span>\n              </label>\n              <label class=\"radio radio-outline-warning\">\n                <input\n                  type=\"radio\"\n                  name=\"experience\"\n                  [value]=\"4\"\n                  formControlName=\"experience\"\n                />\n                <span>5+ Years</span>\n                <span class=\"checkmark\"></span>\n              </label>\n            </div>\n          </div>\n        </form>\n      </wizard-step>\n\n      <wizard-step [title]=\"'Payment'\" (onNext)=\"onStep3Next($event)\">\n        <form #paymentForm=\"ngForm\">\n          <div class=\"row\">\n            <div class=\"form-group col-md-6 mb-3\">\n              <label for=\"member-type\">Member Type</label>\n              <select class=\"form-control\" id=\"member-type\" name=\"member-type\">\n                <option [(ngModel)]=\"data.member_type\">Option 1</option>\n                <option [(ngModel)]=\"data.member_type\">Option 1</option>\n                <option [(ngModel)]=\"data.member_type\">Option 1</option>\n              </select>\n            </div>\n            <div class=\"form-group col-md-6 mb-3\">\n              <label for=\"payment-type\">Payment Type</label>\n              <select\n                class=\"form-control\"\n                id=\"payment-type\"\n                name=\"payment-type\"\n              >\n                <option [(ngModel)]=\"data.payment_type\">Option 1</option>\n                <option [(ngModel)]=\"data.payment_type\">Option 1</option>\n                <option [(ngModel)]=\"data.payment_type\">Option 1</option>\n              </select>\n            </div>\n            <div class=\"form-group col-md-6 mb-3\">\n              <label for=\"price\">Price</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"price\"\n                name=\"price\"\n                placeholder=\"ex : 100000\"\n                [(ngModel)]=\"data.price\"\n              />\n            </div>\n          </div>\n        </form>\n      </wizard-step>\n\n      <wizard-step [title]=\"'Final'\" (onComplete)=\"onComplete($event)\">\n        <div class=\"text-center mt-4 mb-4\">\n          <i\n            class=\"i-Checked-User text-32 mb-3 text-success d-inline-block\"\n          ></i>\n          <h5 class=\"font-weight-light\">\n            Thank you! You have completed all the steps.\n          </h5>\n        </div>\n      </wizard-step>\n    </form-wizard>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/member/member-edit/member-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/member/member-edit/member-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: MemberEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function() { return MemberEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(fb) {
        this.fb = fb;
        this.data = {
            email: ""
        };
    }
    MemberEditComponent.prototype.ngOnInit = function () {
        this.step2Form = this.fb.group({
            experience: [2]
        });
    };
    MemberEditComponent.prototype.onStep1Next = function (e) { };
    MemberEditComponent.prototype.onStep2Next = function (e) { };
    MemberEditComponent.prototype.onStep3Next = function (e) { };
    MemberEditComponent.prototype.onComplete = function (e) { };
    MemberEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-wizard",
            template: __webpack_require__(/*! ./member-edit.component.html */ "./src/app/views/member/member-edit/member-edit.component.html"),
            styles: [__webpack_require__(/*! ./member-edit.component.css */ "./src/app/views/member/member-edit/member-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "./src/app/views/member/member-leave/member-leave.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/member/member-leave/member-leave.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Member</h1>\n  <ul>\n    <li>Leave</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title mb-3\">Input Leave</div>\n        <form [formGroup]=\"formBasic\" (ngSubmit)=\"submit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"start-date\">Start date</label>\n              <div class=\"input-group\">\n                <input\n                  id=\"start-date\"\n                  class=\"form-control\"\n                  placeholder=\"yyyy-mm-dd\"\n                  name=\"start-date\"\n                  ngbDatepicker\n                  #start=\"ngbDatepicker\"\n                />\n                <div class=\"input-group-append\">\n                  <button\n                    class=\"btn btn-secondary\"\n                    (click)=\"start.toggle()\"\n                    type=\"button\"\n                  >\n                    <i class=\"icon-regular i-Calendar-4\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-6 form-group mb-3\">\n              <label for=\"end-date\">End date</label>\n              <div class=\"input-group\">\n                <input\n                  id=\"end-date\"\n                  class=\"form-control\"\n                  placeholder=\"yyyy-mm-dd\"\n                  name=\"end-date\"\n                  ngbDatepicker\n                  #end=\"ngbDatepicker\"\n                />\n                <div class=\"input-group-append\">\n                  <button\n                    class=\"btn btn-secondary\"\n                    (click)=\"end.toggle()\"\n                    type=\"button\"\n                  >\n                    <i class=\"icon-regular i-Calendar-4\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12\">\n              <btn-loading\n                btnClass=\"btn-primary btn-rounded\"\n                [loading]=\"loading\"\n                >Submit</btn-loading\n              >\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/member/member-leave/member-leave.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/views/member/member-leave/member-leave.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21lbWJlci9tZW1iZXItbGVhdmUvbWVtYmVyLWxlYXZlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/member/member-leave/member-leave.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/member/member-leave/member-leave.component.ts ***!
  \*********************************************************************/
/*! exports provided: MemberLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberLeaveComponent", function() { return MemberLeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberLeaveComponent = /** @class */ (function () {
    function MemberLeaveComponent(fb, toastr) {
        this.fb = fb;
        this.toastr = toastr;
    }
    MemberLeaveComponent.prototype.ngOnInit = function () {
        this.buildFormBasic();
        this.radioGroup = this.fb.group({
            radio: []
        });
    };
    MemberLeaveComponent.prototype.buildFormBasic = function () {
        this.formBasic = this.fb.group({
            experience: []
        });
    };
    MemberLeaveComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
            _this.toastr.success("Profile updated.", "Success!", {
                progressBar: true
            });
        }, 3000);
    };
    MemberLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-basic-form",
            template: __webpack_require__(/*! ./member-leave.component.html */ "./src/app/views/member/member-leave/member-leave.component.html"),
            styles: [__webpack_require__(/*! ./member-leave.component.scss */ "./src/app/views/member/member-leave/member-leave.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MemberLeaveComponent);
    return MemberLeaveComponent;
}());



/***/ }),

/***/ "./src/app/views/member/member-list/member-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/member/member-list/member-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21lbWJlci9tZW1iZXItbGlzdC9tZW1iZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/member/member-list/member-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/member/member-list/member-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"breadcrumb\">\n    <h1>Customer Search</h1>\n    <ul>\n      <li>List</li>\n    </ul>\n  </div>\n\n  <div class=\"separator-breadcrumb border-top\"></div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"form-group\">\n        <input\n          id=\"email\"\n          placeholder=\"Search By ID, Name or Phone\"\n          [formControl]=\"searchControl\"\n          class=\"form-control \"\n          type=\"email\"\n        />\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"card  o-hidden\">\n        <ngx-datatable\n          style=\"height: 500px; box-shadow: none\"\n          class=\"material fullscreen\"\n          [columnMode]=\"'force'\"\n          [headerHeight]=\"50\"\n          [footerHeight]=\"50\"\n          [rowHeight]=\"60\"\n          [scrollbarV]=\"true\"\n          [rows]=\"filteredMembers\"\n        >\n          <ngx-datatable-column prop=\"id_card_number\" [width]=\"80\">\n            <ng-template ngx-datatable-header-template>\n              ID Card\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column prop=\"name\">\n            <ng-template ngx-datatable-header-template>\n              Name\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column prop=\"phone\">\n            <ng-template ngx-datatable-header-template>\n              Phone\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column prop=\"state\">\n            <ng-template ngx-datatable-header-template>\n              State\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column>\n            <ng-template ngx-datatable-header-template>\n              Action\n            </ng-template>\n            <ng-template\n              ngx-datatable-cell-template\n              let-value=\"value\"\n              let-row=\"row\"\n              let-rowIndex=\"rowIndex\"\n            >\n              <a\n                href=\"#\"\n                routerLink=\"member/detail/{{ row.id }}\"\n                class=\"btn btn-primary\"\n                title=\"Detail\"\n                triggers=\"mouseenter:mouseleave\"\n              >\n                <i class=\"i-Information\"></i> Detail\n              </a>\n            </ng-template>\n          </ngx-datatable-column>\n        </ngx-datatable>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/member/member-list/member-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/member/member-list/member-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_member_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/member.service */ "./src/app/shared/services/member.service.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberComponent = /** @class */ (function () {
    function MemberComponent(memberService, authService) {
        this.memberService = memberService;
        this.authService = authService;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.members = [];
    }
    MemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getMember().subscribe(function (data) {
            _this.members = data["data"];
            _this.filteredMembers = data["data"];
        });
        this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200)).subscribe(function (value) {
            _this.filerData(value);
        });
    };
    MemberComponent.prototype.filerData = function (val) {
        if (val) {
            val = val.toLowerCase();
        }
        else {
            return (this.filteredMembers = this.members);
        }
        var columns = Object.keys(this.members[0]);
        if (!columns.length) {
            return;
        }
        var rows = this.members.filter(function (d) {
            for (var i = 0; i <= columns.length; i++) {
                var column = columns[i];
                // console.log(d[column]);
                if (d[column] &&
                    d[column]
                        .toString()
                        .toLowerCase()
                        .indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.filteredMembers = rows;
    };
    MemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-filter-table",
            template: __webpack_require__(/*! ./member-list.component.html */ "./src/app/views/member/member-list/member-list.component.html"),
            styles: [__webpack_require__(/*! ./member-list.component.css */ "./src/app/views/member/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_member_service__WEBPACK_IMPORTED_MODULE_1__["MemberService"],
            src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/views/member/member-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/member/member-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MemberRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberRoutingModule", function() { return MemberRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _member_list_member_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./member-list/member-list.component */ "./src/app/views/member/member-list/member-list.component.ts");
/* harmony import */ var _member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member-edit/member-edit.component */ "./src/app/views/member/member-edit/member-edit.component.ts");
/* harmony import */ var _member_attendance_member_attendance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./member-attendance/member-attendance.component */ "./src/app/views/member/member-attendance/member-attendance.component.ts");
/* harmony import */ var _member_leave_member_leave_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./member-leave/member-leave.component */ "./src/app/views/member/member-leave/member-leave.component.ts");
/* harmony import */ var _member_activation_member_activation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./member-activation/member-activation.component */ "./src/app/views/member/member-activation/member-activation.component.ts");
/* harmony import */ var _member_activation_success_member_activation_success_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./member-activation-success/member-activation-success.component */ "./src/app/views/member/member-activation-success/member-activation-success.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: "",
        component: _member_list_member_list_component__WEBPACK_IMPORTED_MODULE_2__["MemberComponent"]
    },
    {
        path: "member/edit/:id",
        component: _member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_3__["MemberEditComponent"]
    },
    {
        path: "member/detail/:id",
        component: _member_attendance_member_attendance_component__WEBPACK_IMPORTED_MODULE_4__["MemberAttendanceComponent"]
    },
    {
        path: "member/leave/:id",
        component: _member_leave_member_leave_component__WEBPACK_IMPORTED_MODULE_5__["MemberLeaveComponent"]
    },
    {
        path: "member/activation/:id",
        component: _member_activation_member_activation_component__WEBPACK_IMPORTED_MODULE_6__["MemberActivationComponent"]
    },
    {
        path: "member/activate/success",
        component: _member_activation_success_member_activation_success_component__WEBPACK_IMPORTED_MODULE_7__["MemberActivationSuccessComponent"]
    }
];
var MemberRoutingModule = /** @class */ (function () {
    function MemberRoutingModule() {
    }
    MemberRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MemberRoutingModule);
    return MemberRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/member/member.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/member/member.module.ts ***!
  \***********************************************/
/*! exports provided: MemberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberModule", function() { return MemberModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _member_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./member-routing.module */ "./src/app/views/member/member-routing.module.ts");
/* harmony import */ var _member_list_member_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./member-list/member-list.component */ "./src/app/views/member/member-list/member-list.component.ts");
/* harmony import */ var _member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./member-edit/member-edit.component */ "./src/app/views/member/member-edit/member-edit.component.ts");
/* harmony import */ var _member_attendance_member_attendance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./member-attendance/member-attendance.component */ "./src/app/views/member/member-attendance/member-attendance.component.ts");
/* harmony import */ var _member_leave_member_leave_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./member-leave/member-leave.component */ "./src/app/views/member/member-leave/member-leave.component.ts");
/* harmony import */ var _member_activation_member_activation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./member-activation/member-activation.component */ "./src/app/views/member/member-activation/member-activation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/components/form-wizard/form-wizard.module */ "./src/app/shared/components/form-wizard/form-wizard.module.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _member_activation_success_member_activation_success_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./member-activation-success/member-activation-success.component */ "./src/app/views/member/member-activation-success/member-activation-success.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var MemberModule = /** @class */ (function () {
    function MemberModule() {
    }
    MemberModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_12__["SharedComponentsModule"],
                _member_routing_module__WEBPACK_IMPORTED_MODULE_4__["MemberRoutingModule"],
                src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_13__["FormWizardModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"]
            ],
            declarations: [
                _member_list_member_list_component__WEBPACK_IMPORTED_MODULE_5__["MemberComponent"],
                _member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_6__["MemberEditComponent"],
                _member_attendance_member_attendance_component__WEBPACK_IMPORTED_MODULE_7__["MemberAttendanceComponent"],
                _member_leave_member_leave_component__WEBPACK_IMPORTED_MODULE_8__["MemberLeaveComponent"],
                _member_activation_member_activation_component__WEBPACK_IMPORTED_MODULE_9__["MemberActivationComponent"],
                _member_activation_success_member_activation_success_component__WEBPACK_IMPORTED_MODULE_15__["MemberActivationSuccessComponent"]
            ]
        })
    ], MemberModule);
    return MemberModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-member-member-module.js.map