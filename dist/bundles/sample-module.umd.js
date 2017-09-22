(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.samplemodule = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var SampleComponent = /** @class */ (function () {
    function SampleComponent() {
    }
    SampleComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sample module component',
                    template: 'Hello'
                },] },
    ];
    /** @nocollapse */
    SampleComponent.ctorParameters = function () { return []; };
    return SampleComponent;
}());

var SampleModule = /** @class */ (function () {
    function SampleModule() {
    }
    SampleModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        SampleComponent
                    ],
                    imports: [],
                    providers: [],
                    exports: [
                        SampleComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    SampleModule.ctorParameters = function () { return []; };
    return SampleModule;
}());

exports.SampleComponent = SampleComponent;
exports.SampleModule = SampleModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
