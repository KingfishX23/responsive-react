Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

(function (IdDeviceType) {
    IdDeviceType["Mobile"] = "Mobile";
    IdDeviceType["Tablet"] = "Tablet";
    IdDeviceType["Laptop"] = "Laptop";
    IdDeviceType["LargerThanLaptop"] = "LargerThanLaptop";
})(exports.IdDeviceType || (exports.IdDeviceType = {}));
(function (IdDeviceOrientation) {
    IdDeviceOrientation["Landscape"] = "Landscape";
    IdDeviceOrientation["Portrait"] = "Portrait";
})(exports.IdDeviceOrientation || (exports.IdDeviceOrientation = {}));
(function (IdDeviceTypeBreakdown) {
    IdDeviceTypeBreakdown["LargeScreenMax"] = "LargeScreenMax";
    IdDeviceTypeBreakdown["LargerThanLaptop"] = "LargerThanLaptop";
    IdDeviceTypeBreakdown["LaptopLarge"] = "LaptopLarge";
    IdDeviceTypeBreakdown["LaptopSmall"] = "LaptopSmall";
    IdDeviceTypeBreakdown["Tablet"] = "Tablet";
    IdDeviceTypeBreakdown["MobileLarge"] = "MobileLarge";
    IdDeviceTypeBreakdown["MobileMedium"] = "MobileMedium";
    IdDeviceTypeBreakdown["MobileSmall"] = "MobileSmall";
})(exports.IdDeviceTypeBreakdown || (exports.IdDeviceTypeBreakdown = {}));
(function (IdDeviceBreakpointsByWidth) {
    IdDeviceBreakpointsByWidth[IdDeviceBreakpointsByWidth["laptop_max"] = 1440] = "laptop_max";
    IdDeviceBreakpointsByWidth[IdDeviceBreakpointsByWidth["laptop_min"] = 992] = "laptop_min";
    IdDeviceBreakpointsByWidth[IdDeviceBreakpointsByWidth["tablet_min"] = 768] = "tablet_min";
    IdDeviceBreakpointsByWidth[IdDeviceBreakpointsByWidth["tablet_max"] = 991] = "tablet_max";
    IdDeviceBreakpointsByWidth[IdDeviceBreakpointsByWidth["mobile_max"] = 767] = "mobile_max";
    IdDeviceBreakpointsByWidth[IdDeviceBreakpointsByWidth["default_min"] = 768] = "default_min"; // Unrecognized device
})(exports.IdDeviceBreakpointsByWidth || (exports.IdDeviceBreakpointsByWidth = {}));
(function (IdMobileHeight) {
    IdMobileHeight[IdMobileHeight["mobileLandscape_min"] = 320] = "mobileLandscape_min";
    IdMobileHeight[IdMobileHeight["mobileLandscape_max"] = 425] = "mobileLandscape_max";
})(exports.IdMobileHeight || (exports.IdMobileHeight = {}));

var _a;
var getWindowDimension = function () {
    if (typeof window !== "undefined") {
        var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var y = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        return {
            width: x,
            height: y
        };
    }
    return {
        width: 1,
        height: 1
    };
};
var DeviceWidthObject = (_a = {},
    _a[exports.IdDeviceTypeBreakdown.MobileSmall] = { max: 320, min: 0 },
    _a[exports.IdDeviceTypeBreakdown.MobileMedium] = { max: 375, min: 321 },
    _a[exports.IdDeviceTypeBreakdown.MobileLarge] = { max: 767, min: 376 },
    _a[exports.IdDeviceTypeBreakdown.Tablet] = { max: 991, min: 768 },
    _a[exports.IdDeviceTypeBreakdown.LaptopSmall] = { max: 1024, min: 992 },
    _a[exports.IdDeviceTypeBreakdown.LaptopLarge] = { max: 1440, min: 1025 },
    _a[exports.IdDeviceTypeBreakdown.LargerThanLaptop] = { max: 2560, min: 1441 },
    _a[exports.IdDeviceTypeBreakdown.LargeScreenMax] = { max: 999999, min: 2561 },
    _a);
