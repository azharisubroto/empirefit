(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/finance/finance.module": [
		"./src/app/views/finance/finance.module.ts",
		"default~views-finance-finance-module~views-master-master-module~views-member-member-module~views-mem~e1c231e9",
		"common",
		"views-finance-finance-module"
	],
	"./views/master/master.module": [
		"./src/app/views/master/master.module.ts",
		"default~views-finance-finance-module~views-master-master-module~views-member-member-module~views-mem~e1c231e9",
		"default~views-master-master-module~views-member-member-module~views-registration-registration-module~621196b4",
		"default~views-master-master-module~views-member-member-module~views-staff-staff-module",
		"default~views-master-master-module~views-staff-staff-module",
		"common",
		"views-master-master-module"
	],
	"./views/member-partner/member-partner.module": [
		"./src/app/views/member-partner/member-partner.module.ts",
		"default~views-finance-finance-module~views-master-master-module~views-member-member-module~views-mem~e1c231e9",
		"common",
		"views-member-partner-member-partner-module"
	],
	"./views/member/member.module": [
		"./src/app/views/member/member.module.ts",
		"default~views-finance-finance-module~views-master-master-module~views-member-member-module~views-mem~e1c231e9",
		"default~views-master-master-module~views-member-member-module~views-registration-registration-module~621196b4",
		"default~views-master-master-module~views-member-member-module~views-staff-staff-module",
		"common",
		"views-member-member-module"
	],
	"./views/others/others.module": [
		"./src/app/views/others/others.module.ts",
		"views-others-others-module"
	],
	"./views/registration/registration.module": [
		"./src/app/views/registration/registration.module.ts",
		"default~views-finance-finance-module~views-master-master-module~views-member-member-module~views-mem~e1c231e9",
		"default~views-master-master-module~views-member-member-module~views-registration-registration-module~621196b4",
		"common",
		"views-registration-registration-module"
	],
	"./views/schedule/schedule.module": [
		"./src/app/views/schedule/schedule.module.ts",
		"default~views-finance-finance-module~views-master-master-module~views-member-member-module~views-mem~e1c231e9",
		"common",
		"views-schedule-schedule-module"
	],
	"./views/sessions/sessions.module": [
		"./src/app/views/sessions/sessions.module.ts",
		"views-sessions-sessions-module"
	],
	"./views/staff/staff.module": [
		"./src/app/views/staff/staff.module.ts",
		"default~views-finance-finance-module~views-master-master-module~views-member-member-module~views-mem~e1c231e9",
		"default~views-master-master-module~views-member-member-module~views-registration-registration-module~621196b4",
		"default~views-master-master-module~views-member-member-module~views-staff-staff-module",
		"default~views-master-master-module~views-staff-staff-module",
		"common",
		"views-staff-staff-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/layouts/auth-layout/auth-layout.component */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth.gaurd */ "./src/app/shared/services/auth.gaurd.ts");
/* harmony import */ var _shared_components_layouts_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/layouts/blank-layout/blank-layout.component */ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts");
/* harmony import */ var _shared_components_layouts_admin_layout_sidebar_large_admin_layout_sidebar_large_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component */ "./src/app/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var adminRoutes = [
    {
        path: "dashboard",
        loadChildren: "./views/member/member.module#MemberModule"
    },
    {
        path: "member-partner",
        loadChildren: "./views/member-partner/member-partner.module#MemberPartnerModule"
    },
    {
        path: "staff",
        loadChildren: "./views/staff/staff.module#StaffModule"
    },
    {
        path: "schedule",
        loadChildren: "./views/schedule/schedule.module#ScheduleModule"
    },
    {
        path: "registration",
        loadChildren: "./views/registration/registration.module#RegistrationModule"
    },
    {
        path: "finance",
        loadChildren: "./views/finance/finance.module#FinanceModule"
    },
    {
        path: "master",
        loadChildren: "./views/master/master.module#MasterModule"
    }
];
var routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },
    {
        path: "",
        component: _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__["AuthLayoutComponent"],
        children: [
            {
                path: "sessions",
                loadChildren: "./views/sessions/sessions.module#SessionsModule"
            }
        ]
    },
    {
        path: "",
        component: _shared_components_layouts_blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_4__["BlankLayoutComponent"],
        children: [
            {
                path: "others",
                loadChildren: "./views/others/others.module#OthersModule"
            }
        ]
    },
    {
        path: "",
        component: _shared_components_layouts_admin_layout_sidebar_large_admin_layout_sidebar_large_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutSidebarLargeComponent"],
        canActivate: [_shared_services_auth_gaurd__WEBPACK_IMPORTED_MODULE_3__["AuthGaurd"]],
        children: adminRoutes
    },
    {
        path: "**",
        redirectTo: "others/404"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, location, router) {
        this.authService = authService;
        this.location = location;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.title = "bootDash";
        if (window.location.href === "http://localhost:4200/sessions/signin") {
            console.log("signin page");
        }
        else {
            this.authService.checkAccess();
            console.log(window.location.href);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/inmemory-db/inmemory-db.service */ "./src/app/shared/inmemory-db/inmemory-db.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm5/ngx-webcam.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_7__["InMemoryDataService"], {
                    passThruUnknownUrl: true
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_webcam__WEBPACK_IMPORTED_MODULE_10__["WebcamModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/animations/shared-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/shared-animations.ts ***!
  \********************************************************/
/*! exports provided: SharedAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedAnimations", function() { return SharedAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var reusable = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
var SharedAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(reusable)])]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            display: 'block'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
];


/***/ }),

/***/ "./src/app/shared/components/btn-loading/btn-loading.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/btn-loading/btn-loading.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn {{btnClass}}\" [type]=\"type\" [disabled]=\"loading\" [ngClass]=\"{loading: loading}\">\n  <div class=\"btn-spinner float-left\" *ngIf=\"loading\"></div>\n  <span *ngIf=\"!loading\">  \n    <ng-content></ng-content>\n  </span>\n  <span *ngIf=\"loading\">{{loadingText}}</span>\n</button>"

/***/ }),

/***/ "./src/app/shared/components/btn-loading/btn-loading.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/btn-loading/btn-loading.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  position: relative;\n  transition: all .15s ease-in-out; }\n  button.loading {\n    padding-left: 36px; }\n  button .btn-spinner {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZW1waXJlZmUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9idG4tbG9hZGluZy9idG4tbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixnQ0FBZ0MsRUFBQTtFQUZwQztJQUlRLGtCQUFrQixFQUFBO0VBSjFCO0lBT1Esa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2J0bi1sb2FkaW5nL2J0bi1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgJi5sb2FkaW5nIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xuICAgIH1cbiAgICAuYnRuLXNwaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/btn-loading/btn-loading.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/btn-loading/btn-loading.component.ts ***!
  \************************************************************************/
