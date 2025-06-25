import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


function ContextExample() {
    const theme =useContext(ThemeContext);//burada bize gönderilen thme değerine ulaşmış olduk
  return (
    <div style={{backgroundColor: theme.primary.main , color: theme.secondary.text}}>
      sxdasdasdadasd
    </div>
  )
}

export default ContextExample
