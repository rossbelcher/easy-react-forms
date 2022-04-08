import moment from 'moment-timezone';
interface Item {
    value: string;
    text: string;
    adjustedValue: string;
}
export declare const DEFAULT_DATE_FORMAT = "DD/MM/YYYY";
export declare const ARRIVAL_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
export declare const SUPPORTED_DATE_FORMATS: string[];
export declare function isValidDateObject(dateObject: any): boolean;
export declare function toDate(value: string | Date | moment.Moment): Date | undefined;
export declare function isValidDate(value: any): boolean;
export declare function resetTime(date: any): moment.Moment;
export declare function getTimeRemainingBetweenDateAndNow(expiryDate: string): number;
export declare function formatDate(date: string | Date | moment.Moment, format?: string): string;
export declare function createMomentFromValue(value: any): moment.Moment;
export declare function getUkTime(date?: Date | string): Date;
export declare function getUKTimeString(date?: Date | string): string;
export declare function convertTime(time: string | number): string;
export declare function getArrivalTimeSlots(from: string, to: string): Item[];
export {};