/*! exports provided: BtnLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnLoadingComponent", function() { return BtnLoadingComponent; });
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

var BtnLoadingComponent = /** @class */ (function () {
    function BtnLoadingComponent() {
        this.loadingText = 'Please wait';
        this.type = 'submit';
    }
    BtnLoadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('loading'),
        __metadata("design:type", Boolean)
    ], BtnLoadingComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('btnClass'),
        __metadata("design:type", String)
    ], BtnLoadingComponent.prototype, "btnClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('loadingText'),
        __metadata("design:type", Object)
    ], BtnLoadingComponent.prototype, "loadingText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('type'),
        __metadata("design:type", String)
    ], BtnLoadingComponent.prototype, "type", void 0);
    BtnLoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'btn-loading',
            template: __webpack_require__(/*! ./btn-loading.component.html */ "./src/app/shared/components/btn-loading/btn-loading.component.html"),
            styles: [__webpack_require__(/*! ./btn-loading.component.scss */ "./src/app/shared/components/btn-loading/btn-loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BtnLoadingComponent);
    return BtnLoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/customizer/customizer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customizer\" [ngClass]=\"{ open: isOpen }\">\n  <div class=\"handle\" (click)=\"isOpen = !isOpen\">\n    <i class=\"i-Gear spin\"></i>\n  </div>\n  <div class=\"customizer-body\" perfectScrollbar>\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"tab-layouts, tab-sidebar-colors\">\n      <ngb-panel title=\"Layouts\" id=\"tab-layouts\">\n        <ng-template ngbPanelContent>\n          <div class=\"layouts\">\n            <div\n              *ngFor=\"let l of layouts\"\n              (click)=\"selectLayout(l)\"\n              class=\"layout-box\"\n              [ngClass]=\"{active: customizer.selectedLayout.name === l.name}\"\n            >\n              <img [src]=\"l.img\" alt=\"\" />\n              <i class=\"i-Eye\"></i>\n            </div>\n          </div>\n          <div class=\"text-center pt-3\">More layouts coming...</div>\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel id=\"tab-sidebar-colors\" title=\"Sidebar Colors\" *ngIf=\"customizer.selectedLayout.name !== 'applayout-sidebar-large'\">\n        <ng-template ngbPanelContent>\n          <div class=\"colors\">\n            <a \n                *ngFor=\"let c of colors\" \n                class=\"color {{c.class}}\"\n                [ngClass]=\"{active: customizer?.selectedSidebarColor?.class === c.class}\"\n                (click)=\"selectSidebarColor(c)\" \n                [title]=\"c.class\">\n                <i class=\"i-Eye\"></i>\n            </a>\n          </div>\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel title=\"Bootstrap themes\">\n        <ng-template ngbPanelContent>\n          <div class=\"colors\">\n            <a href=\"http://gull.ui-lib.com/purple/\" class=\"color purple\"></a>\n            <a href=\"http://gull.ui-lib.com/blue/\" class=\"color blue\"></a>\n          </div>\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel title=\"Others\">\n        <ng-template ngbPanelContent>\n            <label class=\"checkbox checkbox-primary\">\n                <input type=\"checkbox\" [(ngModel)]=\"isRTL\" (change)=\"toggleDir()\">\n                <span>Enable RTL</span>\n                <span class=\"checkmark\"></span>\n            </label>\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/customizer/customizer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1c3RvbWl6ZXIvY3VzdG9taXplci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/customizer/customizer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _services_customizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customizer.service */ "./src/app/shared/services/customizer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(navService, customizer, router) {
        this.navService = navService;
        this.customizer = customizer;
        this.router = router;
        this.isOpen = true;
        this.colors = [];
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav = this.navService.defaultMenu.slice();
        this.layouts = this.customizer.layouts;
        this.colors = this.customizer.colors;
        if (!this.customizer.selectedLayout) {
            this.layouts.forEach(function (layout) {
                if (layout.active) {
                    _this.selectLayout(layout);
                }
            });
        }
        if (!this.customizer.selectedSidebarColor) {
            this.colors.forEach(function (color) {
                if (color.active) {
                    _this.selectSidebarColor(color);
                }
            });
        }
    };
    CustomizerComponent.prototype.ngOnDestroy = function () { };
    CustomizerComponent.prototype.selectLayout = function (selectedLayout) {
        this.customizer.selectedLayout = selectedLayout;
        this.customizer.modifySidebarUrls(this.nav, selectedLayout.name);
        // this.navService.menuItems.next(this.nav);
        this.changeLayoutRoute(selectedLayout.name);
        // reset color on layout change
        if (this.customizer.selectedSidebarColor) {
            this.selectSidebarColor(this.customizer.selectedSidebarColor);
        }
    };
    CustomizerComponent.prototype.selectSidebarColor = function (color) {
        var _this = this;
        setTimeout(function () {
            var adminWrap = document.querySelector(".app-admin-wrap");
            var selectedColor = __assign({}, _this.customizer.selectedSidebarColor);
            _this.customizer.removeClass(adminWrap, selectedColor.sidebarClass);
            _this.customizer.addClass(adminWrap, color.sidebarClass);
            _this.customizer.selectedSidebarColor = color;
        }, 40);
    };
    CustomizerComponent.prototype.changeLayoutRoute = function (route) {
        var currentRoute = this.router.url;
        var changedRoute = this.customizer.replaceUrlString(route, currentRoute);
        this.router.navigateByUrl(changedRoute);
    };
    CustomizerComponent.prototype.toggleDir = function () {
        this.customizer.toggleDir(this.isRTL);
    };
    CustomizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-customizer",
            template: __webpack_require__(/*! ./customizer.component.html */ "./src/app/shared/components/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/shared/components/customizer/customizer.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            _services_customizer_service__WEBPACK_IMPORTED_MODULE_2__["CustomizerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/feather-icon/feather-icon.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/feather-icon/feather-icon.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i [attr.data-feather]=\"name\"></i>"

/***/ }),

/***/ "./src/app/shared/components/feather-icon/feather-icon.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/feather-icon/feather-icon.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZlYXRoZXItaWNvbi9mZWF0aGVyLWljb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/feather-icon/feather-icon.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/feather-icon/feather-icon.component.ts ***!
  \**************************************************************************/
/*! exports provided: FeatherIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatherIconComponent", function() { return FeatherIconComponent; });
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

var FeatherIconComponent = /** @class */ (function () {
    function FeatherIconComponent() {
    }
    FeatherIconComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            feather.replace();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('name'),
        __metadata("design:type", Object)
    ], FeatherIconComponent.prototype, "name", void 0);
    FeatherIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'feather-icon',
            template: __webpack_require__(/*! ./feather-icon.component.html */ "./src/app/shared/components/feather-icon/feather-icon.component.html"),
            styles: [__webpack_require__(/*! ./feather-icon.component.scss */ "./src/app/shared/components/feather-icon/feather-icon.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatherIconComponent);
    return FeatherIconComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-footer\">\n  <div\n    class=\"footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center\"\n  >\n    <span class=\"flex-grow-1\"></span>\n    <div class=\"d-flex align-items-center\">\n      <img class=\"logo\" src=\"./assets/images/logo.png\" alt=\"\" />\n      <div>\n        <p class=\"m-0\">&copy; 2019 Empire Fit Club</p>\n        <p class=\"m-0\">All rights reserved</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-admin-wrap layout-sidebar-compact clearfix\" \n[ngClass]=\"{'sidenav-open': navService.sidebarState.sidenavOpen}\">\n    <div class=\"side-content-wrap\">\n        <app-sidebar-compact></app-sidebar-compact>\n    </div>\n    <div class=\"main-content-wrap d-flex flex-column\"  \n    [perfectScrollbar]=\"{suppressScrollX: true}\">\n        <app-header-sidebar-compact></app-header-sidebar-compact>\n        <div class=\"main-content\">\n            <router-outlet></router-outlet>\n        </div>\n        <div class=\"flex-grow-1\"></div>\n        <app-footer></app-footer>\n        <div class=\"module-loader\" *ngIf=\"moduleLoading\">\n            <div class=\"spinner spinner-bubble spinner-bubble-primary mr-3\"></div>\n        </div>\n    </div>\n</div>\n<app-search *ngIf=\"searchService.searchOpen\"></app-search>\n"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvYWRtaW4tbGF5b3V0LXNpZGViYXItY29tcGFjdC9hZG1pbi1sYXlvdXQtc2lkZWJhci1jb21wYWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: AdminLayoutSidebarCompactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutSidebarCompactComponent", function() { return AdminLayoutSidebarCompactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminLayoutSidebarCompactComponent = /** @class */ (function () {
    function AdminLayoutSidebarCompactComponent(navService, searchService, router) {
        this.navService = navService;
        this.searchService = searchService;
        this.router = router;
    }
    AdminLayoutSidebarCompactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ResolveStart"]) {
                _this.moduleLoading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ResolveEnd"]) {
                _this.moduleLoading = false;
            }
        });
    };
    AdminLayoutSidebarCompactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout-sidebar-compact',
            template: __webpack_require__(/*! ./admin-layout-sidebar-compact.component.html */ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout-sidebar-compact.component.scss */ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLayoutSidebarCompactComponent);
    return AdminLayoutSidebarCompactComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header\">\n        <div class=\"logo\">\n            <img src=\"./assets/images/logo.png\" alt=\"\">\n        </div>\n    \n        <div class=\"menu-toggle\" (click)=\"toggelSidebar()\">\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n    \n        <div class=\"d-flex align-items-center\">\n            <!-- Mega menu -->\n            <div ngbDropdown class=\"mega-menu d-none d-md-block\">\n                <button ngbDropdownToggle href=\"#\" class=\"btn text-muted dropdown-toggle mr-3\">Mega Menu</button>\n                <div ngbDropdownMenu perfectScrollbar>\n                    <div class=\"row m-0\">\n                        <div class=\"col-md-4 p-4 bg-img\">\n                            <h2 class=\"title\">Mega Menu <br> Sidebar</h2>\n                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus\n                                laboriosam fugit, consequatur.\n                            </p>\n                            <p class=\"mb-4\">Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n                                Exercitationem odio amet eos dolore suscipit placeat.</p>\n                            <button class=\"btn btn-lg btn-rounded btn-outline-warning\">Learn More</button>\n                        </div>\n                        <div class=\"col-md-4 p-4\">\n                            <p class=\"text-primary text--cap border-bottom-primary d-inline-block\">Features</p>\n                            <div class=\"menu-icon-grid w-auto p-0\">\n                                <a href=\"#\"><i class=\"i-Shop-4\"></i> Home</a>\n                                <a href=\"#\"><i class=\"i-Library\"></i> UI Kits</a>\n                                <a href=\"#\"><i class=\"i-Drop\"></i> Apps</a>\n                                <a href=\"#\"><i class=\"i-File-Clipboard-File--Text\"></i> Forms</a>\n                                <a href=\"#\"><i class=\"i-Checked-User\"></i> Sessions</a>\n                                <a href=\"#\"><i class=\"i-Ambulance\"></i> Support</a>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4 p-4\">\n                            <p class=\"text-primary text--cap border-bottom-primary d-inline-block\">Components</p>\n                            <ul class=\"links\">\n                                <li><a href=\"accordion.html\">Accordion</a></li>\n                                <li><a href=\"alerts.html\">Alerts</a></li>\n                                <li><a href=\"buttons.html\">Buttons</a></li>\n                                <li><a href=\"badges.html\">Badges</a></li>\n                                <li><a href=\"carousel.html\">Carousels</a></li>\n                                <li><a href=\"lists.html\">Lists</a></li>\n                                <li><a href=\"popover.html\">Popover</a></li>\n                                <li><a href=\"tables.html\">Tables</a></li>\n                                <li><a href=\"datatables.html\">Datatables</a></li>\n                                <li><a href=\"modals.html\">Modals</a></li>\n                                <li><a href=\"nouislider.html\">Sliders</a></li>\n                                <li><a href=\"tabs.html\">Tabs</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- Search bar -->\n            <div class=\"search-bar\">\n                <input type=\"text\" placeholder=\"Search\" (focus)=\"searchService.searchOpen = true\">\n                <i class=\"search-icon text-muted i-Magnifi-Glass1\"></i>\n            </div>\n        </div>\n    \n        <div style=\"margin: auto\"></div>\n    \n        <div class=\"header-part-right\">\n            <i class=\"i-Magnifi-Glass1 header-icon\" role=\"button\" (click)=\"searchService.searchOpen = true\"></i>\n            <i fullScreenWindow class=\"i-Full-Screen header-icon d-none d-sm-inline-block\" role=\"button\"></i>\n            <div ngbDropdown [placement]=\"'bottom-right'\" class=\"d-none d-sm-inline-block\">\n                <i ngbDropdownToggle class=\"i-Gear text-muted header-icon\" role=\"button\"></i>\n                <div ngbDropdownMenu class=\"menu-icon-grid-dropdown\">\n                    <div class=\"menu-icon-grid\">\n                        <a href=\"#\"><i class=\"i-Shop-4\"></i> Home</a>\n                        <a href=\"#\"><i class=\"i-Library\"></i> UI Kits</a>\n                        <a href=\"#\"><i class=\"i-Drop\"></i> Apps</a>\n                        <a href=\"#\"><i class=\"i-File-Clipboard-File--Text\"></i> Forms</a>\n                        <a href=\"#\"><i class=\"i-Checked-User\"></i> Sessions</a>\n                        <a href=\"#\"><i class=\"i-Ambulance\"></i> Support</a>\n                    </div>\n                </div>\n            </div>\n    \n            <div ngbDropdown [placement]=\"'bottom-right'\">\n                <div class=\"badge-top-container\">\n                    <span class=\"badge badge-primary\">{{notifications?.length}}</span>\n                    <i ngbDropdownToggle class=\"i-Bell text-muted header-icon\" role=\"button\"></i>\n                </div>\n                <div ngbDropdownMenu class=\"notification-dropdown rtl-ps-none\" perfectScrollbar>\n                    <div class=\"dropdown-item d-flex\" *ngFor=\"let item of notifications\" [routerLink]=\"[item.link]\">\n                        <div class=\"notification-icon\">\n                            <i class=\"{{item.icon}} text-{{item.status}} mr-1\"></i>\n                        </div>\n                        <div class=\"notification-details flex-grow-1\">\n                            <p class=\"m-0 d-flex align-items-center\">\n                                <span>{{item.title}}</span>\n                                <span *ngIf=\"item.badge\" class=\"badge badge-pill badge-{{item.status}} ml-1 mr-1\">{{item.badge}}</span>\n                                <span class=\"flex-grow-1\"></span>\n                                <span class=\"text-small text-muted ml-auto\">{{item.time | relativeTime}}</span>\n                            </p>\n                            <p class=\"text-small text-muted m-0\">{{item.text | excerpt:30}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    \n            <div ngbDropdown [placement]=\"'bottom-right'\" class=\"user col align-self-end\">\n                <img src=\"./assets/images/faces/1.jpg\" id=\"userDropdown\" ngbDropdownToggle alt=\"\">\n    \n                <div ngbDropdownMenu aria-labelledby=\"userDropdown\">\n                    <div class=\"dropdown-header\">\n                        <i class=\"i-Lock-User mr-1\"></i> Timothy Carlson\n                    </div>\n                    <button class=\"dropdown-item\">Account settings</button>\n                    <button class=\"dropdown-item\">Billing history</button>\n                    <button class=\"dropdown-item\" (click)=\"signout()\">Sign out</button>\n                </div>\n            </div>\n    \n        </div>\n    \n    </div>"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvYWRtaW4tbGF5b3V0LXNpZGViYXItY29tcGFjdC9oZWFkZXItc2lkZWJhci1jb21wYWN0L2hlYWRlci1zaWRlYmFyLWNvbXBhY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: HeaderSidebarCompactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSidebarCompactComponent", function() { return HeaderSidebarCompactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderSidebarCompactComponent = /** @class */ (function () {
    function HeaderSidebarCompactComponent(navService, searchService, auth) {
        this.navService = navService;
        this.searchService = searchService;
        this.auth = auth;
        this.notifications = [
            {
                icon: "i-Speach-Bubble-6",
                title: "New message",
                badge: "3",
                text: "James: Hey! are you busy?",
                time: new Date(),
                status: "primary",
                link: "/chat"
            },
            {
                icon: "i-Receipt-3",
                title: "New order received",
                badge: "$4036",
                text: "1 Headphone, 3 iPhone x",
                time: new Date("11/11/2018"),
                status: "success",
                link: "/tables/full"
            },
            {
                icon: "i-Empty-Box",
                title: "Product out of stock",
                text: "Headphone E67, R98, XL90, Q77",
                time: new Date("11/10/2018"),
                status: "danger",
                link: "/tables/list"
            },
            {
                icon: "i-Data-Power",
                title: "Server up!",
                text: "Server rebooted successfully",
                time: new Date("11/08/2018"),
                status: "success",
                link: "/dashboard/v2"
            },
            {
                icon: "i-Data-Block",
                title: "Server down!",
                badge: "Resolved",
                text: "Region 1: Server crashed!",
                time: new Date("11/06/2018"),
                status: "danger",
                link: "/dashboard/v3"
            }
        ];
    }
    HeaderSidebarCompactComponent.prototype.ngOnInit = function () { };
    HeaderSidebarCompactComponent.prototype.toggelSidebar = function () {
        var state = this.navService.sidebarState;
        state.sidenavOpen = !state.sidenavOpen;
        state.childnavOpen = !state.childnavOpen;
    };
    HeaderSidebarCompactComponent.prototype.signout = function () {
        this.auth.signout();
    };
    HeaderSidebarCompactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header-sidebar-compact",
            template: __webpack_require__(/*! ./header-sidebar-compact.component.html */ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component.html"),
            styles: [__webpack_require__(/*! ./header-sidebar-compact.component.scss */ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderSidebarCompactComponent);
    return HeaderSidebarCompactComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{open: navService.sidebarState.sidenavOpen}\" class=\"sidebar-left rtl-ps-none\" perfectScrollbar>\n        <div class=\"logo\">\n            <img src=\"./assets/images/logo-white.png\" alt=\"\">\n        </div>\n        <ul class=\"navigation-left\">\n          <li [ngClass]=\"{active: item.active}\"\n            (click)=\"onClickChangeActiveFlag(item)\"\n            class=\"nav-item lvl1\" \n            *ngFor=\"let item of nav\"\n          >\n            <div class=\"nav-item-hold\" routerLink=\"{{item.state}}\" (click)=\"closeChildNav()\" *ngIf=\"item.type === 'link'\">\n              <i [class]=\"'nav-icon '+ item.icon \"></i>\n              <span class=\"nav-text\">{{item.name}}</span>\n            </div>\n            <div class=\"nav-item-hold\" (mouseenter)=\"selectItem(item)\" *ngIf=\"item.type === 'dropDown'\">\n              <i [class]=\"'nav-icon '+ item.icon \"></i>\n              <span class=\"nav-text\">{{item.name}}</span>\n            </div>\n            <div class=\"nav-item-hold\" *ngIf=\"item.type === 'extLink'\">\n              <a [href]=\"item.state\" target=\"_blank\">\n                  <i [class]=\"'nav-icon '+ item.icon \"></i>\n                  <span class=\"nav-text\">{{item.name}}</span>\n              </a>\n            </div>\n    \n            <div class=\"triangle\"></div>\n          </li>\n        </ul>\n    </div>\n    \n    <div [ngClass]=\"{open: navService.sidebarState.childnavOpen}\" class=\"sidebar-left-secondary rtl-ps-none\" perfectScrollbar>\n        <i class=\"sidebar-close i-Close\" (click)=\"toggelSidebar()\"></i>\n        <header>\n            <div class=\"logo\">\n                <img src=\"./assets/images/logo-text.png\" alt=\"\">\n            </div>            \n            <h6>{{selectedItem.name}}</h6>\n            <p>{{selectedItem.description}}</p>\n        </header>\n        <ng-container *ngTemplateOutlet=\"menuTemplate;context:{parentItem: selectedItem}\"></ng-container>\n    </div>\n    \n    <ng-template #menuTemplate let-parentItem=\"parentItem\">\n      <ul class=\"childNav\" appDropdown>\n        <li *ngFor=\"let item of parentItem?.sub\" appDropdownLink class=\"nav-item\">\n    \n          <a routerLink=\"{{item.state}}\" *ngIf=\"item.type === 'link'\" class=\"\" [ngClass]=\"{open: item.active}\" routerLinkActive=\"open\">\n            <i *ngIf=\"item.icon\" [class]=\"'nav-icon '+ item.icon \"></i>\n            <span class=\"item-name lvl1\">{{item.name}}</span>\n          </a>\n    \n          <div *ngIf=\"item.type === 'dropDown'\">\n            <a appDropdownToggle [ngClass]=\"{open: item.active}\" routerLinkActive=\"open\">\n              <i *ngIf=\"item.icon\" [class]=\"'nav-icon '+ item.icon \"></i>\n              <span class=\"item-name\">{{item.name}}</span>\n              <i class=\"dd-arrow i-Arrow-Down\"></i>\n            </a>\n              <ng-container  *ngTemplateOutlet=\"menuTemplate;context:{parentItem: item}\"></ng-container>\n          </div>\n    \n        </li>\n      </ul>\n    </ng-template>\n    \n    <div [ngClass]=\"{open: navService.sidebarState.childnavOpen}\" class=\"sidebar-overlay\" (click)=\"closeChildNav()\"></div>"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvYWRtaW4tbGF5b3V0LXNpZGViYXItY29tcGFjdC9zaWRlYmFyLWNvbXBhY3Qvc2lkZWJhci1jb21wYWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: SidebarCompactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarCompactComponent", function() { return SidebarCompactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils */ "./src/app/shared/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarCompactComponent = /** @class */ (function () {
    function SidebarCompactComponent(router, navService) {
        this.router = router;
        this.navService = navService;
    }
    SidebarCompactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSidebar();
        // CLOSE SIDENAV ON ROUTE CHANGE
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (routeChange) {
            _this.closeChildNav();
            if (_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isMobile()) {
                _this.navService.sidebarState.sidenavOpen = false;
            }
        });
        this.navService.menuItems$.subscribe(function (items) {
            _this.nav = items;
            _this.setActiveFlag();
        });
    };
    SidebarCompactComponent.prototype.selectItem = function (item) {
        this.navService.sidebarState.childnavOpen = true;
        this.selectedItem = item;
        this.setActiveMainItem(item);
    };
    SidebarCompactComponent.prototype.closeChildNav = function () {
        this.navService.sidebarState.childnavOpen = false;
        this.setActiveFlag();
    };
    SidebarCompactComponent.prototype.onClickChangeActiveFlag = function (item) {
        this.setActiveMainItem(item);
    };
    SidebarCompactComponent.prototype.setActiveMainItem = function (item) {
        this.nav.forEach(function (item) {
            item.active = false;
        });
        item.active = true;
    };
    SidebarCompactComponent.prototype.setActiveFlag = function () {
        var _this = this;
        if (window && window.location) {
            var activeRoute_1 = window.location.hash || window.location.pathname;
            this.nav.forEach(function (item) {
                item.active = false;
                if (activeRoute_1.indexOf(item.state) !== -1) {
                    _this.selectedItem = item;
                    item.active = true;
                }
                if (item.sub) {
                    item.sub.forEach(function (subItem) {
                        subItem.active = false;
                        if (activeRoute_1.indexOf(subItem.state) !== -1) {
                            _this.selectedItem = item;
                            item.active = true;
                            // subItem.active = true;
                            // debugger;
                        }
                        if (subItem.sub) {
                            subItem.sub.forEach(function (subChildItem) {
                                if (activeRoute_1.indexOf(subChildItem.state) !== -1) {
                                    _this.selectedItem = item;
                                    item.active = true;
                                    subItem.active = true;
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    SidebarCompactComponent.prototype.updateSidebar = function () {
        if (_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isMobile()) {
            this.navService.sidebarState.sidenavOpen = false;
            this.navService.sidebarState.childnavOpen = false;
        }
        else {
            this.navService.sidebarState.sidenavOpen = true;
        }
    };
    SidebarCompactComponent.prototype.toggelSidebar = function () {
        var state = this.navService.sidebarState;
        state.sidenavOpen = !state.sidenavOpen;
        state.childnavOpen = !state.childnavOpen;
    };
    SidebarCompactComponent.prototype.onResize = function (event) {
        this.updateSidebar();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarCompactComponent.prototype, "onResize", null);
    SidebarCompactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sidebar-compact",
            template: __webpack_require__(/*! ./sidebar-compact.component.html */ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component.html"),
            styles: [__webpack_require__(/*! ./sidebar-compact.component.scss */ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]])
    ], SidebarCompactComponent);
    return SidebarCompactComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-admin-wrap layout-sidebar-large\">\n    <div>\n        <app-header-sidebar-large></app-header-sidebar-large>\n    </div>\n    <div class=\"side-content-wrap\">\n        <app-sidebar-large></app-sidebar-large>\n    </div>\n    <div class=\"main-content-wrap d-flex flex-column\" \n    [ngClass]=\"{'sidenav-open': navService.sidebarState.sidenavOpen}\" \n    [perfectScrollbar]=\"{suppressScrollX: true}\">\n        <router-outlet></router-outlet>\n        <div class=\"flex-grow-1\"></div>\n        <app-footer></app-footer>\n        <div class=\"module-loader\" *ngIf=\"moduleLoading\">\n            <div class=\"spinner spinner-bubble spinner-bubble-primary mr-3\"></div>\n        </div>\n    </div>\n</div>\n<app-search *ngIf=\"searchService.searchOpen\"></app-search>"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvYWRtaW4tbGF5b3V0LXNpZGViYXItbGFyZ2UvYWRtaW4tbGF5b3V0LXNpZGViYXItbGFyZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AdminLayoutSidebarLargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutSidebarLargeComponent", function() { return AdminLayoutSidebarLargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutSidebarLargeComponent = /** @class */ (function () {
    function AdminLayoutSidebarLargeComponent(navService, searchService, router) {
        this.navService = navService;
        this.searchService = searchService;
        this.router = router;
    }
    AdminLayoutSidebarLargeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ResolveStart"]) {
                _this.moduleLoading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ResolveEnd"]) {
                _this.moduleLoading = false;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"]),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"])
    ], AdminLayoutSidebarLargeComponent.prototype, "perfectScrollbar", void 0);
    AdminLayoutSidebarLargeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout-sidebar-large',
            template: __webpack_require__(/*! ./admin-layout-sidebar-large.component.html */ "./src/app/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout-sidebar-large.component.scss */ "./src/app/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            src_app_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLayoutSidebarLargeComponent);
    return AdminLayoutSidebarLargeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-header\">\n        <div class=\"logo\">\n            <img src=\"./assets/images/logo.png\" alt=\"\">\n        </div>\n    \n        <div class=\"menu-toggle d-block d-md-none\" (click)=\"toggelSidebar()\">\n            <div></div>\n            <div></div>\n            <div></div>\n        </div>\n    \n        <div style=\"margin: auto\"></div>\n    \n        <div class=\"header-part-right\">\n            <div ngbDropdown [placement]=\"'bottom-right'\" class=\"user col align-self-end\">\n                <img src=\"./assets/images/faces/1.jpg\" id=\"userDropdown\" ngbDropdownToggle alt=\"\">\n    \n                <div ngbDropdownMenu aria-labelledby=\"userDropdown\" class=\"header-account-dropdown\">\n                    <div class=\"dropdown-header\">\n                        <i class=\"i-Lock-User mr-1\"></i> Timothy Carlson\n                    </div>\n                    <button class=\"dropdown-item\">Account settings</button>\n                    <button class=\"dropdown-item\">Billing history</button>\n                    <button class=\"dropdown-item\" (click)=\"signout()\">Sign out</button>\n                </div>\n            </div>\n    \n        </div>\n    \n    </div>"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvYWRtaW4tbGF5b3V0LXNpZGViYXItbGFyZ2UvaGVhZGVyLXNpZGViYXItbGFyZ2UvaGVhZGVyLXNpZGViYXItbGFyZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: HeaderSidebarLargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSidebarLargeComponent", function() { return HeaderSidebarLargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderSidebarLargeComponent = /** @class */ (function () {
    function HeaderSidebarLargeComponent(navService, searchService, auth) {
        this.navService = navService;
        this.searchService = searchService;
        this.auth = auth;
        this.notifications = [
            {
                icon: 'i-Speach-Bubble-6',
                title: 'New message',
                badge: '3',
                text: 'James: Hey! are you busy?',
                time: new Date(),
                status: 'primary',
                link: '/chat'
            },
            {
                icon: 'i-Receipt-3',
                title: 'New order received',
                badge: '$4036',
                text: '1 Headphone, 3 iPhone x',
                time: new Date('11/11/2018'),
                status: 'success',
                link: '/tables/full'
            },
            {
                icon: 'i-Empty-Box',
                title: 'Product out of stock',
                text: 'Headphone E67, R98, XL90, Q77',
                time: new Date('11/10/2018'),
                status: 'danger',
                link: '/tables/list'
            },
            {
                icon: 'i-Data-Power',
                title: 'Server up!',
                text: 'Server rebooted successfully',
                time: new Date('11/08/2018'),
                status: 'success',
                link: '/dashboard/v2'
            },
            {
                icon: 'i-Data-Block',
                title: 'Server down!',
                badge: 'Resolved',
                text: 'Region 1: Server crashed!',
                time: new Date('11/06/2018'),
                status: 'danger',
                link: '/dashboard/v3'
            }
        ];
    }
    HeaderSidebarLargeComponent.prototype.ngOnInit = function () {
    };
    HeaderSidebarLargeComponent.prototype.toggelSidebar = function () {
        var state = this.navService.sidebarState;
        if (state.childnavOpen && state.sidenavOpen) {
            return state.childnavOpen = false;
        }
        if (!state.childnavOpen && state.sidenavOpen) {
            return state.sidenavOpen = false;
        }
        if (!state.sidenavOpen && !state.childnavOpen) {
            state.sidenavOpen = true;
            setTimeout(function () {
                state.childnavOpen = true;
            }, 50);
        }
    };
    HeaderSidebarLargeComponent.prototype.signout = function () {
        this.auth.signout();
    };
    HeaderSidebarLargeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-sidebar-large',
            template: __webpack_require__(/*! ./header-sidebar-large.component.html */ "./src/app/shared/components/layouts/admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component.html"),
            styles: [__webpack_require__(/*! ./header-sidebar-large.component.scss */ "./src/app/shared/components/layouts/admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], HeaderSidebarLargeComponent);
    return HeaderSidebarLargeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-large/sidebar-large/sidebar-large.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-large/sidebar-large/sidebar-large.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  [ngClass]=\"{ open: navService.sidebarState.sidenavOpen }\"\n  class=\"sidebar-left rtl-ps-none\"\n  [perfectScrollbar]=\"{ suppressScrollX: true }\"\n>\n  <div class=\"logo\">\n    <img src=\"./assets/images/logo.png\" alt=\"\" />\n  </div>\n  <ul class=\"navigation-left\">\n    <li\n      [ngClass]=\"{ active: item.active }\"\n      (click)=\"onClickChangeActiveFlag(item)\"\n      class=\"nav-item lvl1\"\n      *ngFor=\"let item of nav\"\n    >\n      <div\n        class=\"nav-item-hold\"\n        routerLink=\"{{ item.state }}\"\n        (click)=\"closeChildNav()\"\n        *ngIf=\"item.type === 'link'\"\n      >\n        <i [class]=\"'nav-icon ' + item.icon\"></i>\n        <span class=\"nav-text\">{{ item.name }}</span>\n      </div>\n      <div\n        class=\"nav-item-hold\"\n        (mouseenter)=\"selectItem(item)\"\n        *ngIf=\"item.type === 'dropDown'\"\n      >\n        <i [class]=\"'nav-icon ' + item.icon\"></i>\n        <span class=\"nav-text\">{{ item.name }}</span>\n      </div>\n      <div class=\"nav-item-hold\" *ngIf=\"item.type === 'extLink'\">\n        <a [href]=\"item.state\" target=\"_blank\">\n          <i [class]=\"'nav-icon ' + item.icon\"></i>\n          <span class=\"nav-text\">{{ item.name }}</span>\n        </a>\n      </div>\n\n      <div class=\"triangle\"></div>\n    </li>\n    <li class=\"nav-item lvl1 d-md-none\">\n        <div class=\"nav-item-hold\" style=\"opacity:0\">\n          <i class=\"nav-icon i-Folders\"></i>\n          <span _ngcontent-c3=\"\" class=\"nav-text\">Master</span>\n        </div>\n    </li>\n    <li class=\"nav-item lvl1 d-md-none\">\n        <div class=\"nav-item-hold\" style=\"opacity:0\">\n          <i class=\"nav-icon i-Folders\"></i>\n          <span _ngcontent-c3=\"\" class=\"nav-text\">Master</span>\n        </div>\n    </li>\n  </ul>\n</div>\n\n<div\n  [ngClass]=\"{ open: navService.sidebarState.childnavOpen }\"\n  class=\"sidebar-left-secondary rtl-ps-none\"\n  [perfectScrollbar]=\"{ suppressScrollX: true }\"\n>\n  <header>\n    <h6>Apps</h6>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n  </header>\n  <ng-container\n    *ngTemplateOutlet=\"menuTemplate; context: { parentItem: selectedItem }\"\n  ></ng-container>\n</div>\n\n<ng-template #menuTemplate let-parentItem=\"parentItem\">\n  <ul class=\"childNav\" appDropdown>\n    <li *ngFor=\"let item of parentItem?.sub\" appDropdownLink class=\"nav-item\">\n      <a\n        routerLink=\"{{ item.state }}\"\n        *ngIf=\"item.type === 'link'\"\n        class=\"\"\n        routerLinkActive=\"open\"\n      >\n        <i *ngIf=\"item.icon\" [class]=\"'nav-icon ' + item.icon\"></i>\n        <span class=\"item-name lvl1\">{{ item.name }}</span>\n      </a>\n\n      <div *ngIf=\"item.type === 'dropDown'\">\n        <a\n          appDropdownToggle\n          [ngClass]=\"{ open: item.active }\"\n          routerLinkActive=\"open\"\n        >\n          <i *ngIf=\"item.icon\" [class]=\"'nav-icon ' + item.icon\"></i>\n          <span class=\"item-name\">{{ item.name }}</span>\n          <i class=\"dd-arrow i-Arrow-Down\"></i>\n        </a>\n        <ng-container\n          *ngTemplateOutlet=\"menuTemplate; context: { parentItem: item }\"\n        ></ng-container>\n      </div>\n    </li>\n  </ul>\n</ng-template>\n\n<div\n  [ngClass]=\"{ open: navService.sidebarState.childnavOpen }\"\n  class=\"sidebar-overlay\"\n  (click)=\"closeChildNav()\"\n></div>\n"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-large/sidebar-large/sidebar-large.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-large/sidebar-large/sidebar-large.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvYWRtaW4tbGF5b3V0LXNpZGViYXItbGFyZ2Uvc2lkZWJhci1sYXJnZS9zaWRlYmFyLWxhcmdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/layouts/admin-layout-sidebar-large/sidebar-large/sidebar-large.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/admin-layout-sidebar-large/sidebar-large/sidebar-large.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: SidebarLargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLargeComponent", function() { return SidebarLargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/navigation.service */ "./src/app/shared/services/navigation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils */ "./src/app/shared/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarLargeComponent = /** @class */ (function () {
    function SidebarLargeComponent(router, navService) {
        this.router = router;
        this.navService = navService;
    }
    SidebarLargeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateSidebar();
        // CLOSE SIDENAV ON ROUTE CHANGE
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (routeChange) {
            _this.closeChildNav();
            if (_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isMobile()) {
                _this.navService.sidebarState.sidenavOpen = false;
            }
        });
        this.navService.menuItems$
            .subscribe(function (items) {
            _this.nav = items;
            _this.setActiveFlag();
        });
    };
    SidebarLargeComponent.prototype.selectItem = function (item) {
        this.navService.sidebarState.childnavOpen = true;
        this.selectedItem = item;
        this.setActiveMainItem(item);
    };
    SidebarLargeComponent.prototype.closeChildNav = function () {
        this.navService.sidebarState.childnavOpen = false;
        this.setActiveFlag();
    };
    SidebarLargeComponent.prototype.onClickChangeActiveFlag = function (item) {
        this.setActiveMainItem(item);
    };
    SidebarLargeComponent.prototype.setActiveMainItem = function (item) {
        this.nav.forEach(function (item) {
            item.active = false;
        });
        item.active = true;
    };
    SidebarLargeComponent.prototype.setActiveFlag = function () {
        var _this = this;
        if (window && window.location) {
            var activeRoute_1 = window.location.hash || window.location.pathname;
            this.nav.forEach(function (item) {
                item.active = false;
                if (activeRoute_1.indexOf(item.state) !== -1) {
                    _this.selectedItem = item;
                    item.active = true;
                }
                if (item.sub) {
                    item.sub.forEach(function (subItem) {
                        subItem.active = false;
                        if (activeRoute_1.indexOf(subItem.state) !== -1) {
                            _this.selectedItem = item;
                            item.active = true;
                        }
                        if (subItem.sub) {
                            subItem.sub.forEach(function (subChildItem) {
                                if (activeRoute_1.indexOf(subChildItem.state) !== -1) {
                                    _this.selectedItem = item;
                                    item.active = true;
                                    subItem.active = true;
                                }
                            });
                        }
                    });
                }
            });
        }
    };
    SidebarLargeComponent.prototype.updateSidebar = function () {
        if (_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isMobile()) {
            this.navService.sidebarState.sidenavOpen = false;
            this.navService.sidebarState.childnavOpen = false;
        }
        else {
            this.navService.sidebarState.sidenavOpen = true;
        }
    };
    SidebarLargeComponent.prototype.onResize = function (event) {
        this.updateSidebar();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarLargeComponent.prototype, "onResize", null);
    SidebarLargeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-large',
            template: __webpack_require__(/*! ./sidebar-large.component.html */ "./src/app/shared/components/layouts/admin-layout-sidebar-large/sidebar-large/sidebar-large.component.html"),
            styles: [__webpack_require__(/*! ./sidebar-large.component.scss */ "./src/app/shared/components/layouts/admin-layout-sidebar-large/sidebar-large/sidebar-large.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]])
    ], SidebarLargeComponent);
    return SidebarLargeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-layout-wrap\"\n    style=\"background-image: url(./assets/images/photo-wide-4.jpg)\">\n    <div class=\"auth-content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
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

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/blank-layout/blank-layout.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/layouts/blank-layout/blank-layout.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dHMvYmxhbmstbGF5b3V0L2JsYW5rLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BlankLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLayoutComponent", function() { return BlankLayoutComponent; });
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

var BlankLayoutComponent = /** @class */ (function () {
    function BlankLayoutComponent() {
    }
    BlankLayoutComponent.prototype.ngOnInit = function () {
    };
    BlankLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank-layout',
            template: __webpack_require__(/*! ./blank-layout.component.html */ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.html"),
            styles: [__webpack_require__(/*! ./blank-layout.component.scss */ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankLayoutComponent);
    return BlankLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layouts/layouts.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/layouts/layouts.module.ts ***!
  \*************************************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_layout_sidebar_large_admin_layout_sidebar_large_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout-sidebar-large/admin-layout-sidebar-large.component */ "./src/app/shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component.ts");
/* harmony import */ var _admin_layout_sidebar_large_header_sidebar_large_header_sidebar_large_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component */ "./src/app/shared/components/layouts/admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component.ts");
/* harmony import */ var _admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout-sidebar-compact/admin-layout-sidebar-compact.component */ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component.ts");
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blank-layout/blank-layout.component */ "./src/app/shared/components/layouts/blank-layout/blank-layout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../search/search.module */ "./src/app/shared/components/search/search.module.ts");
/* harmony import */ var _admin_layout_sidebar_large_sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-layout-sidebar-large/sidebar-large/sidebar-large.component */ "./src/app/shared/components/layouts/admin-layout-sidebar-large/sidebar-large/sidebar-large.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _admin_layout_sidebar_compact_sidebar_compact_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component */ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component.ts");
/* harmony import */ var _admin_layout_sidebar_compact_header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component */ "./src/app/shared/components/layouts/admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../customizer/customizer.component */ "./src/app/shared/components/customizer/customizer.component.ts");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var components = [
    _admin_layout_sidebar_compact_header_sidebar_compact_header_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_14__["HeaderSidebarCompactComponent"],
    _admin_layout_sidebar_large_header_sidebar_large_header_sidebar_large_component__WEBPACK_IMPORTED_MODULE_3__["HeaderSidebarLargeComponent"],
    _admin_layout_sidebar_large_sidebar_large_sidebar_large_component__WEBPACK_IMPORTED_MODULE_11__["SidebarLargeComponent"],
    _admin_layout_sidebar_compact_sidebar_compact_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_13__["SidebarCompactComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
    _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_16__["CustomizerComponent"],
    _admin_layout_sidebar_large_admin_layout_sidebar_large_component__WEBPACK_IMPORTED_MODULE_2__["AdminLayoutSidebarLargeComponent"],
    _admin_layout_sidebar_compact_admin_layout_sidebar_compact_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutSidebarCompactComponent"],
    _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
    _blank_layout_blank_layout_component__WEBPACK_IMPORTED_MODULE_6__["BlankLayoutComponent"],
];
var LayoutsModule = /** @class */ (function () {
    function LayoutsModule() {
    }
    LayoutsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _search_search_module__WEBPACK_IMPORTED_MODULE_10__["SearchModule"],
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_17__["SharedDirectivesModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: components,
            exports: components
        })
    ], LayoutsModule);
    return LayoutsModule;
}());



/***/ }),

/***/ "./src/app/shared/components/search/search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-ui rtl-ps-none\" perfectScrollbar [@animate]=\"{value:'*',params:{y:'120px',opacity:'0',delay:'100ms', duration: '400ms'}}\">\n\t<div class=\"search-header\">\n\t\t<img src=\"./assets/images/logo.png\" alt=\"\" class=\"logo\">\n\t\t<button class=\"btn btn-icon bg-transparent float-right mt-2\" (click)=\"searchService.searchOpen = false\">\n\t\t\t<i class=\"i-Close-Window text-22 text-muted\"></i>\n\t\t</button>\n\t</div>\n\n\t<input type=\"text\" placeholder=\"Type here\" class=\"search-input\" [formControl]=\"searchCtrl\" autofocus>\n\n\t<div class=\"search-title\">\n\t\t<span class=\"text-muted\">Search results</span>\n\t</div>\n\n\t<div class=\"search-results list-horizontal\">\n\t\t<div *ngFor=\"let item of results$ | async | paginate: { itemsPerPage: pageSize, currentPage: page }; let i = index;\" \n\t\t\tclass=\"list-item col-md-12 p-0\"\n\t\t\t[@animate]=\"{value:'*',params:{delay: (i*100)+'ms', y:'50px'}}\"\n\t\t>\n\t\t\t<div class=\"card o-hidden flex-row mb-4 d-flex\">\n\t\t\t\t<div class=\"list-thumb d-flex\">\n\t\t\t\t\t<!-- TUMBNAIL -->\n\t\t\t\t\t<img [src]=\"item.photo\" alt=\"\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"flex-grow-1 pl-2 d-flex\">\n\t\t\t\t\t<div class=\"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row\">\n\t\t\t\t\t\t<!-- OTHER DATA -->\n\t\t\t\t\t\t<a href=\"\" class=\"w-40 w-sm-100\">\n\t\t\t\t\t\t<div class=\"item-title\">{{item.name}}</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<p class=\"m-0 text-muted text-small w-15 w-sm-100\">Gadget</p>\n\t\t\t\t\t\t<p class=\"m-0 text-muted text-small w-15 w-sm-100\">\n\t\t\t\t\t\t{{item?.price?.sale | currency}}\n\t\t\t\t\t\t<del class=\"text-secondary\">{{item?.price?.previous | currency}}</del>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges\">\n\t\t\t\t\t\t<span class=\"badge badge-outline-{{item?.badge?.color}}\">{{item?.badge?.text}}</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- PAGINATION CONTROL -->\n\t<div class=\"col-md-12 mt-3\" *ngIf=\"results$ | async\">\n\t\t<pagination-controls (pageChange)=\"page = $event\" previousLabel=\"\" nextLabel=\"\"></pagination-controls>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/search/search.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/search/search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-layer.service */ "./src/app/shared/services/data-layer.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _animations_shared_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/shared/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = /** @class */ (function () {
    function SearchComponent(dl, searchService) {
        this.dl = dl;
        this.searchService = searchService;
        this.page = 1;
        this.pageSize = 6;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.results$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.dl.getProducts(), this.searchCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var products = _a[0], searchTerm = _a[1];
            return products.filter(function (p) {
                return p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            });
        }));
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/shared/components/search/search.component.html"),
            animations: [_animations_shared_animations__WEBPACK_IMPORTED_MODULE_5__["SharedAnimations"]],
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/shared/components/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__["DataLayerService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/search/search.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/search/search.module.ts ***!
  \***********************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component */ "./src/app/shared/components/search/search.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]
            ],
            declarations: [_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]],
            exports: [_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/shared/components/shared-components.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/shared-components.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btn-loading/btn-loading.component */ "./src/app/shared/components/btn-loading/btn-loading.component.ts");
/* harmony import */ var _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feather-icon/feather-icon.component */ "./src/app/shared/components/feather-icon/feather-icon.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.module */ "./src/app/shared/components/search/search.module.ts");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/layouts.module */ "./src/app/shared/components/layouts/layouts.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var components = [
    _btn_loading_btn_loading_component__WEBPACK_IMPORTED_MODULE_2__["BtnLoadingComponent"],
    _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconComponent"],
];
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_10__["LayoutsModule"],
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__["SharedPipesModule"],
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                _search_search_module__WEBPACK_IMPORTED_MODULE_7__["SearchModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            declarations: components,
            exports: components
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());



/***/ }),

