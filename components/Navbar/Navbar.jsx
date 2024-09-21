'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg';
import Style from './Navbar.module.css';
import { Discover, HelpCenter, Notification, Profile, Sidebar } from './index';
import { Button } from "../componentindex";
import images from '../../img';

const Navbar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (btnText) => {
    
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
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
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  
  const openSideMenuToggle = () => setOpenSideMenu(prev => !prev);

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
            
              <input type='text' placeholder='search NFT' />
              <BsSearch onClick={() => openMenu("Search")} className={Style.search_icon} />
           </div>
        </div>

        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            <p onClick={() => openMenu("Discover")}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_help}>
            <p onClick={() => openMenu("Help Center")}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={openNotification} />
            {notification && <Notification />}
          </div>

          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" handleClick={() => {}}/>
          </div>

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

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.navbar_menuIcon} onClick={openSideMenuToggle} />
          </div>
        </div>
      </div>
      {/* SIDERBAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <Sidebar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
