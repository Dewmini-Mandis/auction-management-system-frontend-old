import React from 'react'
import { Link } from 'react-router-dom'
import './BottomBarLink.css'

function BottomBarLink(props) {
  return (
    <Link to={props.linkurl} className="bottombar-link mx-2">{props.linktext}</Link>
  )
}

export default BottomBarLink