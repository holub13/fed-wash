import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './Sidebar.css'

const Sidebar = ({ appState }) => {
  // console.log(appState)
  // const section = [
  //   {
  //     name: 'Техпроцесс',
  //     id: 'techprocess',
  //     path: '/techprocess',
  //   },
  //   {
  //     name: 'Оборудование',
  //     id: 'equipment',
  //     path: '/equipment',
  //   },
  //   {
  //     name: 'Инструкции',
  //     id: 'instruction',
  //     path: '/instruction',
  //   },
  // ]

  const [toggleState, setToggelState] = useState('')

  const toggleTab = (section) => {
    setToggelState(section)
  }

  return (
    <nav
      id="sidebarMenu"
      className="bg-dark col-md-3 col-lg-2 d-md-block sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {appState.map((item) => (
            <li>
              <Link
                key={item.section}
                className={
                  toggleState === item.section ? 'nav-link active' : 'nav-link'
                }
                to={item.path}
                onClick={() => toggleTab(item.section)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
