import { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import React from 'react';
import DatePicker from './DatePicker';

export interface TimePickerProps
  extends Omit<PickerTimeProps<Date>, 'picker'> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker='time' mode={undefined} ref={ref} />;
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;