/***/ "./src/app/shared/directives/dropdown-anchor.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-anchor.directive.ts ***!
  \****************************************************************/
/*! exports provided: DropdownAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownAnchorDirective", function() { return DropdownAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DropdownAnchorDirective = /** @class */ (function () {
    function DropdownAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    DropdownAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropdownAnchorDirective.prototype, "onClick", null);
    DropdownAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdownToggle]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"])),
        __metadata("design:paramtypes", [_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"]])
    ], DropdownAnchorDirective);
    return DropdownAnchorDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/dropdown-link.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-link.directive.ts ***!
  \**************************************************************/
/*! exports provided: DropdownLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownLinkDirective", function() { return DropdownLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DropdownLinkDirective = /** @class */ (function () {
    function DropdownLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(DropdownLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    DropdownLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    DropdownLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    DropdownLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropdownLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DropdownLinkDirective.prototype, "open", null);
    DropdownLinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdownLink]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"])),
        __metadata("design:paramtypes", [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"]])
    ], DropdownLinkDirective);
    return DropdownLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/dropdown.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/*! exports provided: AppDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDropdownDirective", function() { return AppDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppDropdownDirective = /** @class */ (function () {
    function AppDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AppDropdownDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AppDropdownDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AppDropdownDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AppDropdownDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AppDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (event) {
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AppDropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppDropdownDirective);
    return AppDropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/full-screen.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/full-screen.directive.ts ***!
  \************************************************************/
/*! exports provided: FullScreenWindowDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenWindowDirective", function() { return FullScreenWindowDirective; });
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

var FullScreenWindowDirective = /** @class */ (function () {
    function FullScreenWindowDirective() {
    }
    // Full screen
    FullScreenWindowDirective.prototype.cancelFullScreen = function (el) {
        var requestMethod = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullscreen;
        if (requestMethod) { // cancel full screen.
            requestMethod.call(el);
        }
        // else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        //     var wscript = new ActiveXObject("WScript.Shell");
        //     if (wscript !== null) {
        //         wscript.SendKeys("{F11}");
        //     }
        // }
    };
    FullScreenWindowDirective.prototype.requestFullScreen = function (el) {
        // Supports most browsers and their versions.
        var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if (requestMethod) { // Native full screen.
            requestMethod.call(el);
        }
        // else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        //     var wscript = new ActiveXObject("WScript.Shell");
        //     if (wscript !== null) {
        //         wscript.SendKeys("{F11}");
        //     }
        // }
        return false;
    };
    FullScreenWindowDirective.prototype.toggleFullscreen = function () {
        var elem = document.body;
        var isInFullScreen = (document['fullScreenElement'] && document['fullScreenElement'] !== null) || (document['mozFullScreen'] || document['webkitIsFullScreen']);
        if (isInFullScreen) {
            this.cancelFullScreen(document);
        }
        else {
            this.requestFullScreen(elem);
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenWindowDirective.prototype, "toggleFullscreen", null);
    FullScreenWindowDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[fullScreenWindow]'
        })
    ], FullScreenWindowDirective);
    return FullScreenWindowDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/highlightjs.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/highlightjs.directive.ts ***!
  \************************************************************/
/*! exports provided: HighlightjsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightjsDirective", function() { return HighlightjsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import hljs from 'highlight.js/lib/highlight';
// import javascript from 'highlight.js/lib/languages/javascript';
// import typescript from 'highlight.js/lib/languages/typescript';
var HighlightjsDirective = /** @class */ (function () {
    function HighlightjsDirective(el) {
        var _this = this;
        this.el = el;
        // this.registerLanguages();
        this.nativeEl = this.el.nativeElement;
        setTimeout(function () {
            highlight_js__WEBPACK_IMPORTED_MODULE_1___default.a.highlightBlock(_this.nativeEl);
        });
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('highlight'),
        __metadata("design:type", Object)
    ], HighlightjsDirective.prototype, "highlight", void 0);
    HighlightjsDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[highlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightjsDirective);
    return HighlightjsDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/scroll-to.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/scroll-to.directive.ts ***!
  \**********************************************************/
/*! exports provided: ScrollToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ScrollToDirective = /** @class */ (function () {
    function ScrollToDirective(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ScrollToDirective.prototype.ngOnInit = function () { };
    ScrollToDirective.prototype.currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) {
            return self.pageYOffset;
        }
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
        }
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) {
            return document.body.scrollTop;
        }
        return 0;
    };
    ScrollToDirective.prototype.elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
    ScrollToDirective.prototype.smoothScroll = function () {
        if (!this.elmID) {
            return;
        }
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20) {
            speed = 20;
        }
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
                leapY += step;
                if (leapY > stopY) {
                    leapY = stopY;
                }
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
            leapY -= step;
            if (leapY < stopY) {
                leapY = stopY;
            }
            timer++;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScrollToDirective.prototype, "smoothScroll", null);
    ScrollToDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[scrollTo]' }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('scrollTo')),
        __metadata("design:paramtypes", [String, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ScrollToDirective);
    return ScrollToDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/shared-directives.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/shared-directives.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDirectivesModule", function() { return SharedDirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-anchor.directive */ "./src/app/shared/directives/dropdown-anchor.directive.ts");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
/* harmony import */ var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scroll-to.directive */ "./src/app/shared/directives/scroll-to.directive.ts");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _highlightjs_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./highlightjs.directive */ "./src/app/shared/directives/highlightjs.directive.ts");
/* harmony import */ var _full_screen_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./full-screen.directive */ "./src/app/shared/directives/full-screen.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var directives = [
    _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownAnchorDirective"],
    _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownLinkDirective"],
    _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__["AppDropdownDirective"],
    _scroll_to_directive__WEBPACK_IMPORTED_MODULE_5__["ScrollToDirective"],
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarDirective"],
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarContainerDirective"],
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarContentDirective"],
    _sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarTogglerDirective"],
    _highlightjs_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightjsDirective"],
    _full_screen_directive__WEBPACK_IMPORTED_MODULE_8__["FullScreenWindowDirective"]
];
var SharedDirectivesModule = /** @class */ (function () {
    function SharedDirectivesModule() {
    }
    SharedDirectivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: directives,
            exports: directives
        })
    ], SharedDirectivesModule);
    return SharedDirectivesModule;
}());



