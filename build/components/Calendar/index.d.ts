/// <reference types="react" />
import 'moment/locale/en-gb';
interface ComponentProps {
    model?: string;
    onChange?: Function;
    inputName?: string;
    value?: any;
    maxDate?: any;
    minDate?: any;
    required?: boolean;
    label?: string;
    id?: string;
    months?: number;
    unlink?: boolean;
    placeholder?: string;
    calendarProps?: any;
    className?: string;
}
declare const EasyCalendar: ({ model, onChange, inputName, value, maxDate, minDate, required, label, id, months, unlink, placeholder, className, calendarProps }: ComponentProps) => JSX.Element;
export default EasyCalendar;
