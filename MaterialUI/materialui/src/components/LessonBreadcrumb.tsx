import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'

const LessonBreadcrumb = () => {
  return (
    <div>
        <Breadcrumbs separator="|" maxItems={2}>
           <Link href='/' underline='hover'>Anasayfa</Link>
           <Link href='/' underline='hover'>Blog</Link>
           <Link underline='none'>Gözde Cankı</Link>
           <Link underline='none'>Gözde Cankı</Link>
           <Link underline='none'>Gözde Cankı</Link>
           <Link underline='none'>Gözde Cankı</Link>
        </Breadcrumbs>
    </div>
  )
}

export default LessonBreadcrumb