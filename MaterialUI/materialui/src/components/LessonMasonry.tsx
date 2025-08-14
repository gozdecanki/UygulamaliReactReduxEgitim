import React from 'react'
import {Accordion, AccordionDetails,AccordionSummary, Paper, Stack} from '@mui/material'
import {Masonry} from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const heights=[150,30,90,70,90,100,150,30,50,80];

export const LessonMasonry = () => {
  return (
    <Stack>
        <Masonry columns={3} spacing={2}>
      {heights.map((height, index)=>(
    <Paper key={index}>
        <Accordion sx={{minHeight:height}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
              Accordion {index+1} 
            </AccordionSummary>
            <AccordionDetails>
                contents
            </AccordionDetails>
        </Accordion>
    </Paper>
))}
    </Masonry>
    </Stack>
  )
}
