(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-registration-registration-module"],{

/***/ "./src/app/views/registration/registration-form/registration-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/registration/registration-form/registration-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n    <h1>Online Registration</h1>\n    <ul>\n        <li><a href=\"\">Form</a></li>\n    </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <form-wizard>\n            <wizard-step [title]=\"'Basic Info'\" [isValid]=\"basicForm.form.valid\" (onNext)=\"onStep1Next($event)\">\n                <form #basicForm=\"ngForm\">\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-6 mb-3\">\n                            <label for=\"firstName\">Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"First name\" [(ngModel)]=\"data.firstName\">\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"exampleInputEmail1\">Email address</label>\n                            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" name=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Email Address\" [(ngModel)]=\"data.email\">\n                        </div>\n                        <div class=\"form-group col-md-6 mb-3\">\n                            <label for=\"lastName\">Mobile Phone Number</label>\n                            <input type=\"text\" class=\"form-control\" id=\"mobilephone\" name=\"mobilephone\" placeholder=\"Mobile Phone\" [(ngModel)]=\"data.lastName\">\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"phone\">ID Card (KTP/SIM/)</label>\n                            <input type=\"text\" class=\"form-control\" id=\"idcard\" name=\"idcard\" placeholder=\"ID Card\" [(ngModel)]=\"data.phone\">\n                        </div>\n                    </div>\n                </form>\n            </wizard-step>\n\n            <wizard-step [title]=\"'Agreement'\" [isValid]=\"step2Form.valid\" (onNext)=\"onStep2Next($event)\">\n                <form [formGroup]=\"step2Form\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <h6 class=\"mb-2 fancy-head\"><span>Personal Data of Participants</span></h6>\n                        </div>\n                        <div class=\"form-group col-md-6 mb-3\">\n                            <label for=\"firstName\">Address</label>\n                            <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"First name\" >\n                        </div>\n                        <div class=\"form-group col-md-6 mb-3\">\n                            <label for=\"firstName\">Date of Birth</label>\n                            <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"First name\" >\n                        </div>\n                        <div class=\"form-group col-md-6 mb-3\">\n                            <label for=\"firstName\">Contact Number:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"First name\" >\n                        </div>\n                        <div class=\"form-group col-md-6 mb-3\">\n                            <label for=\"firstName\">In an emergency, I would like EMPIRE FIT CLUB to Call:</label>\n                            <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"First name\" >\n                        </div>\n                    </div>\n\n                    <div class=\"row mt-4\">\n                        <div class=\"col-12 mb-3\">\n                            <h6 class=\"mb-2 fancy-head\"><span>Health Questions</span></h6>\n                        </div>\n                        <div class=\"col-12 mb-3\" *ngFor=\"let item of questions\">\n                            <label class=\"switch switch-primary mr-3\">\n                                <span>{{ item.question }}</span>\n                                <input type=\"checkbox\" name=\"{{ item.id }}\">\n                                <span class=\"slider\"></span>\n                            </label>\n                        </div>\n                    </div>\n\n                    <div class=\"row mt-4\">\n                        <div class=\"col-12 mb-3\">\n                            <h6 class=\"mb-2 fancy-head\"><span>Reviewer Note</span></h6>\n                        </div>\n\n                        <div class=\"col-12\">\n                            <textarea class=\"form-control\" name=\"reviewer_note\" rows=\"5\"></textarea>\n                        </div>\n                    </div>\n\n                    <div class=\"row mt-4\">\n                        <div class=\"col-12 mb-3\">\n                            <h6 class=\"mb-2 fancy-head\"><span>Photography and/or Video Release</span></h6>\n                        </div>\n\n                        <div class=\"col-12\">\n                            <p>Photography and/or Video Release of Participant involved in any activities offered by EMPIRE FIT CLUB may be photographed or videotaped during training. The undersigned hereby consents to the use of these photographs and/or videos without compensation, on the EMPIRE FIT CLUB website or in any editorial, promotional or marketing material produced and/or published by EMPIRE FIT CLUB.</p>\n                        </div>\n                    </div>\n\n                    <div class=\"row mt-4\">\n                        <div class=\"col-12 mb-3\">\n                            <h6 class=\"mb-2 fancy-head\"><span>Waiver and Release of Liability</span></h6>\n                        </div>\n\n                        <div class=\"col-12\">\n                            <ul class=\"list\" style=\"list-style:none\">\n                                <li><strong>(i)</strong> Express Assumption of Risk: I, the undersigned, am aware that there are significant risks involved in all aspects of physical training. These risks include, but are not limited to: falls, muscle strains, muscle pulls,  muscle tears,  broken  bones,  shin  splints,  heat  prostration,  injuries  to  knees; , injuries to back, injuries to foot, heart attacks, or any other illness or soreness  that I may  incur  which  can  result  in serious injury or death; injury or death  due to negligence  on  the  part of myself,  my training  partner, or other people around me; injury or death due to improper use or failure of equipment; strains and sprains. I am aware that any of these above mentioned risks may result in serious injury or death to myself and or my partner(s). I willingly assume full responsibility for  the  risks that I am exposing myself to and accept full responsibility for  any injury or death that may result from participation  in any activity or class while at, or under direction of EMPIRE FIT CLUB. I acknowledge that I have no physical impairments, injuries , or illnesses that will endanger me or others.</li>\n\n                                <li><strong>(ii)</strong> Release: In consideration of the above  mentioned  risks  and  hazards  and  in  consideration  of  the  fact that I am willingly and voluntarily participating in the activities offered by EMPIRE FIT CLUB, I,  the undersigned hereby release EMPIRE FIT CLUB,  their  directors,  coaches,  officers,  employees,  agents, from any and all liability, claims, demands,  actions or  rights  of  action, which are related  to,  arise  out  of,  or are in any way connected  with  my participation in this activity,  including  those  allegedly  attributed  to the negligent acts or omissions of the  above mentioned  parties . This  agreement  shall be binding  upon me, my spouse, my children, my guardians, my successors, representatives, heirs, executors, assigns, or transferees (collectively, the \"Releasors\"). I accept full and  complete  responsibility  for  the  safety  of myself, any guests, observers or other individuals who I have  invited  to  the  venue of  EMPIRE  FIT CLUB, and property, and I assume the risk of  damage, theft, loss  or  injury caused  by others  to  me,  my guests and property <br><br>\n\n                                If any portion of this agreement is held invalid, I agree that  the  remainder  of  the  agreement  shall remain in full legal force and effect. If I am signing on behalf of a minor child, I also give full permission for any person connected with EMPIRE FIT CLUB to administer first aid deemed necessary, and in case of serious illness or injury, I give permission to call for medical and or surgical care for the child and to transport the child to a medical facility deemed necessary for the wellbeing of the child </li>\n\n                                <li><strong>(iii)</strong> Indemnification: On behalf of the Releasers, the Participant recognizes that there is risk involved in the types of activities offered by EMPIRE FIT CLUB. Therefore the Participant accepts financial responsibility for any injury that the Participant may cause either to him/herself or to any other participant due to his/her negligence. Should the above mentioned parties, or anyone acting on their behalf, be required to incur attorney's fees and costs to enforce this agreement, I agree to reimburse them for such fees and costs. I further agree to indemnify and hold harmless EMPIRE FIT CLUB, their directors, coaches, officers, employees, agents from liability for the injury or death of any person(s) and damage to property that may result from my negligent or intentional act or omission while participating in <br>\n                                _____ activities offered by EMPIRE FIT CLUB, at the main building or aboard. This includes but is not limited to parks, recreational areas, playgrounds, areas adjacent to main building, and/or any area selected for training by EMPIRE FIT CLUB. <br><br>\n\n                                I Have read and understood the foregoing assumption of risk, and release of liability and I understand that by signing it obligates me to indemnify the parties named for any liability for injury or death of any person and damage to property caused by my negligent or intentional act or omission. I understand that by signing this form I am waiving valuable legal rights.</li>\n\n                                <li><strong>(iv)</strong> Promise Not To Bring Suit: I hereby agree and covenant not to, and shall cause the Releasors not to, bring a claim against, sue, demand compensation from or attach the property or assets of EMPIRE FIT CLUB or any of their directors, coaches, officers, employees, agents, for any loss or damage arising or resulting from my participation in EMPIRE FIT CLUB or my travel to or from or presence at the venue, 2nd forever release and discharge EMPIRE FIT CLUB or any of their directors, coaches, officers, employees, agents them from liability under such claims.</li>\n                            </ul>\n                        </div>\n                    </div>\n\n\n                </form>\n            </wizard-step>\n\n            <wizard-step [title]=\"'Thank You'\" (onNext)=\"onComplete($event)\">\n                \n                <div class=\"text-medium\">\n                    WE HAVE RECEIVED YOUR DATA, PLEASE COME TO OUR  CLUB AND TELL YOUR NAME OR PHONE NUMBER TO OUR FRONT OFFICER TO CONTINUE WITH THE MEMBERSHIP PLAN\n                </div>\n\n                <div class=\"fancy-head\"><span>Location</span></div>\n\n                <div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe width=\"600\" height=\"389\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=empire%20fit%20club%20jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>Werbung: <a href=\"https://www.jetzt-drucken-lassen.de\">jetzt-drucken-lassen.de</a></div><style>.mapouter{position:relative;text-align:right;height:389px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:389px;width:600px;}</style></div>\n                \n            </wizard-step>\n        </form-wizard>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/registration/registration-form/registration-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/registration/registration-form/registration-form.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24tZm9ybS9yZWdpc3RyYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/registration/registration-form/registration-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/registration/registration-form/registration-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_health_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/health-questions.service */ "./src/app/shared/services/health-questions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent(fb, HealthQuestionsService) {
        this.fb = fb;
        this.HealthQuestionsService = HealthQuestionsService;
        this.data = {
            email: ''
        };
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questions = '';
        this.step2Form = this.fb.group({
            experience: [2]
        });
        this.HealthQuestionsService.getQuestions().subscribe(function (data) {
            _this.questions = data["data"];
            console.log(_this.questions);
        });
        $('body').attr('id', 'registration');
    };
    RegistrationFormComponent.prototype.ngOnDestroy = function () {
        $('body').attr('id', '');
    };
    RegistrationFormComponent.prototype.onStep1Next = function (e) { };
    RegistrationFormComponent.prototype.onStep2Next = function (e) { };
    RegistrationFormComponent.prototype.onComplete = function (e) { };
    RegistrationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-registration-form",
            template: __webpack_require__(/*! ./registration-form.component.html */ "./src/app/views/registration/registration-form/registration-form.component.html"),
            styles: [__webpack_require__(/*! ./registration-form.component.scss */ "./src/app/views/registration/registration-form/registration-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_shared_services_health_questions_service__WEBPACK_IMPORTED_MODULE_2__["HealthQuestionsService"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/views/registration/registration-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/registration/registration-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/views/registration/registration-form/registration-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationFormComponent"]
    }
];
var RegistrationRoutingModule = /** @class */ (function () {
    function RegistrationRoutingModule() {
    }
    RegistrationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegistrationRoutingModule);
    return RegistrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/registration/registration.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/registration/registration.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/form-wizard/form-wizard.module */ "./src/app/shared/components/form-wizard/form-wizard.module.ts");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/views/registration/registration-routing.module.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/views/registration/registration-form/registration-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var RegistrationModule = /** @class */ (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_4__["FormWizardModule"],
                _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationRoutingModule"]
            ],
            declarations: [_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationFormComponent"]]
        })
    ], RegistrationModule);
    return RegistrationModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-registration-registration-module.js.map