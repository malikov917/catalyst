import { DateRangePicker } from 'vanillajs-datepicker';

export function getDatepickerOptions() {
  const config: object = {
    enableOnReadonly: false,
    pickLevel: 0,
    todayButton: true,
    todayButtonMode: 1,
    todayHighlight: true,
    weekStart: 1, // TO-DO get value from browser Intl.Locale().weekInfo api which is not supported by Firefox or other browsers
    language: 'browser'
  };
  return config;
}

export default DateRangePicker;
