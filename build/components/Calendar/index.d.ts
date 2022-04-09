/// <reference types="react" />
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import 'moment/locale/en-gb';
interface TextInputProps {
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
declare const TestAirBnb: ({ model, onChange, inputName, value, maxDate, minDate, required, label, id, months, unlink, placeholder, className, calendarProps }: TextInputProps) => JSX.Element;
export default TestAirBnb;
