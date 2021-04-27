(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Training\ZedrickPinca\myportfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _firstbody_firstbody_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firstbody/firstbody.component */ "V8OY");
/* harmony import */ var _secondbody_secondbody_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secondbody/secondbody.component */ "wK57");
/* harmony import */ var _thirdbody_thirdbody_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thirdbody/thirdbody.component */ "mYXB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor() {
        this.title = 'myportfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-firstbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-secondbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-thirdbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _firstbody_firstbody_component__WEBPACK_IMPORTED_MODULE_2__["FirstbodyComponent"], _secondbody_secondbody_component__WEBPACK_IMPORTED_MODULE_3__["SecondbodyComponent"], _thirdbody_thirdbody_component__WEBPACK_IMPORTED_MODULE_4__["ThirdbodyComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "V8OY":
/*!**************************************************!*\
  !*** ./src/app/firstbody/firstbody.component.ts ***!
  \**************************************************/
/*! exports provided: FirstbodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstbodyComponent", function() { return FirstbodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FirstbodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
FirstbodyComponent.ɵfac = function FirstbodyComponent_Factory(t) { return new (t || FirstbodyComponent)(); };
FirstbodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstbodyComponent, selectors: [["app-firstbody"]], decls: 12, vars: 0, consts: [[1, "bg"], ["src", "\\assets\\bg.png", "width", "1920", "height", "900"], [1, "container"], ["src", "\\assets\\pinca2x2.jpg"], ["href", "https://www.facebook.com/zicpinca/", 1, "fa", "fa-facebook"], ["href", "https://twitter.com/hanaphanaPINCA", 1, "fa", "fa-twitter"], ["href", "https://linkedin.com/in/zicpinca", 1, "fa", "fa-linkedin"]], template: function FirstbodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zedrick C. Pinca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "UNDERMAINTENANCE!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h3[_ngcontent-%COMP%]{\r\n  color: rgb(218, 214, 19);\r\n  font-size: 5rem;\r\n  font-weight: bolder;\r\n}\r\n\r\n.bg[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    z-index: 3;\r\n    font-family: 'Roboto', sans-serif;\r\n    display: block;\r\n    max-width: 100%;\r\n    height: auto;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    top: 20%\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\r\n{\r\n    border-radius: 50%;\r\n    width: 300px; \r\n}\r\n\r\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n  animation: shake 0.5s; \r\n  animation-iteration-count: infinite; \r\n}\r\n\r\n.container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    padding-top: 3%; \r\n    color: white;\r\n    font-size: 3.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-right: 5%;\r\n}\r\n\r\n.fa[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    margin: 5px 2px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n.fa-facebook[_ngcontent-%COMP%] {\r\n    background: #3B5998;\r\n    color: white;\r\n  }\r\n\r\n.fa-twitter[_ngcontent-%COMP%] {\r\n    background: #55ACEE;\r\n    color: white;\r\n  }\r\n\r\n.fa-linkedin[_ngcontent-%COMP%] {\r\n    background: #007bb5;\r\n    color: white;\r\n  }\r\n\r\n.fa-facebook[_ngcontent-%COMP%]:hover {\r\n    animation: shake 1s; \r\n    animation-iteration-count: infinite; \r\n  }\r\n\r\n.fa-twitter[_ngcontent-%COMP%]:hover {\r\n    animation: shake 1s; \r\n    animation-iteration-count: infinite; \r\n  }\r\n\r\n.fa-linkedin[_ngcontent-%COMP%]:hover {\r\n    animation: shake 1s; \r\n    animation-iteration-count: infinite; \r\n  }\r\n\r\n@media (max-width: 500px)\r\n  {\r\n    .container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n        padding-top: 5%; \r\n        color: white;\r\n        font-size: 2.5rem;\r\n    }\r\n    .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        margin-right: 10%;\r\n    }\r\n    h3[_ngcontent-%COMP%]{\r\n      color: rgb(218, 214, 19);\r\n      font-size: 2rem;\r\n      font-weight: bolder;\r\n    }\r\n  }\r\n\r\n@keyframes shake {\r\n    0% { transform: translate(1px, 1px) rotate(0deg); }\r\n    10% { transform: translate(-1px, -2px) rotate(-1deg); }\r\n    20% { transform: translate(-3px, 0px) rotate(1deg); }\r\n    30% { transform: translate(3px, 2px) rotate(0deg); }\r\n    40% { transform: translate(1px, -1px) rotate(1deg); }\r\n    50% { transform: translate(-1px, 2px) rotate(-1deg); }\r\n    60% { transform: translate(-3px, 1px) rotate(0deg); }\r\n    70% { transform: translate(3px, 1px) rotate(-1deg); }\r\n    80% { transform: translate(-1px, -1px) rotate(1deg); }\r\n    90% { transform: translate(1px, 2px) rotate(0deg); }\r\n    100% { transform: translate(1px, -2px) rotate(-1deg); }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpcnN0Ym9keS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsbUNBQW1DO0FBQ3JDOztBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixtQ0FBbUM7RUFDckM7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsbUNBQW1DO0VBQ3JDOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG1DQUFtQztFQUNyQzs7QUFFQTs7SUFFRTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0lBQ0E7TUFDRSx3QkFBd0I7TUFDeEIsZUFBZTtNQUNmLG1CQUFtQjtJQUNyQjtFQUNGOztBQUVBO0lBQ0UsS0FBSywyQ0FBMkMsRUFBRTtJQUNsRCxNQUFNLDhDQUE4QyxFQUFFO0lBQ3RELE1BQU0sNENBQTRDLEVBQUU7SUFDcEQsTUFBTSwyQ0FBMkMsRUFBRTtJQUNuRCxNQUFNLDRDQUE0QyxFQUFFO0lBQ3BELE1BQU0sNkNBQTZDLEVBQUU7SUFDckQsTUFBTSw0Q0FBNEMsRUFBRTtJQUNwRCxNQUFNLDRDQUE0QyxFQUFFO0lBQ3BELE1BQU0sNkNBQTZDLEVBQUU7SUFDckQsTUFBTSwyQ0FBMkMsRUFBRTtJQUNuRCxPQUFPLDZDQUE2QyxFQUFFO0VBQ3hEIiwiZmlsZSI6ImZpcnN0Ym9keS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XHJcbiAgY29sb3I6IHJnYigyMTgsIDIxNCwgMTkpO1xyXG4gIGZvbnQtc2l6ZTogNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uYmd7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59IFxyXG4uY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IDIwJVxyXG59XHJcbi5jb250YWluZXIgaW1nXHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAzMDBweDsgXHJcbn1cclxuLmNvbnRhaW5lciBpbWc6aG92ZXJ7XHJcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzOyBcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgXHJcbn1cclxuLmNvbnRhaW5lciBoNHtcclxuICAgIHBhZGRpbmctdG9wOiAzJTsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jb250YWluZXIgdWwgYXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW46IDVweCAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuZmEtZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmZhLXR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1QUNFRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmZhLWxpbmtlZGluIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiYjU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuZmEtZmFjZWJvb2s6aG92ZXIge1xyXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAxczsgXHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgXHJcbiAgfVxyXG4gIFxyXG4gIC5mYS10d2l0dGVyOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbjogc2hha2UgMXM7IFxyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7IFxyXG4gIH1cclxuICBcclxuICAuZmEtbGlua2VkaW46aG92ZXIge1xyXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAxczsgXHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsgXHJcbiAgfVxyXG4gXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KVxyXG4gIHtcclxuICAgIC5jb250YWluZXIgaDR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUlOyBcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHVsIGF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjE4LCAyMTQsIDE5KTtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgMTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC0xZGVnKTsgfVxyXG4gICAgMjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMHB4KSByb3RhdGUoMWRlZyk7IH1cclxuICAgIDMwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZyk7IH1cclxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpOyB9XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAycHgpIHJvdGF0ZSgtMWRlZyk7IH1cclxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpOyB9XHJcbiAgICA3MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDFweCkgcm90YXRlKC0xZGVnKTsgfVxyXG4gICAgODAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTFweCkgcm90YXRlKDFkZWcpOyB9XHJcbiAgICA5MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpOyB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _firstbody_firstbody_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firstbody/firstbody.component */ "V8OY");
/* harmony import */ var _secondbody_secondbody_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./secondbody/secondbody.component */ "wK57");
/* harmony import */ var _thirdbody_thirdbody_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thirdbody/thirdbody.component */ "mYXB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _firstbody_firstbody_component__WEBPACK_IMPORTED_MODULE_4__["FirstbodyComponent"],
        _secondbody_secondbody_component__WEBPACK_IMPORTED_MODULE_5__["SecondbodyComponent"],
        _thirdbody_thirdbody_component__WEBPACK_IMPORTED_MODULE_6__["ThirdbodyComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 23, vars: 0, consts: [[1, "responsive-bar"], [1, "logo"], [1, "menu"], ["href", "#"], ["href", "#timeline"], ["href", "#portfolios"], ["href", "#certificates"], ["href", "#contacts"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "///");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portfolios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Certificates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300&display=swap');\r\n\r\nnav[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100px;\r\n  padding: 10px 100px;\r\n  box-sizing: border-box;\r\n  transition: .5s;\r\n  z-index: 4;\r\n}\r\n\r\nnav.black[_ngcontent-%COMP%]{\r\n  background:#000000;\r\n  height: 80px;\r\n  padding: 10px 50px;\r\n  \r\n}\r\n\r\nnav.black[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 60px;\r\n\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n  float: left;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 80px;\r\n  transition: .5s;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  float: right;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  line-height: 80px;\r\n  color: #e9dcdc;\r\n  padding: 5px 20px;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  transition: .5s;\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: bolder;\r\n  letter-spacing: 3px;\r\n}\r\n\r\nnav.black[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  line-height: 60px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  color: #fff;\r\n  background-color: #f00;\r\n}\r\n\r\n.responsive-bar[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n \r\n  .responsive-bar[_ngcontent-%COMP%]\r\n  {\r\n    display: block;\r\n    width: 100%;\r\n    height: 60px;\r\n    background: #262626;\r\n    position:fixed;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 5px 20px;\r\n    box-sizing: border-box;\r\n    z-index: 5;\r\n  }\r\n\r\n  .responsive-bar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    float: left;\r\n    height: 50px;\r\n  }\r\n\r\n  .responsive-bar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    float: right;\r\n    color: #fff;\r\n    margin: 0;\r\n    padding: 0;\r\n    line-height: 50px;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-family: 'Lato', sans-serif;\r\n  }\r\n\r\n  nav.black[_ngcontent-%COMP%]{\r\n    background: rgb(231, 230, 230);\r\n    height: 60px;\r\n    padding: 10px 50px;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    width: 100%;\r\n    top: 60px;\r\n    left: 0;\r\n    background: #262626;\r\n    float: none;\r\n    display: none;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul.active[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: block;\r\n    padding: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n    line-height: 30px !important;\r\n    color: #fff;\r\n    text-shadow: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFHQUFxRzs7QUFFckc7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLFlBQVk7O0FBRWQ7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztJQUVFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsTUFBTTtJQUNOLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFNBQVM7SUFDVCxPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSwzMDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5uYXZ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxMDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICB6LWluZGV4OiA0O1xyXG59XHJcblxyXG5uYXYuYmxhY2t7XHJcbiAgYmFja2dyb3VuZDojMDAwMDAwO1xyXG4gIGhlaWdodDogODBweDtcclxuICBwYWRkaW5nOiAxMHB4IDUwcHg7XHJcbiAgXHJcbn1cclxuXHJcbm5hdi5ibGFjayAubG9nbyBpbWd7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG5cclxufVxyXG5uYXYgLmxvZ297XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbm5hdiAubG9nbyBpbWd7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufSBcclxuXHJcbm5hdiB1bHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxubmF2IHVsIGxpe1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxubmF2IHVsIGxpIGF7XHJcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgY29sb3I6ICNlOWRjZGM7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59XHJcblxyXG5uYXYuYmxhY2sgdWwgbGkgYXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxufVxyXG5cclxubmF2IHVsIGxpIGEuYWN0aXZlLFxyXG5uYXYgdWwgbGkgYTpob3ZlcntcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAwO1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS1iYXJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4gXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gXHJcbiAgLnJlc3BvbnNpdmUtYmFyXHJcbiAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNjI2MjY7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gIH1cclxuXHJcbiAgLnJlc3BvbnNpdmUtYmFyIC5sb2dvIGltZ3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlc3BvbnNpdmUtYmFyIC5tZW51IGg0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIG5hdi5ibGFja3tcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMzEsIDIzMCwgMjMwKTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcclxuICB9XHJcblxyXG4gIG5hdiAubG9nb3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBuYXYgdWx7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiA2MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6ICMyNjI2MjY7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIG5hdiB1bC5hY3RpdmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgbmF2IHVsIGxpe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBuYXYgdWwgbGkgYXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "mYXB":
/*!**************************************************!*\
  !*** ./src/app/thirdbody/thirdbody.component.ts ***!
  \**************************************************/
/*! exports provided: ThirdbodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdbodyComponent", function() { return ThirdbodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ThirdbodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
ThirdbodyComponent.ɵfac = function ThirdbodyComponent_Factory(t) { return new (t || ThirdbodyComponent)(); };
ThirdbodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThirdbodyComponent, selectors: [["app-thirdbody"]], decls: 0, vars: 0, template: function ThirdbodyComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGlyZGJvZHkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _firstbody_firstbody_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstbody/firstbody.component */ "V8OY");
/* harmony import */ var _secondbody_secondbody_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secondbody/secondbody.component */ "wK57");
/* harmony import */ var _thirdbody_thirdbody_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thirdbody/thirdbody.component */ "mYXB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', redirectTo: 'header', pathMatch: 'full' },
    { path: 'firstbody', component: _firstbody_firstbody_component__WEBPACK_IMPORTED_MODULE_1__["FirstbodyComponent"] },
    { path: 'secondbody', component: _secondbody_secondbody_component__WEBPACK_IMPORTED_MODULE_2__["SecondbodyComponent"] },
    { path: 'thirdbody', component: _thirdbody_thirdbody_component__WEBPACK_IMPORTED_MODULE_3__["ThirdbodyComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wK57":
/*!****************************************************!*\
  !*** ./src/app/secondbody/secondbody.component.ts ***!
  \****************************************************/
/*! exports provided: SecondbodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondbodyComponent", function() { return SecondbodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SecondbodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecondbodyComponent.ɵfac = function SecondbodyComponent_Factory(t) { return new (t || SecondbodyComponent)(); };
SecondbodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondbodyComponent, selectors: [["app-secondbody"]], decls: 50, vars: 0, consts: [["id", "timeline", "data-aos", "zoom-in"], [1, "timeline"], ["data-aos", "fade-right", 1, "content"], ["data-aos", "fade-left", 1, "time"], ["data-aos", "fade-left", 1, "content"], ["data-aos", "fade-right", 1, "time"], [2, "clear", "both"]], template: function SecondbodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bachelor of Science Information Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I graduated from STI Santa Rosa Colleges with an Information Technology Degree.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "December 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tagisan ng Talino Think Quest Cluster Level (1st place)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Think Quest is a team competition where students\u2019 creativity and analytical ability are tested as they compete in a quiz covering diverse subjects.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "December 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "President of Gamers Club STI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "A former president of Gamers Club in STI that handle different game events. Manage relationships and shape agenda with the esports, related organizations, and generate innovative ideas to build a healthy community. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "September 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Undergraduate of BS Electronics Communication Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Im an undergrad from Malayan Colleges Laguna, due to certain reason i didnt finish this course. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "June 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Part Time Computer Technician");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "I Have Experience developing unique troubleshooting techniques, executing high-quality repairs both hardware and software repairs. Knowledgeable professional offering technical and practival guidance on how to prevent future problems and prolong product longevity. Strong knowledge of object-oriented programing and application development tools using C#, Java, Html, CSS, Bootstrap and Angular. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "January 2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 5%;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-size: 60px;\r\n    font-family: 'New Tegomin', serif;\r\n    \r\n}\r\n.timeline[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin: 50px auto;\r\n    padding: 20px 0;\r\n    width: 1300px;\r\n    z-index: -1;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n}\r\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.timeline[_ngcontent-%COMP%]::before{\r\n    content: '';\r\n    position: absolute;\r\n    left: 50%;\r\n    width: 2px;\r\n    height: 100%;\r\n    background: #0c0909;\r\n}\r\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    position: relative;\r\n    width: 50%;\r\n    padding: 20px 40px;\r\n    box-sizing: border-box;\r\n}\r\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd){\r\n    float: left;\r\n    text-align: right;\r\n    clear: both;\r\n}\r\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even){\r\n    float: right;\r\n    text-align: left;\r\n    clear: both;\r\n}\r\n.content[_ngcontent-%COMP%]{\r\n    padding-bottom: 20px;\r\n}\r\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)::before{\r\n    content: '';\r\n    position: absolute;\r\n    top: 31px;\r\n    right: -6px;\r\n    width: 10px;\r\n    height: 10px;\r\n    background: rgb(218, 37, 13);\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 3px rgba(233,33,99,0,2);\r\n}\r\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)::before{\r\n    content: '';\r\n    position: absolute;\r\n    top: 31px;\r\n    left: -4px;\r\n    width: 10px;\r\n    height: 10px;\r\n    background: #262626;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 3px rgba(233,33,99,0,2);\r\n}\r\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: 600;\r\n    color: rgb(243, 52, 4);\r\n}\r\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 10px 0 0;\r\n    padding: 0;\r\n}\r\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 20px;\r\n}\r\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)   .time[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 14px;\r\n    right: -15rem;\r\n    margin: 0;\r\n    padding: 8px 16px;\r\n    background:  rgb(243, 52, 4);\r\n    color: #fff;\r\n    border-radius: 18px;\r\n    box-shadow: 0 0 0 3px rgba(233,33,99,0.3);\r\n}\r\n.timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)   .time[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 14px;\r\n    left: -15rem;\r\n    margin: 0;\r\n    padding: 8px 16px;\r\n    background:  rgb(243, 52, 4);\r\n    color: #fff;\r\n    border-radius: 18px;\r\n    box-shadow: 0 0 0 3px rgba(233,33,99,0.3);\r\n}\r\n@media (max-width: 1400px){\r\n    .timeline[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    h1[_ngcontent-%COMP%]{\r\n        text-align: center;     \r\n    }\r\n}\r\n@media (max-width: 1000px){\r\n    .timeline[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    h1[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        font-size: 40px;\r\n    }\r\n}\r\n@media (max-width: 767px){\r\n    .timeline[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        padding-bottom: 0;\r\n    }\r\n    h1[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n        font-size: 40px;\r\n        padding-top: 20%;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]:before{\r\n        left:20px;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        padding-top: 10%;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd), .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even){\r\n        width: 100%;\r\n        text-align: left;\r\n        padding-left: 50px;\r\n        padding-bottom: 50px;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd):before, .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even):before{\r\n        top:18px;\r\n        left: 16px;\r\n    }\r\n    .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd)   .time[_ngcontent-%COMP%], .timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even)   .time[_ngcontent-%COMP%]{\r\n        top: .2rem;\r\n        left: 50px;\r\n        right: inherit;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZGJvZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUNBQWlDOztBQUVyQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3QztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3QztBQUNBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTs7UUFFSSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7SUFDQTs7UUFFSSxRQUFRO1FBQ1IsVUFBVTtJQUNkO0lBQ0E7O1FBRUksVUFBVTtRQUNWLFVBQVU7UUFDVixjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic2Vjb25kYm9keS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ05ldyBUZWdvbWluJywgc2VyaWY7XHJcbiAgICBcclxufVxyXG4udGltZWxpbmV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIHdpZHRoOiAxMzAwcHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGltZWxpbmUgdWx7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGltZWxpbmU6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMwYzA5MDk7XHJcbn0gIFxyXG5cclxuLnRpbWVsaW5lIHVsIGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQob2RkKTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMxcHg7XHJcbiAgICByaWdodDogLTZweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIxOCwgMzcsIDEzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDIzMywzMyw5OSwwLDIpO1xyXG59XHJcblxyXG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKGV2ZW4pOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzFweDtcclxuICAgIGxlZnQ6IC00cHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNjI2MjY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyMzMsMzMsOTksMCwyKTtcclxufVxyXG5cclxuLnRpbWVsaW5lIHVsIGxpIGgze1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiKDI0MywgNTIsIDQpO1xyXG59XHJcblxyXG4udGltZWxpbmUgdWwgbGkgcHtcclxuICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGltZWxpbmUgdWwgbGkgLnRpbWUgaDR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKG9kZCkgLnRpbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICByaWdodDogLTE1cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDI0MywgNTIsIDQpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjMzLDMzLDk5LDAuMyk7XHJcbn1cclxuXHJcbi50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbikgLnRpbWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICBsZWZ0OiAtMTVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICByZ2IoMjQzLCA1MiwgNCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyMzMsMzMsOTksMC4zKTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KXtcclxuICAgIC50aW1lbGluZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgIFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgLnRpbWVsaW5le1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgLnRpbWVsaW5le1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lOmJlZm9yZXtcclxuICAgICAgICBsZWZ0OjIwcHg7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUgdWwgbGkgaDN7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIH1cclxuICAgIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQob2RkKSxcclxuICAgIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbil7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUgdWwgbGk6bnRoLWNoaWxkKG9kZCk6YmVmb3JlLFxyXG4gICAgLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChldmVuKTpiZWZvcmV7XHJcbiAgICAgICAgdG9wOjE4cHg7XHJcbiAgICAgICAgbGVmdDogMTZweDtcclxuICAgIH1cclxuICAgIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQob2RkKSAudGltZSxcclxuICAgIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbikgLnRpbWV7XHJcbiAgICAgICAgdG9wOiAuMnJlbTtcclxuICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgIHJpZ2h0OiBpbmhlcml0O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map