/***/ }),

/***/ "./src/app/shared/directives/sidebar.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/*! exports provided: SidebarContainerDirective, SidebarContentDirective, SidebarDirective, SidebarTogglerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContainerDirective", function() { return SidebarContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarContentDirective", function() { return SidebarContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarTogglerDirective", function() { return SidebarTogglerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sidebar-helper.service */ "./src/app/shared/services/sidebar-helper.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/app/shared/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SidebarContainerDirective = /** @class */ (function () {
    function SidebarContainerDirective(el, _sidenavHelperService) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.nativeEl = this.el.nativeElement;
        this.nativeEl.className += ' sidebar-container';
    }
    SidebarContainerDirective.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appSidebarContainer'),
        __metadata("design:type", String)
    ], SidebarContainerDirective.prototype, "id", void 0);
    SidebarContainerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarContainer]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"]])
    ], SidebarContainerDirective);
    return SidebarContainerDirective;
}());

var SidebarContentDirective = /** @class */ (function () {
    function SidebarContentDirective(el, _sidenavHelperService, container) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.container = container;
        this.nativeEl = this.el.nativeElement;
        this.container.content = this;
        this.nativeEl.className += ' sidebar-content';
    }
    SidebarContentDirective.prototype.createBackdrop = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appSidebarContent'),
        __metadata("design:type", String)
    ], SidebarContentDirective.prototype, "id", void 0);
    SidebarContentDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarContent]'
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(SidebarContainerDirective)),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"],
            SidebarContainerDirective])
    ], SidebarContentDirective);
    return SidebarContentDirective;
}());

