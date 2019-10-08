(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-master-master-module~views-member-member-module~views-registration-registration-module~621196b4"],{

/***/ "./src/app/shared/components/form-wizard/form-wizard.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/form-wizard.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardModule", function() { return FormWizardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/shared/components/form-wizard/wizard/wizard.component.ts");
/* harmony import */ var _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard-step/wizard-step.component */ "./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FormWizardModule = /** @class */ (function () {
    function FormWizardModule() {
    }
    FormWizardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"]],
            exports: [_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"]]
        })
    ], FormWizardModule);
    return FormWizardModule;
}());



/***/ }),

/***/ "./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts ***!
  \************************************************************************************/
/*! exports provided: WizardStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepComponent", function() { return WizardStepComponent; });
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

var WizardStepComponent = /** @class */ (function () {
    function WizardStepComponent() {
        this.hidden = false;
        this.isValid = true;
        this.showNext = true;
        this.showPrev = true;
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isActive = false;
        this.isDisabled = true;
    }
    Object.defineProperty(WizardStepComponent.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WizardStepComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WizardStepComponent.prototype, "hidden", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WizardStepComponent.prototype, "isValid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WizardStepComponent.prototype, "showNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WizardStepComponent.prototype, "showPrev", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WizardStepComponent.prototype, "onNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WizardStepComponent.prototype, "onPrev", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WizardStepComponent.prototype, "onComplete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isActive'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], WizardStepComponent.prototype, "isActive", null);
    WizardStepComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wizard-step',
            template: "\n    <div [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], WizardStepComponent);
    return WizardStepComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/form-wizard/wizard/wizard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/wizard/wizard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-justified\">\n      <li class=\"nav-item\" *ngFor=\"let step of steps\" [ngClass]=\"{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}\">\n        <a (click)=\"goToStep(step)\">{{step.title}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-block\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"card-footer\" [hidden]=\"isCompleted\">\n    <button type=\"button\" class=\"btn btn-rounded btn-secondary float-left prevaja\" (click)=\"previous()\" [hidden]=\"!hasPrevStep || !activeStep.showPrev\">Previous</button>\n    <button type=\"button\" class=\"btn btn-rounded btn-secondary float-right nextaja\" (click)=\"next()\" [disabled]=\"!activeStep.isValid\"\n      [hidden]=\"!hasNextStep || !activeStep.showNext\">Next</button>\n    <button type=\"button\" class=\"btn btn-rounded btn-secondary float-right\" (click)=\"complete()\" [disabled]=\"!activeStep.isValid\"\n      [hidden]=\"hasNextStep\">Done</button>\n    <button type=\"button\" class=\"btn mr-2 btn-rounded btn-secondary float-right\" (click)=\"skip()\" [hidden]=\"!hasSkipStep\">Skip</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/form-wizard/wizard/wizard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/wizard/wizard.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  height: 100%; }\n\n.card-header {\n  background-color: #fff;\n  padding: 0;\n  font-size: 1.25rem; }\n\n.card-block {\n  overflow-y: auto; }\n\n.card-footer {\n  background-color: #fff;\n  border-top: 0 none; }\n\n.nav-item {\n  padding: 1rem 0rem;\n  border-bottom: 0.5rem solid #ccc; }\n\n.active {\n  font-weight: bold;\n  color: black;\n  border-bottom-color: #1976D2 !important; }\n\n.enabled {\n  cursor: pointer;\n  border-bottom-color: #58a2ea; }\n\n.disabled {\n  color: #ccc; }\n\n.completed {\n  cursor: default; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvZW1waXJlLWZpdC1jbHViL2VmYy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvcm0td2l6YXJkL3dpemFyZC93aXphcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxZQUFZLEVBQUE7O0FBQ3BCO0VBQWUsc0JBQXNCO0VBQUUsVUFBVTtFQUFFLGtCQUFrQixFQUFBOztBQUNyRTtFQUFjLGdCQUFnQixFQUFBOztBQUM5QjtFQUFlLHNCQUFzQjtFQUFFLGtCQUFrQixFQUFBOztBQUN6RDtFQUFZLGtCQUFrQjtFQUFFLGdDQUFnQyxFQUFBOztBQUNoRTtFQUFVLGlCQUFpQjtFQUFFLFlBQVk7RUFBRSx1Q0FBdUMsRUFBQTs7QUFDbEY7RUFBVyxlQUFlO0VBQUUsNEJBQXNDLEVBQUE7O0FBQ2xFO0VBQVksV0FBVyxFQUFBOztBQUN2QjtFQUFhLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvcm0td2l6YXJkL3dpemFyZC93aXphcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7IGhlaWdodDogMTAwJTsgfVxuLmNhcmQtaGVhZGVyIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgcGFkZGluZzogMDsgZm9udC1zaXplOiAxLjI1cmVtOyB9XG4uY2FyZC1ibG9jayB7IG92ZXJmbG93LXk6IGF1dG87IH1cbi5jYXJkLWZvb3RlciB7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci10b3A6IDAgbm9uZTsgfVxuLm5hdi1pdGVtIHsgcGFkZGluZzogMXJlbSAwcmVtOyBib3JkZXItYm90dG9tOiAwLjVyZW0gc29saWQgI2NjYzsgfVxuLmFjdGl2ZSB7IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogYmxhY2s7IGJvcmRlci1ib3R0b20tY29sb3I6ICMxOTc2RDIgIWltcG9ydGFudDsgfVxuLmVuYWJsZWQgeyBjdXJzb3I6IHBvaW50ZXI7IGJvcmRlci1ib3R0b20tY29sb3I6IHJnYig4OCwgMTYyLCAyMzQpOyB9XG4uZGlzYWJsZWQgeyBjb2xvcjogI2NjYzsgfVxuLmNvbXBsZXRlZCB7IGN1cnNvcjogZGVmYXVsdH0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/form-wizard/wizard/wizard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/wizard/wizard.component.ts ***!
  \**************************************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wizard-step/wizard-step.component */ "./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
        this._steps = [];
        this._isCompleted = false;
        this.onStepChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WizardComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.wizardSteps.forEach(function (step) { return _this._steps.push(step); });
        this.steps[0].isActive = true;
    };
    Object.defineProperty(WizardComponent.prototype, "steps", {
        get: function () {
            return this._steps.filter(function (step) { return !step.hidden; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "isCompleted", {
        get: function () {
            return this._isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStep", {
        get: function () {
            return this.steps.find(function (step) { return step.isActive; });
        },
        set: function (step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                this.onStepChanged.emit(step);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStepIndex", {
        get: function () {
            return this.steps.indexOf(this.activeStep);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasNextStep", {
        get: function () {
            return this.activeStepIndex < this.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasSkipStep", {
        get: function () {
            return this.activeStepIndex == 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasPrevStep", {
        get: function () {
            return this.activeStepIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    WizardComponent.prototype.goToStep = function (step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    };
    WizardComponent.prototype.next = function () {
        if (this.hasNextStep) {
            var nextStep = this.steps[this.activeStepIndex + 1];
            this.activeStep.onNext.emit();
            nextStep.isDisabled = false;
            this.activeStep = nextStep;
        }
    };
    WizardComponent.prototype.skip = function () {
        if (this.hasSkipStep) {
            var skipStep = this.steps[this.activeStepIndex + 1];
            this.activeStep.onNext.emit();
            skipStep.isDisabled = false;
            this.activeStep = skipStep;
        }
    };
    WizardComponent.prototype.previous = function () {
        if (this.hasPrevStep) {
            var prevStep = this.steps[this.activeStepIndex - 1];
            this.activeStep.onPrev.emit();
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    };
    WizardComponent.prototype.complete = function () {
        this.activeStep.onComplete.emit();
        this._isCompleted = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_1__["WizardStepComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], WizardComponent.prototype, "wizardSteps", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WizardComponent.prototype, "onStepChanged", void 0);
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/shared/components/form-wizard/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.scss */ "./src/app/shared/components/form-wizard/wizard/wizard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~views-master-master-module~views-member-member-module~views-registration-registration-module~621196b4.js.map