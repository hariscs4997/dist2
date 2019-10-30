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

module.exports = "<div class=\"col-md-7 ml-5 mt-5 mb-5 form-container\">\r\n  <form [formGroup]=\"addResource\" class=\"form\" (submit)='addResourceHandler()'>\r\n    <div class=\"form-group\">\r\n      <label>Link</label>\r\n      <input type=\"link\" class=\"form-control\" formControlName='link' placeholder=\"Enter Resource Link\">\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.link.errors\">Enter Valid Link</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Subject</label>\r\n      <select class=\"form-control\" (change)='getLevel($event)' formControlName='subject'>\r\n        <option value=\"\" disabled>Select Subject</option>\r\n        <option [value]=\"sub.id\" *ngFor='let sub of subjects'>{{sub.title}}</option>\r\n      </select>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.subject.errors\">Subject is required</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Level</label>\r\n      <select class=\"form-control\" (change)='getTopic($event)' formControlName='level'>\r\n        <option value=\"\" disabled>Select Level</option>\r\n        <option [value]=\"sub.id\" *ngFor='let sub of subCat'>{{sub.title}}</option>\r\n      </select>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.level.errors\">Level is required</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Topic</label>\r\n      <select class=\"form-control\" formControlName='topic'>\r\n        <option value=\"\" disabled>Select Topic</option>\r\n        <option [value]=\"sub.id\" *ngFor='let sub of topic'>{{sub.title}}</option>\r\n      </select>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.topic.errors\">Topic is required</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Resource type</label>\r\n      <select class=\"form-control\" formControlName='resource_type'>\r\n        <option value=\"\" disabled>Select Resource Type</option>\r\n        <option value=\"notes\">Notes</option>\r\n        <option value=\"exercise\">Exercise</option>\r\n      </select>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.resource_type.errors\">Resource type is required</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Description</label>\r\n      <textarea class=\"form-control\" formControlName='description' placeholder=\"Enter Description\" rows=\"5\"></textarea>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.description.errors\">Description is required</label>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success btn-block\">Submit</button>\r\n  </form>\r\n</div>"

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
                            console.log(res);
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
        var reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
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
                            console.log(res);
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
                            console.log(res);
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
                            console.log(res);
                            _this.api.noloader();
                            _this.api.message('New Resource Created');
                            _this.addResource.reset();
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

module.exports = "<div class=\"d-flex\">\r\n\r\n\r\n\r\n</div>\r\n\r\n<div class=\"col-md-7 ml-5 mt-5 mb-5 form-container\">\r\n  <form [formGroup]=\"addTopic\" class=\"form\" (submit)='addTopicHandler()'>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">Title</label>\r\n      <input type=\"text\" class=\"form-control\" formControlName='title' placeholder=\"Enter Resource Link Here\">\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.title.errors\">Title is required</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Subject</label>\r\n      <select class=\"form-control\" (change)='getLevel($event)' formControlName='subject'>\r\n        <option value=\"\" disabled>Select Subject</option>\r\n        <option [value]=\"sub.id\" *ngFor='let sub of subjects'>{{sub.title}}</option>\r\n      </select>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.subject.errors\">Subject is required</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>Level</label>\r\n      <select class=\"form-control\" formControlName='level'>\r\n        <option value=\"\" disabled>Select Level</option>\r\n        <option [value]=\"sub.id\" *ngFor='let sub of subCat'>{{sub.title}}</option>\r\n      </select>\r\n      <label class=\"error\" *ngIf=\"subbmitted && f.level.errors\">Level is required</label>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success btn-block\">Submit</button>\r\n  </form>\r\n</div>\r\n"

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
                            console.log(res);
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
                            console.log(res);
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
                        console.log(topic);
                        return [4 /*yield*/, this.api.postData('create_topic/', topic)];
                    case 2:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
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
        console.log(msg);
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

