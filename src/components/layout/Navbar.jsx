import React from 'react'
import { Link } from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'
import { ReactPropTypes } from 'react'

function Navbar({ title }) {
  return (
    <nav className = "navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto ">
            <div className="flex-none px-2 mx-1">
                <FaGithub className = "inline pr-2 text-4xl "/>
                <Link to="/" className = "font-bold text-2xl align-middle " >
                    {title}
                </Link>
            </div>

            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <Link to="/" className = "btn btn-ghost btn-sm rounded-btn" >Home</Link>
                    <Link to="/about" className = "btn btn-ghost btn-sm rounded-btn " >About</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}


Navbar.defaultProps = {
    title:"Github Finder",
}



export default Navbar
