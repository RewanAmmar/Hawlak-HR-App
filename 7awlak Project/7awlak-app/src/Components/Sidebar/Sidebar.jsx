import React from 'react'
import "./Sidebar.scss"
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className='container'>
        <div className='navigation'>
            <ul className='navigation-ul'>
                <li className='navigation-li'>
                    <Link to='/add-company' className='link'>          
                        <span className='icon'><i className="fa-solid fa-building link-icon"></i></span>
                        <span className='title'>Companies</span>
                    </Link>
                </li>
                <li className='navigation-li'>
                    <Link to='/add-branch' className='link'>
                        <span className='icon'><i className="fa-solid fa-code-branch link-icon"></i></span>
                        <span className='title'>Branches</span>
                    </Link>
                </li>
                <li className='navigation-li'>
                    <Link to='/add-department' className='link'>
                        <span className='icon'><i className="fa-solid fa-bars link-icon"></i></span>
                        <span className='title'>Departments</span>
                    </Link>
                </li>
                <li className='navigation-li'>
                    <Link to='/add-employee' className='link'>
                        <span className='icon'><i className="fa-solid fa-people-group link-icon"></i></span>
                        <span className='title'>Employees</span>
                    </Link>
                </li>
                <li className='navigation-li'>
                    <Link href="" className='link'>
                        <span className='icon'><i className="fa-sharp fa-solid fa-gear link-icon"></i></span>
                        <span className='title'>Setting</span>
                    </Link>
                </li>
                <li className='navigation-li'>
                    <Link href="" className='link'>
                        <span className='icon'> <i className="fa-solid fa-lock link-icon"></i></span>
                        <span className='title'>Login</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
