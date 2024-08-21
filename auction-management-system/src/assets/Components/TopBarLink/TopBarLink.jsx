import React from 'react'
import { Link } from 'react-router-dom'
import './TopBarLink.css'

function TopBarLink(props) {
  return (
    <Link to={props.linkurl} className="topbar-link">{props.linktext}</Link>
  )
}

export default TopBarLink