export interface TopbarSettings {
    autoRun?: boolean;
    barThickness?: number;
    barColors?: {
        [key: string]: string;
    };
    shadowBlur?: number;
    shadowColor?: string;
    className?: string;
}
/**
 * Class wrapper for the topbar library
 *
 * This wrapper is in place as the library does not have
 * any TypeScript definitions, and this is way easier than writing own declaration file.
 *
 * This also allows us to easily add custom functions for manipulation with the topbar.
 */
export declare class Topbar {
    static config(settings: TopbarSettings): void;
    /**
     * Show the topbar
     */
    static show(): void;
    /**
     * Hide the topbar
     */
    static hide(): void;
    /**
     * Progress
     *
     * Returns the topbar progress status.
     * Additionally, the status can be changed by passing a number
     * (or a string that can be casted to a number) to the "to" parameter.
     *
     * @param {string | number} to Set progress status
     */
    static progress(to?: string | number): number;
    /**
     * Promised Topbar
     *
     * This is useful for eg. data fetching,
     * when this function is called, the topbar appears and
     * hides upon resolving of the promise passed in the "promise" parameter.
     *
     * @param {Promise<any>} promise Promise to toggle Topbar upon
     */
    static promised<TPromise extends Promise<unknown> = Promise<unknown>>(promise: TPromise): TPromise;
}
export default Topbar;