var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(el, _sidenavHelperService, container) {
        this.el = el;
        this._sidenavHelperService = _sidenavHelperService;
        this.container = container;
        this.align = 'left';
        this.mode = 'side';
        this.nativeEl = this.el.nativeElement;
        this.containerNativeEl = this.container.el.nativeElement;
        this.contentNativeEl = this.container.content.el.nativeElement;
        this.nativeEl.className += ' sidebar';
    }
    SidebarDirective.prototype.ngOnInit = function () {
        this.width = this.el.nativeElement.offsetWidth + 'px';
        this._sidenavHelperService.setSidenav(this.id, this);
        this.initSidebar();
    };
    SidebarDirective.prototype.onResize = function (event) {
        this.initSidebar();
    };
    SidebarDirective.prototype.initSidebar = function () {
        this.closed = _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isMobile();
        if (this.closed) {
            this.close();
        }
        else {
            this.open();
        }
    };
    SidebarDirective.prototype.open = function () {
        if (this.align === 'left') {
            this.nativeEl.style.left = 0;
            if (!_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isMobile()) {
                this.contentNativeEl.style.marginLeft = this.width;
            }
        }
        else if (this.align === 'right') {
            this.nativeEl.style.right = 0;
            if (!_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isMobile()) {
                this.contentNativeEl.style.marginRight = this.width;
            }
        }
        this.closed = false;
    };
    SidebarDirective.prototype.close = function () {
        if (this.align === 'left') {
            this.nativeEl.style.left = '-' + this.width;
            this.contentNativeEl.style.marginLeft = 0;
        }
        else if (this.align === 'right') {
            this.nativeEl.style.right = '-' + this.width;
            this.contentNativeEl.style.marginRight = 0;
        }
        this.closed = true;
    };
    SidebarDirective.prototype.toggle = function () {
        if (this.closed) {
            this.open();
        }
        else {
            this.close();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('align'),
        __metadata("design:type", String)
    ], SidebarDirective.prototype, "align", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mode'),
        __metadata("design:type", String)
    ], SidebarDirective.prototype, "mode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appSidebar'),
        __metadata("design:type", String)
    ], SidebarDirective.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('closed'),
        __metadata("design:type", Boolean)
    ], SidebarDirective.prototype, "closed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarDirective.prototype, "onResize", null);
    SidebarDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebar]'
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(SidebarContainerDirective)),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"],
            SidebarContainerDirective])
    ], SidebarDirective);
    return SidebarDirective;
}());

var SidebarTogglerDirective = /** @class */ (function () {
    function SidebarTogglerDirective(_sidenavHelperService) {
        this._sidenavHelperService = _sidenavHelperService;
    }
    SidebarTogglerDirective.prototype.onClick = function () {
        this._sidenavHelperService.getSidenav(this.id).toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appSidebarToggler'),
        __metadata("design:type", Object)
    ], SidebarTogglerDirective.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SidebarTogglerDirective.prototype, "onClick", null);
    SidebarTogglerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [_services_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarHelperService"]])
    ], SidebarTogglerDirective);
    return SidebarTogglerDirective;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/chat-db.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/inmemory-db/chat-db.ts ***!
  \***********************************************/
