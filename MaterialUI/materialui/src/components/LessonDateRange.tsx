import React, { useState } from 'react'
 import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { DateRange, DateRangePicker, MultiInputDateRangeField } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const LessonDateRange = () => {

    const [value, setValue] = useState<DateRange<Dayjs>>([null,null]);
    console.log(value)
  return (
    <Stack>
        <LocalizationProvider dateAdapter={AdapterDayjs} 
        localeText={{start: 'Başlangıç', end:'Bitiş'}}>
            <DateRangePicker
               label='time'
               value={value}
               onChange={(newValue: any) => {setValue(newValue) }}
               slots={{ field: MultiInputDateRangeField }} 
               />

           
        </LocalizationProvider>
    </Stack>
  );
};
