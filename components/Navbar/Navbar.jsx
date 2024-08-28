"use client";

import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//IMPORT ICON
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';

//INTERNAL IMPORT
import Style from './Navbar.module.css';
import { Discover, HelpCenter, Notification, Profile, Sidebar } from './index';
import { Button } from "../componentindex";
import images from '../../img';

const Navbar = () => {
    // USESTATE
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const openMenu = (btnText) => {
        if (btnText === "Discover") {
            setDiscover(true);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        } else if (btnText === "Help Center") {
            setDiscover(false);
            setHelp(true);
            setNotification(false);
            setProfile(false);
        } else {
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setProfile(false);  
        }
    };

    const openNotification = () => {
        setNotification(prev => !prev);
    };

    const openProfile = () => {
        setProfile(prev => !prev);
    };

    const openSideMenuToggle = () => {
        setOpenSideMenu(prev => !prev);
    };

    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
                <div className={Style.navbar_container_left}>
                    <div className={Style.logo}>
                        <Image 
                            src={images.logo}
                            alt='nft-marketplace'
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className={Style.navbar_container_left_box_input}>
                        <div className={Style.navbar_container_right_box_input}>
                            <input type='text' placeholder='search NFT' />
                            <BsSearch onClick={() => openMenu("Search")} className={Style.search_con} />
                        </div>
                    </div>
                </div>
                {/* End of left section */}
                <div className={Style.navbar_container_right}>
                    <div className={Style.navbar_container_right_discover}>
                        {/* DISCOVER MENU */}
                        <p onClick={() => openMenu("Discover")}>Discover</p>
                        {discover && (
                            <div className={Style.navbar_container_right_discover_box}>
                                <Discover />
                            </div>
                        )}

                        {/* HELP CENTER */}
                        <div className={Style.navbar_container_right_help}>
                            <p onClick={() => openMenu("Help Center")}>Help Center</p>
                            {help && (
                                <div className={Style.navbar_container_right_help_box}>
                                    <HelpCenter />
                                </div>
                            )}
                        </div>

                        {/* NOTIFICATION */}
                        <div className={Style.navbar_container_right_notify}>
                            <MdNotifications className={Style.notify} onClick={openNotification} />
                            {notification && <Notification />}
                        </div>

                        {/* CREATE BUTTON SECTION */}
                        <div className={Style.navbar_container_right_button}>
                            <Button btnText="Create" />
                        </div>

                        {/* USER PROFILE */}
                        <div className={Style.navbar_container_right_profile_box}>
                            <div className={Style.navbar_container_right_profile}>
                                <Image 
                                    src={images.user1} 
                                    alt="Profile" 
                                    width={40} 
                                    height={40} 
                                    onClick={openProfile}
                                    className={Style.navbar_container_right_profile}
                                />
                                {profile && <Profile />}
                            </div>
                        </div>

                        {/* MENU BUTTON */}
                        <div className={Style.navbar_container_right_menuBtn}>
                            <CgMenuRight className={Style.navbar_menuIcon} onClick={openSideMenuToggle} />
                        </div>
                    </div>
                </div>
            </div>

            {/* SIDEBAR COMPONENT */}
            {openSideMenu && (
                <div className={Style.SideBar}>
                    <Sidebar setOpenSideMenu={setOpenSideMenu} />
                </div>
            )}
        </div>
    );
};

export default Navbar;
