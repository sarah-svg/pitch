import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
        <h1 style={{display:'block'}}>Pilot Application Football</h1>
        <div style={{display:'flex'}}>
         
          <Link to='/'>Home</Link>
          <Link to='/teams-players'>Teams</Link>
          <Link to='/league'>League Standings</Link>
    
          </div>
          </div>
    )
}
