import * as React from 'react';
import { IWindowDimensionMetrics } from "./types";
export declare enum IdResponsiveRenderOnlyIn {
    Mobile = "Mobile",
    MobilePortrait = "MobilePortrait",
    MobileLandScape = "MobileLandScape",
    Tablet = "Tablet",
    Laptop = "Laptop"
}
interface IResponsiveState extends IWindowDimensionMetrics {
    height: number;
    width: number;
}
interface IResponsiveProps {
    displayIn: IdResponsiveRenderOnlyIn | Array<IdResponsiveRenderOnlyIn>;
}
export declare class Responsive extends React.PureComponent<IResponsiveProps> {
    state: IResponsiveState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleResize;
    render: () => JSX.Element;
    private getDisplayInArray;
}
export {};