module.exports = "h5 > a{\r\n    color:black;\r\n}\r\n\r\nh6 > a{\r\n    color:black;\r\n}\r\n\r\n.dropdown ul{\r\n    margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg1ID4gYXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG5oNiA+IGF7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLmRyb3Bkb3duIHVse1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Header -->\r\n<div class=\"d-flex bg-light\">\r\n\r\n  <div class=\"col-md-2 pt-2\" style=\"text-align: center\">\r\n    <a routerLink=\"/categories\" *ngIf='!loginPage'><img src=\"assets/images/logo1.png\" width=\"100\" height=\"60\"></a>\r\n    <a routerLink=\"/login\" *ngIf='loginPage'><img src=\"assets/images/logo1.png\" width=\"100\" height=\"60\"></a>\r\n  </div>\r\n\r\n  <div class=\"col-md-6 pt-3\" *ngIf='!loginPage'>\r\n    <div class=\"input-group mb-3\">\r\n      <input type=\"search\" class=\"form-control\" #inputSearch placeholder=\"Search\">\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-success\" (click)=\"searchContents()\">Search</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-1\"> </div>\r\n\r\n  <div class=\"dropdown col-md-3 pt-3 pr-5 text-right\" *ngIf='!loginPage'>\r\n    <a class=\" dropdown-toggle user\" data-toggle=\"dropdown\">\r\n      <img height=\"40\" width=\"40\" src=\"assets/images/user-logo.png\">\r\n    </a>\r\n    <ul class=\"dropdown-menu text-center\">\r\n      <li><a class=\"pointer\" (click)=\"logout()\">Logout</a></li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"d-flex\" style=\"min-height: 90vh;\">\r\n  <div class=\"col-md-2 bg-light px-0\" style=\"text-align: center\" *ngIf='!loginPage'>\r\n    <div class=\"col-12 pt-3 pb-2 px-0 bg-theme mb-3\">\r\n      <div class=\"pl-4 pr-2\">\r\n        <h4 style=\"color: White\">Resources</h4>\r\n      </div>\r\n    </div>\r\n    <h5><a routerLink=\"/pins\">My Pins</a></h5>\r\n    <h6 class=\"pt-2\" *ngIf='currentUser.role || currentUser.is_admin'><a routerLink=\"/add-resource\">Create Resource</a>\r\n    </h6>\r\n    <h6 class=\"pt-2\" *ngIf='currentUser.is_admin'><a routerLink=\"/addtopic\">Create Topic</a></h6>\r\n    <h6 class=\"pt-2\" *ngIf='currentUser.is_admin'><a routerLink=\"/pending\">Get Pendings</a></h6>\r\n    <div class=\"pl-5\">\r\n      <hr>\r\n    </div>\r\n    <h6><a routerLink=\"/categories\">Categories</a></h6>\r\n    <h6 class=\"pt-1\"><a routerLink=\"/top-rated\">Top Rated</a></h6>\r\n    <h6 class=\"pt-1\"><a routerLink=\"/top-teachers\">Top Rated Teachers</a></h6>\r\n    <h6 class=\"pt-1\"><a routerLink=\"/teachers\">Teacher</a></h6>\r\n    <div class=\"my-rating\"></div>\r\n  </div>\r\n\r\n  <div class=\"col-md-10\" style=\"background-color: #eeeeee;position:relative\" *ngIf='!loginPage'>\r\n    <div class=\"alert alert-success\" style=\"position:fixed;right:0;top:0;\" *ngIf='api.alert'>\r\n      {{api.alertMsg}}\r\n    </div>\r\n    <div class=\"Loader\" *ngIf='api.loading'>\r\n      <div class=\"mesh-loader\">\r\n        <p class=\"overlay\"></p>\r\n        <div class=\"set-one\">\r\n          <div class=\"circle\"></div>\r\n          <div class=\"circle\"></div>\r\n        </div>\r\n        <div class=\"set-two\">\r\n          <div class=\"circle\"></div>\r\n          <div class=\"circle\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"d-inline-block\" style=\"background-color: #fff;margin: 50px auto;text-align: center;\" *ngIf='loginPage'>\r\n    <div class=\"d-flex\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n<!-- <div class=\"d-flex\"\r\n  style=\"min-height: 80vh;text-align: center;align-items: center;width: 75%;justify-content: space-around;\"\r\n  *ngIf='loginPage'>\r\n  <router-outlet></router-outlet>\r\n</div> -->"

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
                _top_teachers_top_teachers_component__WEBPACK_IMPORTED_MODULE_29__["TopTeachersComponent"]
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
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_27__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_27__["PathLocationStrategy"] }
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