/*! exports provided: ChatDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDB", function() { return ChatDB; });
var ChatDB = /** @class */ (function () {
    function ChatDB() {
    }
    ChatDB.user = [
        {
            id: '7863a6802ez0e277a0f98534',
            name: 'John Doe',
            avatar: 'assets/images/faces/1.jpg',
            status: 'online',
            chatInfo: [
                {
                    chatId: '89564a680b3249760ea21fe77',
                    contactId: '323sa680b3249760ea21rt47',
                    contactName: 'Frank Powell',
                    unread: 4,
                    lastChatTime: '2017-06-12T02:10:18.931Z'
                },
                {
                    chatId: '3289564a680b2134760ea21fe7753',
                    contactId: '14663a3406eb47ffa63d4fec9429cb71',
                    contactName: 'Betty Diaz',
                    unread: 0,
                    lastChatTime: '2017-06-12T02:10:18.931Z'
                }
            ]
        }
    ];
    ChatDB.contacts = [
        {
            id: '323sa680b3249760ea21rt47',
            name: 'Frank Powell',
            avatar: 'assets/images/faces/13.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: '14663a3406eb47ffa63d4fec9429cb71',
            name: 'Betty Diaz',
            avatar: 'assets/images/faces/12.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: '43bd9bc59d164b5aea498e3ae1c24c3c',
            name: 'Brian Stephens',
            avatar: 'assets/images/faces/3.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: '3fc8e01f3ce649d1caf884fbf4f698e4',
            name: 'Jacqueline Day',
            avatar: 'assets/images/faces/16.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: 'e929b1d790ab49968ed8e34648553df4',
            name: 'Arthur Mendoza',
            avatar: 'assets/images/faces/10.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: 'd6caf04bba614632b5fecf91aebf4564',
            name: 'Jeremy Lee',
            avatar: 'assets/images/faces/9.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: 'be0fb188c8e242f097fafa24632107e4',
            name: 'Johnny Newman',
            avatar: 'assets/images/faces/5.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: 'dea902191b964a68ba5f2d93cff37e13',
            name: 'Jeffrey Little',
            avatar: 'assets/images/faces/15.jpg',
            status: 'online',
            mood: ''
        },
        {
            id: '0bf58f5ccc4543a9f8747350b7bda3c7',
            name: 'Barbara Romero',
            avatar: 'assets/images/faces/4.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: 'c5d7498bbcb84d81fc72168871ac6a6e',
            name: 'Daniel James',
            avatar: 'assets/images/faces/2.jpg',
            status: 'offline',
            mood: ''
        },
        {
            id: '97bfbdd9413e46efdaca2010400fe18c',
            name: 'Alice Sanders',
            avatar: 'assets/images/faces/17.jpg',
            status: 'offline',
            mood: ''
        }
    ];
    ChatDB.chatCollection = [
        {
            id: '89564a680b3249760ea21fe77',
            chats: [
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Giving away your knowledge or product just to gain clients?',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '323sa680b3249760ea21rt47',
                    text: 'Yes',
                    time: '2018-02-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-02-32T08:45:28.291Z'
                }
            ]
        },
        {
            id: '3289564a680b2134760ea21fe7753',
            chats: [
                {
                    contactId: '14663a3406eb47ffa63d4fec9429cb71',
                    text: 'Do you ever find yourself falling into the “discount trap?”',
                    time: '2018-03-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Giving away your knowledge or product just to gain clients?',
                    time: '2018-03-32T08:45:28.291Z'
                },
                {
                    contactId: '14663a3406eb47ffa63d4fec9429cb71',
                    text: 'Yes',
                    time: '2018-03-32T08:45:28.291Z'
                },
                {
                    contactId: '7863a6802ez0e277a0f98534',
                    text: 'Don’t feel bad. It happens to a lot of us',
                    time: '2018-03-32T08:45:28.291Z'
                }
            ]
        }
    ];
    return ChatDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/countries.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/inmemory-db/countries.ts ***!
  \*************************************************/
/*! exports provided: CountryDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDB", function() { return CountryDB; });
var CountryDB = /** @class */ (function () {
    function CountryDB() {
    }
    CountryDB.countries = [
        { display: 'Afghanistan', value: 'AF' },
        { display: 'Åland Islands', value: 'AX' },
        { display: 'Albania', value: 'AL' },
        { display: 'Algeria', value: 'DZ' },
        { display: 'American Samoa', value: 'AS' },
        { display: 'AndorrA', value: 'AD' },
        { display: 'Angola', value: 'AO' },
        { display: 'Anguilla', value: 'AI' },
        { display: 'Antarctica', value: 'AQ' },
        { display: 'Antigua and Barbuda', value: 'AG' },
        { display: 'Argentina', value: 'AR' },
        { display: 'Armenia', value: 'AM' },
        { display: 'Aruba', value: 'AW' },
        { display: 'Australia', value: 'AU' },
        { display: 'Austria', value: 'AT' },
        { display: 'Azerbaijan', value: 'AZ' },
        { display: 'Bahamas', value: 'BS' },
        { display: 'Bahrain', value: 'BH' },
        { display: 'Bangladesh', value: 'BD' },
        { display: 'Barbados', value: 'BB' },
        { display: 'Belarus', value: 'BY' },
        { display: 'Belgium', value: 'BE' },
        { display: 'Belize', value: 'BZ' },
        { display: 'Benin', value: 'BJ' },
        { display: 'Bermuda', value: 'BM' },
        { display: 'Bhutan', value: 'BT' },
        { display: 'Bolivia', value: 'BO' },
        { display: 'Bosnia and Herzegovina', value: 'BA' },
        { display: 'Botswana', value: 'BW' },
        { display: 'Bouvet Island', value: 'BV' },
        { display: 'Brazil', value: 'BR' },
        { display: 'British Indian Ocean Territory', value: 'IO' },
        { display: 'Brunei Darussalam', value: 'BN' },
        { display: 'Bulgaria', value: 'BG' },
        { display: 'Burkina Faso', value: 'BF' },
        { display: 'Burundi', value: 'BI' },
        { display: 'Cambodia', value: 'KH' },
        { display: 'Cameroon', value: 'CM' },
        { display: 'Canada', value: 'CA' },
        { display: 'Cape Verde', value: 'CV' },
        { display: 'Cayman Islands', value: 'KY' },
        { display: 'Central African Republic', value: 'CF' },
        { display: 'Chad', value: 'TD' },
        { display: 'Chile', value: 'CL' },
        { display: 'China', value: 'CN' },
        { display: 'Christmas Island', value: 'CX' },
        { display: 'Cocos (Keeling) Islands', value: 'CC' },
        { display: 'Colombia', value: 'CO' },
        { display: 'Comoros', value: 'KM' },
        { display: 'Congo', value: 'CG' },
        { display: 'Congo, The Democratic Republic of the', value: 'CD' },
        { display: 'Cook Islands', value: 'CK' },
        { display: 'Costa Rica', value: 'CR' },
        { display: 'Cote D\'Ivoire', value: 'CI' },
        { display: 'Croatia', value: 'HR' },
        { display: 'Cuba', value: 'CU' },
        { display: 'Cyprus', value: 'CY' },
        { display: 'Czech Republic', value: 'CZ' },
        { display: 'Denmark', value: 'DK' },
        { display: 'Djibouti', value: 'DJ' },
        { display: 'Dominica', value: 'DM' },
        { display: 'Dominican Republic', value: 'DO' },
        { display: 'Ecuador', value: 'EC' },
        { display: 'Egypt', value: 'EG' },
        { display: 'El Salvador', value: 'SV' },
        { display: 'Equatorial Guinea', value: 'GQ' },
        { display: 'Eritrea', value: 'ER' },
        { display: 'Estonia', value: 'EE' },
        { display: 'Ethiopia', value: 'ET' },
        { display: 'Falkland Islands (Malvinas)', value: 'FK' },
        { display: 'Faroe Islands', value: 'FO' },
        { display: 'Fiji', value: 'FJ' },
        { display: 'Finland', value: 'FI' },
        { display: 'France', value: 'FR' },
        { display: 'French Guiana', value: 'GF' },
        { display: 'French Polynesia', value: 'PF' },
        { display: 'French Southern Territories', value: 'TF' },
        { display: 'Gabon', value: 'GA' },
        { display: 'Gambia', value: 'GM' },
        { display: 'Georgia', value: 'GE' },
        { display: 'Germany', value: 'DE' },
        { display: 'Ghana', value: 'GH' },
        { display: 'Gibraltar', value: 'GI' },
        { display: 'Greece', value: 'GR' },
        { display: 'Greenland', value: 'GL' },
        { display: 'Grenada', value: 'GD' },
        { display: 'Guadeloupe', value: 'GP' },
        { display: 'Guam', value: 'GU' },
        { display: 'Guatemala', value: 'GT' },
        { display: 'Guernsey', value: 'GG' },
        { display: 'Guinea', value: 'GN' },
        { display: 'Guinea-Bissau', value: 'GW' },
        { display: 'Guyana', value: 'GY' },
        { display: 'Haiti', value: 'HT' },
        { display: 'Heard Island and Mcdonald Islands', value: 'HM' },
        { display: 'Holy See (Vatican City State)', value: 'VA' },
        { display: 'Honduras', value: 'HN' },
        { display: 'Hong Kong', value: 'HK' },
        { display: 'Hungary', value: 'HU' },
        { display: 'Iceland', value: 'IS' },
        { display: 'India', value: 'IN' },
        { display: 'Indonesia', value: 'ID' },
        { display: 'Iran, Islamic Republic Of', value: 'IR' },
        { display: 'Iraq', value: 'IQ' },
        { display: 'Ireland', value: 'IE' },
        { display: 'Isle of Man', value: 'IM' },
        { display: 'Israel', value: 'IL' },
        { display: 'Italy', value: 'IT' },
        { display: 'Jamaica', value: 'JM' },
        { display: 'Japan', value: 'JP' },
        { display: 'Jersey', value: 'JE' },
        { display: 'Jordan', value: 'JO' },
        { display: 'Kazakhstan', value: 'KZ' },
        { display: 'Kenya', value: 'KE' },
        { display: 'Kiribati', value: 'KI' },
        { display: 'Korea, Democratic People\'S Republic of', value: 'KP' },
        { display: 'Korea, Republic of', value: 'KR' },
        { display: 'Kuwait', value: 'KW' },
        { display: 'Kyrgyzstan', value: 'KG' },
        { display: 'Lao People\'S Democratic Republic', value: 'LA' },
        { display: 'Latvia', value: 'LV' },
        { display: 'Lebanon', value: 'LB' },
        { display: 'Lesotho', value: 'LS' },
        { display: 'Liberia', value: 'LR' },
        { display: 'Libyan Arab Jamahiriya', value: 'LY' },
        { display: 'Liechtenstein', value: 'LI' },
        { display: 'Lithuania', value: 'LT' },
        { display: 'Luxembourg', value: 'LU' },
        { display: 'Macao', value: 'MO' },
        { display: 'Macedonia, The Former Yugoslav Republic of', value: 'MK' },
        { display: 'Madagascar', value: 'MG' },
        { display: 'Malawi', value: 'MW' },
        { display: 'Malaysia', value: 'MY' },
        { display: 'Maldives', value: 'MV' },
        { display: 'Mali', value: 'ML' },
        { display: 'Malta', value: 'MT' },
        { display: 'Marshall Islands', value: 'MH' },
        { display: 'Martinique', value: 'MQ' },
        { display: 'Mauritania', value: 'MR' },
        { display: 'Mauritius', value: 'MU' },
        { display: 'Mayotte', value: 'YT' },
        { display: 'Mexico', value: 'MX' },
        { display: 'Micronesia, Federated States of', value: 'FM' },
        { display: 'Moldova, Republic of', value: 'MD' },
        { display: 'Monaco', value: 'MC' },
        { display: 'Mongolia', value: 'MN' },
        { display: 'Montserrat', value: 'MS' },
        { display: 'Morocco', value: 'MA' },
        { display: 'Mozambique', value: 'MZ' },
        { display: 'Myanmar', value: 'MM' },
        { display: 'Namibia', value: 'NA' },
        { display: 'Nauru', value: 'NR' },
        { display: 'Nepal', value: 'NP' },
        { display: 'Netherlands', value: 'NL' },
        { display: 'Netherlands Antilles', value: 'AN' },
        { display: 'New Caledonia', value: 'NC' },
        { display: 'New Zealand', value: 'NZ' },
        { display: 'Nicaragua', value: 'NI' },
        { display: 'Niger', value: 'NE' },
        { display: 'Nigeria', value: 'NG' },
        { display: 'Niue', value: 'NU' },
        { display: 'Norfolk Island', value: 'NF' },
        { display: 'Northern Mariana Islands', value: 'MP' },
        { display: 'Norway', value: 'NO' },
        { display: 'Oman', value: 'OM' },
        { display: 'Pakistan', value: 'PK' },
        { display: 'Palau', value: 'PW' },
        { display: 'Palestinian Territory, Occupied', value: 'PS' },
        { display: 'Panama', value: 'PA' },
        { display: 'Papua New Guinea', value: 'PG' },
        { display: 'Paraguay', value: 'PY' },
        { display: 'Peru', value: 'PE' },
        { display: 'Philippines', value: 'PH' },
        { display: 'Pitcairn', value: 'PN' },
        { display: 'Poland', value: 'PL' },
        { display: 'Portugal', value: 'PT' },
        { display: 'Puerto Rico', value: 'PR' },
        { display: 'Qatar', value: 'QA' },
        { display: 'Reunion', value: 'RE' },
        { display: 'Romania', value: 'RO' },
        { display: 'Russian Federation', value: 'RU' },
        { display: 'RWANDA', value: 'RW' },
        { display: 'Saint Helena', value: 'SH' },
        { display: 'Saint Kitts and Nevis', value: 'KN' },
        { display: 'Saint Lucia', value: 'LC' },
        { display: 'Saint Pierre and Miquelon', value: 'PM' },
        { display: 'Saint Vincent and the Grenadines', value: 'VC' },
        { display: 'Samoa', value: 'WS' },
        { display: 'San Marino', value: 'SM' },
        { display: 'Sao Tome and Principe', value: 'ST' },
        { display: 'Saudi Arabia', value: 'SA' },
        { display: 'Senegal', value: 'SN' },
        { display: 'Serbia and Montenegro', value: 'CS' },
        { display: 'Seychelles', value: 'SC' },
        { display: 'Sierra Leone', value: 'SL' },
        { display: 'Singapore', value: 'SG' },
        { display: 'Slovakia', value: 'SK' },
        { display: 'Slovenia', value: 'SI' },
        { display: 'Solomon Islands', value: 'SB' },
        { display: 'Somalia', value: 'SO' },
        { display: 'South Africa', value: 'ZA' },
        { display: 'South Georgia and the South Sandwich Islands', value: 'GS' },
        { display: 'Spain', value: 'ES' },
        { display: 'Sri Lanka', value: 'LK' },
        { display: 'Sudan', value: 'SD' },
        { display: 'Suridisplay', value: 'SR' },
        { display: 'Svalbard and Jan Mayen', value: 'SJ' },
        { display: 'Swaziland', value: 'SZ' },
        { display: 'Sweden', value: 'SE' },
        { display: 'Switzerland', value: 'CH' },
        { display: 'Syrian Arab Republic', value: 'SY' },
        { display: 'Taiwan, Province of China', value: 'TW' },
        { display: 'Tajikistan', value: 'TJ' },
        { display: 'Tanzania, United Republic of', value: 'TZ' },
        { display: 'Thailand', value: 'TH' },
        { display: 'Timor-Leste', value: 'TL' },
        { display: 'Togo', value: 'TG' },
        { display: 'Tokelau', value: 'TK' },
        { display: 'Tonga', value: 'TO' },
        { display: 'Trinidad and Tobago', value: 'TT' },
        { display: 'Tunisia', value: 'TN' },
        { display: 'Turkey', value: 'TR' },
        { display: 'Turkmenistan', value: 'TM' },
        { display: 'Turks and Caicos Islands', value: 'TC' },
        { display: 'Tuvalu', value: 'TV' },
        { display: 'Uganda', value: 'UG' },
        { display: 'Ukraine', value: 'UA' },
        { display: 'United Arab Emirates', value: 'AE' },
        { display: 'United Kingdom', value: 'GB' },
        { display: 'United States', value: 'US' },
        { display: 'United States Minor Outlying Islands', value: 'UM' },
        { display: 'Uruguay', value: 'UY' },
        { display: 'Uzbekistan', value: 'UZ' },
        { display: 'Vanuatu', value: 'VU' },
        { display: 'Venezuela', value: 'VE' },
        { display: 'Viet Nam', value: 'VN' },
        { display: 'Virgin Islands, British', value: 'VG' },
        { display: 'Virgin Islands, U.S.', value: 'VI' },
        { display: 'Wallis and Futuna', value: 'WF' },
        { display: 'Western Sahara', value: 'EH' },
        { display: 'Yemen', value: 'YE' },
        { display: 'Zambia', value: 'ZM' },
        { display: 'Zimbabwe', value: 'ZW' }
    ];
    return CountryDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/inmemory-db.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/inmemory-db/inmemory-db.service.ts ***!
  \***********************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./src/app/shared/inmemory-db/products.ts");
/* harmony import */ var _mails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mails */ "./src/app/shared/inmemory-db/mails.ts");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countries */ "./src/app/shared/inmemory-db/countries.ts");
/* harmony import */ var _chat_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-db */ "./src/app/shared/inmemory-db/chat-db.ts");
/* harmony import */ var _invoices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoices */ "./src/app/shared/inmemory-db/invoices.ts");





var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return {
            'products': _products__WEBPACK_IMPORTED_MODULE_0__["ProductDB"].products,
            'invoices': _invoices__WEBPACK_IMPORTED_MODULE_4__["InvoiceDB"].invoices,
            'mails': _mails__WEBPACK_IMPORTED_MODULE_1__["MailDB"].messages,
            'countries': _countries__WEBPACK_IMPORTED_MODULE_2__["CountryDB"].countries,
            'contacts': _chat_db__WEBPACK_IMPORTED_MODULE_3__["ChatDB"].contacts,
            'chat-collections': _chat_db__WEBPACK_IMPORTED_MODULE_3__["ChatDB"].chatCollection,
            'chat-user': _chat_db__WEBPACK_IMPORTED_MODULE_3__["ChatDB"].user
        };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/invoices.ts":
/*!************************************************!*\
  !*** ./src/app/shared/inmemory-db/invoices.ts ***!
  \************************************************/
/*! exports provided: InvoiceDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDB", function() { return InvoiceDB; });
var InvoiceDB = /** @class */ (function () {
    function InvoiceDB() {
    }
    InvoiceDB.invoices = [
        {
            id: '5a9ae2106518248b68251fd1',
            orderNumber: '232',
            orderStatus: 'Pending',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'Schoen, Conn and Mills',
                address: 'rodriguez.trent@senger.com \n 61 Johnson St. Shirley, NY 11967. \n \n +202-555-0170',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                    name: 'Item 1',
                    unit: 9,
                    unitPrice: 200
                }, {
                    name: 'Item 2',
                    unit: 15,
                    unitPrice: 300
                }]
        },
        {
            id: '5a9ae2106518248b68251fd2',
            orderNumber: '233',
            orderStatus: 'Processing',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'New Age Inc.',
                address: 'this is a test address \n 7664 Rockcrest Road. Longview, TX 75604. \n \n +1-202-555-0153',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                    name: 'Item 1',
                    unit: 3,
                    unitPrice: 2000
                }, {
                    name: 'Item 2',
                    unit: 2,
                    unitPrice: 4000
                }]
        },
        {
            id: '5a9ae2106518248b68251fd3',
            orderNumber: '234',
            orderStatus: 'Delivered',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'Predovic, Schowalter and Haag',
                address: 'linwood53@price.com \n 7178 Plumb Branch Dr. South Bend, IN 46614 \n \n +999 9999 9999',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                    name: 'Item 1',
                    unit: 5,
                    unitPrice: 1000
                }, {
                    name: 'Item 2',
                    unit: 2,
                    unitPrice: 4000
                }]
        },
        {
            id: '5a9ae2106518248b68251fd4',
            orderNumber: '235',
            orderStatus: 'Delivered',
            orderDate: (new Date()),
            currency: '$',
            vat: 10,
            billFrom: {
                name: 'Hane PLC',
                address: 'nader.savanna@lindgren.org \n 858 8th St. Nanuet, NY 10954. \n \n +202-555-0131',
            },
            billTo: {
                name: 'UI Lib',
                address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
            },
            items: [{
                    name: 'Item 1',
                    unit: 3,
                    unitPrice: 4000
                }, {
                    name: 'Item 2',
                    unit: 1,
                    unitPrice: 5000
                }]
        }
    ];
    return InvoiceDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/mails.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/inmemory-db/mails.ts ***!
  \*********************************************/
/*! exports provided: MailDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailDB", function() { return MailDB; });
var MailDB = /** @class */ (function () {
    function MailDB() {
    }
    MailDB.messages = [
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/2.jpg'
            },
            date: new Date('1/25/2018'),
            selected: false,
            subject: 'Welcome to Angular World',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote class=\"blockquote\">\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/3.jpg'
            },
            date: new Date('4/3/2017'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/4.jpg'
            },
            date: new Date('1/20/2017'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote class=\"blockquote\">\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/5.jpg'
            },
            date: new Date('1/8/2017'),
            selected: false,
            subject: 'Welcome to Angular Gull',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/9.jpg'
            },
            date: new Date('10/3/2016'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/10.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Henrik Gevorg',
                photo: 'assets/images/faces/15.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Welcome to Angular Gull',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/12.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/13.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/16.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        },
        {
            sender: {
                name: 'Petros Toros',
                photo: 'assets/images/faces/17.jpg'
            },
            date: new Date('10/3/2015'),
            selected: false,
            subject: 'New order informations',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n              Thanks<br>\n              Jhone"
        },
        {
            sender: {
                name: 'Gevorg Spartak',
                photo: 'assets/images/faces/2.jpg'
            },
            date: new Date('10/3/2012'),
            selected: false,
            subject: 'Confirm your email address',
            message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote>\n              <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus,\n              inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam,\n              consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n              <blockquote>\n              Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa,\n              temporibus vero possimus error voluptates sequi.\n              </blockquote><br>\n              Thanks<br>\n              Mark"
        }
    ];
    return MailDB;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/products.ts":
/*!************************************************!*\
  !*** ./src/app/shared/inmemory-db/products.ts ***!
  \************************************************/
