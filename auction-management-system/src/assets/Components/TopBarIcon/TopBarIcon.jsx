import React from 'react'
import { Link } from 'react-router-dom'
import './TopBarIcon.css'

function TopBarIcon(props) {
  return (
    <Link to={props.linkurl} className="topbar-icon mx-2">
        <img src={props.imgsrc} alt={props.alt} className={props.className} />
    </Link>
  )
}

export default TopBarIcon