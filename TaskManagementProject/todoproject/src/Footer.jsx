import React from 'react'

export default function Footer() {
    const date = new Date();
  return (
    <div>
        <footer>
            <p>Copyright {date.getFullYear()} | Gözde Cankı</p>
        </footer>
    </div>
  )
}
