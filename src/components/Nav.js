import React from 'react'
import PropTypes from 'prop-types'
import {icons} from '../assets/utils'
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const menuItems = [
    {
        title: 'Home',
        link: 'link',
        icon: icons.home
    },
    {   title: 'Search',
        link: 'link',
        icon: icons.search
    },
    {
        title: 'Explore',
        link: 'link',
        icon: icons.film
    },
    {   title: 'About',
        link: 'link',
        icon: icons.idCard
    },
    {
        title: 'Credits',
        link: 'link',
        icon: icons.info
    },

]

function returnMenuItems(){
    let items = []
    menuItems.map(x=>{
        console.log(x.icon)
        items.push(
            <Link to={x.link}>
            <li className="active:bg-gray-800 hover:bg-gray-800 flex flex-row text-yellow-200 hover:text-red-300 transition duration-200 text-sm items-center py-3 pl-5">
            <span className="transform scale-75">{x.icon}</span><p className="pl-1">{x.title}</p>
        </li>
        </Link>
        )
    })
    return items
}

function Nav(props) {
    returnMenuItems()
    return (
        <div className="flex flex-col h-full w-full text-left">
            <div>
         <div className="p-5">
        <div className="flex flex-row border-b pb-1 border-green-500 items-center">
        <div className="text-green-400">{icons.film}</div>
         <Link to="/" className="gugi text-green-400 text-xl uppercase">  Retro Video </Link>
        </div>

            <p className="text-yellow-300 text-sm pt-2">
        The raddest 80's and 90's movie website.
            </p>
         </div>
            </div>
            <div>
                <ul >
                    {returnMenuItems()}
                </ul>
            </div>
        </div>
    )
}

Nav.propTypes = {

}

export default Nav

