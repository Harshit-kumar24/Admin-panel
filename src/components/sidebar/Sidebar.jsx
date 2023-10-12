import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InventoryIcon from '@mui/icons-material/Inventory';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {Link} from "react-router-dom"
import { DarkModeContext } from '../../context/darkModecontext';

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className="top">
        <Link to = "/" style={{textDecoration:"none"}}>
          <span className="logo">beatus</span>
          </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
            <p className="title">Main</p>
              <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
              </li>
              <p className="title">Lists</p>
              <li>
              <Link to = "/users" style={{textDecoration:"none"}}>
              <PersonIcon className='icon'/>
                <span>Users</span>
                </Link>
              </li>
              <Link to = "/products" style={{textDecoration:"none"}}>
              <li>
              <StorefrontIcon className='icon'/>
                <span>Products</span>
              </li>
              </Link>
              <li>
              <InventoryIcon className='icon'/>
                <span>Orders</span>
              </li>
              <li>
              <AirportShuttleIcon className='icon'/>
                <span>Delievery</span>
              </li>
              <p className="title">Useful</p>
              <li>
              <QueryStatsIcon className='icon'/>
                <span>Stats</span>
              </li>
              <li>
              <NotificationsIcon className='icon'/>
                <span>Notifications</span>
              </li>
              <p className="title">Service</p>
              <li>
                <SettingsSuggestIcon className='icon'/>
                <span>System health</span>
              </li>
              <li>
              <PsychologyIcon className='icon'/>
                <span>Logs</span>
              </li>
              <li>
              <SettingsIcon className='icon'/>
                <span>Settings</span>
              </li>
              <p className="title">User</p>
              <li>
              <AccountCircleRoundedIcon className='icon'/>
                <span>Profile</span>
              </li>
              <li>
              <LogoutRoundedIcon className='icon'/>
                <span>Log out</span>
              </li>
             
            </ul>
        </div>
        <div className="bottom">
          <div className="colorOptions"onClick={()=> dispatch({type:"LIGHT"})}></div>
          <div className="colorOptions"onClick={()=> dispatch({type:"DARK"})}></div>
          
        </div>
    </div>
  )
}

export default Sidebar
