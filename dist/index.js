var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "topbar"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Topbar = void 0;
    // @ts-ignore
    const topbar_1 = __importDefault(require("topbar"));
    /**
     * Class wrapper for the topbar library
     *
     * This wrapper is in place as the library does not have
     * any TypeScript definitions, and this is way easier than writing own declaration file.
     *
     * This also allows us to easily add custom functions for manipulation with the topbar.
     */
    class Topbar {
        static config(settings) {
            return topbar_1.default.config(settings);
        }
        /**
         * Show the topbar
         */
        static show() {
            return topbar_1.default.show();
        }
        /**
         * Hide the topbar
         */
        static hide() {
            return topbar_1.default.hide();
        }
        /**
         * Progress
         *
         * Returns the topbar progress status.
         * Additionally, the status can be changed by passing a number
         * (or a string that can be casted to a number) to the "to" parameter.
         *
         * @param {string | number} to Set progress status
         */
        static progress(to) {
            return topbar_1.default.progress(to);
        }
        /**
         * Promised Topbar
         *
         * This is useful for eg. data fetching,
         * when this function is called, the topbar appears and
         * hides upon resolving of the promise passed in the "promise" parameter.
         *
         * @param {Promise<any>} promise Promise to toggle Topbar upon
         */
        static promised(promise) {
            this.show();
            promise.then(this.hide);
            promise.catch(this.hide);
            return promise;
        }
    }
    exports.Topbar = Topbar;
    exports.default = Topbar;
});
//# sourceMappingURL=index.js.map