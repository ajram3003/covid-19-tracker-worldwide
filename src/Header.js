import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
 import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
 import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar,IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* <img></img>
                <div className="header__input">
                    <SearchIcon/>
                    <input placeholder="Search Products..." type="text"/>
                </div> */}
                <h2>Covid-19 Tracker</h2>
            </div>


            <div className="header__center">
                {/* <div className="header__option">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                 <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>  */}
            </div>


            <div className="header__right">
                {/* <div className="header__info">
                   <Avatar />
                   <h4>Ajaykumar</h4>
                </div>

                <IconButton>
                    <AddIcon/>
                </IconButton> */}
            </div>
        </div>
    )
}

export default Header
