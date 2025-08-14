import React, { useState } from 'react'
import {Accordion,AccordionSummary,
    AccordionDetails,Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';    
const LessonAccordion = () => {
    const [expanded, setExpanded] = useState<string | false >(false)

    const handleChange =(panel: string)=>(event:React.SyntheticEvent,isExpanded:boolean)=>{
        setExpanded(isExpanded ? panel : false);
    };
  return (<div>
      {/* <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>İlk Bölüm</Typography>
            </AccordionSummary>
            <AccordionDetails>
          Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan 
          taklit yazı bloku olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda 
           içerik yerine geçerek yazı blokunu doldurmak için kullanılır.
                                   
            </AccordionDetails>
        </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>İkinci Bölüm</Typography>
            </AccordionSummary>
              <AccordionDetails>
          Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan 
          taklit yazı bloku olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda 
           içerik yerine geçerek yazı blokunu doldurmak için kullanılır.
                                   
            </AccordionDetails>
        </Accordion>
         <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>Üçüncü Bölüm</Typography>
            </AccordionSummary>
              <AccordionDetails>
          Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan 
          taklit yazı bloku olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda 
           içerik yerine geçerek yazı blokunu doldurmak için kullanılır.
                                   
            </AccordionDetails>
        </Accordion> */}

        <Accordion expanded= {expanded==='panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>İlk Bölüm</Typography>
            </AccordionSummary>
            <AccordionDetails>
          Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan 
          taklit yazı bloku olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda 
           içerik yerine geçerek yazı blokunu doldurmak için kullanılır.
                                   
            </AccordionDetails>
        </Accordion>
         <Accordion expanded= {expanded==='panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>İkinci Bölüm</Typography>
            </AccordionSummary>
              <AccordionDetails>
          Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan 
          taklit yazı bloku olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda 
           içerik yerine geçerek yazı blokunu doldurmak için kullanılır.
                                   
            </AccordionDetails>
        </Accordion>
         <Accordion expanded= {expanded==='panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography>Üçüncü Bölüm</Typography>
            </AccordionSummary>
              <AccordionDetails>
          Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan 
          taklit yazı bloku olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda 
           içerik yerine geçerek yazı blokunu doldurmak için kullanılır.
                                   
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default LessonAccordion