/*! exports provided: ProductDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDB", function() { return ProductDB; });
var ProductDB = /** @class */ (function () {
    function ProductDB() {
    }
    ProductDB.products = [
        {
            '_id': '5a9ae2106518248b68251fdf',
            'name': 'Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'Lorem ipsum dolor sit amet, et nec putent quodsi, admodum assentior ad duo. Pri ad sapientem ocurreret incorrupte',
            'category': 'speaker',
            'tags': [
                'sunt',
                'sunt',
                'culpa'
            ],
            'price': {
                'sale': 32,
                'previous': 54
            },
            'ratings': {
                'rating': 3.86,
                'ratingCount': 26
            },
            'features': [
                'aliquip aliquip',
                'nulla laboris',
                'pariatur consequat'
            ],
            'photo': './assets/images/products/speaker-1.jpg',
            'gallery': [
                './assets/images/products/speaker-1.jpg',
                './assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': '20% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210b7b4d3ad2f048bbe',
            'name': 'Portable Speaker with HD Sound',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'cillum eiusmod',
            'category': 'speaker',
            'tags': [
                'Lorem',
                'nisi',
                'ad'
            ],
            'price': {
                'sale': 25,
                'previous': 43
            },
            'ratings': {
                'rating': 3.72,
                'ratingCount': 18
            },
            'features': [
                'magna est',
                'consectetur dolor',
                'est proident'
            ],
            'photo': './assets/images/products/speaker-2.jpg',
            'gallery': [
                './assets/images/products/speaker-1.jpg',
                './assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': 'Sale',
                'color': 'primary'
            }
        },
        {
            '_id': '5a9ae210d9a8d6dda7256417',
            'name': 'Lightweight On-Ear Headphones - Black',
            'subtitle': 'On-ear fit to minimize noise so you can hear every beat',
            'description': 'sit laborum',
            'category': 'headphone',
            'tags': [
                'eu',
                'irure',
                'proident'
            ],
            'price': {
                'sale': 29,
                'previous': 55
            },
            'ratings': {
                'rating': 3.79,
                'ratingCount': 77
            },
            'features': [
                'laboris id',
                'magna eu',
                'sint quis'
            ],
            'photo': './assets/images/products/headphone-2.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '-40%',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210e8329237332e56d7',
            'name': 'Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'eiusmod elit',
            'category': 'watch',
            'tags': [
                'laborum',
                'minim',
                'tempor'
            ],
            'price': {
                'sale': 33,
                'previous': 58
            },
            'ratings': {
                'rating': 4.74,
                'ratingCount': 64
            },
            'features': [
                'cillum ullamco',
                'ad minim',
                'duis exercitation'
            ],
            'photo': './assets/images/products/watch-1.jpg',
            'gallery': [
                './assets/images/products/watch-1.jpg',
                './assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '10% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210cb9937d28c6eca1a',
            'name': 'Automatic-self-wind mens Watch 5102PR-001',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore tempor',
            'category': 'watch',
            'tags': [
                'Lorem',
                'dolor',
                'duis'
            ],
            'price': {
                'sale': 38,
                'previous': 50
            },
            'ratings': {
                'rating': 4.43,
                'ratingCount': 98
            },
            'features': [
                'aliquip consequat',
                'excepteur non',
                'aliquip eu'
            ],
            'photo': './assets/images/products/watch-2.jpg',
            'gallery': [
                './assets/images/products/watch-1.jpg',
                './assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '4% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae2106f155194e5c95d67',
            'name': 'On-Ear Headphones - Black',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'elit Lorem',
            'category': 'headphone',
            'tags': [
                'magna',
                'veniam',
                'sunt'
            ],
            'price': {
                'sale': 38,
                'previous': 54
            },
            'ratings': {
                'rating': 4.84,
                'ratingCount': 52
            },
            'features': [
                'est mollit',
                'adipisicing exercitation',
                'esse incididunt'
            ],
            'photo': './assets/images/products/headphone-3.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '$4 off',
                'color': 'success'
            }
        },
        {
            '_id': '5a9ae2101625a02fee92e27f',
            'name': 'In-Ear Headphone',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'proident non',
            'category': 'headphone',
            'tags': [
                'Lorem',
                'occaecat',
                'laborum'
            ],
            'price': {
                'sale': 31,
                'previous': 58
            },
            'ratings': {
                'rating': 3.18,
                'ratingCount': 90
            },
            'features': [
                'ullamco quis',
                'veniam laboris',
                'nulla sunt'
            ],
            'photo': './assets/images/products/headphone-4.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '$5 off',
                'color': 'primary'
            }
        },
        {
            '_id': '5a9ae2108970b01447ec34aa',
            'name': 'Duis exercitation nostrud anim',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore enim',
            'category': 'phone',
            'tags': [
                'do',
                'aliqua',
                'irure'
            ],
            'price': {
                'sale': 22,
                'previous': 44
            },
            'ratings': {
                'rating': 3.53,
                'ratingCount': 47
            },
            'features': [
                'sunt laboris',
                'incididunt nulla',
                'ullamco qui'
            ],
            'photo': './assets/images/products/iphone-2.jpg',
            'gallery': [
                './assets/images/products/iphone-1.jpg',
                './assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2103c04707145e21300',
            'name': 'Dolor eu nostrud excepteur',
            'description': 'enim fugiat',
            'category': 'phone',
            'tags': [
                'laborum',
                'nulla',
                'sit'
            ],
            'price': {
                'sale': 31,
                'previous': 40
            },
            'ratings': {
                'rating': 3.42,
                'ratingCount': 35
            },
            'features': [
                'exercitation excepteur',
                'eiusmod mollit',
                'irure adipisicing'
            ],
            'photo': './assets/images/products/iphone-1.jpg',
            'gallery': [
                './assets/images/products/iphone-1.jpg',
                './assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae21021b2911c97ad6c5b',
            'name': 'Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'sit commodo',
            'category': 'headphone',
            'tags': [
                'adipisicing',
                'labore',
                'voluptate'
            ],
            'price': {
                'sale': 33,
                'previous': 57
            },
            'ratings': {
                'rating': 3.51,
                'ratingCount': 60
            },
            'features': [
                'culpa id',
                'eu excepteur',
                'incididunt aute'
            ],
            'photo': './assets/images/products/headphone-1.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        }, {
            '_id': '5a9ae2106518248b68251fdf',
            'name': 'Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'Lorem ipsum dolor sit amet, et nec putent quodsi, admodum assentior ad duo. Pri ad sapientem ocurreret incorrupte',
            'category': 'speaker',
            'tags': [
                'sunt',
                'sunt',
                'culpa'
            ],
            'price': {
                'sale': 32,
                'previous': 54
            },
            'ratings': {
                'rating': 3.86,
                'ratingCount': 26
            },
            'features': [
                'aliquip aliquip',
                'nulla laboris',
                'pariatur consequat'
            ],
            'photo': './assets/images/products/speaker-1.jpg',
            'gallery': [
                './assets/images/products/speaker-1.jpg',
                './assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': '20% off',
                'color': 'info'
            }
        },
        {
            '_id': '5a9ae210b7b4d3ad2f048dsbbe',
            'name': 'Portable Speaker with HD Sound',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'cillum eiusmod',
            'category': 'speaker',
            'tags': [
                'Lorem',
                'nisi',
                'ad'
            ],
            'price': {
                'sale': 25,
                'previous': 43
            },
            'ratings': {
                'rating': 3.72,
                'ratingCount': 18
            },
            'features': [
                'magna est',
                'consectetur dolor',
                'est proident'
            ],
            'photo': './assets/images/products/speaker-2.jpg',
            'gallery': [
                './assets/images/products/speaker-1.jpg',
                './assets/images/products/speaker-2.jpg'
            ],
            'badge': {
                'text': 'Sale',
                'color': 'primary'
            }
        },
        {
            '_id': '5a9ae2sd10d9a8d6dda7256417',
            'name': 'Lightweight On-Ear Headphones - Black',
            'subtitle': 'On-ear fit to minimize noise so you can hear every beat',
            'description': 'sit laborum',
            'category': 'headphone',
            'tags': [
                'eu',
                'irure',
                'proident'
            ],
            'price': {
                'sale': 29,
                'previous': 55
            },
            'ratings': {
                'rating': 3.79,
                'ratingCount': 77
            },
            'features': [
                'laboris id',
                'magna eu',
                'sint quis'
            ],
            'photo': './assets/images/products/headphone-2.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '-40%',
                'color': 'warning'
            }
        },
        {
            '_id': '5a9ae210e8329fs237332e56d7',
            'name': 'Automatic-self-wind mens Watch 5102PR-001 (Certified Pre-owned)',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'eiusmod elit',
            'category': 'watch',
            'tags': [
                'laborum',
                'minim',
                'tempor'
            ],
            'price': {
                'sale': 33,
                'previous': 58
            },
            'ratings': {
                'rating': 4.74,
                'ratingCount': 64
            },
            'features': [
                'cillum ullamco',
                'ad minim',
                'duis exercitation'
            ],
            'photo': './assets/images/products/watch-1.jpg',
            'gallery': [
                './assets/images/products/watch-1.jpg',
                './assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae210cba9937d28c6eca1a',
            'name': 'Automatic-self-wind mens Watch 5102PR-001',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore tempor',
            'category': 'watch',
            'tags': [
                'Lorem',
                'dolor',
                'duis'
            ],
            'price': {
                'sale': 38,
                'previous': 50
            },
            'ratings': {
                'rating': 4.43,
                'ratingCount': 98
            },
            'features': [
                'aliquip consequat',
                'excepteur non',
                'aliquip eu'
            ],
            'photo': './assets/images/products/watch-2.jpg',
            'gallery': [
                './assets/images/products/watch-1.jpg',
                './assets/images/products/watch-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5ad9ae2106f155194e5c95d67',
            'name': 'On-Ear Headphones - Black',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'elit Lorem',
            'category': 'headphone',
            'tags': [
                'magna',
                'veniam',
                'sunt'
            ],
            'price': {
                'sale': 38,
                'previous': 54
            },
            'ratings': {
                'rating': 4.84,
                'ratingCount': 52
            },
            'features': [
                'est mollit',
                'adipisicing exercitation',
                'esse incididunt'
            ],
            'photo': './assets/images/products/headphone-3.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2101625a02fee92fe27f',
            'name': 'In-Ear Headphone',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'proident non',
            'category': 'headphone',
            'tags': [
                'Lorem',
                'occaecat',
                'laborum'
            ],
            'price': {
                'sale': 31,
                'previous': 58
            },
            'ratings': {
                'rating': 3.18,
                'ratingCount': 90
            },
            'features': [
                'ullamco quis',
                'veniam laboris',
                'nulla sunt'
            ],
            'photo': './assets/images/products/headphone-4.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2108970bs01447ec34aa',
            'name': 'Duis exercitation nostrud anim',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'dolore enim',
            'category': 'phone',
            'tags': [
                'do',
                'aliqua',
                'irure'
            ],
            'price': {
                'sale': 22,
                'previous': 44
            },
            'ratings': {
                'rating': 3.53,
                'ratingCount': 47
            },
            'features': [
                'sunt laboris',
                'incididunt nulla',
                'ullamco qui'
            ],
            'photo': './assets/images/products/iphone-2.jpg',
            'gallery': [
                './assets/images/products/iphone-1.jpg',
                './assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9ae2103c0470f7145e21300',
            'name': 'Dolor eu nostrud excepteur',
            'description': 'enim fugiat',
            'category': 'phone',
            'tags': [
                'laborum',
                'nulla',
                'sit'
            ],
            'price': {
                'sale': 31,
                'previous': 40
            },
            'ratings': {
                'rating': 3.42,
                'ratingCount': 35
            },
            'features': [
                'exercitation excepteur',
                'eiusmod mollit',
                'irure adipisicing'
            ],
            'photo': './assets/images/products/iphone-1.jpg',
            'gallery': [
                './assets/images/products/iphone-1.jpg',
                './assets/images/products/iphone-2.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        },
        {
            '_id': '5a9aef21021b2911c97ad6c5b',
            'name': 'Over-Ear Headphones, Stereo Lightweight Adjustable Wired Headset',
            'subtitle': 'Admodum assentior ad duo',
            'description': 'sit commodo',
            'category': 'headphone',
            'tags': [
                'adipisicing',
                'labore',
                'voluptate'
            ],
            'price': {
                'sale': 33,
                'previous': 57
            },
            'ratings': {
                'rating': 3.51,
                'ratingCount': 60
            },
            'features': [
                'culpa id',
                'eu excepteur',
                'incididunt aute'
            ],
            'photo': './assets/images/products/headphone-1.jpg',
            'gallery': [
                './assets/images/products/headphone-1.jpg',
                './assets/images/products/headphone-2.jpg',
                './assets/images/products/headphone-3.jpg',
                './assets/images/products/headphone-4.jpg'
            ],
            'badge': {
                'text': '',
                'color': 'red'
            }
        }
    ];
    return ProductDB;
}());



/***/ }),

/***/ "./src/app/shared/pipes/excerpt.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/excerpt.pipe.ts ***!
  \**********************************************/
/*! exports provided: ExcerptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcerptPipe", function() { return ExcerptPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExcerptPipe = /** @class */ (function () {
    function ExcerptPipe() {
    }
    ExcerptPipe.prototype.transform = function (text, limit) {
        if (limit === void 0) { limit = 5; }
        if (text.length <= limit) {
            return text;
        }
        return text.substring(0, limit) + '...';
    };
    ExcerptPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'excerpt' })
    ], ExcerptPipe);
    return ExcerptPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/get-value-by-key.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/get-value-by-key.pipe.ts ***!
  \*******************************************************/
/*! exports provided: GetValueByKeyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetValueByKeyPipe", function() { return GetValueByKeyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetValueByKeyPipe = /** @class */ (function () {
    function GetValueByKeyPipe() {
    }
    GetValueByKeyPipe.prototype.transform = function (value, id, property) {
        var filteredObj = value.find(function (item) {
            if (item.id !== undefined) {
                return item.id === id;
            }
            return false;
        });
        if (filteredObj) {
            return filteredObj[property];
        }
    };
    GetValueByKeyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'getValueByKey',
            pure: false
        })
    ], GetValueByKeyPipe);
    return GetValueByKeyPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/relative-time.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/relative-time.pipe.ts ***!
  \****************************************************/
/*! exports provided: RelativeTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeTimePipe", function() { return RelativeTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RelativeTimePipe = /** @class */ (function () {
    function RelativeTimePipe() {
    }
    RelativeTimePipe.prototype.transform = function (value) {
        if (!(value instanceof Date)) {
            value = new Date(value);
        }
        var seconds = Math.floor(((new Date()).getTime() - value.getTime()) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + ' years ago';
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + ' months ago';
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + ' days ago';
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + ' hours ago';
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + ' minutes ago';
        }
        return Math.floor(seconds) + ' seconds ago';
    };
    RelativeTimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'relativeTime' })
    ], RelativeTimePipe);
    return RelativeTimePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/shared-pipes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return SharedPipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _excerpt_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./excerpt.pipe */ "./src/app/shared/pipes/excerpt.pipe.ts");
