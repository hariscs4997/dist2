(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-resource/add-resource.component.css":
/*!*********************************************************!*\
  !*** ./src/app/add-resource/add-resource.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yZXNvdXJjZS9hZGQtcmVzb3VyY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/add-resource/add-resource.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-resource/add-resource.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-7 ml-5 mt-5 mb-5 form-container\">\r\n  <form [formGroup]=\"addResource\" class=\"form\" (submit)='addResourceHandler()'>\r\n    <div class=\"form-group\">\r\n      <label>Link</label>\r\n      <input type=\"url\" class=\"form-control\" formControlName='link' placeholder=\"Enter Resource Link\" >\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.link.errors\">Enter Valid Link</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Subject</label>\r\n      <select class=\"form-control\" (change)='getLevel($event)' formControlName='subject'>\r\n        <option value=\"\" disabled>Select Subject</option>\r\n        <option [value]=\"sub.id\" *ngFor='let sub of subjects'>{{sub.title}}</option>\r\n      </select>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.subject.errors\">Subject is required</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Level</label>\r\n      <select class=\"form-control\" (change)='getTopic($event)' formControlName='level'>\r\n        <option value=\"\" disabled>Select Level</option>\r\n        <option [value]=\"sub.id\" *ngFor='let sub of subCat'>{{sub.title}}</option>\r\n      </select>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.level.errors\">Level is required</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Topic</label>\r\n      <select class=\"form-control\" formControlName='topic'>\r\n        <option value=\"\" disabled>Select Topic</option>\r\n        <option [value]=\"sub.id\" *ngFor='let sub of topic'>{{sub.title}}</option>\r\n      </select>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.topic.errors\">Topic is required</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Resource type</label>\r\n      <select class=\"form-control\" formControlName='resource_type'>\r\n        <option value=\"\" disabled>Select Resource Type</option>\r\n        <option value=\"notes\">Notes</option>\r\n        <option value=\"exercise\">Exercise</option>\r\n      </select>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.resource_type.errors\">Resource type is required</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Description</label>\r\n      <textarea class=\"form-control\" formControlName='description' placeholder=\"Enter Description\" rows=\"5\"></textarea>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.description.errors\">Description is required</label>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success btn-block\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-resource/add-resource.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-resource/add-resource.component.ts ***!
  \********************************************************/
/*! exports provided: AddResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddResourceComponent", function() { return AddResourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var AddResourceComponent = /** @class */ (function () {
    function AddResourceComponent(fb, api) {
        var _this = this;
        this.fb = fb;
        this.api = api;
        this.subbmitted = false;
        this.alert = true;
        this.count = 0;
        this.getSubjects = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('get_subjects/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            if (res.length > 0) {
                                _this.subjects = res;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
    }
    AddResourceComponent.prototype.ngOnInit = function () {
        this.getSubjects();
        var reg = '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$';
        this.addResource = this.fb.group({
            link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(reg)]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            level: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            topic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            resource_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    AddResourceComponent.prototype.getLevel = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.sub_id = e.target.value;
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('get_level_by_subject/?sub_id=' + this.sub_id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.subCat = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddResourceComponent.prototype.getTopic = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.lvl_id = e.target.value;
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData("get_topic_by_sub_level/?sub_id=" + this.sub_id + "&lev_id=" + this.lvl_id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.topic = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddResourceComponent.prototype.addResourceHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var topic, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.addResource.invalid) return [3 /*break*/, 1];
                        this.subbmitted = true;
                        return [3 /*break*/, 3];
                    case 1:
                        this.api.loader();
                        topic = {
                            link: this.addResource.controls['link'].value,
                            subject: this.addResource.controls['subject'].value,
                            level: this.addResource.controls['level'].value,
                            topic: this.addResource.controls['topic'].value,
                            resource_type: this.addResource.controls['resource_type'].value,
                            description: this.addResource.controls['description'].value,
                        };
                        return [4 /*yield*/, this.api.postData('get_create_resource/', topic)];
                    case 2:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message("New Resource Created. Pending Admin's Approval");
                            _this.addResource.reset();
                            window.location.href = "/categories";
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AddResourceComponent.prototype, "f", {
        get: function () { return this.addResource.controls; },
        enumerable: true,
        configurable: true
    });
    AddResourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-resource',
            template: __webpack_require__(/*! ./add-resource.component.html */ "./src/app/add-resource/add-resource.component.html"),
            styles: [__webpack_require__(/*! ./add-resource.component.css */ "./src/app/add-resource/add-resource.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AddResourceComponent);
    return AddResourceComponent;
}());



/***/ }),

/***/ "./src/app/addtopic/addtopic.component.css":
/*!*************************************************!*\
  !*** ./src/app/addtopic/addtopic.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHRvcGljL2FkZHRvcGljLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/addtopic/addtopic.component.html":
/*!**************************************************!*\
  !*** ./src/app/addtopic/addtopic.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\r\n\r\n\r\n\r\n</div>\r\n\r\n<div class=\"col-md-7 ml-5 mt-5 mb-5 form-container\">\r\n  <form [formGroup]=\"addTopic\" class=\"form\" (submit)='addTopicHandler()'>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">New Topic</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName='title' placeholder=\"Enter Topic\">\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.title.errors\">Title is required</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Subject</label>\r\n      <select class=\"form-control\" (change)='getLevel($event)' formControlName='subject'>\r\n        <option value=\"\" disabled>Select Subject</option>\r\n        <option [value]=\"sub.id\" *ngFor='let sub of subjects'>{{sub.title}}</option>\r\n      </select>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.subject.errors\">Subject is required</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Level</label>\r\n      <select class=\"form-control\" formControlName='level'>\r\n        <option value=\"\" disabled>Select Level</option>\r\n        <option [value]=\"sub.id\" *ngFor='let sub of subCat'>{{sub.title}}</option>\r\n      </select>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.level.errors\">Level is required</label>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success btn-block\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/addtopic/addtopic.component.ts":
/*!************************************************!*\
  !*** ./src/app/addtopic/addtopic.component.ts ***!
  \************************************************/
/*! exports provided: AddtopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtopicComponent", function() { return AddtopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var AddtopicComponent = /** @class */ (function () {
    function AddtopicComponent(fb, api) {
        var _this = this;
        this.fb = fb;
        this.api = api;
        this.subbmitted = false;
        this.getSubjects = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('get_subjects/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            if (res.length > 0) {
                                _this.subjects = res;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
    }
    AddtopicComponent.prototype.ngOnInit = function () {
        this.addTopic = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            level: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.getSubjects();
    };
    AddtopicComponent.prototype.getLevel = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.sub_id = e.target.value;
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('get_level_by_subject/?sub_id=' + this.sub_id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.subCat = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddtopicComponent.prototype.addTopicHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var topic, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.addTopic.invalid) return [3 /*break*/, 1];
                        this.subbmitted = true;
                        return [3 /*break*/, 3];
                    case 1:
                        this.api.loader();
                        topic = {
                            title: this.addTopic.controls['title'].value,
                            subject: this.addTopic.controls['subject'].value,
                            level: this.addTopic.controls['level'].value
                        };
                        return [4 /*yield*/, this.api.postData('create_topic/', topic)];
                    case 2:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message('New Topic Created');
                            _this.addTopic.reset();
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AddtopicComponent.prototype, "f", {
        get: function () { return this.addTopic.controls; },
        enumerable: true,
        configurable: true
    });
    AddtopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addtopic',
            template: __webpack_require__(/*! ./addtopic.component.html */ "./src/app/addtopic/addtopic.component.html"),
            styles: [__webpack_require__(/*! ./addtopic.component.css */ "./src/app/addtopic/addtopic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AddtopicComponent);
    return AddtopicComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main\r\n{\r\n    display: none   ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5cclxue1xyXG4gICAgZGlzcGxheTogbm9uZSAgIDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\r\n  \r\n  \r\n  <nav class=\"navbar navbar-expand-lg navbar-light col-md-10\" style=\"background-color:#fff\">\r\n    <a class=\"navbar-brand pr-2\" routerLink=\"/pending\" >Pending</a>\r\n    <a class=\"navbar-brand pr-2\" routerLink=\"/addtopic\" >Add Topic</a>     \r\n  </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var ApiService = /** @class */ (function () {
    function ApiService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.baseurl = "https://immense-caverns-13289.herokuapp.com/";
        this.httpHeaders = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('Token') }) };
        this.alert = false;
        this.loading = false;
        this.alertMsg = '';
    }
    ApiService.prototype.message = function (msg) {
        var _this = this;
        // console.log(msg)
        this.alert = true;
        this.alertMsg = msg;
        setTimeout(function () {
            _this.alert = false;
            _this.alertMsg = 'msg';
        }, 2000);
    };
    ApiService.prototype.loader = function () {
        this.loading = true;
    };
    ApiService.prototype.noloader = function () {
        this.loading = false;
    };
    ApiService.prototype.getallsubjects = function () {
        return this.http.get(this.baseurl + '/admin/boardapp/subjectmodel/', this.httpHeaders);
    };
    ApiService.prototype.getData = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.http.get(this.baseurl + url, this.httpHeaders)];
            });
        });
    };
    ApiService.prototype.postData = function (url, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.http.post(this.baseurl + url, data, this.httpHeaders)];
            });
        });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/resource/resource.component.ts");
/* harmony import */ var _subcat_subcat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcat/subcat.component */ "./src/app/subcat/subcat.component.ts");
/* harmony import */ var _gridresource_gridresource_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gridresource/gridresource.component */ "./src/app/gridresource/gridresource.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addtopic/addtopic.component */ "./src/app/addtopic/addtopic.component.ts");
/* harmony import */ var _pending_pending_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pending/pending.component */ "./src/app/pending/pending.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _topics_topics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topics/topics.component */ "./src/app/topics/topics.component.ts");
/* harmony import */ var _sub_topic_sub_topic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sub-topic/sub-topic.component */ "./src/app/sub-topic/sub-topic.component.ts");
/* harmony import */ var _add_resource_add_resource_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-resource/add-resource.component */ "./src/app/add-resource/add-resource.component.ts");
/* harmony import */ var _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./top-rated/top-rated.component */ "./src/app/top-rated/top-rated.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _teachers_list_teachers_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./teachers-list/teachers-list.component */ "./src/app/teachers-list/teachers-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _mypins_mypins_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mypins/mypins.component */ "./src/app/mypins/mypins.component.ts");
/* harmony import */ var _top_teachers_top_teachers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./top-teachers/top-teachers.component */ "./src/app/top-teachers/top-teachers.component.ts");





















