import { IWindowDimensionMetrics, TypeDeviceWidth, IDeviceTypeInfo } from "./types";
export declare const getWindowDimension: () => IWindowDimensionMetrics;
export declare const DeviceWidthObject: TypeDeviceWidth;
export declare const getDeviceTypeInfo: () => IDeviceTypeInfo;
export declare const isMobileDevice: () => boolean;
export declare const isTabletDevice: () => boolean;
export declare const isLaptopDevice: () => boolean;
export declare const isBiggerThanLaptop: () => boolean;