/* harmony import */ var _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-value-by-key.pipe */ "./src/app/shared/pipes/get-value-by-key.pipe.ts");
/* harmony import */ var _relative_time_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relative-time.pipe */ "./src/app/shared/pipes/relative-time.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var pipes = [
    _excerpt_pipe__WEBPACK_IMPORTED_MODULE_2__["ExcerptPipe"],
    _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_3__["GetValueByKeyPipe"],
    _relative_time_pipe__WEBPACK_IMPORTED_MODULE_4__["RelativeTimePipe"]
];
var SharedPipesModule = /** @class */ (function () {
    function SharedPipesModule() {
    }
    SharedPipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: pipes,
            exports: pipes
        })
    ], SharedPipesModule);
    return SharedPipesModule;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.gaurd.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.gaurd.ts ***!
  \***********************************************/
/*! exports provided: AuthGaurd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurd", function() { return AuthGaurd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGaurd.prototype.canActivate = function () {
        if (this.auth.authenticated) {
            return true;
        }
        else {
            this.router.navigateByUrl("/sessions/signin");
        }
    };
    AuthGaurd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-store.service */ "./src/app/shared/services/local-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    // readonly apiURL = "http://localhost/efc/api";
    function AuthService(store, router, http) {
        this.store = store;
        this.router = router;
        this.http = http;
        this.apiURL = "http://45.118.132.77/api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: "Bearer " + this.store.getItem("access_token")
            })
        };
        this.checkAuth();
        this.getuser();
    }
    AuthService.prototype.checkAuth = function () {
        this.authenticated = this.store.getItem("access_token");
    };
    AuthService.prototype.getuser = function () {
        return this.http.get(this.apiURL + "/get_user", this.httpOptions);
    };
    AuthService.prototype.signin = function (credentials) {
        return this.http.post(this.apiURL + "/login", credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(300));
    };
    AuthService.prototype.signout = function () {
        this.store.clear();
        this.router.navigateByUrl("/sessions/signin");
    };
    AuthService.prototype.checkAccess = function () {
        var _this = this;
        this.http
            .get(this.apiURL + "/check_access", this.httpOptions)
            .toPromise()
            .then(function (res) { return res; })
            .catch(function (err) {
            if (err.status === 401) {
                _this.store.clear();
                _this.router.navigateByUrl("sessions/signin");
            }
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/customizer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/customizer.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomizerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerService", function() { return CustomizerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomizerService = /** @class */ (function () {
    function CustomizerService(router) {
        var _this = this;
        this.router = router;
        this.layouts = [
            {
                title: "Sidebar Compact",
                name: "applayout-sidebar-compact",
                img: "./assets/images/screenshots/02_preview.png",
                active: false
            },
            {
                title: "Sidebar Large",
                name: "applayout-sidebar-large",
                img: "./assets/images/screenshots/04_preview.png",
                active: true
            }
        ];
        this.colors = [
            {
                sidebarClass: "sidebar-gradient-purple-indigo",
                class: "gradient-purple-indigo",
                active: false
            },
            {
                sidebarClass: "sidebar-gradient-black-blue",
                class: "gradient-black-blue",
                active: false
            },
            {
                sidebarClass: "sidebar-gradient-black-gray",
                class: "gradient-black-gray",
                active: false
            },
            {
                sidebarClass: "sidebar-gradient-steel-gray",
                class: "gradient-steel-gray",
                active: false
            },
            {
                sidebarClass: "sidebar-dark-purple",
                class: "dark-purple",
                active: true
            },
            {
                sidebarClass: "sidebar-slate-gray",
                class: "slate-gray",
                active: false
            },
            {
                sidebarClass: "sidebar-midnight-blue",
                class: "midnight-blue",
                active: false
            },
            {
                sidebarClass: "sidebar-blue",
                class: "blue",
                active: false
            },
            {
                sidebarClass: "sidebar-indigo",
                class: "indigo",
                active: false
            },
            {
                sidebarClass: "sidebar-pink",
                class: "pink",
                active: false
            },
            {
                sidebarClass: "sidebar-red",
                class: "red",
                active: false
            },
            {
                sidebarClass: "sidebar-purple",
                class: "purple",
                active: false
            }
        ];
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]; }))
            .subscribe(function (event) {
            if (event.url.indexOf("applayout-") === -1) {
                if (event.url.indexOf("sessions") !== -1) {
                    return;
                }
                var url = "/" + _this.selectedLayout.name + event.url;
                _this.router.navigateByUrl(url);
            }
        });
    }
    CustomizerService.prototype.modifySidebarUrls = function (nav, selectedLayoutName) {
        var _this = this;
        nav.forEach(function (item) {
            if (item.state && item.state.indexOf("sessions") !== -1) {
                return;
            }
            if (item.type === "link" && item.state.indexOf("applayout-") === -1) {
                item.state = "/" + selectedLayoutName + item.state;
            }
            else if (item.type === "link") {
                item.state = _this.replaceUrlString(selectedLayoutName, item.state);
            }
            if (item.type === "dropDown" && item.sub) {
                _this.modifySidebarUrls(item.sub, selectedLayoutName);
            }
        });
    };
    CustomizerService.prototype.replaceUrlString = function (inputString, fullString) {
        var currentRoute = fullString;
        var routeArray = currentRoute.split("/");
        routeArray = routeArray.map(function (r) {
            if (r.indexOf("applayout-") !== -1) {
                return inputString;
            }
            return r;
        });
        return routeArray.join("/");
    };
    CustomizerService.prototype.removeClass = function (el, className) {
        if (!el || el.length === 0)
            return;
        if (!el.length) {
            el.classList.remove(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.remove(className);
            }
        }
    };
    CustomizerService.prototype.addClass = function (el, className) {
        if (!el)
            return;
        if (!el.length) {
            el.classList.add(className);
        }
        else {
            for (var i = 0; i < el.length; i++) {
                el[i].classList.add(className);
            }
        }
    };
    CustomizerService.prototype.findClosest = function (el, className) {
        if (!el)
            return;
        while (el) {
            var parent = el.parentElement;
            if (parent && this.hasClass(parent, className)) {
                return parent;
            }
            el = parent;
        }
    };
    CustomizerService.prototype.hasClass = function (el, className) {
        if (!el)
            return;
        return ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + className + " ") > -1);
    };
    CustomizerService.prototype.toggleClass = function (el, className) {
        if (!el)
            return;
        if (this.hasClass(el, className)) {
            this.removeClass(el, className);
        }
        else {
            this.addClass(el, className);
        }
    };
    CustomizerService.prototype.toggleDir = function (isRTL) {
        var html = document.getElementsByTagName('html')[0];
        if (!html) {
            return;
        }
        if (isRTL) {
            html.setAttribute('dir', 'rtl');
        }
        else {
            html.setAttribute('dir', 'ltr');
        }
    };
    CustomizerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomizerService);
    return CustomizerService;
}());



/***/ }),

/***/ "./src/app/shared/services/data-layer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/data-layer.service.ts ***!
  \*******************************************************/
/*! exports provided: DataLayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerService", function() { return DataLayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/app/shared/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataLayerService = /** @class */ (function () {
    function DataLayerService(http) {
        this.http = http;
    }
    DataLayerService.prototype.getInvoices = function () {
        return this.http.get('/api/invoices');
    };
    DataLayerService.prototype.getInvoice = function (id) {
        return this.http.get('/api/invoices/' + id);
    };
    DataLayerService.prototype.saveInvoice = function (invoice) {
        if (invoice.id) {
            return this.http.put('/api/invoices/' + invoice.id, invoice);
        }
        else {
            invoice.id = _utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].genId();
            return this.http.post('/api/invoices/', invoice);
        }
    };
    DataLayerService.prototype.deleteInvoice = function (id) {
        return this.http.delete('/api/invoices/' + id);
    };
    DataLayerService.prototype.getMails = function () {
        return this.http.get('/api/mails');
    };
    DataLayerService.prototype.getCountries = function () {
        return this.http.get('/api/countries');
    };
    DataLayerService.prototype.getProducts = function () {
        return this.http.get('api/products');
    };
    DataLayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataLayerService);
    return DataLayerService;
}());



/***/ }),

/***/ "./src/app/shared/services/local-store.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/local-store.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStoreService", function() { return LocalStoreService; });
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

var LocalStoreService = /** @class */ (function () {
    function LocalStoreService() {
        this.ls = window.localStorage;
    }
    LocalStoreService.prototype.setItem = function (key, value) {
        value = JSON.stringify(value);
        this.ls.setItem(key, value);
        return value;
    };
    LocalStoreService.prototype.getItem = function (key) {
        var value = this.ls.getItem(key);
        try {
            return JSON.parse(value);
        }
        catch (e) {
            // console.log(e)
            return null;
        }
    };
    LocalStoreService.prototype.clear = function () {
        this.ls.clear();
    };
    LocalStoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], LocalStoreService);
    return LocalStoreService;
}());



/***/ }),

/***/ "./src/app/shared/services/navigation.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigation.service.ts ***!
  \*******************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.sidebarState = {
            sidenavOpen: true,
            childnavOpen: false
        };
        this.defaultMenu = [
            {
                name: "Customer Search",
                type: "link",
                icon: "i-Gey",
                state: "/"
            },
            {
                name: "Member Partner",
                type: "link",
                tooltip: "Member Partner",
                icon: "i-Business-Mens",
                state: "/member-partner"
            },
            {
                name: "Staff",
                type: "link",
                tooltip: "Staff",
                icon: "i-Conference",
                state: "/staff"
            },
            {
                name: "Schedules",
                type: "link",
                tooltip: "Schedules",
                icon: "i-Calendar",
                state: "/schedule"
            },
            {
                name: "Finance",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                type: "dropDown",
                icon: "i-Financial",
                sub: [
                    {
                        icon: "i-File-Horizontal-Text",
                        name: "Member List",
                        state: "/finance/member-list",
                        type: "link"
                    },
                    {
                        icon: "i-Management",
                        name: "Transactions",
                        state: "/finance/transaction-list",
                        type: "link"
                    },
                    {
                        icon: "i-File-Clipboard-File--Text",
                        name: "Report",
                        state: "/finance/report",
                        type: "link"
                    }
                ]
            },
            {
                name: "Master",
                description: "This data master",
                type: "dropDown",
                icon: "i-Folders",
                sub: [
                    {
                        name: "Users",
                        type: "dropDown",
                        icon: "i-Administrator",
                        sub: [
                            {
                                icon: "i-File-Horizontal-Text",
                                name: "User List",
                                state: "/master/user",
                                type: "link"
                            },
                            {
                                icon: "i-Checked-User",
                                name: "Role & Permission",
                                state: "/master/role",
                                type: "link"
                            },
                            {
                                icon: "i-Lock-User",
                                name: "Permission",
                                state: "/master/permission",
                                type: "link"
                            }
                        ]
                    },
                    {
                        icon: "i-Library",
                        name: "Branch",
                        state: "/master/branch",
                        type: "link"
                    },
                    {
                        icon: "i-Money-2",
                        name: "Pricing PT",
                        state: "/master/pricing-pt",
                        type: "link"
                    },
                    {
                        icon: "i-Money-2",
                        name: "Pricing Non PT",
                        state: "/master/pricing-non-pt",
                        type: "link"
                    },
                    // {
                    //   icon: "i-Male",
                    //   name: "Coach",
                    //   state: "/master/coach",
                    //   type: "link"
                    // },
                    {
                        icon: "i-Calendar",
                        name: "Schedule",
                        state: "/master/schedule",
                        type: "link"
                    },
                    {
                        icon: "i-Visa",
                        name: "Payment Type",
                        state: "/master/payment-type",
                        type: "link"
                    },
                    {
                        icon: "i-Visa",
                        name: "Bank",
                        state: "/master/bank",
                        type: "link"
                    },
                    {
                        icon: "i-Geek",
                        name: "Member Type",
                        state: "/master/member-type",
                        type: "link"
                    },
                    {
                        icon: "i-Wallet",
                        name: "Benefit",
                        state: "/master/benefit",
                        type: "link"
                    },
                    {
                        icon: "i-Library",
                        name: "Dropin Company",
                        state: "/master/dropin-company",
                        type: "link"
                    },
                    {
                        icon: "i-Library",
                        name: "Health Questions",
                        state: "/master/health-questions",
                        type: "link"
                    },
                    {
                        icon: "i-Library",
                        name: "Positions",
                        state: "/master/position",
                        type: "link"
                    },
                    {
                        icon: "i-Library",
                        name: "Devices",
                        state: "/master/device",
                        type: "link"
                    }
                ]
            }
        ];
        // sets iconMenu as default;
        this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultMenu);
        // navigation component has subscribed to this Observable
        this.menuItems$ = this.menuItems.asObservable();
    }
    NavigationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/shared/services/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
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

var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/shared/services/sidebar-helper.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/sidebar-helper.service.ts ***!
  \***********************************************************/
/*! exports provided: SidebarHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarHelperService", function() { return SidebarHelperService; });
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

var SidebarHelperService = /** @class */ (function () {
    function SidebarHelperService() {
        this.sidenavInstances = [];
    }
    /**
     * Set sidenav
     *
     * @param id
     * @param instance
     */
    SidebarHelperService.prototype.setSidenav = function (id, instance) {
        this.sidenavInstances[id] = instance;
    };
    /**
     * Get sidenav
     *
     * @param id
     * @returns {any}
     */
    SidebarHelperService.prototype.getSidenav = function (id) {
        console.log(this.sidenavInstances);
        return this.sidenavInstances[id];
    };
    SidebarHelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarHelperService);
    return SidebarHelperService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.module */ "./src/app/shared/components/search/search.module.ts");
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                _components_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
                _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.isMobile = function () {
        return window && window.matchMedia('(max-width: 767px)').matches;
    };
    Utils.ngbDateToDate = function (ngbDate) {
        if (!ngbDate) {
            return null;
        }
        return new Date(ngbDate.month + "/" + ngbDate.day + "/" + ngbDate.year);
    };
    Utils.dateToNgbDate = function (date) {
        if (!date) {
            return null;
        }
        date = new Date(date);
        return { month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear() };
    };
    Utils.scrollToTop = function (selector) {
        if (document) {
            var element = document.querySelector(selector);
            element.scrollTop = 0;
        }
    };
    Utils.genId = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    return Utils;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/empirefe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map