var routes = [
    { path: '',
        redirectTo: '/categories',
        pathMatch: 'full'
    },
    { path: "categories", component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "resource", component: _resource_resource_component__WEBPACK_IMPORTED_MODULE_5__["ResourceComponent"] },
    { path: "subcat/:id", component: _subcat_subcat_component__WEBPACK_IMPORTED_MODULE_6__["SubcatComponent"] },
    { path: "gridresource", component: _gridresource_gridresource_component__WEBPACK_IMPORTED_MODULE_7__["GridresourceComponent"] },
    { path: "admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    { path: "pending", component: _pending_pending_component__WEBPACK_IMPORTED_MODULE_10__["PendingComponent"] },
    { path: "addtopic", component: _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_9__["AddtopicComponent"] },
    { path: "search", component: _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"] },
    { path: "topics", component: _topics_topics_component__WEBPACK_IMPORTED_MODULE_12__["TopicsComponent"] },
    { path: "sub-topics", component: _sub_topic_sub_topic_component__WEBPACK_IMPORTED_MODULE_13__["SubTopicComponent"] },
    { path: "add-resource", component: _add_resource_add_resource_component__WEBPACK_IMPORTED_MODULE_14__["AddResourceComponent"] },
    { path: "top-rated", component: _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_15__["TopRatedComponent"] },
    { path: "role", component: _role_role_component__WEBPACK_IMPORTED_MODULE_16__["RoleComponent"] },
    { path: "teachers", component: _teachers_list_teachers_list_component__WEBPACK_IMPORTED_MODULE_17__["TeachersListComponent"] },
    { path: "top-teachers", component: _top_teachers_top_teachers_component__WEBPACK_IMPORTED_MODULE_20__["TopTeachersComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] },
    { path: "pins", component: _mypins_mypins_component__WEBPACK_IMPORTED_MODULE_19__["MypinsComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "h5 > a{\r\n    color:black;\r\n}\r\n\r\nh6 > a{\r\n    color:black;\r\n}\r\n\r\n.dropdown ul{\r\n    margin-top: 20px;\r\n}\r\n\r\n.circle {\r\n  margin:auto;\r\n  border: 0.1em solid grey;\r\n  border-radius: 100%;\r\n  width: 2em;\r\n  text-align: center;\r\n}\r\n\r\n.circle span {\r\nmargin-top: 0.10em;\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n  font-family: sans-serif;\r\n  color: grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0FBQ0Esa0JBQWtCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDUgPiBhe1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbmg2ID4gYXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4uZHJvcGRvd24gdWx7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jaXJjbGUge1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGJvcmRlcjogMC4xZW0gc29saWQgZ3JleTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2lyY2xlIHNwYW4ge1xyXG5tYXJnaW4tdG9wOiAwLjEwZW07XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Header -->\r\n<div class=\"d-flex bg-light\">\r\n\r\n  <div class=\"col-md-2 pt-2\" style=\"text-align: center\">\r\n    <a routerLink=\"/categories\" *ngIf='!loginPage'><img src=\"assets/images/logo1.png\" width=\"100\" height=\"60\"></a>\r\n    <a routerLink=\"/login\" *ngIf='loginPage'><img src=\"assets/images/logo1.png\" width=\"100\" height=\"60\"></a>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 pt-3\" *ngIf='!loginPage'>\r\n    <div class=\"input-group mb-3\">\r\n      <input type=\"search\" class=\"form-control\" #inputSearch placeholder=\"Search\" (keyup.enter)=\"searchContents()\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-success\" (click)=\"searchContents()\"  >Search</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-1\">\r\n    </div>\r\n\r\n  <div class=\"dropdown col-md-3 pt-3 pr-5 text-right\"  *ngIf='!loginPage'>\r\n\r\n    <a class=\" dropdown-toggle user\" data-toggle=\"dropdown\">\r\n      <img height=\"40\" width=\"40\" src=\"assets/images/user-logo.png\">    </a>\r\n    <ul class=\"dropdown-menu text-center\">\r\n      <li><a class=\"pointer\" (click)=\"logout()\">Logout</a></li>\r\n    </ul>\r\n    <div style=\"display:inline-block ;padding: 10px;\">{{username}}</div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"d-flex\" style=\"min-height: 90vh;\">\r\n  <div class=\"col-md-2 bg-light px-0\" style=\"text-align: center\" *ngIf='!loginPage'>\r\n    <div class=\"col-12 pt-3 pb-2 px-0 bg-theme mb-3\">\r\n      <div class=\"pl-4 pr-2\">\r\n        <h4 style=\"color: White\">Resources</h4>\r\n      </div>\r\n    </div>\r\n    <h5><a routerLink=\"/pins\">My Pins</a></h5>\r\n    <h6 class=\"pt-2\" *ngIf='currentUser.post_resource'><a routerLink=\"/add-resource\">Create Resource</a>\r\n    </h6>\r\n    <h6 class=\"pt-2\" *ngIf='currentUser.is_admin'><a routerLink=\"/addtopic\">Create Topic</a></h6>\r\n <h6 class=\"pt-2\" *ngIf='currentUser.is_admin' ><a routerLink=\"/pending\">Pending Approval ({{count}}) </a></h6>\r\n    <div class=\"pl-5\">\r\n      <hr>\r\n    </div>\r\n    <h6><a routerLink=\"/categories\">Categories</a></h6>\r\n    <h6 class=\"pt-1\"><a routerLink=\"/top-rated\">Top Rated Resources</a></h6>\r\n    <h6 class=\"pt-1\"><a routerLink=\"/top-teachers\">Top Rated Teachers</a></h6>\r\n    <h6 class=\"pt-1\"><a routerLink=\"/teachers\">Following</a></h6>\r\n    <div class=\"my-rating\"></div>\r\n  </div>\r\n\r\n  <div class=\"col-md-10\" style=\"background-color: #eeeeee;position:relative\" *ngIf='!loginPage'>\r\n    <div class=\"alert alert-success\" style=\"position:fixed;right:0;top:0;\" *ngIf='api.alert'>\r\n      {{api.alertMsg}}\r\n    </div>\r\n    <div class=\"Loader\" *ngIf='api.loading'>\r\n      <div class=\"mesh-loader\">\r\n        <p class=\"overlay\"></p>\r\n        <div class=\"set-one\">\r\n          <div class=\"circle\"></div>\r\n          <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"set-two\">\r\n          <div class=\"circle\"></div>\r\n          <div class=\"circle\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"d-inline-block\" style=\"background-color: #fff;margin: 50px auto;text-align: center;\" *ngIf='loginPage'>\r\n    <div class=\"d-flex\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n<!-- <div class=\"d-flex\"\r\n  style=\"min-height: 80vh;text-align: center;align-items: center;width: 75%;justify-content: space-around;\"\r\n  *ngIf='loginPage'>\r\n  <router-outlet></router-outlet>\r\n</div> -->\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(http, router, api, authService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.api = api;
        this.authService = authService;
        this.title = 'angApp';
        this.logged = false;
        this.user = null;
        this.loginPage = false;
        this.role = true;
        if (window.location.pathname == '/login' || window.location.pathname == '/role') {
            this.loginPage = true;
        }
        else {
            this.loginPage = false;
            this.currentUser = JSON.parse(localStorage.getItem('currentLogged'));
        }
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.mySubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // Trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentUser.subscribe(function (user) {
            _this.user = user;
        });
        this.username = localStorage.getItem("username");
        //   console.log(this.temp)
        // this.count= temp;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.mySubscription) {
            this.mySubscription.unsubscribe();
        }
    };
    // async login() {
    //   let res = await this.authService.doGoogleLogin();
    //   if (res) {
    //     this.logged = true
    //     let data = await this.api.getData('set_retrieve_role/')
    //     await data.subscribe((res: any) => {
    //       console.log('go to home')
    //       this.router.navigateByUrl('/categories')
    //     }, (err: any) => {
    //       this.router.navigateByUrl('/role')
    //       console.log('Set Profile')
    //     })
    //   }
    // }
    AppComponent.prototype.logout = function () {
        var res = this.authService.logout();
        if (res) {
            this.logged = false;
            localStorage.removeItem('currentLogged');
            localStorage.removeItem('username');
            window.location.href = '/login';
        }
    };
    AppComponent.prototype.searchContents = function () {
        if (this.search.nativeElement.value != '') {
            this.router.navigateByUrl('search?q=' + this.search.nativeElement.value);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("inputSearch"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "search", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _subcat_subcat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subcat/subcat.component */ "./src/app/subcat/subcat.component.ts");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/resource/resource.component.ts");
/* harmony import */ var _gridresource_gridresource_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gridresource/gridresource.component */ "./src/app/gridresource/gridresource.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _pending_pending_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pending/pending.component */ "./src/app/pending/pending.component.ts");
/* harmony import */ var _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./addtopic/addtopic.component */ "./src/app/addtopic/addtopic.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _topics_topics_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./topics/topics.component */ "./src/app/topics/topics.component.ts");
/* harmony import */ var _sub_topic_sub_topic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sub-topic/sub-topic.component */ "./src/app/sub-topic/sub-topic.component.ts");
/* harmony import */ var _add_resource_add_resource_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-resource/add-resource.component */ "./src/app/add-resource/add-resource.component.ts");
/* harmony import */ var _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./top-rated/top-rated.component */ "./src/app/top-rated/top-rated.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _teachers_list_teachers_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./teachers-list/teachers-list.component */ "./src/app/teachers-list/teachers-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-starrating */ "./node_modules/ng-starrating/fesm5/ng-starrating.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mypins_mypins_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mypins/mypins.component */ "./src/app/mypins/mypins.component.ts");
/* harmony import */ var _top_teachers_top_teachers_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./top-teachers/top-teachers.component */ "./src/app/top-teachers/top-teachers.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/breadcrumb/breadcrumb.component.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _subcat_subcat_component__WEBPACK_IMPORTED_MODULE_9__["SubcatComponent"],
                _resource_resource_component__WEBPACK_IMPORTED_MODULE_10__["ResourceComponent"],
                _gridresource_gridresource_component__WEBPACK_IMPORTED_MODULE_11__["GridresourceComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                _pending_pending_component__WEBPACK_IMPORTED_MODULE_13__["PendingComponent"],
                _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_14__["AddtopicComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                _topics_topics_component__WEBPACK_IMPORTED_MODULE_16__["TopicsComponent"],
                _sub_topic_sub_topic_component__WEBPACK_IMPORTED_MODULE_17__["SubTopicComponent"],
                _add_resource_add_resource_component__WEBPACK_IMPORTED_MODULE_18__["AddResourceComponent"],
                _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_19__["TopRatedComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_23__["RoleComponent"],
                _teachers_list_teachers_list_component__WEBPACK_IMPORTED_MODULE_24__["TeachersListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                _mypins_mypins_component__WEBPACK_IMPORTED_MODULE_28__["MypinsComponent"],
                _top_teachers_top_teachers_component__WEBPACK_IMPORTED_MODULE_29__["TopTeachersComponent"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_30__["BreadcrumbComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng_starrating__WEBPACK_IMPORTED_MODULE_26__["RatingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"],
            ],
            providers: [
                // { provide:  PathLocationStrategy, useClass:  PathLocationStrategy },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_27__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_27__["PathLocationStrategy"] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                user.getIdToken().then(function (tok) {
                    // console.log(tok);          
                });
                _this.currentUserSubject.next(user);
            }
            else {
                localStorage.setItem('currentUser', null);
            }
        });
        setInterval(function () {
            _this.getToken();
        }, 3000);
    }
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            this.currentUserSubject.value;
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.doGoogleLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var provider;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
                        provider.addScope('profile');
                        provider.addScope('email');
                        return [4 /*yield*/, this.afAuth.auth
                                .signInWithPopup(provider).then(function (result) {
                                result.user.getIdToken().then(function (tok) {
                                    localStorage.setItem('Token', 'JWT ' + tok);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                user.getIdToken(true).then(function (tok) {
                    localStorage.setItem('Token', 'JWT ' + tok);
                    // console.log(tok)     
                });
                _this.currentUserSubject.next(user);
            }
            else {
                localStorage.setItem('currentUser', null);
            }
        });
    };
    AuthService.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // remove user from local storage to log user out
                    return [4 /*yield*/, this.afAuth.auth.signOut().then(function (response) {
                            localStorage.removeItem('currentUser');
                            localStorage.removeItem('user');
                            localStorage.removeItem('Token');
                            _this.currentUserSubject.next(null);
                            return true;
                        })];
                    case 1:
                        // remove user from local storage to log user out
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.css":
/*!*****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.html":
/*!******************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  breadcrumb works!\n</p>\n"

/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.ts":
/*!****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/breadcrumb/breadcrumb.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    text-align: center;\r\n    margin-left: 10px;\r\n    margin-bottom: 5px;\r\n        }\r\n\r\n.card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO1FBQ2Q7O0FBRVI7RUFDRSx3Q0FBd0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex pb-5\">\r\n    <!-- <div class=\"col-md-2 pt-1 bg-light\" style=\"text-align: center\"></div> -->\r\n    <div class=\"col-md-12 pt-4\">\r\n        <div class =\"breadcrumb\"><a [href]=\"['/categories']\">Subjects</a></div>\r\n\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"card col-md-3\" *ngFor='let sub of subjects'>\r\n                    <div class=\"card-block pt-3\">\r\n                        <a [routerLink]=\"['/subcat', sub.id]\" (click)=getname(sub.title)><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\r\n                        <div>\r\n                            <h4>{{sub.title}}</h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"not_found\" *ngIf='empty'>\r\n                    <img src=\"assets/images/not-found.png\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(api, Child) {
        var _this = this;
        this.api = api;
        this.Child = Child;
        this.empty = false;
        this.getCount = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('get_pending/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            if (res.length == 0) {
                                _this.Child.count = 0;
                            }
                            else {
                                // this.data = res
                                _this.count = res.length;
                                _this.Child.count = _this.count;
                                // localStorage.setItem('count2',this.count.toString());
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.getResources = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('get_subjects/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            if (res.length > 0) {
                                _this.subjects = res;
                                // console.log(res)
                            }
                            else {
                                _this.empty = true;
                            }
                            _this.api.noloader();
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getResources();
        this.getCount();
    };
    CategoriesComponent.prototype.getname = function (a) {
        localStorage.setItem("Subject", a);
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/gridresource/gridresource.component.css":
/*!*********************************************************!*\
  !*** ./src/app/gridresource/gridresource.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyaWRyZXNvdXJjZS9ncmlkcmVzb3VyY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/gridresource/gridresource.component.html":
/*!**********************************************************!*\
  !*** ./src/app/gridresource/gridresource.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"col-md-4\">\r\n            <a routerLink=\"/gridresource\"><img src=\"https://img.icons8.com/ios-filled/30/000000/activity-grid--v2.png\"></a>\r\n            <a routerLink=\"/resource\"><img src=\"https://img.icons8.com/material-two-tone/40/000000/day-view.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n<!--Resource Grid -->\r\n<div class=\"container-fulid pt-2\">\r\n  <div class=\"d-flex\">\r\n    <div class=\"col-md-3 pb-3\">\r\n        <!-- Title -->\r\n        <div class=\"card\">\r\n            <h5 class=\"card-title pt-2\" style=\"text-align: center;\">Nota Sains Tahun 2</h5>\r\n            <img class=\"card-img-top\"  src=\"assets/images/book.png\"  alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"www.google.com/first+bar+website.png\" style=\"border: 1px solid black\">\r\n              <p class=\"card-text\" style=\"text-align: center;\">Some Text Here Related to the snippet</p>\r\n              </div>\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 pb-3\">\r\n        <!-- Title -->\r\n        <div class=\"card\">\r\n            <h5 class=\"card-title pt-2\" style=\"text-align: center;\">Nota Sains Tahun 2</h5>\r\n            <img class=\"card-img-top\"  src=\"assets/images/book.png\"  alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"www.google.com/first+bar+website.png\" style=\"border: 1px solid black\">\r\n              <p class=\"card-text\" style=\"text-align: center;\">Some Text Here Related to the snippet</p>\r\n              </div>\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 pb-3\">\r\n        <!-- Title -->\r\n        <div class=\"card\">\r\n            <h5 class=\"card-title pt-2\" style=\"text-align: center;\">Nota Sains Tahun 2</h5>\r\n            <img class=\"card-img-top\"  src=\"assets/images/book.png\"  alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"www.google.com/first+bar+website.png\" style=\"border: 1px solid black\">\r\n              <p class=\"card-text\" style=\"text-align: center;\">Some Text Here Related to the snippet</p>\r\n              </div>\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-3 pb-3\">\r\n        <!-- Title -->\r\n        <div class=\"card\">\r\n            <h5 class=\"card-title pt-2\" style=\"text-align: center;\">Nota Sains Tahun 2</h5>\r\n            <img class=\"card-img-top\"  src=\"assets/images/book.png\"  alt=\"Card image cap\">\r\n            <div class=\"card-body\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"www.google.com/first+bar+website.png\" style=\"border: 1px solid black\">\r\n              <p class=\"card-text\" style=\"text-align: center;\">Some Text Here Related to the snippet</p>\r\n              </div>\r\n          </div>\r\n    </div>\r\n  </div> \r\n</div>"

/***/ }),

/***/ "./src/app/gridresource/gridresource.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gridresource/gridresource.component.ts ***!
  \********************************************************/
/*! exports provided: GridresourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridresourceComponent", function() { return GridresourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridresourceComponent = /** @class */ (function () {
    function GridresourceComponent() {
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
    }
    GridresourceComponent.prototype.ngOnInit = function () {
    };
    GridresourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gridresource',
            template: __webpack_require__(/*! ./gridresource.component.html */ "./src/app/gridresource/gridresource.component.html"),
            styles: [__webpack_require__(/*! ./gridresource.component.css */ "./src/app/gridresource/gridresource.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridresourceComponent);
    return GridresourceComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n  text-align: center;\r\n  margin-left: 15px;\r\n  margin-bottom: 15px;\r\n      }\r\n\r\n.card:hover {\r\nbox-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO01BQ2Y7O0FBRU47QUFDQSx3Q0FBd0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG5ib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Cards Heading -->\r\n<div class=\"d-flex\">\r\n <!-- <div class=\"col-md-2 pt-3 bg-light\" style=\"text-align: center\"></div> -->\r\n  <div class=\"col-md-10\">\r\n      <div class=\"d-flex pt-5 \">\r\n          <h4>Featured</h4>\r\n      </div>\r\n  </div>\r\n \r\n  <div class=\"col-md-2 \">\r\n      <div class=\"d-flex pt-5 \">\r\n          <button type=\"button\" class=\"btn btn-success\">See All</button>\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n      <!-- Cards -->\r\n<div class=\"d-flex pb-5\">\r\n  <!-- <div class=\"col-md-2 pt-1 bg-light\" style=\"text-align: center\"></div> -->\r\n  \r\n  <div class=\"col-md-12 pt-4\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"card col-md-3\" *ngFor=\"let subject of featured\" >\r\n              <div class=\"card-block pt-3\">\r\n                <a routerLink=\"/subcat\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\r\n                  <div>\r\n                      <h4 >{{subject.title}}</h4> \r\n                      <p>{{subject.author}}</p> \r\n                  </div>\r\n              </div>                   \r\n          </div>\r\n      \r\n        </div>\r\n          \r\n      \r\n              \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Cards 2 Heading -->\r\n<div class=\"d-flex\">\r\n <!-- <div class=\"col-md-2 pt-3 bg-light\" style=\"text-align: center\"></div> -->\r\n  <div class=\"col-md-10\">\r\n      <div class=\"d-flex pt-5 \">\r\n          <h4>New and Updated</h4>\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"col-md-2 \">\r\n      <div class=\"d-flex pt-5 \">\r\n          <button type=\"button\" class=\"btn btn-success\">See All</button>\r\n      </div>\r\n  </div>\r\n\r\n</div>\r\n \r\n       <!-- Cards 2 -->\r\n       <div class=\"d-flex pb-5\">\r\n            <!-- <div class=\"col-md-2 pt-1 bg-light\" style=\"text-align: center\"></div> -->\r\n            \r\n            <div class=\"col-md-12 pt-4\">\r\n              <div class=\"container-fluid\">\r\n                  <div class=\"row\" >\r\n          \r\n                    <div class=\"card col-md-3\" *ngFor=\"let subject of new\" >\r\n                        <div class=\"card-block pt-3\">\r\n                           <a routerLink=\"/subcat\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\r\n                            <div>\r\n                                <h4>{{subject.title}}</h4> \r\n                                <p>{{subject.author}}</p> \r\n                            </div>\r\n                        </div>                   \r\n                    </div>\r\n                \r\n                    \r\n          \r\n                  </div>\r\n                    \r\n                \r\n                        \r\n              </div>\r\n            </div>\r\n          </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(api) {
        var _this = this;
        this.api = api;
        this.featured = [
            {
                title: 'Maths',
                author: 'Daniel'
            },
            {
                title: 'Physics',
                author: 'Farde'
            },
            {
                title: 'Chemistry',
                author: 'Smith'
            },
            {
                title: 'Pakistan Studies',
                author: 'Ayesha Malik'
            },
        ];
        this.new = [
            {
                title: 'Computer Science',
                author: 'Bill'
            },
            {
                title: 'Biology',
                author: 'Juairia Gem'
            },
            {
                title: 'Economic',
                author: 'Smith Mark'
            }
        ];
        this.getSubjects = function () {
            _this.api.getallsubjects().subscribe(function (data) { _this.featured = data; }, function (error) {
                //  console.log(error);
            });
        };
        this.getSubjects();
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Shared */\r\n.loginBtn {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    /* width: 13em;  - apply for fixed size */\r\n    margin: 0.2em;\r\n    padding: 0 15px 0 46px;\r\n    border: none;\r\n    text-align: left;\r\n    line-height: 34px;\r\n    white-space: nowrap;\r\n    border-radius: 0.2em;\r\n    font-size: 16px;\r\n    color: #FFF;\r\n  }\r\n.loginBtn:before {\r\n    content: \"\";\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 34px;\r\n    height: 100%;\r\n  }\r\n.loginBtn:focus {\r\n    outline: none;\r\n  }\r\n.loginBtn:active {\r\n    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n  }\r\n/* Google */\r\n.loginBtn--google {\r\n    /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n    background: #DD4B39;\r\n  }\r\n.loginBtn--google:before {\r\n    border-right: #BB3F30 1px solid;\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n  }\r\n.loginBtn--google:hover,\r\n  .loginBtn--google:focus {\r\n    background: #E74B37;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0FBQ1g7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFdBQVc7RUFDYjtBQUNBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDQTtJQUNFLDRDQUE0QztFQUM5QztBQUVBLFdBQVc7QUFDWDtJQUNFLG9EQUFvRDtJQUNwRCxtQkFBbUI7RUFDckI7QUFDQTtJQUNFLCtCQUErQjtJQUMvQix1R0FBdUc7RUFDekc7QUFDQTs7SUFFRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2hhcmVkICovXHJcbi5sb2dpbkJ0biB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogd2lkdGg6IDEzZW07ICAtIGFwcGx5IGZvciBmaXhlZCBzaXplICovXHJcbiAgICBtYXJnaW46IDAuMmVtO1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICAubG9naW5CdG46YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAubG9naW5CdG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgLmxvZ2luQnRuOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzMnB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLyogR29vZ2xlICovXHJcbiAgLmxvZ2luQnRuLS1nb29nbGUge1xyXG4gICAgLypmb250LWZhbWlseTogXCJSb2JvdG9cIiwgUm9ib3RvLCBhcmlhbCwgc2Fucy1zZXJpZjsqL1xyXG4gICAgYmFja2dyb3VuZDogI0RENEIzOTtcclxuICB9XHJcbiAgLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yaWdodDogI0JCM0YzMCAxcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZ29vZ2xlLnBuZycpIDZweCA2cHggbm8tcmVwZWF0O1xyXG4gIH1cclxuICAubG9naW5CdG4tLWdvb2dsZTpob3ZlcixcclxuICAubG9naW5CdG4tLWdvb2dsZTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTc0QjM3O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\" style=\"border-radius: 5px;padding: 100px;background-color: #eee;color: black;\">\r\n  <h3 class=\"mb-3\">Register/Login First</h3>\r\n  <button class=\"loginBtn loginBtn--google\" (click)=\"login()\">\r\n    Login with Google\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, api, router, http) {
        this.authService = authService;
        this.api = api;
        this.router = router;
        this.http = http;
        this.logged = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, httpHeaders;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.doGoogleLogin()];
                    case 1:
                        res = _a.sent();
                        if (res) {
                            this.logged = true;
                            httpHeaders = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Authorization': localStorage.getItem('Token') }) };
                            this.http.get(this.api.baseurl + 'set_retrieve_role/', httpHeaders).subscribe(function (result) {
                                localStorage.setItem("username", result.username);
                                _this.api.message('Login Successfully');
                                if (result.role != undefined) {
                                    _this.api.message('Login Successfully');
                                    localStorage.setItem('currentLogged', JSON.stringify(result));
                                    localStorage.setItem('id', result.id.toString());
                                    window.location.href = '/categories';
                                }
                                else {
                                    window.location.href = '/role';
                                }
                            }, function (err) {
                                window.location.href = '/role';
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mypins/mypins.component.css":
/*!*********************************************!*\
  !*** ./src/app/mypins/mypins.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Title {\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.grey_title {\r\n  border-radius: 10px;\r\n}\r\n.pic_padding {\r\n  padding-left: 0px;\r\n}\r\n#Description {\r\n  color: white;\r\n}\r\nbody {\r\n  margin-top: 20px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  color: #282828;\r\n}\r\n.skills {\r\n  width: 80%;\r\n  max-width: 960px;\r\n  height: 250px;\r\n  margin: auto;\r\n  position: relative;\r\n}\r\n.lines {\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n.line {\r\n  height: inherit;\r\n  width: 2px;\r\n  position: absolute;\r\n  background: rgba(238, 238, 238, 0.6);\r\n}\r\n.line.l--0 {\r\n  left: 0;\r\n}\r\n.line.l--25 {\r\n  left: 25%;\r\n}\r\n.line.l--50 {\r\n  left: 50%;\r\n}\r\n.line.l--75 {\r\n  left: 75%;\r\n}\r\n.line.l--100 {\r\n  left: calc(100% - 1px);\r\n}\r\n.line__label {\r\n  display: block;\r\n  width: 100px;\r\n  text-align: center;\r\n  position: absolute;\r\n  bottom: -20px;\r\n  right: -50px;\r\n}\r\n.line__label.title {\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n.charts {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n}\r\n.chart {\r\n  margin: 30px 0 0;\r\n}\r\n.chart:first-child {\r\n  margin: 0;\r\n}\r\n.chart__title {\r\n  display: block;\r\n  margin: 0 0 10px;\r\n  font-weight: bold;\r\n  opacity: 0;\r\n  -webkit-animation: 1s anim-lightspeed-in ease forwards;\r\n          animation: 1s anim-lightspeed-in ease forwards;\r\n}\r\n.chart--prod .chart__title {\r\n  -webkit-animation-delay: 3.3s;\r\n          animation-delay: 3.3s;\r\n}\r\n.chart--design .chart__title {\r\n  -webkit-animation-delay: 4.5s;\r\n          animation-delay: 4.5s;\r\n}\r\n.chart--horiz {\r\n  overflow: hidden;\r\n}\r\n.chart__bar {\r\n  height: 30px;\r\n  margin-bottom: 10px;\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n  opacity: 0;\r\n  -webkit-animation: 1s anim-lightspeed-in ease forwards;\r\n          animation: 1s anim-lightspeed-in ease forwards;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(11) {\r\n  -webkit-animation-delay: 2.7s;\r\n          animation-delay: 2.7s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(10) {\r\n  -webkit-animation-delay: 2.5s;\r\n          animation-delay: 2.5s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(9) {\r\n  -webkit-animation-delay: 2.3s;\r\n          animation-delay: 2.3s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(8) {\r\n  -webkit-animation-delay: 2.1s;\r\n          animation-delay: 2.1s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(7) {\r\n  -webkit-animation-delay: 1.9s;\r\n          animation-delay: 1.9s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(6) {\r\n  -webkit-animation-delay: 1.7s;\r\n          animation-delay: 1.7s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(5) {\r\n  -webkit-animation-delay: 1.5s;\r\n          animation-delay: 1.5s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(4) {\r\n  -webkit-animation-delay: 1.3s;\r\n          animation-delay: 1.3s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(3) {\r\n  -webkit-animation-delay: 1.1s;\r\n          animation-delay: 1.1s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(2) {\r\n  -webkit-animation-delay: 0.9s;\r\n          animation-delay: 0.9s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(1) {\r\n  -webkit-animation-delay: 0.7s;\r\n          animation-delay: 0.7s;\r\n}\r\n.chart--prod .chart__bar:nth-of-type(2) {\r\n  -webkit-animation-delay: 4.2s;\r\n          animation-delay: 4.2s;\r\n}\r\n.chart--prod .chart__bar:nth-of-type(1) {\r\n  -webkit-animation-delay: 4s;\r\n          animation-delay: 4s;\r\n}\r\n.chart--design .chart__bar:nth-of-type(3) {\r\n  -webkit-animation-delay: 5.6s;\r\n          animation-delay: 5.6s;\r\n}\r\n.chart--design .chart__bar:nth-of-type(2) {\r\n  -webkit-animation-delay: 5.4s;\r\n          animation-delay: 5.4s;\r\n}\r\n.chart--design .chart__bar:nth-of-type(1) {\r\n  -webkit-animation-delay: 5.2s;\r\n          animation-delay: 5.2s;\r\n}\r\n.chart__label {\r\n  padding-left: 10px;\r\n  line-height: 30px;\r\n  color: white;\r\n}\r\n@-webkit-keyframes anim-lightspeed-in {\r\n  0% {\r\n    transform: translateX(-200%);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes anim-lightspeed-in {\r\n  0% {\r\n    transform: translateX(-200%);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\nbody {\r\n  font-family: 'Roboto', Helvetica;\r\n  color: #737373;\r\n  font-weight: 300;\r\n}\r\n.container {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  margin-top: 3em;\r\n  background-color: #EFEFEF;\r\n  padding: 4px;\r\n}\r\n.inner {\r\n  padding: 1em;\r\n  background-color: white;\r\n  overflow: hidden;\r\n  position: relative;\r\n  border-radius: 4px;\r\n}\r\n.rating {\r\n  float: left;\r\n  width: 45%;\r\n  margin-right: 5%;\r\n  text-align: center;\r\n}\r\n.rating-num {\r\n  color: #333333;\r\n  font-size: 72px;\r\n  font-weight: 100;\r\n  line-height: 1em;\r\n}\r\n.rating-stars {\r\n  font-size: 20px;\r\n  color: #E3E3E3;\r\n  margin-bottom: .5em;\r\n}\r\n.rating-stars .active {\r\n  color: #737373;\r\n}\r\n.rating-users {\r\n  font-size: 14px;\r\n}\r\n.histo {\r\n  float: left;\r\n  width: 50%;\r\n  font-size: 13px;\r\n}\r\n.histo-star {\r\n  float: left;\r\n  padding: 3px;\r\n\r\n}\r\n.histo-rate {\r\n  width: 100%;\r\n  display: block;\r\n  clear: both;\r\n}\r\n.bar-block {\r\n  margin-left: 5px;\r\n  color: black;\r\n  display: block;\r\n  float: left;\r\n  width: 75%;\r\n  position: relative;\r\n}\r\n.bar {\r\n  padding: 4px;\r\n  display: block;\r\n}\r\n#bar-five {\r\n  width: 0;\r\n  background-color: #9FC05A;\r\n}\r\n#bar-four {\r\n  width: 0;\r\n  background-color: #ADD633;\r\n}\r\n#bar-three {\r\n  width: 0;\r\n  background-color: #FFD834;\r\n}\r\n#bar-two {\r\n  width: 0;\r\n  background-color: #FFB234;\r\n}\r\n#bar-one {\r\n  width: 0;\r\n  background-color: #FF8B5A;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwaW5zL215cGlucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLE9BQU87QUFDVDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysc0RBQThDO1VBQTlDLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsVUFBVTtFQUNWLHNEQUE4QztVQUE5Qyw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixVQUFVO0VBQ1o7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7QUFDRjtBQVRBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0Y7QUFJQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFHbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0FBRWQ7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9teXBpbnMvbXlwaW5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjVGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmdyZXlfdGl0bGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnBpY19wYWRkaW5nIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4jRGVzY3JpcHRpb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcclxuYm9keSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzI4MjgyODtcclxufVxyXG5cclxuLnNraWxscyB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxpbmVzIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC42KTtcclxufVxyXG4ubGluZS5sLS0wIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5saW5lLmwtLTI1IHtcclxuICBsZWZ0OiAyNSU7XHJcbn1cclxuLmxpbmUubC0tNTAge1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG4ubGluZS5sLS03NSB7XHJcbiAgbGVmdDogNzUlO1xyXG59XHJcbi5saW5lLmwtLTEwMCB7XHJcbiAgbGVmdDogY2FsYygxMDAlIC0gMXB4KTtcclxufVxyXG5cclxuLmxpbmVfX2xhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0yMHB4O1xyXG4gIHJpZ2h0OiAtNTBweDtcclxufVxyXG4ubGluZV9fbGFiZWwudGl0bGUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jaGFydHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jaGFydCB7XHJcbiAgbWFyZ2luOiAzMHB4IDAgMDtcclxufVxyXG4uY2hhcnQ6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNoYXJ0X190aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogMXMgYW5pbS1saWdodHNwZWVkLWluIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuLmNoYXJ0LS1wcm9kIC5jaGFydF9fdGl0bGUge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy4zcztcclxufVxyXG4uY2hhcnQtLWRlc2lnbiAuY2hhcnRfX3RpdGxlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDQuNXM7XHJcbn1cclxuXHJcbi5jaGFydC0taG9yaXoge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jaGFydF9fYmFyIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IDFzIGFuaW0tbGlnaHRzcGVlZC1pbiBlYXNlIGZvcndhcmRzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDExKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjdzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDEwKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDkpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDIuM3M7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoOCkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4xcztcclxufVxyXG4uY2hhcnQtLWRldiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSg3KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjlzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDYpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDEuN3M7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoNSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS41cztcclxufVxyXG4uY2hhcnQtLWRldiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSg0KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjNzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMXM7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC45cztcclxufVxyXG4uY2hhcnQtLWRldiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xyXG59XHJcbi5jaGFydC0tcHJvZCAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA0LjJzO1xyXG59XHJcbi5jaGFydC0tcHJvZCAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcclxufVxyXG4uY2hhcnQtLWRlc2lnbiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA1LjZzO1xyXG59XHJcbi5jaGFydC0tZGVzaWduIC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDUuNHM7XHJcbn1cclxuLmNoYXJ0LS1kZXNpZ24gLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogNS4ycztcclxufVxyXG5cclxuLmNoYXJ0X19sYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltLWxpZ2h0c3BlZWQtaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDMwMCw0MDApO1xyXG5AaW1wb3J0IHVybChodHRwczovL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS8zLjIuMS9jc3MvZm9udC1hd2Vzb21lLmNzcyk7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYTtcclxuICBjb2xvcjogIzczNzM3MztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uaW5uZXIge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5yYXRpbmcge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yYXRpbmctbnVtIHtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBmb250LXNpemU6IDcycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG59XHJcblxyXG4ucmF0aW5nLXN0YXJzIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNFM0UzRTM7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcclxufVxyXG4ucmF0aW5nLXN0YXJzIC5hY3RpdmUge1xyXG4gIGNvbG9yOiAjNzM3MzczO1xyXG59XHJcblxyXG4ucmF0aW5nLXVzZXJzIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5oaXN0byB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5oaXN0by1zdGFyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAzcHg7XHJcblxyXG59XHJcblxyXG4uaGlzdG8tcmF0ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5iYXItYmxvY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFyIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNiYXItZml2ZSB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlGQzA1QTtcclxufVxyXG5cclxuI2Jhci1mb3VyIHtcclxuICB3aWR0aDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQURENjMzO1xyXG59XHJcblxyXG4jYmFyLXRocmVlIHtcclxuICB3aWR0aDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEODM0O1xyXG59XHJcblxyXG4jYmFyLXR3byB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjIzNDtcclxufVxyXG5cclxuI2Jhci1vbmUge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjhCNUE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/mypins/mypins.component.html":
/*!**********************************************!*\
  !*** ./src/app/mypins/mypins.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!modal\">\r\n    <div>\r\n        <div class=\"col-md-4\">\r\n            <a class=\"pointer\" (click)=\"layoutChange(1)\"><img\r\n              *ngIf='!empty'   src=\"https://img.icons8.com/ios-filled/30/000000/activity-grid--v2.png\"></a>\r\n            <a class=\"pointer\" (click)=\"layoutChange(2)\"><img\r\n              *ngIf='!empty'   src=\"https://img.icons8.com/material-two-tone/40/000000/day-view.png\"></a>\r\n        </div>\r\n    </div>\r\n    <div *ngIf='list'>\r\n        <div class=\"container-fulid pt-2\" *ngFor='let resource of data'>\r\n            <div class=\"row\"  style=\"text-align: center;\">\r\n                <div class=\"col-md-7 offset-md-1 grey_title pb-1\"\r\n                    style=\"background-color: #1d8459; border: 1px solid black;color:white\">\r\n                    <div class=\"pt-2\" id=\"Title\">\r\n                        <div class =\"breadcrumb\" style=\"color:black\"><h6 >{{resource.sub_title}}</h6><span > > </span> <h6 > {{resource.lev_title}}</h6><span > > </span> <h6>{{resource.tpc_title}}</h6><span > > </span> <h6 >{{resource.resource_type}}</h6> </div>\r\n\r\n                        <h5>{{resource.resource_type}}</h5><div class=\"text-right\">Saved By: {{resource.saved_by.length}}</div><div class=\"text-right\">{{resource.created | date:medium}}</div>\r\n                        <br>\r\n                        <div style=\"background: white;  text-transform: lowercase;\">\r\n                          <a *ngIf=\"http(resource.link);else other_content\" [href]=\"'' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a>\r\n                          <ng-template #other_content>    <a  [href]=\"'//' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a></ng-template>\r\n\r\n                        </div>\r\n                      </div>\r\n                    <div class=\"d-flex\">\r\n                        <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{resource.description}}</b></p>\r\n                    </div>\r\n                    <button class=\"btn btn-secondary text-white float-right\" (click)=\"resourceDetails(resource)\">more\r\n                        Details</button>\r\n                </div>\r\n                <div class=\"col-md-3 pl-5\">\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <a class=\"pointer\" (click)=\"saveLink(resource.id)\"><img src=\"assets/images/Plus.png\"\r\n                                    width=\"55px\" title=\"Save This\"></a>\r\n                            <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                                size=\"24px\" readonly=\"true\"></star-rating>\r\n                                <a class=\"pointer\" (click)=\"followAuther(resource.author)\"><img\r\n                                  src=\"assets/images/Profile.png\" width=\"60px\" title=\"Follow Author\"></a>\r\n                                  <p >{{resource.author_name}}</p>\r\n\r\n                                </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 pt-5\">\r\n                <div class=\"d-flex collapse\" *ngFor=\"let comment of resource.fewComment\">\r\n                    <div class=\"col-md-1 offset-md-1\">\r\n                        <div class=\"d-flex pic_padding\">\r\n                            <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <h4>{{comment.commenter_name}}\r\n                                <star-rating [value]=\"getRating(comment.commenter,resource.id)\" checkedcolor=\"red\"\r\n                                    uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                            </h4>\r\n                            <p class=\"pt-2\">{{comment.comment}}</p>\r\n                            <span class=\"data\"\r\n                                style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{comment.created | date:medium}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container-fulid pt-2\" *ngIf='!list'>\r\n        <div class=\"row\"  style=\"text-align: center;\">\r\n            <div class=\"col-md-3 pb-3\" *ngFor='let resource of data'>\r\n                <div class=\"card\">\r\n                    <h5 class=\"card-title pt-2 text-capitalize\" style=\"text-align: center;\">{{resource.resource_type}}\r\n                    </h5>\r\n                    <div class=\"card-body\">\r\n                      <div style=\"background: grey;text-align: center;text-transform: lowercase;\">\r\n                        <a *ngIf=\"http(resource.link);else other_content\" [href]=\"'' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a>\r\n                        <ng-template #other_content>    <a  [href]=\"'//' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a></ng-template>\r\n\r\n                      </div>                        <p class=\"card-text\" style=\"text-align: center;\">{{resource.description}}</p>\r\n                        <p class=\"text-center\">\r\n                            <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                                size=\"24px\" readonly=\"true\"></star-rating>\r\n                        </p>\r\n                        <button class=\"btn btn-secondary text-white btn-block\" (click)=\"resourceDetails(resource)\">more\r\n                            Details</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"not_found\" *ngIf='empty'>\r\n        <img src=\"assets/images/not-found.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"modal\">\r\n      <div class=\"container-fulid pt-2\">\r\n          <div class=\"row\"  style=\"text-align: center;\">\r\n              <strong class=\"pointer pl-3\" (click)=\"hideModal()\">〈 Back</strong>\r\n              <div class=\"col-md-7 offset-md-1 grey_title pb-1\"\r\n                  style=\"background-color: #1d8459; border: 1px solid black;color:white;\">\r\n                  <div class=\"pt-2\" id=\"Title\">\r\n                      <div class =\"breadcrumb\" style=\"color:black\"><h6 >{{modelData.sub_title}}</h6><span > > </span> <h6 > {{modelData.lev_title}}</h6><span > > </span> <h6>{{modelData.tpc_title}}</h6><span > > </span> <h6 >{{modelData.resource_type}}</h6> </div>\r\n\r\n                      <h5 class=\"text-center text-white text-capitalize\">{{modelData.resource_type}}</h5><div class=\"text-right\">Saved By: {{modelData.saved_by.length}}</div><div class=\"text-right\">{{modelData.created | date:medium}}</div>\r\n                      <br>\r\n                      <div style=\"background: white;text-transform: lowercase;\">\r\n                        <a *ngIf=\"http(modelData.link);else other_content\" [href]=\"'' + modelData.link\"  target=\"_blank\" style=\"color:black\">{{modelData.link}}</a>\r\n                        <ng-template #other_content>    <a  [href]=\"'//' + modelData.link\"  target=\"_blank\" style=\"color:black\">{{modelData.link}}</a></ng-template>\r\n\r\n                      </div>               </div>\r\n                  <div class=\"d-flex\">\r\n                      <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{modelData.description}}</b></p>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-3 pl-5\">\r\n                  <div class=\"d-flex\">\r\n                      <div class=\"d-flex flex-column\">\r\n                          <a class=\"pointer\" (click)=\"saveLink(modelData.id)\"><img src=\"assets/images/Plus.png\"\r\n                                  width=\"55px\" title=\"Save This\"></a>\r\n                          <star-rating [value]=\"modelData.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                              size=\"24px\" readonly=\"true\"></star-rating>\r\n                              <a class=\"pointer\" (click)=\"followAuther(modelData.author)\"><img\r\n                                src=\"assets/images/Profile.png\" width=\"60px\" title=\"Follow Author\"></a>\r\n                                <p >{{modelData.author_name}}</p>\r\n\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"container\" style=\"margin-left:20%;\">\r\n              <div class=\"inner\">\r\n                  <div class=\"rating\">\r\n                    <span class=\"rating-num\">{{modelData.avg_rating}}</span>\r\n                    <star-rating [value]=\"modelData.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                    size=\"24px\" readonly=\"true\"></star-rating>\r\n\r\n                    <div class=\"rating-users\">\r\n                      <i class=\"icon-user\"></i> {{modelData.rating_counter}}\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"histo\">\r\n                    <div class=\"five histo-rate\" >\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 5           </span>\r\n                      <span class=\"bar-block\" >\r\n                        <span id=\"bar-five\" class=\"bar\" [ngStyle]=\"{'width': width5+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star5_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"four histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 4           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-four\" class=\"bar\" [ngStyle]=\"{'width': width4+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star4_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"three histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 3           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-three\" class=\"bar\" [ngStyle]=\"{'width': width3+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star3_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"two histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 2           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-two\" class=\"bar\" [ngStyle]=\"{'width': width2+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star2_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"one histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 1           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-one\" class=\"bar\" [ngStyle]=\"{'width': width1+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star1_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n          <div class=\"col-12 pt-5\" id=\"change\">\r\n              <div *ngIf=\"modelData.comments.length == 0\" style=\"text-align: center;\">\r\n                  <h5>No reviews</h5><br>\r\n                   </div>\r\n              <div class=\"d-flex collapse\" *ngFor=\"let comment of modelData.comments\">\r\n                  <div class=\"col-md-1 offset-md-1\">\r\n                      <div class=\"d-flex pic_padding\">\r\n                          <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                      <div class=\"d-flex flex-column\">\r\n                          <h4>{{comment.commenter_name}}\r\n                              <star-rating [value]=\"getRating(comment.commenter,modelData.id)\" checkedcolor=\"red\"\r\n                                  uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                          </h4>\r\n                          <p class=\"pt-2\">{{comment.comment}}</p>\r\n                          <span class=\"data\"\r\n                              style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{comment.created | date:medium}}</span>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <!-- <div class=\"d-flex collapse\" *ngFor=\"let rate of onlyRating\">\r\n                  <div class=\"col-md-1 offset-md-1\">\r\n                      <div class=\"d-flex pic_padding\">\r\n                          <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                      <div class=\"d-flex flex-column\">\r\n                          <h4>{{rate.rated_by_name}}\r\n                              <star-rating [value]=\"rate.rating\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\"\r\n                                  readonly=\"true\"></star-rating>\r\n                          </h4>\r\n                          <p class=\"pt-2\"></p>\r\n                          <span class=\"data\"\r\n                              style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{rate.created | date:medium}}</span>\r\n                      </div>\r\n                  </div>\r\n              </div> -->\r\n          </div>\r\n          <div class=\"row py-4\">\r\n              <div class=\"col-md-7 offset-md-2\">\r\n                  <form [formGroup]='rateCommentForm' (ngSubmit)=\"ratingHandler()\">\r\n                      <h5>Write a Review about this Post</h5>\r\n                      <div class=\"form-group\">\r\n                          <label>Rate This Link</label><br>\r\n                          <star-rating [value]=\"rate\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\"\r\n                              readonly=\"false\" (rate)=\"onRate($event)\"></star-rating>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label>Comment : </label>\r\n                          <textarea class=\"form-control\" formControlName=\"comment\"\r\n                              placeholder=\"Enter Your Comment Here\"></textarea>\r\n                      </div>\r\n                      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n                      <button class=\"btn btn-secondary ml-2\" (click)=\"hideModal()\">Cancel</button>\r\n                  </form>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/mypins/mypins.component.ts":
/*!********************************************!*\
  !*** ./src/app/mypins/mypins.component.ts ***!
  \********************************************/
/*! exports provided: MypinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypinsComponent", function() { return MypinsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var MypinsComponent = /** @class */ (function () {
    function MypinsComponent(api, fb) {
        var _this = this;
        this.api = api;
        this.fb = fb;
        this.empty = false;
        this.onlyRating = [];
        this.modal = false;
        this.rate = 0;
        this.list = true;
        this.getPins = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('save_resource/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            _this.api.noloader();
                            _this.data = res.resources;
                            var _loop_1 = function (i) {
                                _this.comments = res.comments.filter(function (c) { return c.resource == _this.data[i].id; });
                                // this.ratings = res.ratings.filter(c => c.resource == this.data[i].id)
                                _this.ratings = res.ratings;
                                var twoComment = [];
                                if (_this.comments.length > 2) {
                                    twoComment = _this.comments.slice(0, 2);
                                }
                                else {
                                    twoComment = Array.from(_this.comments);
                                }
                                _this.data[i] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.data[i], { comments: _this.comments, fewComment: twoComment });
                            };
                            for (var i = 0; i < _this.data.length; i++) {
                                _loop_1(i);
                            }
                            // for (let i = 0; i < this.data.length; i++) {
                            //   // this.onlyRating = this.ratings.filter(r => r.rated_by != this.comments[i].commenter)
                            // }
                            _this.api.noloader();
                            // console.log(this.data)
                            if (_this.data.length == 0) {
                                _this.empty = true;
                            }
                        }, function (err) {
                            if (err) {
                                _this.empty = true;
                                _this.api.noloader();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.saveLink = function (id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData("save_resource?rsc_id=" + id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message(res.OK);
                            window.location.reload();
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.followAuther = function (auther) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('follow_author/?aut_id=' + auther)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message(res.OK);
                        }, function (err) {
                            if (err) {
                                _this.api.noloader();
                                _this.api.message("You cannot follow a student");
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
    }
    MypinsComponent.prototype.ngOnInit = function () {
        this.getPins();
        this.rateCommentForm = this.fb.group({
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    MypinsComponent.prototype.layoutChange = function (n) {
        if (n == 1) {
            this.list = false;
        }
        else {
            this.list = true;
        }
    };
    MypinsComponent.prototype.getRating = function (rater, resource) {
        var rate = this.ratings.filter(function (r) { return (r.rated_by == rater) && (r.resource == resource); });
        if (rate[0] != undefined) {
            return rate[0].rating;
        }
        else {
            return 0;
        }
    };
    MypinsComponent.prototype.resourceDetails = function (resource) {
        // console.log(resource)
        this.modelData = resource;
        this.modal = true;
        this.width1 = (this.modelData.single_rating_counter.star1_count / this.modelData.rating_counter) * 100 || 0;
        this.width2 = (this.modelData.single_rating_counter.star2_count / this.modelData.rating_counter) * 100 || 0;
        this.width3 = (this.modelData.single_rating_counter.star3_count / this.modelData.rating_counter) * 100 || 0;
        this.width4 = (this.modelData.single_rating_counter.star4_count / this.modelData.rating_counter) * 100 || 0;
        this.width5 = (this.modelData.single_rating_counter.star5_count / this.modelData.rating_counter) * 100 || 0;
    };
    MypinsComponent.prototype.hideModal = function () {
        this.modal = false;
    };
    MypinsComponent.prototype.onRate = function ($event) {
        this.rate = $event.newValue;
    };
    MypinsComponent.prototype.ratingHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataobj, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        if (!(this.rate != 0 && this.rateCommentForm.controls['comment'].value != '')) return [3 /*break*/, 2];
                        dataobj = { resource_id: this.modelData.id };
                        if (this.rate != 0) {
                            dataobj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dataobj, { rating: this.rate });
                        }
                        if (this.rateCommentForm.controls['comment'].value != '') {
                            dataobj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dataobj, { comment: this.rateCommentForm.controls['comment'].value });
                        }
                        return [4 /*yield*/, this.api.postData('post_comment_rating/', dataobj)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.rate = 0;
                            _this.api.noloader();
                            _this.rateCommentForm.reset();
                            window.location.reload();
                        }, function (err) {
                            if (err) {
                                _this.api.noloader();
                                _this.api.message("You cannot comment on a resource twice");
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        this.api.noloader();
                        this.api.message("All Field are required.");
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MypinsComponent.prototype.www = function (d) {
        var n = d.startsWith("www");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    MypinsComponent.prototype.http = function (d) {
        var n = d.startsWith("http");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    MypinsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mypins',
            template: __webpack_require__(/*! ./mypins.component.html */ "./src/app/mypins/mypins.component.html"),
            styles: [__webpack_require__(/*! ./mypins.component.css */ "./src/app/mypins/mypins.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], MypinsComponent);
    return MypinsComponent;
}());



/***/ }),

/***/ "./src/app/pending/pending.component.css":
/*!***********************************************!*\
  !*** ./src/app/pending/pending.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlbmRpbmcvcGVuZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pending/pending.component.html":
/*!************************************************!*\
  !*** ./src/app/pending/pending.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fulid pt-2\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 pb-3\" *ngFor='let item of data; let i = index'>\r\n      <div class=\"card\">\r\n        <h5 class=\"card-title pt-2 text-center ellipsis\">{{item.resource_type}}</h5>\r\n        <div class=\"card-body\" >\r\n          <div style=\"background: grey;text-align: center;text-transform: lowercase;\">\r\n            <a *ngIf=\"www(item.link)\" [href]=\"'//' + item.link\"  target=\"_blank\" style=\"color:black\">{{item.link}}</a>\r\n            <a *ngIf=\"http(item.link)\" [href]=\"'' + item.link\"  target=\"_blank\" style=\"color:black\">{{item.link}}</a>\r\n\r\n          </div>\r\n          <p class=\"card-text ellipsis\" >{{item.description}}</p>\r\n<div style=\"display:inline-block;\">\r\n          <button class=\"btn btn-success\" (click)='approve(item.id,i)'>Approve Resource</button>\r\n          <br>\r\n          <br>\r\n          <button class=\"btn btn-danger\" (click)='disapp(item.id,i)'>Disapprove Resource</button>\r\n                </div>\r\n              </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"not_found\" *ngIf='empty'>\r\n      <img src=\"assets/images/not-found.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pending/pending.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pending/pending.component.ts ***!
  \**********************************************/
/*! exports provided: PendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingComponent", function() { return PendingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");




var PendingComponent = /** @class */ (function () {
    function PendingComponent(api, Child) {
        this.api = api;
        this.Child = Child;
        this.empty = false;
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
    }
    PendingComponent.prototype.ngOnInit = function () {
        this.getPending();
    };
    PendingComponent.prototype.getPending = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('get_pending/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            if (res.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.data = res;
                                _this.count = res.length;
                                _this.Child.count = _this.count;
                                // localStorage.setItem("count2",this.count.toString());
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingComponent.prototype.www = function (d) {
        var n = d.startsWith("www");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    PendingComponent.prototype.http = function (d) {
        var n = d.startsWith("http");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    PendingComponent.prototype.disapp = function (id, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('delete_resource?rsc_id=' + id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message('Disapproved');
                            _this.data.splice(i, 1);
                            _this.count--;
                            _this.Child.count = _this.count;
                            // window.location.href = "/categories"
                        }, function (err) {
                            if (err) {
                                // console.log(err)
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingComponent.prototype.disapprove = function (item) {
        document.querySelector(item).style.display = "none";
    };
    PendingComponent.prototype.approve = function (id, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('approve_resource/?rsc_id=' + id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message('Approved');
                            _this.data.splice(i, 1);
                            // window.location.href = "/categories"
                            _this.count--;
                            _this.Child.count = _this.count;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PendingComponent.prototype, "count", void 0);
    PendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pending',
            template: __webpack_require__(/*! ./pending.component.html */ "./src/app/pending/pending.component.html"),
            styles: [__webpack_require__(/*! ./pending.component.css */ "./src/app/pending/pending.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], PendingComponent);
    return PendingComponent;
}());



/***/ }),

/***/ "./src/app/resource/resource.component.css":
/*!*************************************************!*\
  !*** ./src/app/resource/resource.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Title {\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.grey_title {\r\n  border-radius: 10px;\r\n}\r\n.pic_padding {\r\n  padding-left: 0px;\r\n}\r\n#Description {\r\n  color: white;\r\n}\r\nbody {\r\n  margin-top: 20px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  color: #282828;\r\n}\r\n.skills {\r\n  width: 80%;\r\n  max-width: 960px;\r\n  height: 250px;\r\n  margin: auto;\r\n  position: relative;\r\n}\r\n.lines {\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n.line {\r\n  height: inherit;\r\n  width: 2px;\r\n  position: absolute;\r\n  background: rgba(238, 238, 238, 0.6);\r\n}\r\n.line.l--0 {\r\n  left: 0;\r\n}\r\n.line.l--25 {\r\n  left: 25%;\r\n}\r\n.line.l--50 {\r\n  left: 50%;\r\n}\r\n.line.l--75 {\r\n  left: 75%;\r\n}\r\n.line.l--100 {\r\n  left: calc(100% - 1px);\r\n}\r\n.line__label {\r\n  display: block;\r\n  width: 100px;\r\n  text-align: center;\r\n  position: absolute;\r\n  bottom: -20px;\r\n  right: -50px;\r\n}\r\n.line__label.title {\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n.charts {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n}\r\n.chart {\r\n  margin: 30px 0 0;\r\n}\r\n.chart:first-child {\r\n  margin: 0;\r\n}\r\n.chart__title {\r\n  display: block;\r\n  margin: 0 0 10px;\r\n  font-weight: bold;\r\n  opacity: 0;\r\n  -webkit-animation: 1s anim-lightspeed-in ease forwards;\r\n          animation: 1s anim-lightspeed-in ease forwards;\r\n}\r\n.chart--prod .chart__title {\r\n  -webkit-animation-delay: 3.3s;\r\n          animation-delay: 3.3s;\r\n}\r\n.chart--design .chart__title {\r\n  -webkit-animation-delay: 4.5s;\r\n          animation-delay: 4.5s;\r\n}\r\n.chart--horiz {\r\n  overflow: hidden;\r\n}\r\n.chart__bar {\r\n  height: 30px;\r\n  margin-bottom: 10px;\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n  opacity: 0;\r\n  -webkit-animation: 1s anim-lightspeed-in ease forwards;\r\n          animation: 1s anim-lightspeed-in ease forwards;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(11) {\r\n  -webkit-animation-delay: 2.7s;\r\n          animation-delay: 2.7s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(10) {\r\n  -webkit-animation-delay: 2.5s;\r\n          animation-delay: 2.5s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(9) {\r\n  -webkit-animation-delay: 2.3s;\r\n          animation-delay: 2.3s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(8) {\r\n  -webkit-animation-delay: 2.1s;\r\n          animation-delay: 2.1s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(7) {\r\n  -webkit-animation-delay: 1.9s;\r\n          animation-delay: 1.9s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(6) {\r\n  -webkit-animation-delay: 1.7s;\r\n          animation-delay: 1.7s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(5) {\r\n  -webkit-animation-delay: 1.5s;\r\n          animation-delay: 1.5s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(4) {\r\n  -webkit-animation-delay: 1.3s;\r\n          animation-delay: 1.3s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(3) {\r\n  -webkit-animation-delay: 1.1s;\r\n          animation-delay: 1.1s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(2) {\r\n  -webkit-animation-delay: 0.9s;\r\n          animation-delay: 0.9s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(1) {\r\n  -webkit-animation-delay: 0.7s;\r\n          animation-delay: 0.7s;\r\n}\r\n.chart--prod .chart__bar:nth-of-type(2) {\r\n  -webkit-animation-delay: 4.2s;\r\n          animation-delay: 4.2s;\r\n}\r\n.chart--prod .chart__bar:nth-of-type(1) {\r\n  -webkit-animation-delay: 4s;\r\n          animation-delay: 4s;\r\n}\r\n.chart--design .chart__bar:nth-of-type(3) {\r\n  -webkit-animation-delay: 5.6s;\r\n          animation-delay: 5.6s;\r\n}\r\n.chart--design .chart__bar:nth-of-type(2) {\r\n  -webkit-animation-delay: 5.4s;\r\n          animation-delay: 5.4s;\r\n}\r\n.chart--design .chart__bar:nth-of-type(1) {\r\n  -webkit-animation-delay: 5.2s;\r\n          animation-delay: 5.2s;\r\n}\r\n.chart__label {\r\n  padding-left: 10px;\r\n  line-height: 30px;\r\n  color: white;\r\n}\r\n@-webkit-keyframes anim-lightspeed-in {\r\n  0% {\r\n    transform: translateX(-200%);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes anim-lightspeed-in {\r\n  0% {\r\n    transform: translateX(-200%);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\nbody {\r\n  font-family: 'Roboto', Helvetica;\r\n  color: #737373;\r\n  font-weight: 300;\r\n}\r\n.container {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  margin-top: 3em;\r\n  background-color: #EFEFEF;\r\n  padding: 4px;\r\n}\r\n.inner {\r\n  padding: 1em;\r\n  background-color: white;\r\n  overflow: hidden;\r\n  position: relative;\r\n  border-radius: 4px;\r\n}\r\n.rating {\r\n  float: left;\r\n  width: 45%;\r\n  margin-right: 5%;\r\n  text-align: center;\r\n}\r\n.rating-num {\r\n  color: #333333;\r\n  font-size: 72px;\r\n  font-weight: 100;\r\n  line-height: 1em;\r\n}\r\n.rating-stars {\r\n  font-size: 20px;\r\n  color: #E3E3E3;\r\n  margin-bottom: .5em;\r\n}\r\n.rating-stars .active {\r\n  color: #737373;\r\n}\r\n.rating-users {\r\n  font-size: 14px;\r\n}\r\n.histo {\r\n  float: left;\r\n  width: 50%;\r\n  font-size: 13px;\r\n}\r\n.histo-star {\r\n  float: left;\r\n  padding: 3px;\r\n\r\n}\r\n.histo-rate {\r\n  width: 100%;\r\n  display: block;\r\n  clear: both;\r\n}\r\n.bar-block {\r\n  margin-left: 5px;\r\n  color: black;\r\n  display: block;\r\n  float: left;\r\n  width: 75%;\r\n  position: relative;\r\n}\r\n.bar {\r\n  padding: 4px;\r\n  display: block;\r\n}\r\n#bar-five {\r\n  width: 0;\r\n  background-color: #9FC05A;\r\n}\r\n#bar-four {\r\n  width: 0;\r\n  background-color: #ADD633;\r\n}\r\n#bar-three {\r\n  width: 0;\r\n  background-color: #FFD834;\r\n}\r\n#bar-two {\r\n  width: 0;\r\n  background-color: #FFB234;\r\n}\r\n#bar-one {\r\n  width: 0;\r\n  background-color: #FF8B5A;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxPQUFPO0FBQ1Q7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLHNEQUE4QztVQUE5Qyw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLFVBQVU7RUFDVixzREFBOEM7VUFBOUMsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0Y7QUFUQTtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtBQUNGO0FBSUE7RUFDRSxnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBR2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztBQUVkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxRQUFRO0VBQ1IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxRQUFRO0VBQ1IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxRQUFRO0VBQ1IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxRQUFRO0VBQ1IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxRQUFRO0VBQ1IseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNUaXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZ3JleV90aXRsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ucGljX3BhZGRpbmcge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbiNEZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnMpO1xyXG5ib2R5IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMjgyODI4O1xyXG59XHJcblxyXG4uc2tpbGxzIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogOTYwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubGluZXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgd2lkdGg6IDJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjYpO1xyXG59XHJcbi5saW5lLmwtLTAge1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuLmxpbmUubC0tMjUge1xyXG4gIGxlZnQ6IDI1JTtcclxufVxyXG4ubGluZS5sLS01MCB7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcbi5saW5lLmwtLTc1IHtcclxuICBsZWZ0OiA3NSU7XHJcbn1cclxuLmxpbmUubC0tMTAwIHtcclxuICBsZWZ0OiBjYWxjKDEwMCUgLSAxcHgpO1xyXG59XHJcblxyXG4ubGluZV9fbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTIwcHg7XHJcbiAgcmlnaHQ6IC01MHB4O1xyXG59XHJcbi5saW5lX19sYWJlbC50aXRsZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNoYXJ0cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmNoYXJ0IHtcclxuICBtYXJnaW46IDMwcHggMCAwO1xyXG59XHJcbi5jaGFydDpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2hhcnRfX3RpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uOiAxcyBhbmltLWxpZ2h0c3BlZWQtaW4gZWFzZSBmb3J3YXJkcztcclxufVxyXG4uY2hhcnQtLXByb2QgLmNoYXJ0X190aXRsZSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAzLjNzO1xyXG59XHJcbi5jaGFydC0tZGVzaWduIC5jaGFydF9fdGl0bGUge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogNC41cztcclxufVxyXG5cclxuLmNoYXJ0LS1ob3JpeiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNoYXJ0X19iYXIge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogMXMgYW5pbS1saWdodHNwZWVkLWluIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoMTEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDIuN3M7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoMTApIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDIuNXM7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoOSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4zcztcclxufVxyXG4uY2hhcnQtLWRldiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSg4KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDcpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDEuOXM7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoNikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS43cztcclxufVxyXG4uY2hhcnQtLWRldiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSg1KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDQpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDEuM3M7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoMykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS4xcztcclxufVxyXG4uY2hhcnQtLWRldiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuN3M7XHJcbn1cclxuLmNoYXJ0LS1wcm9kIC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDQuMnM7XHJcbn1cclxuLmNoYXJ0LS1wcm9kIC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDRzO1xyXG59XHJcbi5jaGFydC0tZGVzaWduIC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDUuNnM7XHJcbn1cclxuLmNoYXJ0LS1kZXNpZ24gLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogNS40cztcclxufVxyXG4uY2hhcnQtLWRlc2lnbiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA1LjJzO1xyXG59XHJcblxyXG4uY2hhcnRfX2xhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW0tbGlnaHRzcGVlZC1pbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAlKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzoxMDAsMzAwLDQwMCk7XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vbmV0ZG5hLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzMuMi4xL2Nzcy9mb250LWF3ZXNvbWUuY3NzKTtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgSGVsdmV0aWNhO1xyXG4gIGNvbG9yOiAjNzM3MzczO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZFRjtcclxuICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5pbm5lciB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnJhdGluZyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJhdGluZy1udW0ge1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIGZvbnQtc2l6ZTogNzJweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5yYXRpbmctc3RhcnMge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI0UzRTNFMztcclxuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG59XHJcbi5yYXRpbmctc3RhcnMgLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICM3MzczNzM7XHJcbn1cclxuXHJcbi5yYXRpbmctdXNlcnMge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmhpc3RvIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmhpc3RvLXN0YXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDNweDtcclxuXHJcbn1cclxuXHJcbi5oaXN0by1yYXRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmJhci1ibG9jayB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5iYXIge1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2Jhci1maXZlIHtcclxuICB3aWR0aDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUZDMDVBO1xyXG59XHJcblxyXG4jYmFyLWZvdXIge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBREQ2MzM7XHJcbn1cclxuXHJcbiNiYXItdGhyZWUge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQ4MzQ7XHJcbn1cclxuXHJcbiNiYXItdHdvIHtcclxuICB3aWR0aDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCMjM0O1xyXG59XHJcblxyXG4jYmFyLW9uZSB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOEI1QTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/resource/resource.component.html":
/*!**************************************************!*\
  !*** ./src/app/resource/resource.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!modal\">\r\n    <div>\r\n        <div class=\"col-md-4\">\r\n            <a class=\"pointer\" (click)=\"layoutChange(1)\"><img\r\n              *ngIf='!empty'   src=\"https://img.icons8.com/ios-filled/30/000000/activity-grid--v2.png\"></a>\r\n            <a class=\"pointer\" (click)=\"layoutChange(2)\"><img\r\n              *ngIf='!empty'   src=\"https://img.icons8.com/material-two-tone/40/000000/day-view.png\"></a>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12 pt-4\" style=\"text-align: center;\">\r\n        <div class =\"breadcrumb\"><a [href]=\"subc\">{{subject}}</a><span style=\"color:#007BFF\"> > </span> <a [href]=\"top\"> {{level}}</a><span style=\"color:#007BFF\"> > </span> <a [href]=\"subtop\">{{topic2}}</a><span style=\"color:#007BFF\"> > </span> <a [href]=\"r\">{{reso}}</a> </div>\r\n    </div>\r\n    <div *ngIf='list'>\r\n        <div class=\"container-fulid pt-2\" *ngFor='let resource of data'>\r\n            <div class=\"row\"  style=\"text-align: center;\">\r\n                <div class=\"col-md-7 offset-md-1 grey_title pb-1\"\r\n                    style=\"background-color: #1d8459; border: 1px solid black;color:white\">\r\n                    <div class=\"pt-2\" id=\"Title\">\r\n                        <div class =\"breadcrumb\" style=\"color:black\"><h6 >{{resource.sub_title}}</h6><span > > </span> <h6 > {{resource.lev_title}}</h6><span > > </span> <h6>{{resource.tpc_title}}</h6><span > > </span> <h6 >{{resource.resource_type}}</h6> </div>\r\n\r\n                        <h5>{{resource.resource_type}}</h5><div class=\"text-right\">Saved By: {{resource.saved_by.length}}</div><div class=\"text-right\">{{resource.created | date:medium}}</div>\r\n                        <br>\r\n                        <div style=\"background: white;  text-transform: lowercase;\">\r\n                          <a *ngIf=\"http(resource.link);else other_content\" [href]=\"'' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a>\r\n                          <ng-template #other_content>    <a  [href]=\"'//' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a></ng-template>\r\n\r\n                        </div>\r\n                      </div>\r\n                    <div class=\"d-flex\">\r\n                        <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{resource.description}}</b></p>\r\n                    </div>\r\n                    <button class=\"btn btn-secondary text-white float-right\" (click)=\"resourceDetails(resource)\">more\r\n                        Details</button>\r\n                </div>\r\n                <div class=\"col-md-3 pl-5\">\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <a class=\"pointer\" (click)=\"saveLink(resource.id)\"><img src=\"assets/images/Plus.png\"\r\n                                    width=\"55px\" title=\"Save This\"></a>\r\n                            <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                                size=\"24px\" readonly=\"true\"></star-rating>\r\n                                <a class=\"pointer\" (click)=\"followAuther(resource.author)\"><img\r\n                                  src=\"assets/images/Profile.png\" width=\"60px\" title=\"Follow Author\"></a>\r\n                                  <p >{{resource.author_name}}</p>\r\n\r\n                                </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 pt-5\">\r\n                <div class=\"d-flex collapse\" *ngFor=\"let comment of resource.fewComment\">\r\n                    <div class=\"col-md-1 offset-md-1\">\r\n                        <div class=\"d-flex pic_padding\">\r\n                            <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <h4>{{comment.commenter_name}}\r\n                                <star-rating [value]=\"getRating(comment.commenter,resource.id)\" checkedcolor=\"red\"\r\n                                    uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                            </h4>\r\n                            <p class=\"pt-2\">{{comment.comment}}</p>\r\n                            <span class=\"data\"\r\n                                style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{comment.created | date:medium}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container-fulid pt-2\" *ngIf='!list'>\r\n        <div class=\"row\"  style=\"text-align: center;\">\r\n            <div class=\"col-md-3 pb-3\" *ngFor='let resource of data'>\r\n                <div class=\"card\">\r\n                    <h5 class=\"card-title pt-2 text-capitalize\" style=\"text-align: center;\">{{resource.resource_type}}\r\n                    </h5>\r\n                    <div class=\"card-body\">\r\n                      <div style=\"background: grey;text-align: center;text-transform: lowercase;\">\r\n                        <a *ngIf=\"http(resource.link);else other_content\" [href]=\"'' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a>\r\n                        <ng-template #other_content>    <a  [href]=\"'//' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a></ng-template>\r\n\r\n                      </div>                        <p class=\"card-text\" style=\"text-align: center;\">{{resource.description}}</p>\r\n                        <p class=\"text-center\">\r\n                            <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                                size=\"24px\" readonly=\"true\"></star-rating>\r\n                        </p>\r\n                        <button class=\"btn btn-secondary text-white btn-block\" (click)=\"resourceDetails(resource)\">more\r\n                            Details</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"not_found\" *ngIf='empty'>\r\n        <img src=\"assets/images/not-found.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"modal\">\r\n      <div class=\"container-fulid pt-2\">\r\n          <div class=\"row\"  style=\"text-align: center;\">\r\n              <strong class=\"pointer pl-3\" (click)=\"hideModal()\">〈 Back</strong>\r\n              <div class=\"col-md-7 offset-md-1 grey_title pb-1\"\r\n                  style=\"background-color: #1d8459; border: 1px solid black;color:white;\">\r\n                  <div class=\"pt-2\" id=\"Title\">\r\n                      <div class =\"breadcrumb\" style=\"color:black\"><h6 >{{modelData.sub_title}}</h6><span > > </span> <h6 > {{modelData.lev_title}}</h6><span > > </span> <h6>{{modelData.tpc_title}}</h6><span > > </span> <h6 >{{modelData.resource_type}}</h6> </div>\r\n\r\n                      <h5 class=\"text-center text-white text-capitalize\">{{modelData.resource_type}}</h5><div class=\"text-right\">Saved By: {{modelData.saved_by.length}}</div><div class=\"text-right\">{{modelData.created | date:medium}}</div>\r\n                      <br>\r\n                      <div style=\"background: white;text-transform: lowercase;\">\r\n                        <a *ngIf=\"http(modelData.link);else other_content\" [href]=\"'' + modelData.link\"  target=\"_blank\" style=\"color:black\">{{modelData.link}}</a>\r\n                        <ng-template #other_content>    <a  [href]=\"'//' + modelData.link\"  target=\"_blank\" style=\"color:black\">{{modelData.link}}</a></ng-template>\r\n\r\n                      </div>               </div>\r\n                  <div class=\"d-flex\">\r\n                      <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{modelData.description}}</b></p>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-3 pl-5\">\r\n                  <div class=\"d-flex\">\r\n                      <div class=\"d-flex flex-column\">\r\n                          <a class=\"pointer\" (click)=\"saveLink(modelData.id)\"><img src=\"assets/images/Plus.png\"\r\n                                  width=\"55px\" title=\"Save This\"></a>\r\n                          <star-rating [value]=\"modelData.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                              size=\"24px\" readonly=\"true\"></star-rating>\r\n                              <a class=\"pointer\" (click)=\"followAuther(modelData.author)\"><img\r\n                                src=\"assets/images/Profile.png\" width=\"60px\" title=\"Follow Author\"></a>\r\n                                <p >{{modelData.author_name}}</p>\r\n\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"container\" style=\"margin-left:20%;\">\r\n              <div class=\"inner\">\r\n                  <div class=\"rating\">\r\n                    <span class=\"rating-num\">{{modelData.avg_rating}}</span>\r\n                    <star-rating [value]=\"modelData.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                    size=\"24px\" readonly=\"true\"></star-rating>\r\n\r\n                    <div class=\"rating-users\">\r\n                      <i class=\"icon-user\"></i> {{modelData.rating_counter}}\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"histo\">\r\n                    <div class=\"five histo-rate\" >\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 5           </span>\r\n                      <span class=\"bar-block\" >\r\n                        <span id=\"bar-five\" class=\"bar\" [ngStyle]=\"{'width': width5+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star5_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"four histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 4           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-four\" class=\"bar\" [ngStyle]=\"{'width': width4+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star4_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"three histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 3           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-three\" class=\"bar\" [ngStyle]=\"{'width': width3+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star3_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"two histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 2           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-two\" class=\"bar\" [ngStyle]=\"{'width': width2+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star2_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"one histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 1           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-one\" class=\"bar\" [ngStyle]=\"{'width': width1+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star1_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n\r\n          <div class=\"col-12 pt-5\" id=\"change\">\r\n              <div *ngIf=\"modelData.comments.length == 0\" style=\"text-align: center;\">\r\n                  <h5>No reviews</h5><br>\r\n                   </div>\r\n              <div class=\"d-flex collapse\" *ngFor=\"let comment of modelData.comments\">\r\n                  <div class=\"col-md-1 offset-md-1\">\r\n                      <div class=\"d-flex pic_padding\">\r\n                          <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                      <div class=\"d-flex flex-column\">\r\n                          <h4>{{comment.commenter_name}}\r\n                              <star-rating [value]=\"getRating(comment.commenter,modelData.id)\" checkedcolor=\"red\"\r\n                                  uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                          </h4>\r\n                          <p class=\"pt-2\">{{comment.comment}}</p>\r\n                          <span class=\"data\"\r\n                              style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{comment.created | date:medium}}</span>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <!-- <div class=\"d-flex collapse\" *ngFor=\"let rate of onlyRating\">\r\n                  <div class=\"col-md-1 offset-md-1\">\r\n                      <div class=\"d-flex pic_padding\">\r\n                          <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                      <div class=\"d-flex flex-column\">\r\n                          <h4>{{rate.rated_by_name}}\r\n                              <star-rating [value]=\"rate.rating\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\"\r\n                                  readonly=\"true\"></star-rating>\r\n                          </h4>\r\n                          <p class=\"pt-2\"></p>\r\n                          <span class=\"data\"\r\n                              style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{rate.created | date:medium}}</span>\r\n                      </div>\r\n                  </div>\r\n              </div> -->\r\n          </div>\r\n          <div class=\"row py-4\">\r\n              <div class=\"col-md-7 offset-md-2\">\r\n\r\n                  <form [formGroup]='rateCommentForm' (ngSubmit)=\"ratingHandler()\">\r\n                      <h5>Write a Review about this Post</h5>\r\n                      <div class=\"form-group\">\r\n                          <label>Rate This Link</label><br>\r\n                          <star-rating [value]=\"rate\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\"\r\n                              readonly=\"false\" (rate)=\"onRate($event)\"></star-rating>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label>Comment : </label>\r\n                          <textarea class=\"form-control\" formControlName=\"comment\"\r\n                              placeholder=\"Enter Your Comment Here\"></textarea>\r\n                      </div>\r\n                      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n                      <button class=\"btn btn-secondary ml-2\" (click)=\"hideModal()\">Cancel</button>\r\n                  </form>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/resource/resource.component.ts":
/*!************************************************!*\
  !*** ./src/app/resource/resource.component.ts ***!
  \************************************************/
/*! exports provided: ResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceComponent", function() { return ResourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ResourceComponent = /** @class */ (function () {
    function ResourceComponent(route, api, fb) {
        var _this = this;
        this.route = route;
        this.api = api;
        this.fb = fb;
        this.empty = false;
        this.onlyRating = [];
        this.onlyRating2 = [];
        this.list = true;
        this.rate = 0;
        this.modal = false;
        this.getname = function (auther) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getData('get_teachers/?t_id=' + auther)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            _this.username = res.get_username;
                            return true;
                        }, function (err) {
                            if (err) {
                                return false;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.followAuther = function (auther) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('follow_author/?aut_id=' + auther)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                            _this.api.noloader();
                            _this.api.message(res.OK);
                        }, function (err) {
                            if (err) {
                                _this.api.noloader();
                                _this.api.message("You cannot follow a student");
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.saveLink = function (id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData("save_resource?rsc_id=" + id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message(res.OK);
                            // this.data = res
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
        this.query = this.route.queryParams;
        this.subcat = this.query._value.subcat;
        this.lvl = this.query._value.lvl;
        this.topic = this.query._value.topic;
        this.type = this.query._value.type;
    }
    ResourceComponent.prototype.ngOnInit = function () {
        this.getResources();
        this.rateCommentForm = this.fb.group({
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.subc = localStorage.getItem("subcat");
        this.top = localStorage.getItem("top");
        this.subtop = localStorage.getItem("subtop");
        this.resource = "/resource" + window.location.search;
        localStorage.setItem("resource", this.resource);
        this.subject = localStorage.getItem("Subject");
        this.level = localStorage.getItem("level");
        this.topic2 = localStorage.getItem("topic");
        this.reso = localStorage.getItem("Resource");
        this.r = "resource" + window.location.search;
    };
    ResourceComponent.prototype.resourceDetails = function (resource) {
        // console.log(resource)
        this.modelData = resource;
        this.modal = true;
        this.width1 = (this.modelData.single_rating_counter.star1_count / this.modelData.rating_counter) * 100 || 0;
        this.width2 = (this.modelData.single_rating_counter.star2_count / this.modelData.rating_counter) * 100 || 0;
        this.width3 = (this.modelData.single_rating_counter.star3_count / this.modelData.rating_counter) * 100 || 0;
        this.width4 = (this.modelData.single_rating_counter.star4_count / this.modelData.rating_counter) * 100 || 0;
        this.width5 = (this.modelData.single_rating_counter.star5_count / this.modelData.rating_counter) * 100 || 0;
    };
    ResourceComponent.prototype.hideModal = function () {
        this.modal = false;
    };
    ResourceComponent.prototype.getResources = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData("navigate/?sub_id=" + this.subcat + "&lev_id=" + this.lvl + "&tpc_id=" + this.topic)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            _this.data = res.resources.filter(function (r) { return r.resource_type == _this.type; });
                            var _loop_1 = function (i) {
                                _this.comments = res.comments.filter(function (c) { return c.resource == _this.data[i].id; });
                                // this.ratings = res.ratings.filter(c => c.resource == this.data[i].id)
                                _this.ratings = res.ratings;
                                var twoComment = void 0;
                                if (_this.comments.length > 2) {
                                    twoComment = _this.comments.slice(0, 2);
                                }
                                else {
                                    twoComment = Array.from(_this.comments);
                                }
                                // console.log(twoComment)
                                _this.data[i] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.data[i], { comments: _this.comments, fewComment: twoComment });
                            };
                            for (var i = 0; i < _this.data.length; i++) {
                                _loop_1(i);
                            }
                            //   for (let i = 0; i < this.data.length; i++) {
                            //     if(this.comments[i].commenter){
                            //     // this.onlyRating = this.ratings.filter(r => r.rated_by != this.comments[i].commenter)
                            //   }
                            // }
                            // console.log(this.onlyRating)
                            _this.api.noloader();
                            // console.log(this.data)
                            if (_this.data.length == 0) {
                                _this.empty = true;
                            }
                        }, function (err) {
                            if (err) {
                                _this.empty = true;
                                _this.api.noloader();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ResourceComponent.prototype.www = function (d) {
        var n = d.startsWith("www");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    ResourceComponent.prototype.http = function (d) {
        var n = d.startsWith("http");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    ResourceComponent.prototype.getRating = function (rater, resource) {
        this.api.loader();
        var rate = this.ratings.filter(function (r) { return (r.rated_by == rater) && (r.resource == resource); });
        // console.log(rate[0])
        if (rate[0] != undefined) {
            this.api.noloader();
            return rate[0].rating;
        }
        else {
            this.api.noloader();
            return 0;
        }
    };
    ResourceComponent.prototype.layoutChange = function (n) {
        if (n == 1) {
            this.list = false;
        }
        else {
            this.list = true;
        }
    };
    ResourceComponent.prototype.onRate = function ($event) {
        this.rate = $event.newValue;
    };
    ResourceComponent.prototype.ratingHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataobj, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        if (!(this.rate != 0 && this.rateCommentForm.controls['comment'].value != '')) return [3 /*break*/, 2];
                        dataobj = { resource_id: this.modelData.id };
                        if (this.rate != 0) {
                            dataobj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dataobj, { rating: this.rate });
                        }
                        if (this.rateCommentForm.controls['comment'].value != '') {
                            dataobj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dataobj, { comment: this.rateCommentForm.controls['comment'].value });
                        }
                        return [4 /*yield*/, this.api.postData('post_comment_rating/', dataobj)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.rate = 0;
                            _this.api.noloader();
                            _this.rateCommentForm.reset();
                            window.location.reload();
                        }, function (err) {
                            if (err) {
                                _this.api.noloader();
                                _this.api.message("You cannot comment on a resource twice");
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        this.api.noloader();
                        this.api.message("All Field are required.");
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ResourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resource',
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.css */ "./src/app/resource/resource.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ResourceComponent);
    return ResourceComponent;
}());



/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/role/role.component.html":
/*!******************************************!*\
  !*** ./src/app/role/role.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center py-5\">\r\n  <h3> What Best Describe You?</h3>\r\n  <div class=\"role mt-5 text-center pointer\" (click)=\"setRole('teacher')\" title=\"Register as Teacher\">\r\n    <img src=\"assets/images/teacher2.png\" alt=\"teacher\" width=\"320px\" height=\"320px\">\r\n  </div>\r\n  <div class=\"role mt-5 text-center pointer\" (click)=\"setRole('student')\" title=\"Register as Student\">\r\n    <img src=\"assets/images/Student-01.png\" alt=\"student\" width=\"320px\" height=320px>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RoleComponent = /** @class */ (function () {
    function RoleComponent(api, router) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.setRole = function (role) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postData('set_retrieve_role/', { 'role': role })];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            localStorage.setItem('currentLogged', JSON.stringify(res));
                            window.location.href = '/categories';
                        }, function (err) {
                            // console.log(err.error.Error)
                            window.location.href = '/categories';
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
    }
    RoleComponent.prototype.ngOnInit = function () {
    };
    RoleComponent.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getData('set_retrieve_role/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            localStorage.setItem('currentLogged', JSON.stringify(res));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Title {\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.grey_title {\r\n  border-radius: 10px;\r\n}\r\n.pic_padding {\r\n  padding-left: 0px;\r\n}\r\n#Description {\r\n  color: white;\r\n}\r\nbody {\r\n  margin-top: 20px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  color: #282828;\r\n}\r\n.skills {\r\n  width: 80%;\r\n  max-width: 960px;\r\n  height: 250px;\r\n  margin: auto;\r\n  position: relative;\r\n}\r\n.lines {\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n.line {\r\n  height: inherit;\r\n  width: 2px;\r\n  position: absolute;\r\n  background: rgba(238, 238, 238, 0.6);\r\n}\r\n.line.l--0 {\r\n  left: 0;\r\n}\r\n.line.l--25 {\r\n  left: 25%;\r\n}\r\n.line.l--50 {\r\n  left: 50%;\r\n}\r\n.line.l--75 {\r\n  left: 75%;\r\n}\r\n.line.l--100 {\r\n  left: calc(100% - 1px);\r\n}\r\n.line__label {\r\n  display: block;\r\n  width: 100px;\r\n  text-align: center;\r\n  position: absolute;\r\n  bottom: -20px;\r\n  right: -50px;\r\n}\r\n.line__label.title {\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n.charts {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n}\r\n.chart {\r\n  margin: 30px 0 0;\r\n}\r\n.chart:first-child {\r\n  margin: 0;\r\n}\r\n.chart__title {\r\n  display: block;\r\n  margin: 0 0 10px;\r\n  font-weight: bold;\r\n  opacity: 0;\r\n  -webkit-animation: 1s anim-lightspeed-in ease forwards;\r\n          animation: 1s anim-lightspeed-in ease forwards;\r\n}\r\n.chart--prod .chart__title {\r\n  -webkit-animation-delay: 3.3s;\r\n          animation-delay: 3.3s;\r\n}\r\n.chart--design .chart__title {\r\n  -webkit-animation-delay: 4.5s;\r\n          animation-delay: 4.5s;\r\n}\r\n.chart--horiz {\r\n  overflow: hidden;\r\n}\r\n.chart__bar {\r\n  height: 30px;\r\n  margin-bottom: 10px;\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n  opacity: 0;\r\n  -webkit-animation: 1s anim-lightspeed-in ease forwards;\r\n          animation: 1s anim-lightspeed-in ease forwards;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(11) {\r\n  -webkit-animation-delay: 2.7s;\r\n          animation-delay: 2.7s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(10) {\r\n  -webkit-animation-delay: 2.5s;\r\n          animation-delay: 2.5s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(9) {\r\n  -webkit-animation-delay: 2.3s;\r\n          animation-delay: 2.3s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(8) {\r\n  -webkit-animation-delay: 2.1s;\r\n          animation-delay: 2.1s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(7) {\r\n  -webkit-animation-delay: 1.9s;\r\n          animation-delay: 1.9s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(6) {\r\n  -webkit-animation-delay: 1.7s;\r\n          animation-delay: 1.7s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(5) {\r\n  -webkit-animation-delay: 1.5s;\r\n          animation-delay: 1.5s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(4) {\r\n  -webkit-animation-delay: 1.3s;\r\n          animation-delay: 1.3s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(3) {\r\n  -webkit-animation-delay: 1.1s;\r\n          animation-delay: 1.1s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(2) {\r\n  -webkit-animation-delay: 0.9s;\r\n          animation-delay: 0.9s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(1) {\r\n  -webkit-animation-delay: 0.7s;\r\n          animation-delay: 0.7s;\r\n}\r\n.chart--prod .chart__bar:nth-of-type(2) {\r\n  -webkit-animation-delay: 4.2s;\r\n          animation-delay: 4.2s;\r\n}\r\n.chart--prod .chart__bar:nth-of-type(1) {\r\n  -webkit-animation-delay: 4s;\r\n          animation-delay: 4s;\r\n}\r\n.chart--design .chart__bar:nth-of-type(3) {\r\n  -webkit-animation-delay: 5.6s;\r\n          animation-delay: 5.6s;\r\n}\r\n.chart--design .chart__bar:nth-of-type(2) {\r\n  -webkit-animation-delay: 5.4s;\r\n          animation-delay: 5.4s;\r\n}\r\n.chart--design .chart__bar:nth-of-type(1) {\r\n  -webkit-animation-delay: 5.2s;\r\n          animation-delay: 5.2s;\r\n}\r\n.chart__label {\r\n  padding-left: 10px;\r\n  line-height: 30px;\r\n  color: white;\r\n}\r\n@-webkit-keyframes anim-lightspeed-in {\r\n  0% {\r\n    transform: translateX(-200%);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes anim-lightspeed-in {\r\n  0% {\r\n    transform: translateX(-200%);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\nbody {\r\n  font-family: 'Roboto', Helvetica;\r\n  color: #737373;\r\n  font-weight: 300;\r\n}\r\n.container {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  margin-top: 3em;\r\n  background-color: #EFEFEF;\r\n  padding: 4px;\r\n}\r\n.inner {\r\n  padding: 1em;\r\n  background-color: white;\r\n  overflow: hidden;\r\n  position: relative;\r\n  border-radius: 4px;\r\n}\r\n.rating {\r\n  float: left;\r\n  width: 45%;\r\n  margin-right: 5%;\r\n  text-align: center;\r\n}\r\n.rating-num {\r\n  color: #333333;\r\n  font-size: 72px;\r\n  font-weight: 100;\r\n  line-height: 1em;\r\n}\r\n.rating-stars {\r\n  font-size: 20px;\r\n  color: #E3E3E3;\r\n  margin-bottom: .5em;\r\n}\r\n.rating-stars .active {\r\n  color: #737373;\r\n}\r\n.rating-users {\r\n  font-size: 14px;\r\n}\r\n.histo {\r\n  float: left;\r\n  width: 50%;\r\n  font-size: 13px;\r\n}\r\n.histo-star {\r\n  float: left;\r\n  padding: 3px;\r\n\r\n}\r\n.histo-rate {\r\n  width: 100%;\r\n  display: block;\r\n  clear: both;\r\n}\r\n.bar-block {\r\n  margin-left: 5px;\r\n  color: black;\r\n  display: block;\r\n  float: left;\r\n  width: 75%;\r\n  position: relative;\r\n}\r\n.bar {\r\n  padding: 4px;\r\n  display: block;\r\n}\r\n#bar-five {\r\n  width: 0;\r\n  background-color: #9FC05A;\r\n}\r\n#bar-four {\r\n  width: 0;\r\n  background-color: #ADD633;\r\n}\r\n#bar-three {\r\n  width: 0;\r\n  background-color: #FFD834;\r\n}\r\n#bar-two {\r\n  width: 0;\r\n  background-color: #FFB234;\r\n}\r\n#bar-one {\r\n  width: 0;\r\n  background-color: #FF8B5A;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLE9BQU87QUFDVDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysc0RBQThDO1VBQTlDLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsVUFBVTtFQUNWLHNEQUE4QztVQUE5Qyw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixVQUFVO0VBQ1o7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7QUFDRjtBQVRBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0Y7QUFJQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFHbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0FBRWQ7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjVGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmdyZXlfdGl0bGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnBpY19wYWRkaW5nIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4jRGVzY3JpcHRpb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcclxuYm9keSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzI4MjgyODtcclxufVxyXG5cclxuLnNraWxscyB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxpbmVzIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC42KTtcclxufVxyXG4ubGluZS5sLS0wIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5saW5lLmwtLTI1IHtcclxuICBsZWZ0OiAyNSU7XHJcbn1cclxuLmxpbmUubC0tNTAge1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG4ubGluZS5sLS03NSB7XHJcbiAgbGVmdDogNzUlO1xyXG59XHJcbi5saW5lLmwtLTEwMCB7XHJcbiAgbGVmdDogY2FsYygxMDAlIC0gMXB4KTtcclxufVxyXG5cclxuLmxpbmVfX2xhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0yMHB4O1xyXG4gIHJpZ2h0OiAtNTBweDtcclxufVxyXG4ubGluZV9fbGFiZWwudGl0bGUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jaGFydHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jaGFydCB7XHJcbiAgbWFyZ2luOiAzMHB4IDAgMDtcclxufVxyXG4uY2hhcnQ6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNoYXJ0X190aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogMXMgYW5pbS1saWdodHNwZWVkLWluIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuLmNoYXJ0LS1wcm9kIC5jaGFydF9fdGl0bGUge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy4zcztcclxufVxyXG4uY2hhcnQtLWRlc2lnbiAuY2hhcnRfX3RpdGxlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDQuNXM7XHJcbn1cclxuXHJcbi5jaGFydC0taG9yaXoge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jaGFydF9fYmFyIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IDFzIGFuaW0tbGlnaHRzcGVlZC1pbiBlYXNlIGZvcndhcmRzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDExKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjdzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDEwKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDkpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDIuM3M7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoOCkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4xcztcclxufVxyXG4uY2hhcnQtLWRldiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSg3KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjlzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDYpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDEuN3M7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoNSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS41cztcclxufVxyXG4uY2hhcnQtLWRldiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSg0KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjNzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMXM7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC45cztcclxufVxyXG4uY2hhcnQtLWRldiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xyXG59XHJcbi5jaGFydC0tcHJvZCAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA0LjJzO1xyXG59XHJcbi5jaGFydC0tcHJvZCAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcclxufVxyXG4uY2hhcnQtLWRlc2lnbiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA1LjZzO1xyXG59XHJcbi5jaGFydC0tZGVzaWduIC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDUuNHM7XHJcbn1cclxuLmNoYXJ0LS1kZXNpZ24gLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogNS4ycztcclxufVxyXG5cclxuLmNoYXJ0X19sYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltLWxpZ2h0c3BlZWQtaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDMwMCw0MDApO1xyXG5AaW1wb3J0IHVybChodHRwczovL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS8zLjIuMS9jc3MvZm9udC1hd2Vzb21lLmNzcyk7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYTtcclxuICBjb2xvcjogIzczNzM3MztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uaW5uZXIge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5yYXRpbmcge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yYXRpbmctbnVtIHtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBmb250LXNpemU6IDcycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG59XHJcblxyXG4ucmF0aW5nLXN0YXJzIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNFM0UzRTM7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcclxufVxyXG4ucmF0aW5nLXN0YXJzIC5hY3RpdmUge1xyXG4gIGNvbG9yOiAjNzM3MzczO1xyXG59XHJcblxyXG4ucmF0aW5nLXVzZXJzIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5oaXN0byB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5oaXN0by1zdGFyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAzcHg7XHJcblxyXG59XHJcblxyXG4uaGlzdG8tcmF0ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5iYXItYmxvY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFyIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNiYXItZml2ZSB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlGQzA1QTtcclxufVxyXG5cclxuI2Jhci1mb3VyIHtcclxuICB3aWR0aDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQURENjMzO1xyXG59XHJcblxyXG4jYmFyLXRocmVlIHtcclxuICB3aWR0aDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEODM0O1xyXG59XHJcblxyXG4jYmFyLXR3byB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjIzNDtcclxufVxyXG5cclxuI2Jhci1vbmUge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjhCNUE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!modal\">\r\n    <div>\r\n        <div class=\"col-md-4\">\r\n            <a class=\"pointer\" (click)=\"layoutChange(1)\"><img\r\n              *ngIf='!empty'   src=\"https://img.icons8.com/ios-filled/30/000000/activity-grid--v2.png\"></a>\r\n            <a class=\"pointer\" (click)=\"layoutChange(2)\"><img\r\n              *ngIf='!empty'   src=\"https://img.icons8.com/material-two-tone/40/000000/day-view.png\"></a>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf='list'>\r\n        <div class=\"container-fulid pt-2\" *ngFor='let resource of data'>\r\n            <div class=\"row\"  style=\"text-align: center;\">\r\n                <div class=\"col-md-7 offset-md-1 grey_title pb-1\"\r\n                    style=\"background-color: #1d8459; border: 1px solid black;color:white\">\r\n                    <div class=\"pt-2\" id=\"Title\">\r\n                        <div class =\"breadcrumb\" style=\"color:black\"><h6 >{{resource.sub_title}}</h6><span > > </span> <h6 > {{resource.lev_title}}</h6><span > > </span> <h6>{{resource.tpc_title}}</h6><span > > </span> <h6 >{{resource.resource_type}}</h6> </div>\r\n\r\n                        <h5>{{resource.resource_type}}</h5><div class=\"text-right\">Saved By: {{resource.saved_by.length}}</div><div class=\"text-right\">{{resource.created | date:medium}}</div>\r\n                        <br>\r\n                        <div style=\"background: white;  text-transform: lowercase;\">\r\n                          <a *ngIf=\"http(resource.link);else other_content\" [href]=\"'' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a>\r\n                          <ng-template #other_content>    <a  [href]=\"'//' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a></ng-template>\r\n\r\n                        </div>\r\n                      </div>\r\n                    <div class=\"d-flex\">\r\n                        <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{resource.description}}</b></p>\r\n                    </div>\r\n                    <button class=\"btn btn-secondary text-white float-right\" (click)=\"resourceDetails(resource)\">more\r\n                        Details</button>\r\n                </div>\r\n                <div class=\"col-md-3 pl-5\">\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <a class=\"pointer\" (click)=\"saveLink(resource.id)\"><img src=\"assets/images/Plus.png\"\r\n                                    width=\"55px\" title=\"Save This\"></a>\r\n                            <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                                size=\"24px\" readonly=\"true\"></star-rating>\r\n                                <a class=\"pointer\" (click)=\"followAuther(resource.author)\"><img\r\n                                  src=\"assets/images/Profile.png\" width=\"60px\" title=\"Follow Author\"></a>\r\n                                  <p >{{resource.author_name}}</p>\r\n\r\n                                </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 pt-5\">\r\n                <div class=\"d-flex collapse\" *ngFor=\"let comment of resource.fewComment\">\r\n                    <div class=\"col-md-1 offset-md-1\">\r\n                        <div class=\"d-flex pic_padding\">\r\n                            <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <h4>{{comment.commenter_name}}\r\n                                <star-rating [value]=\"getRating(comment.commenter,resource.id)\" checkedcolor=\"red\"\r\n                                    uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                            </h4>\r\n                            <p class=\"pt-2\">{{comment.comment}}</p>\r\n                            <span class=\"data\"\r\n                                style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{comment.created | date:medium}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container-fulid pt-2\" *ngIf='!list'>\r\n        <div class=\"row\"  style=\"text-align: center;\">\r\n            <div class=\"col-md-3 pb-3\" *ngFor='let resource of data'>\r\n                <div class=\"card\">\r\n                    <h5 class=\"card-title pt-2 text-capitalize\" style=\"text-align: center;\">{{resource.resource_type}}\r\n                    </h5>\r\n                    <div class=\"card-body\">\r\n                      <div style=\"background: grey;text-align: center;text-transform: lowercase;\">\r\n                        <a *ngIf=\"http(resource.link);else other_content\" [href]=\"'' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a>\r\n                        <ng-template #other_content>    <a  [href]=\"'//' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a></ng-template>\r\n\r\n                      </div>                        <p class=\"card-text\" style=\"text-align: center;\">{{resource.description}}</p>\r\n                        <p class=\"text-center\">\r\n                            <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                                size=\"24px\" readonly=\"true\"></star-rating>\r\n                        </p>\r\n                        <button class=\"btn btn-secondary text-white btn-block\" (click)=\"resourceDetails(resource)\">more\r\n                            Details</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"not_found\" *ngIf='empty'>\r\n        <img src=\"assets/images/not-found.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"modal\">\r\n      <div class=\"container-fulid pt-2\">\r\n          <div class=\"row\"  style=\"text-align: center;\">\r\n              <strong class=\"pointer pl-3\" (click)=\"hideModal()\">〈 Back</strong>\r\n              <div class=\"col-md-7 offset-md-1 grey_title pb-1\"\r\n                  style=\"background-color: #1d8459; border: 1px solid black;color:white;\">\r\n                  <div class=\"pt-2\" id=\"Title\">\r\n                      <div class =\"breadcrumb\" style=\"color:black\"><h6 >{{modelData.sub_title}}</h6><span > > </span> <h6 > {{modelData.lev_title}}</h6><span > > </span> <h6>{{modelData.tpc_title}}</h6><span > > </span> <h6 >{{modelData.resource_type}}</h6> </div>\r\n\r\n                      <h5 class=\"text-center text-white text-capitalize\">{{modelData.resource_type}}</h5><div class=\"text-right\">Saved By: {{modelData.saved_by.length}}</div><div class=\"text-right\">{{modelData.created | date:medium}}</div>\r\n                      <br>\r\n                      <div style=\"background: white;text-transform: lowercase;\">\r\n                        <a *ngIf=\"http(modelData.link);else other_content\" [href]=\"'' + modelData.link\"  target=\"_blank\" style=\"color:black\">{{modelData.link}}</a>\r\n                        <ng-template #other_content>    <a  [href]=\"'//' + modelData.link\"  target=\"_blank\" style=\"color:black\">{{modelData.link}}</a></ng-template>\r\n\r\n                      </div>               </div>\r\n                  <div class=\"d-flex\">\r\n                      <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{modelData.description}}</b></p>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-3 pl-5\">\r\n                  <div class=\"d-flex\">\r\n                      <div class=\"d-flex flex-column\">\r\n                          <a class=\"pointer\" (click)=\"saveLink(modelData.id)\"><img src=\"assets/images/Plus.png\"\r\n                                  width=\"55px\" title=\"Save This\"></a>\r\n                          <star-rating [value]=\"modelData.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                              size=\"24px\" readonly=\"true\"></star-rating>\r\n                              <a class=\"pointer\" (click)=\"followAuther(modelData.author)\"><img\r\n                                src=\"assets/images/Profile.png\" width=\"60px\" title=\"Follow Author\"></a>\r\n                                <p >{{modelData.author_name}}</p>\r\n\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"container\" style=\"margin-left:20%;\">\r\n              <div class=\"inner\">\r\n                  <div class=\"rating\">\r\n                    <span class=\"rating-num\">{{modelData.avg_rating}}</span>\r\n                    <star-rating [value]=\"modelData.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                    size=\"24px\" readonly=\"true\"></star-rating>\r\n\r\n                    <div class=\"rating-users\">\r\n                      <i class=\"icon-user\"></i> {{modelData.rating_counter}}\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"histo\">\r\n                    <div class=\"five histo-rate\" >\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 5           </span>\r\n                      <span class=\"bar-block\" >\r\n                        <span id=\"bar-five\" class=\"bar\" [ngStyle]=\"{'width': width5+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star5_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"four histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 4           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-four\" class=\"bar\" [ngStyle]=\"{'width': width4+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star4_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"three histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 3           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-three\" class=\"bar\" [ngStyle]=\"{'width': width3+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star3_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"two histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 2           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-two\" class=\"bar\" [ngStyle]=\"{'width': width2+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star2_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"one histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 1           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-one\" class=\"bar\" [ngStyle]=\"{'width': width1+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star1_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n\r\n          <div class=\"col-12 pt-5\" id=\"change\">\r\n              <div *ngIf=\"modelData.comments.length == 0\" style=\"text-align: center;\">\r\n                  <h5>No reviews</h5><br>\r\n                   </div>\r\n              <div class=\"d-flex collapse\" *ngFor=\"let comment of modelData.comments\">\r\n\r\n                  <div class=\"col-md-1 offset-md-1\">\r\n                      <div class=\"d-flex pic_padding\">\r\n                          <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                      <div class=\"d-flex flex-column\">\r\n                          <h4>{{comment.commenter_name}}\r\n                              <star-rating [value]=\"getRating(comment.commenter,modelData.id)\" checkedcolor=\"red\"\r\n                                  uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                          </h4>\r\n                          <p class=\"pt-2\">{{comment.comment}}</p>\r\n                          <span class=\"data\"\r\n                              style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{comment.created | date:medium}}</span>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <!-- <div class=\"d-flex collapse\" *ngFor=\"let rate of onlyRating\">\r\n                  <div class=\"col-md-1 offset-md-1\">\r\n                      <div class=\"d-flex pic_padding\">\r\n                          <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                      <div class=\"d-flex flex-column\">\r\n                          <h4>{{rate.rated_by_name}}\r\n                              <star-rating [value]=\"rate.rating\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\"\r\n                                  readonly=\"true\"></star-rating>\r\n                          </h4>\r\n                          <p class=\"pt-2\"></p>\r\n                          <span class=\"data\"\r\n                              style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{rate.created | date:medium}}</span>\r\n                      </div>\r\n                  </div>\r\n              </div> -->\r\n          </div>\r\n          <div class=\"row py-4\">\r\n\r\n            <div class=\"col-md-7 offset-md-2\">\r\n\r\n              <form [formGroup]='rateCommentForm' (ngSubmit)=\"ratingHandler()\">\r\n                      <h5>Write a Review about this Post</h5>\r\n                      <div class=\"form-group\">\r\n                          <label>Rate This Link</label><br>\r\n                          <star-rating [value]=\"rate\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\"\r\n                              readonly=\"false\" (rate)=\"onRate($event)\"></star-rating>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label>Comment : </label>\r\n                          <textarea class=\"form-control\" formControlName=\"comment\"\r\n                              placeholder=\"Enter Your Comment Here\"></textarea>\r\n                      </div>\r\n                      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n                      <button class=\"btn btn-secondary ml-2\" (click)=\"hideModal()\">Cancel</button>\r\n                  </form>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, api, fb) {
        var _this = this;
        this.route = route;
        this.api = api;
        this.fb = fb;
        this.empty = false;
        this.show = false;
        this.modal = false;
        this.rate = 0;
        this.list = true;
        this.saveLink = function (id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData("save_resource?rsc_id=" + id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message(res.OK);
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.followAuther = function (auther) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('follow_author/?aut_id=' + auther)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message(res.OK);
                        }, function (err) {
                            if (err) {
                                _this.api.noloader();
                                _this.api.message("You cannot follow a student");
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
        this.query = this.route.queryParams;
        this.query = this.query._value.q;
        // console.log('test')
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getSearchResult();
        this.rateCommentForm = this.fb.group({
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    SearchComponent.prototype.getSearchResult = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('search/?q=' + this.query)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.data = res.resources;
                            var _loop_1 = function (i) {
                                _this.comments = res.comments.filter(function (c) { return c.resource == _this.data[i].id; });
                                // this.ratings = res.ratings.filter(c => c.resource == this.data[i].id)
                                _this.ratings = res.ratings;
                                var twoComment = void 0;
                                if (_this.comments.length > 2) {
                                    twoComment = _this.comments.slice(0, 2);
                                }
                                else {
                                    twoComment = Array.from(_this.comments);
                                }
                                // console.log(twoComment)
                                _this.data[i] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.data[i], { comments: _this.comments, fewComment: twoComment });
                            };
                            for (var i = 0; i < _this.data.length; i++) {
                                _loop_1(i);
                            }
                            // for (let i = 0; i < this.data.length; i++) {
                            //   // this.onlyRating = this.ratings.filter(r => r.rated_by != this.comments[i].commenter)
                            // }
                            _this.api.noloader();
                            // console.log('this.data')
                            // console.log(this.data)
                            if (_this.data.length == 0) {
                                _this.empty = true;
                            }
                        }, function (err) {
                            if (err) {
                                _this.empty = true;
                                _this.api.noloader();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.getRating = function (rater, resource) {
        var rate = this.ratings.filter(function (r) { return (r.rated_by == rater) && (r.resource == resource); });
        if (rate[0] != undefined) {
            return rate[0].rating;
        }
        else {
            return 0;
        }
    };
    SearchComponent.prototype.www = function (d) {
        var n = d.startsWith("www");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    SearchComponent.prototype.http = function (d) {
        var n = d.startsWith("http");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    SearchComponent.prototype.resourceDetails = function (resource) {
        // console.log(resource)
        this.modelData = resource;
        this.modal = true;
        this.width1 = (this.modelData.single_rating_counter.star1_count / this.modelData.rating_counter) * 100 || 0;
        this.width2 = (this.modelData.single_rating_counter.star2_count / this.modelData.rating_counter) * 100 || 0;
        this.width3 = (this.modelData.single_rating_counter.star3_count / this.modelData.rating_counter) * 100 || 0;
        this.width4 = (this.modelData.single_rating_counter.star4_count / this.modelData.rating_counter) * 100 || 0;
        this.width5 = (this.modelData.single_rating_counter.star5_count / this.modelData.rating_counter) * 100 || 0;
    };
    SearchComponent.prototype.hideModal = function () {
        this.modal = false;
    };
    SearchComponent.prototype.onRate = function ($event) {
        this.rate = $event.newValue;
    };
    SearchComponent.prototype.ratingHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataobj, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        if (!(this.rate != 0 && this.rateCommentForm.controls['comment'].value != '')) return [3 /*break*/, 2];
                        dataobj = { resource_id: this.modelData.id };
                        if (this.rate != 0) {
                            dataobj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dataobj, { rating: this.rate });
                        }
                        if (this.rateCommentForm.controls['comment'].value != '') {
                            dataobj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dataobj, { comment: this.rateCommentForm.controls['comment'].value });
                        }
                        return [4 /*yield*/, this.api.postData('post_comment_rating/', dataobj)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.rate = 0;
                            _this.api.noloader();
                            _this.rateCommentForm.reset();
                            window.location.reload();
                        }, function (err) {
                            if (err) {
                                _this.api.noloader();
                                _this.api.message("You cannot comment on a resource twice");
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        this.api.noloader();
                        this.api.message("All Field are required.");
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent.prototype.layoutChange = function (n) {
        if (n == 1) {
            this.list = false;
        }
        else {
            this.list = true;
        }
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/sub-topic/sub-topic.component.css":
/*!***************************************************!*\
  !*** ./src/app/sub-topic/sub-topic.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Yi10b3BpYy9zdWItdG9waWMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sub-topic/sub-topic.component.html":
/*!****************************************************!*\
  !*** ./src/app/sub-topic/sub-topic.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex pb-5\">\r\n  <div class=\"col-md-12 pt-4\" style=\"text-align: center;\">\r\n      <div class =\"breadcrumb\"><a [href]=\"subc\">{{subject}}</a><span style=\"color:#007BFF\"> > </span> <a [href]=\"top\"> {{level}}</a><span style=\"color:#007BFF\"> > </span> <a [href]=\"subtop\">{{topic2}}</a> </div>\r\n\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"card col-md-3\">\r\n                <div class=\"card-block pt-3\">\r\n                        <a [routerLink]=\"['/resource']\" [queryParams]=\"{ subcat: subcat,lvl:lvl,topic:topic,type:'exercise'}\" (click)=\"getex()\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\r\n                    <div>\r\n                        <h4>Exercise</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          <div class=\"card col-md-3\">\r\n              <div class=\"card-block pt-3\">\r\n                      <a [routerLink]=\"['/resource']\" [queryParams]=\"{ subcat: subcat,lvl:lvl,topic:topic,type:'notes'}\" (click)=\"getnote()\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\r\n                  <div>\r\n                      <h4>Notes</h4>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sub-topic/sub-topic.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sub-topic/sub-topic.component.ts ***!
  \**************************************************/
/*! exports provided: SubTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTopicComponent", function() { return SubTopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var SubTopicComponent = /** @class */ (function () {
    function SubTopicComponent(route, api) {
        this.route = route;
        this.api = api;
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
        this.query = this.route.queryParams;
        this.subcat = this.query._value.subcat;
        this.lvl = this.query._value.lvl;
        this.topic = this.query._value.topic;
    }
    SubTopicComponent.prototype.ngOnInit = function () {
        this.subc = localStorage.getItem("subcat");
        this.top = localStorage.getItem("top");
        this.subtop = "/sub-topics" + window.location.search;
        localStorage.setItem("subtop", this.subtop);
        this.subject = localStorage.getItem("Subject");
        this.level = localStorage.getItem("level");
        this.topic2 = localStorage.getItem("topic");
    };
    SubTopicComponent.prototype.getex = function () {
        localStorage.setItem("Resource", "Exercise");
    };
    SubTopicComponent.prototype.getnote = function () {
        localStorage.setItem("Resource", "Notes");
    };
    SubTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sub-topic',
            template: __webpack_require__(/*! ./sub-topic.component.html */ "./src/app/sub-topic/sub-topic.component.html"),
            styles: [__webpack_require__(/*! ./sub-topic.component.css */ "./src/app/sub-topic/sub-topic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], SubTopicComponent);
    return SubTopicComponent;
}());



/***/ }),

/***/ "./src/app/subcat/subcat.component.css":
/*!*********************************************!*\
  !*** ./src/app/subcat/subcat.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    text-align: center;\r\n    margin-left: 10px;\r\n    margin-bottom: 5px;\r\n        }\r\n  \r\n  .card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViY2F0L3N1YmNhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtRQUNkOztFQUVOO0VBQ0Esd0NBQXdDO0VBQ3hDIiwiZmlsZSI6InNyYy9hcHAvc3ViY2F0L3N1YmNhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAuY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/subcat/subcat.component.html":
/*!**********************************************!*\
  !*** ./src/app/subcat/subcat.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex pb-5\">\r\n  <div class=\"col-md-12 pt-4\">\r\n      <div class =\"breadcrumb\"><a [href]=\"subc\">{{subject}}</a></div>\r\n\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"card col-md-3\" *ngFor=\"let level of data\">\r\n          <div class=\"card-block pt-3\">\r\n            <a [routerLink]=\"['/topics']\" (click)=\"getname(level.title)\" [queryParams]=\"{ subcat: id,lvl:level.id}\"><img src=\"assets\\images\\folder.jpg\"\r\n                width=\"100%\"></a>\r\n            <div>\r\n              <h4>{{level.title}}</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"not_found\" *ngIf='empty'>\r\n          <img src=\"assets/images/not-found.png\" alt=\"\">\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/subcat/subcat.component.ts":
/*!********************************************!*\
  !*** ./src/app/subcat/subcat.component.ts ***!
  \********************************************/
/*! exports provided: SubcatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcatComponent", function() { return SubcatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SubcatComponent = /** @class */ (function () {
    function SubcatComponent(api, route) {
        var _this = this;
        this.api = api;
        this.route = route;
        this.empty = false;
        this.levels = [
            {
                lev: '1',
            },
            {
                lev: '2',
            },
            {
                lev: '3',
            }
        ];
        this.getSubCategories = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('get_level_by_subject/?sub_id=' + this.id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            if (res.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.data = res;
                            }
                        }, function (err) {
                            if (err) {
                                _this.empty = true;
                                _this.api.noloader();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
        this.id = this.route.snapshot.params['id'];
        // console.log(this.id)
    }
    SubcatComponent.prototype.ngOnInit = function () {
        this.getSubCategories();
        localStorage.setItem("subcat", window.location.pathname);
        this.subc = localStorage.getItem("subcat");
        this.subject = localStorage.getItem("Subject");
    };
    SubcatComponent.prototype.getname = function (a) {
        localStorage.setItem("level", a);
    };
    SubcatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subcat',
            template: __webpack_require__(/*! ./subcat.component.html */ "./src/app/subcat/subcat.component.html"),
            styles: [__webpack_require__(/*! ./subcat.component.css */ "./src/app/subcat/subcat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubcatComponent);
    return SubcatComponent;
}());



/***/ }),

/***/ "./src/app/teachers-list/teachers-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/teachers-list/teachers-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXJzLWxpc3QvdGVhY2hlcnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/teachers-list/teachers-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/teachers-list/teachers-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fulid d-flex pt-2\" *ngFor='let resource of data'> -->\r\n  <div class=\"container-fulid pt-2\">\r\n    <div class=\"row\">\r\n      <div *ngFor='let teacher of data'class='col-md-10 offset-md-1 grey_title pb-1' >\r\n        <div class=\"\"\r\n          style=\"background-color: #1d8459; border: 1px solid #eee\">\r\n          <div class=\"pt-2\" id=\"Title\">\r\n            <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n            <h5 class=\"d-inline-block ml-2 text-white text-capitalize\">{{teacher.get_username}}</h5>\r\n            <a class=\"pointer float-right text-white btn btn-secondary\"\r\n              (click)=\"followAuther(teacher.user)\">Follow</a>\r\n            <!-- <a class=\"pointer float-right\" (click)=\"followAuther(teacher.id)\"><img src=\"assets/images/Profile.png\" width=\"60px\"\r\n                title=\"Follow Auther\"></a> -->\r\n          </div>\r\n        </div>\r\n        <div *ngIf=check(teacher.user)>\r\n          <div *ngFor='let resource of resources'>\r\n            <div class=\"row\" style=\"text-align: center;\">\r\n              <div class=\"col-md-7 grey_title my-5\"\r\n                style=\"background-color: #1d8459; border: 1px solid black;color:white;\">\r\n                <div class=\"pt-2\" id=\"Title\">\r\n                    <div class =\"breadcrumb\" style=\"color:black\"><h6 >{{resource.sub_title}}</h6><span > > </span> <h6 > {{resource.lev_title}}</h6><span > > </span> <h6>{{resource.tpc_title}}</h6><span > > </span> <h6 >{{resource.resource_type}}</h6> </div>\r\n\r\n                  <h5>{{resource.resource_type}}</h5><div class=\"text-right\">Saved By: {{resource.saved_by.length}}</div><div class=\"text-right\">{{resource.created | date:medium}}</div>\r\n                  <div style=\"background: white;text-transform: lowercase;\">\r\n                      <a *ngIf=\"http(resource.link);else other_content\" [href]=\"'' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a>\r\n                      <ng-template #other_content>    <a  [href]=\"'//' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a></ng-template>  </div>\r\n                </div>\r\n                <div class=\"d-flex\" style=\"text-align: center;\">\r\n                  <br>\r\n                  <p class=\"pt-3 pl-3\" id=\"Description\" style=\"text-align: center;\">\r\n                    <b>{{resource.description}}</b></p>\r\n\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"col-md-3 pl-5\">\r\n                <div class=\"d-flex\">\r\n                  <div class=\"d-flex flex-column\">\r\n                    <a class=\"pointer\" (click)=\"saveLink(resource.id)\"><img src=\"assets/images/Plus.png\"\r\n                        width=\"55px\" title=\"Save This\"></a>\r\n                    <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                      size=\"24px\" readonly=\"true\"></star-rating>\r\n\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"not_found\" *ngIf='empty'>\r\n    <img src=\"assets/images/not-found.png\" alt=\"\">\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/teachers-list/teachers-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/teachers-list/teachers-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TeachersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersListComponent", function() { return TeachersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var TeachersListComponent = /** @class */ (function () {
    function TeachersListComponent(api) {
        var _this = this;
        this.api = api;
        this.empty = false;
        this.resources = [];
        this.getTeacher = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('follow_author/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.data = res.followed;
                            _this.data2 = res.resources;
                            _this.data3 = res.Teachers;
                        }, function (err) {
                            if (err) {
                                _this.empty = true;
                                _this.api.noloader();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.saveLink = function (id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData("save_resource?rsc_id=" + id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message(res.OK);
                            // this.data = res
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.followAuther = function (auther) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('follow_author/?aut_id=' + auther)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message(res.OK);
                            window.location.reload();
                        }, function (err) {
                            if (err) {
                                _this.api.noloader();
                                _this.api.message("You cannot follow a student");
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
    }
    TeachersListComponent.prototype.ngOnInit = function () {
        this.getTeacher();
    };
    TeachersListComponent.prototype.check = function (x) {
        this.resources = [];
        for (var d = 0; d < this.data2.length; d++) {
            if (x == this.data2[d].author) {
                this.resources.push(this.data2[d]);
            }
            else {
                continue;
            }
        }
        if (this.resources.length == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    TeachersListComponent.prototype.www = function (d) {
        var n = d.startsWith("www");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    TeachersListComponent.prototype.http = function (d) {
        var n = d.startsWith("http");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    TeachersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teachers-list',
            template: __webpack_require__(/*! ./teachers-list.component.html */ "./src/app/teachers-list/teachers-list.component.html"),
            styles: [__webpack_require__(/*! ./teachers-list.component.css */ "./src/app/teachers-list/teachers-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], TeachersListComponent);
    return TeachersListComponent;
}());



/***/ }),

/***/ "./src/app/top-rated/top-rated.component.css":
/*!***************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Title {\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.grey_title {\r\n  border-radius: 10px;\r\n}\r\n.pic_padding {\r\n  padding-left: 0px;\r\n}\r\n#Description {\r\n  color: white;\r\n}\r\nbody {\r\n  margin-top: 20px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  color: #282828;\r\n}\r\n.skills {\r\n  width: 80%;\r\n  max-width: 960px;\r\n  height: 250px;\r\n  margin: auto;\r\n  position: relative;\r\n}\r\n.lines {\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n.line {\r\n  height: inherit;\r\n  width: 2px;\r\n  position: absolute;\r\n  background: rgba(238, 238, 238, 0.6);\r\n}\r\n.line.l--0 {\r\n  left: 0;\r\n}\r\n.line.l--25 {\r\n  left: 25%;\r\n}\r\n.line.l--50 {\r\n  left: 50%;\r\n}\r\n.line.l--75 {\r\n  left: 75%;\r\n}\r\n.line.l--100 {\r\n  left: calc(100% - 1px);\r\n}\r\n.line__label {\r\n  display: block;\r\n  width: 100px;\r\n  text-align: center;\r\n  position: absolute;\r\n  bottom: -20px;\r\n  right: -50px;\r\n}\r\n.line__label.title {\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n.charts {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n}\r\n.chart {\r\n  margin: 30px 0 0;\r\n}\r\n.chart:first-child {\r\n  margin: 0;\r\n}\r\n.chart__title {\r\n  display: block;\r\n  margin: 0 0 10px;\r\n  font-weight: bold;\r\n  opacity: 0;\r\n  -webkit-animation: 1s anim-lightspeed-in ease forwards;\r\n          animation: 1s anim-lightspeed-in ease forwards;\r\n}\r\n.chart--prod .chart__title {\r\n  -webkit-animation-delay: 3.3s;\r\n          animation-delay: 3.3s;\r\n}\r\n.chart--design .chart__title {\r\n  -webkit-animation-delay: 4.5s;\r\n          animation-delay: 4.5s;\r\n}\r\n.chart--horiz {\r\n  overflow: hidden;\r\n}\r\n.chart__bar {\r\n  height: 30px;\r\n  margin-bottom: 10px;\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n  opacity: 0;\r\n  -webkit-animation: 1s anim-lightspeed-in ease forwards;\r\n          animation: 1s anim-lightspeed-in ease forwards;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(11) {\r\n  -webkit-animation-delay: 2.7s;\r\n          animation-delay: 2.7s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(10) {\r\n  -webkit-animation-delay: 2.5s;\r\n          animation-delay: 2.5s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(9) {\r\n  -webkit-animation-delay: 2.3s;\r\n          animation-delay: 2.3s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(8) {\r\n  -webkit-animation-delay: 2.1s;\r\n          animation-delay: 2.1s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(7) {\r\n  -webkit-animation-delay: 1.9s;\r\n          animation-delay: 1.9s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(6) {\r\n  -webkit-animation-delay: 1.7s;\r\n          animation-delay: 1.7s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(5) {\r\n  -webkit-animation-delay: 1.5s;\r\n          animation-delay: 1.5s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(4) {\r\n  -webkit-animation-delay: 1.3s;\r\n          animation-delay: 1.3s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(3) {\r\n  -webkit-animation-delay: 1.1s;\r\n          animation-delay: 1.1s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(2) {\r\n  -webkit-animation-delay: 0.9s;\r\n          animation-delay: 0.9s;\r\n}\r\n.chart--dev .chart__bar:nth-of-type(1) {\r\n  -webkit-animation-delay: 0.7s;\r\n          animation-delay: 0.7s;\r\n}\r\n.chart--prod .chart__bar:nth-of-type(2) {\r\n  -webkit-animation-delay: 4.2s;\r\n          animation-delay: 4.2s;\r\n}\r\n.chart--prod .chart__bar:nth-of-type(1) {\r\n  -webkit-animation-delay: 4s;\r\n          animation-delay: 4s;\r\n}\r\n.chart--design .chart__bar:nth-of-type(3) {\r\n  -webkit-animation-delay: 5.6s;\r\n          animation-delay: 5.6s;\r\n}\r\n.chart--design .chart__bar:nth-of-type(2) {\r\n  -webkit-animation-delay: 5.4s;\r\n          animation-delay: 5.4s;\r\n}\r\n.chart--design .chart__bar:nth-of-type(1) {\r\n  -webkit-animation-delay: 5.2s;\r\n          animation-delay: 5.2s;\r\n}\r\n.chart__label {\r\n  padding-left: 10px;\r\n  line-height: 30px;\r\n  color: white;\r\n}\r\n@-webkit-keyframes anim-lightspeed-in {\r\n  0% {\r\n    transform: translateX(-200%);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes anim-lightspeed-in {\r\n  0% {\r\n    transform: translateX(-200%);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\nbody {\r\n  font-family: 'Roboto', Helvetica;\r\n  color: #737373;\r\n  font-weight: 300;\r\n}\r\n.container {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n  margin-top: 3em;\r\n  background-color: #EFEFEF;\r\n  padding: 4px;\r\n}\r\n.inner {\r\n  padding: 1em;\r\n  background-color: white;\r\n  overflow: hidden;\r\n  position: relative;\r\n  border-radius: 4px;\r\n}\r\n.rating {\r\n  float: left;\r\n  width: 45%;\r\n  margin-right: 5%;\r\n  text-align: center;\r\n}\r\n.rating-num {\r\n  color: #333333;\r\n  font-size: 72px;\r\n  font-weight: 100;\r\n  line-height: 1em;\r\n}\r\n.rating-stars {\r\n  font-size: 20px;\r\n  color: #E3E3E3;\r\n  margin-bottom: .5em;\r\n}\r\n.rating-stars .active {\r\n  color: #737373;\r\n}\r\n.rating-users {\r\n  font-size: 14px;\r\n}\r\n.histo {\r\n  float: left;\r\n  width: 50%;\r\n  font-size: 13px;\r\n}\r\n.histo-star {\r\n  float: left;\r\n  padding: 3px;\r\n\r\n}\r\n.histo-rate {\r\n  width: 100%;\r\n  display: block;\r\n  clear: both;\r\n}\r\n.bar-block {\r\n  margin-left: 5px;\r\n  color: black;\r\n  display: block;\r\n  float: left;\r\n  width: 75%;\r\n  position: relative;\r\n}\r\n.bar {\r\n  padding: 4px;\r\n  display: block;\r\n}\r\n#bar-five {\r\n  width: 0;\r\n  background-color: #9FC05A;\r\n}\r\n#bar-four {\r\n  width: 0;\r\n  background-color: #ADD633;\r\n}\r\n#bar-three {\r\n  width: 0;\r\n  background-color: #FFD834;\r\n}\r\n#bar-two {\r\n  width: 0;\r\n  background-color: #FFB234;\r\n}\r\n#bar-one {\r\n  width: 0;\r\n  background-color: #FF8B5A;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLXJhdGVkL3RvcC1yYXRlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLE9BQU87QUFDVDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysc0RBQThDO1VBQTlDLDhDQUE4QztBQUNoRDtBQUNBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IsVUFBVTtFQUNWLHNEQUE4QztVQUE5Qyw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixVQUFVO0VBQ1o7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7QUFDRjtBQVRBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0Y7QUFJQTtFQUNFLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFHbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0FBRWQ7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC90b3AtcmF0ZWQvdG9wLXJhdGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjVGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmdyZXlfdGl0bGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnBpY19wYWRkaW5nIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4jRGVzY3JpcHRpb24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zKTtcclxuYm9keSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzI4MjgyODtcclxufVxyXG5cclxuLnNraWxscyB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxpbmVzIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC42KTtcclxufVxyXG4ubGluZS5sLS0wIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5saW5lLmwtLTI1IHtcclxuICBsZWZ0OiAyNSU7XHJcbn1cclxuLmxpbmUubC0tNTAge1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG4ubGluZS5sLS03NSB7XHJcbiAgbGVmdDogNzUlO1xyXG59XHJcbi5saW5lLmwtLTEwMCB7XHJcbiAgbGVmdDogY2FsYygxMDAlIC0gMXB4KTtcclxufVxyXG5cclxuLmxpbmVfX2xhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0yMHB4O1xyXG4gIHJpZ2h0OiAtNTBweDtcclxufVxyXG4ubGluZV9fbGFiZWwudGl0bGUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jaGFydHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jaGFydCB7XHJcbiAgbWFyZ2luOiAzMHB4IDAgMDtcclxufVxyXG4uY2hhcnQ6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNoYXJ0X190aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogMXMgYW5pbS1saWdodHNwZWVkLWluIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuLmNoYXJ0LS1wcm9kIC5jaGFydF9fdGl0bGUge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMy4zcztcclxufVxyXG4uY2hhcnQtLWRlc2lnbiAuY2hhcnRfX3RpdGxlIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDQuNXM7XHJcbn1cclxuXHJcbi5jaGFydC0taG9yaXoge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jaGFydF9fYmFyIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IDFzIGFuaW0tbGlnaHRzcGVlZC1pbiBlYXNlIGZvcndhcmRzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDExKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjdzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDEwKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDkpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDIuM3M7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoOCkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi4xcztcclxufVxyXG4uY2hhcnQtLWRldiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSg3KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjlzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDYpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDEuN3M7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoNSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS41cztcclxufVxyXG4uY2hhcnQtLWRldiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSg0KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjNzO1xyXG59XHJcbi5jaGFydC0tZGV2IC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDEuMXM7XHJcbn1cclxuLmNoYXJ0LS1kZXYgLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC45cztcclxufVxyXG4uY2hhcnQtLWRldiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xyXG59XHJcbi5jaGFydC0tcHJvZCAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA0LjJzO1xyXG59XHJcbi5jaGFydC0tcHJvZCAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcclxufVxyXG4uY2hhcnQtLWRlc2lnbiAuY2hhcnRfX2JhcjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA1LjZzO1xyXG59XHJcbi5jaGFydC0tZGVzaWduIC5jaGFydF9fYmFyOm50aC1vZi10eXBlKDIpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDUuNHM7XHJcbn1cclxuLmNoYXJ0LS1kZXNpZ24gLmNoYXJ0X19iYXI6bnRoLW9mLXR5cGUoMSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogNS4ycztcclxufVxyXG5cclxuLmNoYXJ0X19sYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltLWxpZ2h0c3BlZWQtaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDMwMCw0MDApO1xyXG5AaW1wb3J0IHVybChodHRwczovL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS8zLjIuMS9jc3MvZm9udC1hd2Vzb21lLmNzcyk7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYTtcclxuICBjb2xvcjogIzczNzM3MztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uaW5uZXIge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5yYXRpbmcge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yYXRpbmctbnVtIHtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBmb250LXNpemU6IDcycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG59XHJcblxyXG4ucmF0aW5nLXN0YXJzIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNFM0UzRTM7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcclxufVxyXG4ucmF0aW5nLXN0YXJzIC5hY3RpdmUge1xyXG4gIGNvbG9yOiAjNzM3MzczO1xyXG59XHJcblxyXG4ucmF0aW5nLXVzZXJzIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5oaXN0byB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5oaXN0by1zdGFyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAzcHg7XHJcblxyXG59XHJcblxyXG4uaGlzdG8tcmF0ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5iYXItYmxvY2sge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFyIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNiYXItZml2ZSB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlGQzA1QTtcclxufVxyXG5cclxuI2Jhci1mb3VyIHtcclxuICB3aWR0aDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQURENjMzO1xyXG59XHJcblxyXG4jYmFyLXRocmVlIHtcclxuICB3aWR0aDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEODM0O1xyXG59XHJcblxyXG4jYmFyLXR3byB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjIzNDtcclxufVxyXG5cclxuI2Jhci1vbmUge1xyXG4gIHdpZHRoOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjhCNUE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/top-rated/top-rated.component.html":
/*!****************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!modal\">\r\n    <div>\r\n        <div class=\"col-md-4\">\r\n            <a class=\"pointer\" (click)=\"layoutChange(1)\"><img\r\n              *ngIf='!empty'   src=\"https://img.icons8.com/ios-filled/30/000000/activity-grid--v2.png\"></a>\r\n            <a class=\"pointer\" (click)=\"layoutChange(2)\"><img\r\n              *ngIf='!empty'   src=\"https://img.icons8.com/material-two-tone/40/000000/day-view.png\"></a>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf='list'>\r\n        <div class=\"container-fulid pt-2\" *ngFor='let resource of data'>\r\n            <div class=\"row\"  style=\"text-align: center;\">\r\n                <div class=\"col-md-7 offset-md-1 grey_title pb-1\"\r\n                    style=\"background-color: #1d8459; border: 1px solid black;color:white\">\r\n                    <div class=\"pt-2\" id=\"Title\">\r\n                        <div class =\"breadcrumb\" style=\"color:black\"><h6 >{{resource.sub_title}}</h6><span > > </span> <h6 > {{resource.lev_title}}</h6><span > > </span> <h6>{{resource.tpc_title}}</h6><span > > </span> <h6 >{{resource.resource_type}}</h6> </div>\r\n\r\n                        <h5>{{resource.resource_type}}</h5><div class=\"text-right\">Saved By: {{resource.saved_by.length}}</div><div class=\"text-right\">{{resource.created | date:medium}}</div>\r\n                        <br>\r\n                        <div style=\"background: white;  text-transform: lowercase;\">\r\n                          <a *ngIf=\"http(resource.link);else other_content\" [href]=\"'' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a>\r\n                          <ng-template #other_content>    <a  [href]=\"'//' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a></ng-template>\r\n\r\n                        </div>\r\n                      </div>\r\n                    <div class=\"d-flex\">\r\n                        <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{resource.description}}</b></p>\r\n                    </div>\r\n                    <button class=\"btn btn-secondary text-white float-right\" (click)=\"resourceDetails(resource)\">more\r\n                        Details</button>\r\n                </div>\r\n                <div class=\"col-md-3 pl-5\">\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <a class=\"pointer\" (click)=\"saveLink(resource.id)\"><img src=\"assets/images/Plus.png\"\r\n                                    width=\"55px\" title=\"Save This\"></a>\r\n                            <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                                size=\"24px\" readonly=\"true\"></star-rating>\r\n                                <a class=\"pointer\" (click)=\"followAuther(resource.author)\"><img\r\n                                  src=\"assets/images/Profile.png\" width=\"60px\" title=\"Follow Author\"></a>\r\n                                  <p >{{resource.author_name}}</p>\r\n\r\n                                </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 pt-5\">\r\n                <div class=\"d-flex collapse\" *ngFor=\"let comment of resource.fewComment\">\r\n                    <div class=\"col-md-1 offset-md-1\">\r\n                        <div class=\"d-flex pic_padding\">\r\n                            <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <h4>{{comment.commenter_name}}\r\n                                <star-rating [value]=\"getRating(comment.commenter,resource.id)\" checkedcolor=\"red\"\r\n                                    uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                            </h4>\r\n                            <p class=\"pt-2\">{{comment.comment}}</p>\r\n                            <span class=\"data\"\r\n                                style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{comment.created | date:medium}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container-fulid pt-2\" *ngIf='!list'>\r\n        <div class=\"row\"  style=\"text-align: center;\">\r\n            <div class=\"col-md-3 pb-3\" *ngFor='let resource of data'>\r\n                <div class=\"card\">\r\n                    <h5 class=\"card-title pt-2 text-capitalize\" style=\"text-align: center;\">{{resource.resource_type}}\r\n                    </h5>\r\n                    <div class=\"card-body\">\r\n                      <div style=\"background: grey;text-align: center;text-transform: lowercase;\">\r\n                        <a *ngIf=\"http(resource.link);else other_content\" [href]=\"'' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a>\r\n                        <ng-template #other_content>    <a  [href]=\"'//' + resource.link\"  target=\"_blank\" style=\"color:black\">{{resource.link}}</a></ng-template>\r\n\r\n                      </div>                        <p class=\"card-text\" style=\"text-align: center;\">{{resource.description}}</p>\r\n                        <p class=\"text-center\">\r\n                            <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                                size=\"24px\" readonly=\"true\"></star-rating>\r\n                        </p>\r\n                        <button class=\"btn btn-secondary text-white btn-block\" (click)=\"resourceDetails(resource)\">more\r\n                            Details</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"not_found\" *ngIf='empty'>\r\n        <img src=\"assets/images/not-found.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"modal\">\r\n      <div class=\"container-fulid pt-2\">\r\n          <div class=\"row\"  style=\"text-align: center;\">\r\n              <strong class=\"pointer pl-3\" (click)=\"hideModal()\">〈 Back</strong>\r\n              <div class=\"col-md-7 offset-md-1 grey_title pb-1\"\r\n                  style=\"background-color: #1d8459; border: 1px solid black;color:white;\">\r\n                  <div class=\"pt-2\" id=\"Title\">\r\n                      <div class =\"breadcrumb\" style=\"color:black\"><h6 >{{modelData.sub_title}}</h6><span > > </span> <h6 > {{modelData.lev_title}}</h6><span > > </span> <h6>{{modelData.tpc_title}}</h6><span > > </span> <h6 >{{modelData.resource_type}}</h6> </div>\r\n\r\n                      <h5 class=\"text-center text-white text-capitalize\">{{modelData.resource_type}}</h5><div class=\"text-right\">Saved By: {{modelData.saved_by.length}}</div><div class=\"text-right\">{{modelData.created | date:medium}}</div>\r\n                      <br>\r\n                      <div style=\"background: white;text-transform: lowercase;\">\r\n                        <a *ngIf=\"http(modelData.link);else other_content\" [href]=\"'' + modelData.link\"  target=\"_blank\" style=\"color:black\">{{modelData.link}}</a>\r\n                        <ng-template #other_content>    <a  [href]=\"'//' + modelData.link\"  target=\"_blank\" style=\"color:black\">{{modelData.link}}</a></ng-template>\r\n\r\n                      </div>               </div>\r\n                  <div class=\"d-flex\">\r\n                      <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{modelData.description}}</b></p>\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-md-3 pl-5\">\r\n                  <div class=\"d-flex\">\r\n                      <div class=\"d-flex flex-column\">\r\n                          <a class=\"pointer\" (click)=\"saveLink(modelData.id)\"><img src=\"assets/images/Plus.png\"\r\n                                  width=\"55px\" title=\"Save This\"></a>\r\n                          <star-rating [value]=\"modelData.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                              size=\"24px\" readonly=\"true\"></star-rating>\r\n                              <a class=\"pointer\" (click)=\"followAuther(modelData.author)\"><img\r\n                                src=\"assets/images/Profile.png\" width=\"60px\" title=\"Follow Author\"></a>\r\n                                <p >{{modelData.author_name}}</p>\r\n\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"container\" style=\"margin-left:20%;\">\r\n              <div class=\"inner\">\r\n                  <div class=\"rating\">\r\n                    <span class=\"rating-num\">{{modelData.avg_rating}}</span>\r\n                    <star-rating [value]=\"modelData.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                    size=\"24px\" readonly=\"true\"></star-rating>\r\n\r\n                    <div class=\"rating-users\">\r\n                      <i class=\"icon-user\"></i> {{modelData.rating_counter}}\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"histo\">\r\n                    <div class=\"five histo-rate\" >\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 5           </span>\r\n                      <span class=\"bar-block\" >\r\n                        <span id=\"bar-five\" class=\"bar\" [ngStyle]=\"{'width': width5+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star5_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"four histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 4           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-four\" class=\"bar\" [ngStyle]=\"{'width': width4+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star4_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"three histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 3           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-three\" class=\"bar\" [ngStyle]=\"{'width': width3+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star3_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"two histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 2           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-two\" class=\"bar\" [ngStyle]=\"{'width': width2+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star2_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n\r\n                    <div class=\"one histo-rate\">\r\n                      <span class=\"histo-star\">\r\n                        <i class=\"active icon-star\"></i> 1           </span>\r\n                      <span class=\"bar-block\">\r\n                        <span id=\"bar-one\" class=\"bar\" [ngStyle]=\"{'width': width1+'%'}\">\r\n                          <span>{{modelData.single_rating_counter.star1_count}}</span>&nbsp;\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n          </div>\r\n          <div class=\"col-12 pt-5\" id=\"change\">\r\n              <div *ngIf=\"modelData.comments.length == 0\" style=\"text-align: center;\">\r\n                  <h5>No reviews</h5><br>\r\n                   </div>\r\n              <div class=\"d-flex collapse\" *ngFor=\"let comment of modelData.comments\">\r\n                  <div class=\"col-md-1 offset-md-1\">\r\n                      <div class=\"d-flex pic_padding\">\r\n                          <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                      <div class=\"d-flex flex-column\">\r\n                          <h4>{{comment.commenter_name}}\r\n                              <star-rating [value]=\"getRating(comment.commenter,modelData.id)\" checkedcolor=\"red\"\r\n                                  uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                          </h4>\r\n                          <p class=\"pt-2\">{{comment.comment}}</p>\r\n                          <span class=\"data\"\r\n                              style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{comment.created | date:medium}}</span>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <!-- <div class=\"d-flex collapse\" *ngFor=\"let rate of onlyRating\">\r\n                  <div class=\"col-md-1 offset-md-1\">\r\n                      <div class=\"d-flex pic_padding\">\r\n                          <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                      <div class=\"d-flex flex-column\">\r\n                          <h4>{{rate.rated_by_name}}\r\n                              <star-rating [value]=\"rate.rating\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\"\r\n                                  readonly=\"true\"></star-rating>\r\n                          </h4>\r\n                          <p class=\"pt-2\"></p>\r\n                          <span class=\"data\"\r\n                              style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{rate.created | date:medium}}</span>\r\n                      </div>\r\n                  </div>\r\n              </div> -->\r\n          </div>\r\n          <div class=\"row py-4\">\r\n              <div class=\"col-md-7 offset-md-2\">\r\n                  <form [formGroup]='rateCommentForm' (ngSubmit)=\"ratingHandler()\">\r\n                      <h5>Write a Review about this Post</h5>\r\n                      <div class=\"form-group\">\r\n                          <label>Rate This Link</label><br>\r\n                          <star-rating [value]=\"rate\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\"\r\n                              readonly=\"false\" (rate)=\"onRate($event)\"></star-rating>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label>Comment : </label>\r\n                          <textarea class=\"form-control\" formControlName=\"comment\"\r\n                              placeholder=\"Enter Your Comment Here\"></textarea>\r\n                      </div>\r\n                      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n                      <button class=\"btn btn-secondary ml-2\" (click)=\"hideModal()\">Cancel</button>\r\n                  </form>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/top-rated/top-rated.component.ts":
/*!**************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.ts ***!
  \**************************************************/
/*! exports provided: TopRatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedComponent", function() { return TopRatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var TopRatedComponent = /** @class */ (function () {
    function TopRatedComponent(api, fb) {
        var _this = this;
        this.api = api;
        this.fb = fb;
        this.empty = false;
        this.onlyRating = [];
        this.modal = false;
        this.rate = 0;
        this.list = true;
        this.topRated = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('sort_resources/?rating=True')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            _this.data = res.resources;
                            var _loop_1 = function (i) {
                                _this.comments = res.comments.filter(function (c) { return c.resource == _this.data[i].id; });
                                // this.ratings = res.ratings.filter(c => c.resource == this.data[i].id)
                                _this.ratings = res.ratings;
                                var twoComment = void 0;
                                if (_this.comments.length > 2) {
                                    twoComment = _this.comments.slice(0, 2);
                                }
                                else {
                                    twoComment = Array.from(_this.comments);
                                }
                                // console.log(twoComment)
                                _this.data[i] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.data[i], { comments: _this.comments, fewComment: twoComment });
                            };
                            //  console.log(this.data)
                            for (var i = 0; i < _this.data.length; i++) {
                                _loop_1(i);
                            }
                            // for (let i = 0; i < this.data.length; i++) {
                            //   // this.onlyRating = this.ratings.filter(r => r.rated_by != this.comments[i].commenter)
                            // }
                            _this.api.noloader();
                            // console.log(this.data)
                            if (_this.data.length == 0) {
                                _this.empty = true;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.saveLink = function (id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData("save_resource?rsc_id=" + id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message(res.OK);
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.followAuther = function (auther) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('follow_author/?aut_id=' + auther)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message(res.OK);
                        }, function (err) {
                            if (err) {
                                _this.api.noloader();
                                _this.api.message("You cannot follow a student");
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
    }
    TopRatedComponent.prototype.ngOnInit = function () {
        this.topRated();
        this.rateCommentForm = this.fb.group({
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    };
    TopRatedComponent.prototype.www = function (d) {
        var n = d.startsWith("www");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    TopRatedComponent.prototype.http = function (d) {
        var n = d.startsWith("http");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    TopRatedComponent.prototype.getRating = function (rater, resource) {
        var rate = this.ratings.filter(function (r) { return (r.rated_by == rater) && (r.resource == resource); });
        if (rate[0] != undefined) {
            return rate[0].rating;
        }
        else {
            return 0;
        }
    };
    TopRatedComponent.prototype.layoutChange = function (n) {
        if (n == 1) {
            this.list = false;
        }
        else {
            this.list = true;
        }
    };
    TopRatedComponent.prototype.resourceDetails = function (resource) {
        // console.log(resource)
        this.modelData = resource;
        this.modal = true;
        this.width1 = (this.modelData.single_rating_counter.star1_count / this.modelData.rating_counter) * 100 || 0;
        this.width2 = (this.modelData.single_rating_counter.star2_count / this.modelData.rating_counter) * 100 || 0;
        this.width3 = (this.modelData.single_rating_counter.star3_count / this.modelData.rating_counter) * 100 || 0;
        this.width4 = (this.modelData.single_rating_counter.star4_count / this.modelData.rating_counter) * 100 || 0;
        this.width5 = (this.modelData.single_rating_counter.star5_count / this.modelData.rating_counter) * 100 || 0;
    };
    TopRatedComponent.prototype.hideModal = function () {
        this.modal = false;
    };
    TopRatedComponent.prototype.onRate = function ($event) {
        this.rate = $event.newValue;
    };
    TopRatedComponent.prototype.ratingHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataobj, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        if (!(this.rate != 0 && this.rateCommentForm.controls['comment'].value != '')) return [3 /*break*/, 2];
                        dataobj = { resource_id: this.modelData.id };
                        if (this.rate != 0) {
                            dataobj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dataobj, { rating: this.rate });
                        }
                        if (this.rateCommentForm.controls['comment'].value != '') {
                            dataobj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, dataobj, { comment: this.rateCommentForm.controls['comment'].value });
                        }
                        return [4 /*yield*/, this.api.postData('post_comment_rating/', dataobj)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.rate = 0;
                            _this.api.noloader();
                            _this.rateCommentForm.reset();
                            window.location.reload();
                        }, function (err) {
                            if (err) {
                                _this.api.noloader();
                                _this.api.message("You cannot comment on a resource twice");
                            }
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        this.api.noloader();
                        this.api.message("All Field are required.");
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TopRatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-rated',
            template: __webpack_require__(/*! ./top-rated.component.html */ "./src/app/top-rated/top-rated.component.html"),
            styles: [__webpack_require__(/*! ./top-rated.component.css */ "./src/app/top-rated/top-rated.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], TopRatedComponent);
    return TopRatedComponent;
}());



/***/ }),

/***/ "./src/app/top-teachers/top-teachers.component.css":
/*!*********************************************************!*\
  !*** ./src/app/top-teachers/top-teachers.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC10ZWFjaGVycy90b3AtdGVhY2hlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/top-teachers/top-teachers.component.html":
/*!**********************************************************!*\
  !*** ./src/app/top-teachers/top-teachers.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fulid d-flex pt-2\" *ngFor='let resource of data'> -->\r\n<div class=\"container-fulid pt-2\">\r\n\t<div class=\"row\">\r\n\t\t<div *ngFor='let teacher of data'class='col-md-10 offset-md-1 grey_title pb-1' >\r\n\t\t\t<div class=\"\"\r\n\t\t\t\tstyle=\"background-color: #1d8459; border: 1px solid #eee\">\r\n\t\t\t\t<div class=\"pt-2\" id=\"Title\">\r\n\t\t\t\t\t<img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n\t\t\t\t\t<h5 class=\"d-inline-block ml-2 text-white text-capitalize\">{{teacher.get_username}}</h5>\r\n\t\t\t\t\t<a class=\"pointer float-right text-white btn btn-secondary\"\r\n\t\t\t\t\t\t(click)=\"followAuther(teacher.user)\">Follow</a>\r\n\t\t\t\t\t<!-- <a class=\"pointer float-right\" (click)=\"followAuther(teacher.id)\"><img src=\"assets/images/Profile.png\" width=\"60px\"\r\n              title=\"Follow Auther\"></a> -->\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div *ngIf=check(teacher.user)>\r\n\t\t\t\t<div *ngFor='let resource of resources'>\r\n\t\t\t\t\t<div class=\"row\" style=\"text-align: center;\">\r\n\t\t\t\t\t\t<div class=\"col-md-7 grey_title my-5\"\r\n\t\t\t\t\t\t\tstyle=\"background-color: #1d8459; border: 1px solid black;color:white\">\r\n\t\t\t\t\t\t\t<div class=\"pt-2\" id=\"Title\">\r\n                  <div class =\"breadcrumb\" style=\"color:black\"><h6 >{{resource.sub_title}}</h6><span > > </span> <h6 > {{resource.lev_title}}</h6><span > > </span> <h6>{{resource.tpc_title}}</h6><span > > </span> <h6 >{{resource.resource_type}}</h6> </div>\r\n\t\t\t\t\t\t\t\t<h5>{{resource.resource_type}}</h5><div class=\"text-right\">Saved By: {{resource.saved_by.length}}</div><div class=\"text-right\">{{resource.created | date:medium}}</div>\r\n\t\t\t\t\t\t\t\t<div style=\"background: white;text-transform: lowercase\">\r\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"www(resource.link)\" [href]=\"'//' + resource.link\" target=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\tstyle=\"color:black\">{{resource.link}}</a>\r\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"http(resource.link)\" [href]=\"'' + resource.link\" target=\"_blank\"\r\n\t\t\t\t\t\t\t\t\t\tstyle=\"color:black\">{{resource.link}}</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"d-flex\" style=\"text-align: center;\">\r\n\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t<p class=\"pt-3 pl-3\" id=\"Description\" style=\"text-align: center;\">\r\n\t\t\t\t\t\t\t\t\t<b>{{resource.description}}</b></p>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3 pl-5\">\r\n\t\t\t\t\t\t\t<div class=\"d-flex\">\r\n\t\t\t\t\t\t\t\t<div class=\"d-flex flex-column\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"pointer\" (click)=\"saveLink(resource.id)\"><img src=\"assets/images/Plus.png\"\r\n\t\t\t\t\t\t\t\t\t\t\twidth=\"55px\" title=\"Save This\"></a>\r\n\t\t\t\t\t\t\t\t\t<star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                    size=\"24px\" readonly=\"true\"></star-rating>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<br>\r\n\r\n\t</div>\r\n</div>\r\n<div class=\"not_found\" *ngIf='empty'>\r\n\t<img src=\"assets/images/not-found.png\" alt=\"\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/top-teachers/top-teachers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/top-teachers/top-teachers.component.ts ***!
  \********************************************************/
/*! exports provided: TopTeachersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTeachersComponent", function() { return TopTeachersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var TopTeachersComponent = /** @class */ (function () {
    function TopTeachersComponent(api) {
        var _this = this;
        this.api = api;
        this.empty = false;
        this.resources = [];
        this.getTeacher = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('most_followed/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.data = res.Teachers;
                            _this.data2 = res.resources;
                            // this.data3=res.Teachers;
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.saveLink = function (id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData("save_resource?rsc_id=" + id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message(res.OK);
                            // this.data = res
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.followAuther = function (auther) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData('follow_author/?aut_id=' + auther)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            _this.api.message(res.OK);
                        }, function (err) {
                            if (err) {
                                _this.api.noloader();
                                _this.api.message("You cannot follow a student");
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
    }
    TopTeachersComponent.prototype.ngOnInit = function () {
        this.getTeacher();
        this.id = parseInt(localStorage.getItem("id"));
    };
    TopTeachersComponent.prototype.check = function (x) {
        this.resources = [];
        for (var d = 0; d < this.data2.length; d++) {
            if (x == this.data2[d].author) {
                this.resources.push(this.data2[d]);
            }
            else {
                continue;
            }
        }
        if (this.resources.length == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    TopTeachersComponent.prototype.www = function (d) {
        var n = d.startsWith("www");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    TopTeachersComponent.prototype.http = function (d) {
        var n = d.startsWith("http");
        if (n) {
            return true;
        }
        else {
            return false;
        }
    };
    TopTeachersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-teachers',
            template: __webpack_require__(/*! ./top-teachers.component.html */ "./src/app/top-teachers/top-teachers.component.html"),
            styles: [__webpack_require__(/*! ./top-teachers.component.css */ "./src/app/top-teachers/top-teachers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], TopTeachersComponent);
    return TopTeachersComponent;
}());



/***/ }),

/***/ "./src/app/topics/topics.component.css":
/*!*********************************************!*\
  !*** ./src/app/topics/topics.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljcy90b3BpY3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/topics/topics.component.html":
/*!**********************************************!*\
  !*** ./src/app/topics/topics.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex pb-5\">\r\n  <div class=\"col-md-12 pt-4\">\r\n      <div class =\"breadcrumb\"><a [href]=\"subc\">{{subject}}</a><span style=\"color:#007BFF\"> > </span> <a [href]=\"top\">{{level}}</a> </div>\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"card col-md-3\" *ngFor=\"let topic of data\">\r\n              <div class=\"card-block pt-3\">\r\n                      <a [routerLink]=\"['/sub-topics']\"  [queryParams]=\"{ subcat: subcat,lvl:lvl,topic:topic.id}\" (click)=\"getname(topic.title)\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\r\n                  <div>\r\n                      <h4>{{topic.title}}</h4>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"not_found\" *ngIf='empty'>\r\n            <img src=\"assets/images/not-found.png\" alt=\"\">\r\n        </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/topics/topics.component.ts":
/*!********************************************!*\
  !*** ./src/app/topics/topics.component.ts ***!
  \********************************************/
/*! exports provided: TopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsComponent", function() { return TopicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var TopicsComponent = /** @class */ (function () {
    function TopicsComponent(route, api) {
        this.route = route;
        this.api = api;
        this.empty = false;
        this.levels = [
            {
                lev: '1',
            },
            {
                lev: '2',
            },
            {
                lev: '3',
            }
        ];
        if (localStorage.getItem('Token') == null || localStorage.getItem('Token') == undefined) {
            window.location.href = '/login';
        }
        this.query = this.route.queryParams;
        this.subcat = this.query._value.subcat;
        this.lvl = this.query._value.lvl;
    }
    TopicsComponent.prototype.ngOnInit = function () {
        this.getTopics();
        this.subc = localStorage.getItem("subcat");
        this.top = "/topics" + window.location.search;
        localStorage.setItem("top", this.top);
        this.subject = localStorage.getItem("Subject");
        this.level = localStorage.getItem("level");
    };
    TopicsComponent.prototype.getname = function (a) {
        localStorage.setItem("topic", a);
    };
    TopicsComponent.prototype.getTopics = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        return [4 /*yield*/, this.api.getData("get_topic_by_sub_level/?sub_id=" + this.subcat + "&lev_id=" + this.lvl)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            // console.log(res)
                            _this.api.noloader();
                            if (res.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.data = res;
                            }
                        }, function (err) {
                            if (err) {
                                _this.empty = true;
                                _this.api.noloader();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TopicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topics',
            template: __webpack_require__(/*! ./topics.component.html */ "./src/app/topics/topics.component.html"),
            styles: [__webpack_require__(/*! ./topics.component.css */ "./src/app/topics/topics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], TopicsComponent);
    return TopicsComponent;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyAFWbyKlrns5T2BTzHDHeXBoaw93EwZg0k",
        authDomain: "ruangilmu-b77f3.firebaseapp.com",
        databaseURL: "https://ruangilmu-b77f3.firebaseio.com",
        projectId: "ruangilmu-b77f3",
        storageBucket: "ruangilmu-b77f3.appspot.com",
        messagingSenderId: "347312724723",
        appId: "1:347312724723:web:792f93c0054c32c33d3586",
        measurementId: "G-WMV76R3JM7"
    }
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

module.exports = __webpack_require__(/*! C:\Users\Muhammad Tahir\Desktop\1223\Resource-Management\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map