module.exports = "<div class=\"d-flex pb-5\">\r\n    <!-- <div class=\"col-md-2 pt-1 bg-light\" style=\"text-align: center\"></div> -->\r\n    <div class=\"col-md-12 pt-4\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"card col-md-3\" *ngFor='let sub of subjects'>\r\n                    <div class=\"card-block pt-3\">\r\n                        <a [routerLink]=\"['/subcat', sub.id]\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\r\n                        <div>\r\n                            <h4>{{sub.title}}</h4>\r\n                            <p>John Doe</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"not_found\" *ngIf='empty'>\r\n                    <img src=\"assets/images/not-found.png\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(api) {
        var _this = this;
        this.api = api;
        this.empty = false;
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
                            _this.api.noloader();
                            if (res.length > 0) {
                                _this.subjects = res;
                            }
                            else {
                                _this.empty = true;
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
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getResources();
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
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
            _this.api.getallsubjects().subscribe(function (data) { _this.featured = data; }, function (error) { console.log(error); });
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
                                console.log(result);
                                _this.api.message('Login Successfully');
                                if (result.role != undefined) {
                                    _this.api.message('Login Successfully');
                                    localStorage.setItem('currentLogged', JSON.stringify(result));
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cGlucy9teXBpbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mypins/mypins.component.html":
/*!**********************************************!*\
  !*** ./src/app/mypins/mypins.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"container-fulid pt-2\" *ngFor='let resource of data'>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7 offset-md-1 grey_title pb-1\" style=\"background-color: #1d8459; border: 1px solid black\">\r\n        <div class=\"pt-2\" id=\"Title\">\r\n          <h5 class=\"text-white text-center\">{{resource.resource_type}}</h5>\r\n          <input type=\"text\" class=\"form-control\" [value]=\"resource.link\" disabled >\r\n        </div>\r\n        <div class=\"d-flex\">\r\n          <img src=\"assets/images/book.png\" width=\"20%\" class=\"pl-2\">\r\n          <p class=\"pt-3 pl-3 text-white\" id=\"Description\"><b>{{resource.description}}</b></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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



var MypinsComponent = /** @class */ (function () {
    function MypinsComponent(api) {
        var _this = this;
        this.api = api;
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
                            console.log(res);
                            _this.api.noloader();
                            _this.data = res;
                        });
                        return [2 /*return*/];
                }
            });
        }); };
    }
    MypinsComponent.prototype.ngOnInit = function () {
        this.getPins();
    };
    MypinsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mypins',
            template: __webpack_require__(/*! ./mypins.component.html */ "./src/app/mypins/mypins.component.html"),
            styles: [__webpack_require__(/*! ./mypins.component.css */ "./src/app/mypins/mypins.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
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

module.exports = "<div class=\"container-fulid pt-2\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 pb-3\" *ngFor='let item of data; let i = index'>\r\n      <div class=\"card\">\r\n        <h5 class=\"card-title pt-2 text-center ellipsis\">{{item.resource_type}}</h5>\r\n        <img class=\"card-img-top\" src=\"assets/images/book.png\" alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n          <input type=\"text\" [value]='item.link' class=\"form-control\" placeholder=\"www.google.com/first+bar+website.png\"\r\n            style=\"border: 1px solid black\" disabled>\r\n            <br>\r\n          <p class=\"card-text ellipsis\" >{{item.description}}</p>\r\n          <button class=\"btn btn-success\" (click)='approve(item.id,i)'>Approve Topic</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"not_found\" *ngIf='empty'>\r\n      <img src=\"assets/images/not-found.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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



var PendingComponent = /** @class */ (function () {
    function PendingComponent(api) {
        this.api = api;
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
                            console.log(res);
                            _this.api.noloader();
                            if (res.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.data = res;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
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
                            console.log(res);
                            _this.api.noloader();
                            _this.api.message('Approved');
                            _this.data.splice(i, 1);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pending',
            template: __webpack_require__(/*! ./pending.component.html */ "./src/app/pending/pending.component.html"),
            styles: [__webpack_require__(/*! ./pending.component.css */ "./src/app/pending/pending.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
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

module.exports = "#Title {\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.grey_title {\r\n  border-radius: 10px;\r\n}\r\n.pic_padding {\r\n  padding-left: 0px;\r\n}\r\n#Description {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yZXNvdXJjZS9yZXNvdXJjZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI1RpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5ncmV5X3RpdGxlIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5waWNfcGFkZGluZyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuI0Rlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/resource/resource.component.html":
/*!**************************************************!*\
  !*** ./src/app/resource/resource.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!modal\">\r\n    <div>\r\n        <div class=\"col-md-4\">\r\n            <a class=\"pointer\" (click)=\"layoutChange(1)\"><img\r\n                    src=\"https://img.icons8.com/ios-filled/30/000000/activity-grid--v2.png\"></a>\r\n            <a class=\"pointer\" (click)=\"layoutChange(2)\"><img\r\n                    src=\"https://img.icons8.com/material-two-tone/40/000000/day-view.png\"></a>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf='list'>\r\n        <div class=\"container-fulid pt-2\" *ngFor='let resource of data'>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-7 offset-md-1 grey_title pb-1\"\r\n                    style=\"background-color: #1d8459; border: 1px solid black\">\r\n                    <div class=\"pt-2\" id=\"Title\">\r\n                        <h5>{{resource.resource_type}}</h5>\r\n                        <input type=\"text\" class=\"form-control\" [value]=\"resource.link\" disabled>\r\n                    </div>\r\n                    <div class=\"d-flex\">\r\n                        <img src=\"assets/images/book.png\" width=\"20%\" class=\"pl-2\">\r\n                        <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{resource.description}}</b></p>\r\n                    </div>\r\n                    <button class=\"btn btn-secondary text-white float-right\" (click)=\"resourceDetails(resource)\">more\r\n                        Details</button>\r\n                </div>\r\n                <div class=\"col-md-3 pl-5\">\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <a class=\"pointer\" (click)=\"saveLink(resource.id)\"><img src=\"assets/images/Plus.png\"\r\n                                    width=\"55px\" title=\"Save This\"></a>\r\n                            <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                                size=\"24px\" readonly=\"true\"></star-rating>\r\n                            <a class=\"pointer\" (click)=\"followAuther(resource.author)\"><img\r\n                                    src=\"assets/images/Profile.png\" width=\"60px\" title=\"Follow Auther\"></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 pt-5\">\r\n                <div class=\"d-flex collapse\" *ngFor=\"let comment of resource.fewComment\">\r\n                    <div class=\"col-md-1 offset-md-1\">\r\n                        <div class=\"d-flex pic_padding\">\r\n                            <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <h4>{{comment.commenter_name}}\r\n                                <star-rating [value]=\"getRating(comment.commenter,resource.id)\" checkedcolor=\"red\"\r\n                                    uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                            </h4>\r\n                            <p class=\"pt-2\">{{comment.comment}}</p>\r\n                            <span class=\"data\"\r\n                                style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{comment.created | date:medium}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"d-flex collapse\" *ngFor=\"let rate of onlyRating\">\r\n                <div class=\"col-md-1 offset-md-1\">\r\n                    <div class=\"d-flex pic_padding\">\r\n                        <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                    <div class=\"d-flex flex-column\">\r\n                        <h4>{{rate.rated_by_name}}\r\n                            <star-rating [value]=\"rate.rating\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                        </h4>\r\n                        <p class=\"pt-2\"></p>\r\n                        <span class=\"data\" style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{rate.created | date:medium}}</span>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container-fulid pt-2\" *ngIf='!list'>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 pb-3\" *ngFor='let resource of data'>\r\n                <div class=\"card\">\r\n                    <h5 class=\"card-title pt-2 text-capitalize\" style=\"text-align: center;\">{{resource.resource_type}}\r\n                    </h5>\r\n                    <img class=\"card-img-top\" src=\"assets/images/book.png\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                        <input type=\"text\" class=\"form-control\" [value]=\"resource.link\" disabled>\r\n                        <p class=\"card-text\" style=\"text-align: center;\">{{resource.description}}</p>\r\n                        <p class=\"text-center\">\r\n                            <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                                size=\"24px\" readonly=\"true\"></star-rating>\r\n                        </p>\r\n                        <button class=\"btn btn-secondary text-white btn-block\" (click)=\"resourceDetails(resource)\">more\r\n                            Details</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"not_found\" *ngIf='empty'>\r\n        <img src=\"assets/images/not-found.png\" alt=\"\">\r\n    </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"modal\">\r\n    <div class=\"container-fulid pt-2\">\r\n        <div class=\"row\">\r\n            <strong class=\"pointer pl-3\" (click)=\"hideModal()\">〈 Back</strong>\r\n            <div class=\"col-md-7 offset-md-1 grey_title pb-1\"\r\n                style=\"background-color: #1d8459; border: 1px solid black\">\r\n                <div class=\"pt-2\" id=\"Title\">\r\n                    <h5>{{modelData.resource_type}}</h5>\r\n                    <input type=\"text\" class=\"form-control\" [value]=\"modelData.link\">\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                    <img src=\"assets/images/book.png\" width=\"20%\" class=\"pl-2\">\r\n                    <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{modelData.description}}</b></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3 pl-5\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"d-flex flex-column\">\r\n                        <a class=\"pointer\" (click)=\"saveLink(modelData.id)\"><img src=\"assets/images/Plus.png\"\r\n                                width=\"55px\" title=\"Save This\"></a>\r\n                        <star-rating [value]=\"modelData.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                            size=\"24px\" readonly=\"true\"></star-rating>\r\n                        <a class=\"pointer\" (click)=\"followAuther(modelData.author)\"><img src=\"assets/images/Profile.png\"\r\n                                width=\"60px\" title=\"Follow Auther\"></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 pt-5\">\r\n            <div class=\"d-flex collapse\" *ngFor=\"let comment of modelData.comments\">\r\n                <div class=\"col-md-1 offset-md-1\">\r\n                    <div class=\"d-flex pic_padding\">\r\n                        <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                    <div class=\"d-flex flex-column\">\r\n                        <h4>{{comment.commenter_name}}\r\n                            <star-rating [value]=\"getRating(comment.commenter,modelData.id)\" checkedcolor=\"red\"\r\n                                uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                        </h4>\r\n                        <p class=\"pt-2\">{{comment.comment}}</p>\r\n                        <span class=\"data\"\r\n                            style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{comment.created | date:medium}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex collapse\" *ngFor=\"let rate of onlyRating\">\r\n                <div class=\"col-md-1 offset-md-1\">\r\n                    <div class=\"d-flex pic_padding\">\r\n                        <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                    <div class=\"d-flex flex-column\">\r\n                        <h4>{{rate.rated_by_name}}\r\n                            <star-rating [value]=\"rate.rating\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\"\r\n                                readonly=\"true\"></star-rating>\r\n                        </h4>\r\n                        <p class=\"pt-2\"></p>\r\n                        <span class=\"data\"\r\n                            style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{rate.created | date:medium}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row py-4\">\r\n            <div class=\"col-md-7 offset-md-2\">\r\n                <form [formGroup]='rateCommentForm' (ngSubmit)=\"ratingHandler()\">\r\n                    <h5>Write a Review about this Post</h5>\r\n                    <div class=\"form-group\">\r\n                        <label>Rate This Link</label><br>\r\n                        <star-rating [value]=\"rate\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\"\r\n                            readonly=\"false\" (rate)=\"onRate($event)\" required></star-rating>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Comment : </label>\r\n                        <textarea class=\"form-control\" formControlName=\"comment\"\r\n                            placeholder=\"Enter Your Comment Here\" ></textarea>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n                    <button class=\"btn btn-secondary ml-2\" (click)=\"hideModal()\">Cancel</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
        this.list = true;
        this.rate = 0;
        this.modal = false;
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
                            _this.api.message(res.OK);
                        });
                        this.api.noloader();
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
                            console.log(res);
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
    };
    ResourceComponent.prototype.resourceDetails = function (resource) {
        console.log(resource);
        this.modelData = resource;
        this.modal = true;
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
                                _this.ratings = res.ratings.filter(function (c) { return c.resource == _this.data[i].id; });
                                var twoComment = void 0;
                                if (_this.comments.length > 2) {
                                    twoComment = _this.comments.slice(0, 2);
                                }
                                else {
                                    twoComment = Array.from(_this.comments);
                                }
                                console.log(twoComment);
                                _this.data[i] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.data[i], { comments: _this.comments, fewComment: twoComment });
                                console.log(_this.data);
                            };
                            for (var i = 0; i < _this.data.length; i++) {
                                _loop_1(i);
                            }
                            var _loop_2 = function (i) {
                                _this.onlyRating = _this.ratings.filter(function (r) { return r.rated_by != _this.comments[i].commenter; });
                            };
                            for (var i = 0; i < _this.data.length; i++) {
                                _loop_2(i);
                            }
                            _this.api.noloader();
                            console.log(_this.data);
                            if (_this.data.length == 0) {
                                _this.empty = true;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ResourceComponent.prototype.getRating = function (rater, resource) {
        this.api.loader();
        var rate = this.ratings.filter(function (r) { return (r.rated_by == rater) && (r.resource == resource); });
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
                        if (!(this.rate != 0 || this.rateCommentForm.controls['comment'].value != '')) return [3 /*break*/, 2];
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
                            console.log(res);
                            _this.api.message('Rating Posted');
                            _this.rate = 0;
                            _this.api.noloader();
                            _this.rateCommentForm.reset();
                        });
                        return [3 /*break*/, 3];
                    case 2: return [2 /*return*/, null];
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

module.exports = "<div class=\"text-center py-5\">\r\n  <h3> What Best Describe You?</h3>\r\n  <div class=\"role mt-5 text-center pointer\" (click)=\"setRole('teacher')\" title=\"Register as Teacher\">\r\n    <img src=\"assets/images/teacher.png\" alt=\"teacher\">\r\n    <h3 style=\"margin-top:20px;\">Teacher</h3>\r\n  </div>\r\n  <div class=\"role mt-5 text-center pointer\" (click)=\"setRole('student')\" title=\"Register as Student\">\r\n    <img src=\"assets/images/student.png\" alt=\"student\" style=\"border-radius: 50%;border: 6px solid #f36f3a;\">\r\n    <h3 style=\"margin-top:20px;\">Student</h3>\r\n  </div>\r\n</div>"

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
                            console.log(res);
                            window.location.href = '/categories';
                        }, function (err) {
                            console.log(err.error.Error);
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

module.exports = "#Title {\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.grey_title {\r\n  border-radius: 10px;\r\n}\r\n.pic_padding {\r\n  padding-left: 0px;\r\n}\r\n#Description {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNUaXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZ3JleV90aXRsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ucGljX3BhZGRpbmcge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbiNEZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fulid d-flex pt-2\" *ngFor='let item of data.resources'>\r\n    <!-- Title -->\r\n\r\n    <div class=\"col-md-7 offset-md-1 grey_title pb-1\" style=\"background-color: #1d8459; border: 1px solid black\">\r\n        <div class=\"pt-2\" id=\"Title\">\r\n            <h5>{{item.resource_type}}</h5>\r\n            <input type=\"text\" class=\"form-control\" [value]=\"item.link\" disabled>\r\n        </div>\r\n        <div class=\"d-flex\">\r\n            <img src=\"assets/images/book.png\" width=\"20%\" class=\"pl-2\">\r\n            <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{item.description}}</b></p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3 pl-5\">\r\n        <div class=\"d-flex\">\r\n            <div class=\"d-flex flex-column\">\r\n                <a class=\"pointer\" (click)=\"saveLink(item.id)\"><img src=\"assets/images/Plus.png\" width=\"55px\" title=\"Save This\"></a>\r\n                <star-rating [value]=\"item.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                            size=\"24px\" readonly=\"true\"></star-rating>\r\n                <a class=\"pointer\" (click)=\"followAuther(item.author)\"><img src=\"assets/images/Profile.png\" width=\"60px\"></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"not_found\" *ngIf='empty'>\r\n    <img src=\"assets/images/not-found.png\" alt=\"\">\r\n</div>\r\n"

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




var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, api) {
        var _this = this;
        this.route = route;
        this.api = api;
        this.empty = false;
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
                            console.log(res);
                            if (res.resources.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.empty = false;
                            }
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
        this.query = this.query._value.q;
        console.log('test');
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getSearchResult();
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
                            console.log(res);
                            _this.api.noloader();
                            if (res.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.data = res;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
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

module.exports = "<div class=\"d-flex pb-5\"> \r\n  <div class=\"col-md-12 pt-4\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"card col-md-3\">\r\n                <div class=\"card-block pt-3\">\r\n                        <a [routerLink]=\"['/resource']\" [queryParams]=\"{ subcat: subcat,lvl:lvl,topic:topic,type:'exercise'}\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\r\n                    <div>\r\n                        <h4>Excercise</h4>\r\n                    </div>\r\n                </div>                   \r\n            </div>  \r\n          <div class=\"card col-md-3\">\r\n              <div class=\"card-block pt-3\">\r\n                      <a [routerLink]=\"['/resource']\" [queryParams]=\"{ subcat: subcat,lvl:lvl,topic:topic,type:'notes'}\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\r\n                  <div>\r\n                      <h4>Notes</h4>\r\n                  </div>\r\n              </div>                   \r\n          </div>        \r\n        </div> \r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<div class=\"d-flex pb-5\">\r\n  <div class=\"col-md-12 pt-4\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"card col-md-3\" *ngFor=\"let level of data\">\r\n          <div class=\"card-block pt-3\">\r\n            <a [routerLink]=\"['/topics']\" [queryParams]=\"{ subcat: id,lvl:level.id}\"><img src=\"assets\\images\\folder.jpg\"\r\n                width=\"100%\"></a>\r\n            <div>\r\n              <h4>{{level.title}}</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"not_found\" *ngIf='empty'>\r\n          <img src=\"assets/images/not-found.png\" alt=\"\">\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
                            console.log(res);
                            _this.api.noloader();
                            if (res.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.data = res;
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
        console.log(this.id);
    }
    SubcatComponent.prototype.ngOnInit = function () {
        this.getSubCategories();
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

module.exports = "<!-- <div class=\"container-fulid d-flex pt-2\" *ngFor='let resource of data'> -->\r\n<div class=\"container-fulid pt-2\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1 grey_title pb-1\" style=\"background-color: #1d8459; border: 1px solid #eee\"\r\n      *ngFor='let teacher of data'>\r\n      <div class=\"pt-2\" id=\"Title\">\r\n        <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n        <h5 class=\"d-inline-block ml-2 text-white text-capitalize\">{{teacher.username}}</h5>\r\n        <a class=\"pointer float-right text-white btn btn-secondary\" (click)=\"followAuther(teacher.id)\">Follow</a>\r\n        <!-- <a class=\"pointer float-right\" (click)=\"followAuther(teacher.id)\"><img src=\"assets/images/Profile.png\" width=\"60px\"\r\n            title=\"Follow Auther\"></a> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"not_found\" *ngIf='empty'>\r\n  <img src=\"assets/images/not-found.png\" alt=\"\">\r\n</div>"

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
                            console.log(res);
                            _this.api.noloader();
                            _this.data = res.usernames;
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1yYXRlZC90b3AtcmF0ZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/top-rated/top-rated.component.html":
/*!****************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!modal\">\r\n    <div>\r\n        <div class=\"col-md-4\">\r\n            <a class=\"pointer\" (click)=\"layoutChange(1)\"><img\r\n                    src=\"https://img.icons8.com/ios-filled/30/000000/activity-grid--v2.png\"></a>\r\n            <a class=\"pointer\" (click)=\"layoutChange(2)\"><img\r\n                    src=\"https://img.icons8.com/material-two-tone/40/000000/day-view.png\"></a>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf='list'>\r\n        <div class=\"container-fulid pt-2\" *ngFor='let resource of data'>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-7 offset-md-1 grey_title pb-1\"\r\n                    style=\"background-color: #1d8459; border: 1px solid black\">\r\n                    <div class=\"pt-2\" id=\"Title\">\r\n                        <h5>{{resource.resource_type}}</h5>\r\n                        <input type=\"text\" class=\"form-control\" [value]=\"resource.link\" disabled>\r\n                    </div>\r\n                    <div class=\"d-flex\">\r\n                        <img src=\"assets/images/book.png\" width=\"20%\" class=\"pl-2\">\r\n                        <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{resource.description}}</b></p>\r\n                    </div>\r\n                    <button class=\"btn btn-secondary text-white float-right\" (click)=\"resourceDetails(resource)\">more\r\n                        Details</button>\r\n                </div>\r\n                <div class=\"col-md-3 pl-5\">\r\n                    <div class=\"d-flex\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <a class=\"pointer\" (click)=\"saveLink(resource.id)\"><img src=\"assets/images/Plus.png\"\r\n                                    width=\"55px\" title=\"Save This\"></a>\r\n                            <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                                size=\"24px\" readonly=\"true\"></star-rating>\r\n                            <a class=\"pointer\" (click)=\"followAuther(resource.author)\"><img\r\n                                    src=\"assets/images/Profile.png\" width=\"60px\" title=\"Follow Auther\"></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 pt-5\">\r\n                <div class=\"d-flex collapse\" *ngFor=\"let comment of resource.fewComment\">\r\n                    <div class=\"col-md-1 offset-md-1\">\r\n                        <div class=\"d-flex pic_padding\">\r\n                            <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                        <div class=\"d-flex flex-column\">\r\n                            <h4>{{comment.commenter_name}}\r\n                                <star-rating [value]=\"getRating(comment.commenter,resource.id)\" checkedcolor=\"red\"\r\n                                    uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                            </h4>\r\n                            <p class=\"pt-2\">{{comment.comment}}</p>\r\n                            <span class=\"data\"\r\n                                style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{comment.created | date:medium}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"d-flex collapse\" *ngFor=\"let rate of onlyRating\">\r\n                <div class=\"col-md-1 offset-md-1\">\r\n                    <div class=\"d-flex pic_padding\">\r\n                        <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                    <div class=\"d-flex flex-column\">\r\n                        <h4>{{rate.rated_by_name}}\r\n                            <star-rating [value]=\"rate.rating\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                        </h4>\r\n                        <p class=\"pt-2\"></p>\r\n                        <span class=\"data\" style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{rate.created | date:medium}}</span>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container-fulid pt-2\" *ngIf='!list'>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 pb-3\" *ngFor='let resource of data'>\r\n                <div class=\"card\">\r\n                    <h5 class=\"card-title pt-2 text-capitalize\" style=\"text-align: center;\">{{resource.resource_type}}\r\n                    </h5>\r\n                    <img class=\"card-img-top\" src=\"assets/images/book.png\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                        <input type=\"text\" class=\"form-control\" [value]=\"resource.link\" disabled>\r\n                        <p class=\"card-text\" style=\"text-align: center;\">{{resource.description}}</p>\r\n                        <p class=\"text-center\">\r\n                            <star-rating [value]=\"resource.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                                size=\"24px\" readonly=\"true\"></star-rating>\r\n                        </p>\r\n                        <button class=\"btn btn-secondary text-white btn-block\" (click)=\"resourceDetails(resource)\">more\r\n                            Details</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"not_found\" *ngIf='empty'>\r\n        <img src=\"assets/images/not-found.png\" alt=\"\">\r\n    </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"modal\">\r\n    <div class=\"container-fulid pt-2\">\r\n        <div class=\"row\">\r\n            <strong class=\"pointer pl-3\" (click)=\"hideModal()\">〈 Back</strong>\r\n            <div class=\"col-md-7 offset-md-1 grey_title pb-1\"\r\n                style=\"background-color: #1d8459; border: 1px solid black\">\r\n                <div class=\"pt-2\" id=\"Title\">\r\n                    <h5>{{modelData.resource_type}}</h5>\r\n                    <input type=\"text\" class=\"form-control\" [value]=\"modelData.link\">\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                    <img src=\"assets/images/book.png\" width=\"20%\" class=\"pl-2\">\r\n                    <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{modelData.description}}</b></p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3 pl-5\">\r\n                <div class=\"d-flex\">\r\n                    <div class=\"d-flex flex-column\">\r\n                        <a class=\"pointer\" (click)=\"saveLink(modelData.id)\"><img src=\"assets/images/Plus.png\"\r\n                                width=\"55px\" title=\"Save This\"></a>\r\n                        <star-rating [value]=\"modelData.avg_rating\" checkedcolor=\"red\" uncheckedcolor=\"black\"\r\n                            size=\"24px\" readonly=\"true\"></star-rating>\r\n                        <a class=\"pointer\" (click)=\"followAuther(modelData.author)\"><img src=\"assets/images/Profile.png\"\r\n                                width=\"60px\" title=\"Follow Auther\"></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-12 pt-5\">\r\n            <div class=\"d-flex collapse\" *ngFor=\"let comment of modelData.comments\">\r\n                <div class=\"col-md-1 offset-md-1\">\r\n                    <div class=\"d-flex pic_padding\">\r\n                        <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                    <div class=\"d-flex flex-column\">\r\n                        <h4>{{comment.commenter_name}}\r\n                            <star-rating [value]=\"getRating(comment.commenter,modelData.id)\" checkedcolor=\"red\"\r\n                                uncheckedcolor=\"black\" size=\"24px\" readonly=\"true\"></star-rating>\r\n                        </h4>\r\n                        <p class=\"pt-2\">{{comment.comment}}</p>\r\n                        <span class=\"data\"\r\n                            style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{comment.created | date:medium}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"d-flex collapse\" *ngFor=\"let rate of onlyRating\">\r\n                <div class=\"col-md-1 offset-md-1\">\r\n                    <div class=\"d-flex pic_padding\">\r\n                        <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5 pr-5 pic_padding comment\">\r\n                    <div class=\"d-flex flex-column\">\r\n                        <h4>{{rate.rated_by_name}}\r\n                            <star-rating [value]=\"rate.rating\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\"\r\n                                readonly=\"true\"></star-rating>\r\n                        </h4>\r\n                        <p class=\"pt-2\"></p>\r\n                        <span class=\"data\"\r\n                            style=\"font-size: 12px;position: absolute;right: 0;top:10px;\">{{rate.created | date:medium}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row py-4\">\r\n            <div class=\"col-md-7 offset-md-2\">\r\n                <form [formGroup]='rateCommentForm' (ngSubmit)=\"ratingHandler()\">\r\n                    <h5>Write a Review about this Post</h5>\r\n                    <div class=\"form-group\">\r\n                        <label>Rate This Link</label><br>\r\n                        <star-rating [value]=\"rate\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\"\r\n                            readonly=\"false\" (rate)=\"onRate($event)\" required></star-rating>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Comment : </label>\r\n                        <textarea class=\"form-control\" formControlName=\"comment\"\r\n                            placeholder=\"Enter Your Comment Here\" ></textarea>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\r\n                    <button class=\"btn btn-secondary ml-2\" (click)=\"hideModal()\">Cancel</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
        this.list = true;
        this.rate = 0;
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
                                _this.ratings = res.ratings.filter(function (c) { return c.resource == _this.data[i].id; });
                                var twoComment = [];
                                if (_this.comments.length > 2) {
                                    twoComment = _this.comments.slice(0, 2);
                                }
                                else {
                                    twoComment = twoComment.concat([_this.comments]);
                                }
                                _this.data[i] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.data[i], { comments: _this.comments, fewComment: twoComment });
                            };
                            for (var i = 0; i < _this.data.length; i++) {
                                _loop_1(i);
                            }
                            var _loop_2 = function (i) {
                                _this.onlyRating = _this.ratings.filter(function (r) { return r.rated_by != _this.comments[i].commenter; });
                            };
                            for (var i = 0; i < _this.data.length; i++) {
                                _loop_2(i);
                            }
                            _this.api.noloader();
                            console.log(_this.data);
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
                            console.log(res);
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
                            console.log(res);
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
    TopRatedComponent.prototype.ngOnInit = function () {
        this.topRated();
        this.rateCommentForm = this.fb.group({
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
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
    TopRatedComponent.prototype.resourceDetails = function (resource) {
        console.log(resource);
        this.modelData = resource;
        this.modal = true;
    };
    TopRatedComponent.prototype.hideModal = function () {
        this.modal = false;
    };
    TopRatedComponent.prototype.onRate = function ($event) {
        this.rate = $event.newValue;
    };
    TopRatedComponent.prototype.layoutChange = function (n) {
        if (n == 1) {
            this.list = false;
        }
        else {
            this.list = true;
        }
    };
    TopRatedComponent.prototype.ratingHandler = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataobj, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.api.loader();
                        if (!(this.rate != 0 || this.rateCommentForm.controls['comment'].value != '')) return [3 /*break*/, 2];
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
                            console.log(res);
                            _this.rate = 0;
                            _this.api.noloader();
                            _this.rateCommentForm.reset();
                        });
                        return [3 /*break*/, 3];
                    case 2: return [2 /*return*/, null];
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

module.exports = "<!-- <div class=\"container-fulid d-flex pt-2\" *ngFor='let resource of data'> -->\r\n<div class=\"container-fulid py-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-md-1 grey_title pb-1\" style=\"background-color: #1d8459; border: 1px solid #eee\"\r\n      *ngFor='let teacher of data'>\r\n      <div class=\"pt-2\" id=\"Title\">\r\n        <img src=\"assets/images/Author.png\" width=\"50\" style=\"border-radius: 50%\">\r\n        <h5 class=\"d-inline-block ml-2 text-white text-capitalize\">{{teacher.username}}</h5>\r\n        <a class=\"pointer float-right text-white btn btn-secondary\" (click)=\"followAuther(teacher.id)\">Follow</a>\r\n        <!-- <a class=\"pointer float-right\" (click)=\"followAuther(teacher.id)\"><img src=\"assets/images/Profile.png\"\r\n            width=\"60px\" title=\"Follow Auther\"></a> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"not_found\" *ngIf='empty'>\r\n  <img src=\"assets/images/not-found.png\" alt=\"\">\r\n</div>"

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
                            console.log(res);
                            _this.api.noloader();
                            _this.data = res.usernames;
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

module.exports = "<div class=\"d-flex pb-5\"> \r\n  <div class=\"col-md-12 pt-4\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"card col-md-3\" *ngFor=\"let topic of data\">\r\n              <div class=\"card-block pt-3\">\r\n                      <a [routerLink]=\"['/sub-topics']\" [queryParams]=\"{ subcat: subcat,lvl:lvl,topic:topic.id}\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\r\n                  <div>\r\n                      <h4>{{topic.title}}</h4>\r\n                  </div>\r\n              </div>                   \r\n          </div>     \r\n          <div class=\"not_found\" *ngIf='empty'>\r\n            <img src=\"assets/images/not-found.png\" alt=\"\">\r\n        </div>   \r\n        </div> \r\n    </div>\r\n  </div>\r\n</div>"

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
                            console.log(res);
                            _this.api.noloader();
                            if (res.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.data = res;
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