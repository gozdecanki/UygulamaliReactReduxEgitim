import React from 'react'
import {Stack, Alert, AlertTitle} from '@mui/material';

export const LessonAlert = () => {
  return (
    <Stack spacing={4}>
        <Alert >
            <AlertTitle>Success</AlertTitle>
            LessonAlert1</Alert>
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            LessonAlert2</Alert>
        <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            LessonAlert2</Alert>
        <Alert severity="info">
            <AlertTitle>İnfo</AlertTitle>
            LessonAlert2</Alert>
    </Stack>
  )
}
