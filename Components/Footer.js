import React from 'react'
import './CSS/footer.css'

export const Footer = () => {
  return (
    <>
    <div className="footer" style={{backgroundColor: '#8288c3', padding: '0.1rem', textAlign: 'left'}}>
        <ul>
            <li><img id='img' style={{height: '4rem',borderRadius: '50%'}} src="DebugCodes.png" alt="" /></li>
            <li id='txt'><p>DebugIt, DebugCodes</p></li>
        </ul>
    </div>
    </>
  )
}