var getDeviceTypeInfo = function () {
    var _a = getWindowDimension(), width = _a.width, height = _a.height;
    var buildDeviceDetails = {
        deviceType: '',
        deviceTypeVariant: '',
        orientation: exports.IdDeviceOrientation.Portrait,
        width: width,
        height: height
    };
    if (height < width) {
        // Orientation is landscape
        buildDeviceDetails.orientation = exports.IdDeviceOrientation.Landscape;
        if (height <= exports.IdMobileHeight.mobileLandscape_max) {
            // Mobile (landscape)
            buildDeviceDetails.deviceType = exports.IdDeviceType.Mobile;
            for (var devc in DeviceWidthObject) {
                if (height <= DeviceWidthObject[devc].max && height >= DeviceWidthObject[devc].min) {
                    buildDeviceDetails.deviceTypeVariant = devc;
                    break;
                }
            }
        }
        else if (width <= exports.IdDeviceBreakpointsByWidth.tablet_max && width >= exports.IdDeviceBreakpointsByWidth.tablet_min) {
            // Tablet (landscape)
            buildDeviceDetails.deviceType = exports.IdDeviceType.Tablet;
            buildDeviceDetails.deviceTypeVariant = exports.IdDeviceTypeBreakdown.Tablet;
        }
        else if (width <= exports.IdDeviceBreakpointsByWidth.laptop_max && width >= exports.IdDeviceBreakpointsByWidth.laptop_min) {
            // Laptop (landscape)
            buildDeviceDetails.deviceType = exports.IdDeviceType.Laptop;
            for (var devc in DeviceWidthObject) {
                if (width <= DeviceWidthObject[devc].max && width >= DeviceWidthObject[devc].min) {
                    buildDeviceDetails.deviceTypeVariant = devc;
                    break;
                }
            }
        }
        else {
            // Larger than Laptop (landscape)
            buildDeviceDetails.deviceType = exports.IdDeviceType.LargerThanLaptop;
            for (var devc in DeviceWidthObject) {
                if (width <= DeviceWidthObject[devc].max && width >= DeviceWidthObject[devc].min) {
                    buildDeviceDetails.deviceTypeVariant = devc;
                    break;
                }
            }
        }
    }
    else {
        // Orientation is portrait
        buildDeviceDetails.orientation = exports.IdDeviceOrientation.Portrait;
        for (var devc in DeviceWidthObject) {
            if (width <= DeviceWidthObject[devc].max && width >= DeviceWidthObject[devc].min) {
                buildDeviceDetails.deviceTypeVariant = devc;
                break;
            }
        }
        if (width <= exports.IdDeviceBreakpointsByWidth.laptop_max && width >= exports.IdDeviceBreakpointsByWidth.laptop_min) {
            buildDeviceDetails.deviceType = exports.IdDeviceType.Laptop;
        }
        if (width <= exports.IdDeviceBreakpointsByWidth.tablet_max && width >= exports.IdDeviceBreakpointsByWidth.tablet_min) {
            buildDeviceDetails.deviceType = exports.IdDeviceType.Tablet;
        }
        if (width <= exports.IdDeviceBreakpointsByWidth.mobile_max) {
            buildDeviceDetails.deviceType = exports.IdDeviceType.Mobile;
        }
        if (width > exports.IdDeviceBreakpointsByWidth.laptop_max) {
            buildDeviceDetails.deviceType = exports.IdDeviceType.LargerThanLaptop;
        }
    }
    return buildDeviceDetails;
};
var isMobileDevice = function () {
    var deviceInformation = getDeviceTypeInfo();
    return deviceInformation.deviceType === exports.IdDeviceType.Mobile;
};
var isTabletDevice = function () {
    var deviceInformation = getDeviceTypeInfo();
    return deviceInformation.deviceType === exports.IdDeviceType.Tablet;
};
var isLaptopDevice = function () {
    var deviceInformation = getDeviceTypeInfo();
    return deviceInformation.deviceType === exports.IdDeviceType.Laptop;
};
var isBiggerThanLaptop = function () {
    var deviceInformation = getDeviceTypeInfo();
    return deviceInformation.deviceType === exports.IdDeviceType.LargerThanLaptop;
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

(function (IdResponsiveRenderOnlyIn) {
    IdResponsiveRenderOnlyIn["Mobile"] = "Mobile";
    IdResponsiveRenderOnlyIn["MobilePortrait"] = "MobilePortrait";
    IdResponsiveRenderOnlyIn["MobileLandScape"] = "MobileLandScape";
    IdResponsiveRenderOnlyIn["Tablet"] = "Tablet";
    IdResponsiveRenderOnlyIn["Laptop"] = "Laptop";
})(exports.IdResponsiveRenderOnlyIn || (exports.IdResponsiveRenderOnlyIn = {}));
var _a$1 = getWindowDimension(), width = _a$1.width, height = _a$1.height;
var initialState = { width: width, height: height };
var Responsive = /** @class */ (function (_super) {
    __extends(Responsive, _super);
    function Responsive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.handleResize = function () {
            var dimension = getWindowDimension();
            _this.setState(__assign({}, dimension));
        };
        _this.render = function () {
            var children = _this.props.children;
            var _a = _this.state, width = _a.width, height = _a.height;
            var shouldRenderChildren = shouldRender(_this.getDisplayInArray(), width, height);
            return (React.createElement(React.Fragment, null, shouldRenderChildren ? children : null));
        };
        _this.getDisplayInArray = function () {
            var displayIn = _this.props.displayIn;
            return Array.isArray(displayIn) ? displayIn : [displayIn];
        };
        return _this;
    }
    Responsive.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.handleResize, false);
    };
    Responsive.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.handleResize, false);
    };
    return Responsive;
}(React.PureComponent));
var shouldRender = function (display, width, height) {
    if (display.indexOf(exports.IdResponsiveRenderOnlyIn.Laptop) !== -1 && width >= exports.IdDeviceBreakpointsByWidth.laptop_min) {
        return true;
    }
    if (display.indexOf(exports.IdResponsiveRenderOnlyIn.Tablet) !== -1 && (width <= exports.IdDeviceBreakpointsByWidth.tablet_max && width >= exports.IdDeviceBreakpointsByWidth.tablet_min)) {
        return true;
    }
    // For mobile regardless of orientation
    if (display.indexOf(exports.IdResponsiveRenderOnlyIn.Mobile) !== -1 && width <= exports.IdDeviceBreakpointsByWidth.mobile_max) {
        return true;
    }
    if (display.indexOf(exports.IdResponsiveRenderOnlyIn.MobilePortrait) !== -1 && (width <= exports.IdDeviceBreakpointsByWidth.mobile_max && height >= exports.IdMobileHeight.mobileLandscape_max)) {
        return true;
    }
    return !!(display.indexOf(exports.IdResponsiveRenderOnlyIn.MobileLandScape) !== -1 && (width <= exports.IdDeviceBreakpointsByWidth.mobile_max && height <= exports.IdMobileHeight.mobileLandscape_min));
};

exports.DeviceWidthObject = DeviceWidthObject;
exports.Responsive = Responsive;
exports.getDeviceTypeInfo = getDeviceTypeInfo;
exports.getWindowDimension = getWindowDimension;
exports.isBiggerThanLaptop = isBiggerThanLaptop;
exports.isLaptopDevice = isLaptopDevice;
exports.isMobileDevice = isMobileDevice;
exports.isTabletDevice = isTabletDevice;
//# sourceMappingURL=index.js.map
