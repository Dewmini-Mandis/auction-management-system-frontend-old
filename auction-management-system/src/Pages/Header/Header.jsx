import React from 'react'
import './Header.css'
import flag from '../../assets/HeaderIcons/Sri Lanka.png';
import wishlist from '../../assets/HeaderIcons/Heart.png';
import notification from '../../assets/HeaderIcons/Notification.png';
import cart from '../../assets/HeaderIcons/Shopping Cart.png';
import logo from '../../assets/HeaderIcons/Logo.png';
import searchicon from '../../assets/HeaderIcons/Search.png';
import TopBarIcon from '../../assets/Components/TopBarIcon/TopBarIcon';
import TopBarLink from '../../assets/Components/TopBarLink/TopBarLink';
import BottomBarLink from '../../assets/Components/BottomBarLink/BottomBarLink';


function Header() {
    return (
        <div class='header-wrapper position-absolute top-0 start-0'>
            <div class="topbar-wrapper row justify-content-between">

                <div class="left-section col-4 ms-4 mt-1">
                    <TopBarLink linktext='Sign in' linkurl="/signin" /><span class='or'>&nbsp; or &nbsp;</span>
                    <TopBarLink linktext='Register' linkurl="/register" />
                </div>

                <div class="right-section col-4 mx-4 my-1">
                    <TopBarIcon className="icon mx-2" imgsrc={flag} alt="Flag" linkurl="/country" />
                    <TopBarIcon className="icon mx-2" imgsrc={cart} alt="Cart" linkurl="/cart" />
                    <TopBarIcon className="icon mx-2" imgsrc={wishlist} alt="Wishlist" linkurl="/wishlist" />
                    <TopBarIcon className="icon mx-2" imgsrc={notification} alt="Notification" linkurl="/notification" />
                </div>
            </div>

            <div class="middlebar-wrapper row m-0">

                <div className='logo-section col-2 mx-2 start-0'>
                    <img className="logo" src={logo} alt="Logo" />
                </div>

                <div className="searchbar-section col-7 mx-4 justify-content-center">
                <input type="text" className="form-control search-input" placeholder="Search any"/>

                <button className="btn search-button ms-0 pt-0">
                <img className="search-icon" src={searchicon} alt="Search" />
                </button>
                </div>

                <div className="button-section col-2 mx-2 px-0 d-flex justify-content-end">
                    <button className="button mx-2 my-2"  >Bid by Category</button>
                </div>

            </div>

            <div class='bottombar-wrapper'>
                <div class='bottombar-links d-flex align-items-center justify-content-center'>
                <BottomBarLink linktext='Art' linkurl="/art" />
                <BottomBarLink linktext='Furniture' linkurl="/furniture" />
                <BottomBarLink linktext='Vehicle' linkurl="/vehicle" />
                <BottomBarLink linktext='Lands' linkurl="/lands" />
                <BottomBarLink linktext='Jewelery' linkurl="/jewelery" />
                <BottomBarLink linktext='Electronics' linkurl="/electronics" />
                <BottomBarLink linktext='Lands' linkurl="/lands" />
                <BottomBarLink linktext='Books' linkurl="/books" />
                <BottomBarLink linktext='Home and Garden' linkurl="/home" />
                <BottomBarLink linktext='Jewelery' linkurl="/jewelery" />
                </div>
            </div>

        </div>

    )
}

export default Header