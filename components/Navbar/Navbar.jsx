import React, {useState,useEffect} from 'react';
import Style from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {MdNotifications} from 'react-icons/md';
import {BsSearch} from 'react-icons.bs';
import {CgMenuLeft,CgMenuRight} from 'react-icons/cg';
import {Discover,HelpCenter,Notification,Profile,Sidebar} from './index';
import {button} from '../componentindex';
import images from '../../img';
import Button from '../Button/Button';

const Navbar = () => {
  
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const openMenu =(e) =>{
      const btnText = e.target.innerText;
      if(btnText=="Discover"){
        setDiscover(true);
        setHelp(false);
        setNotification(false);
        setProfile(false);
      } else if(btnText="Help Center"){
        setDiscover(false);
        setHelp(true);
        setNotification(false);
        setProfile(false);
      }else {
        setDiscover(false);
        setHelp(false);
        setNotification(false);
        setProfile(false);  
      }

    }

    const openNotification= () => {
      if(!notification){
        setDiscover(false);
        setHelp(false);
        setNotification(true);
        setDiscover(false);
      }else{
        setNotification(false);
      }
    }


   return(
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo}
             alt='nft-marketpalce'
              width={100}
               height={100}
               />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_right_box_input}>
              <input type='text' placeholder='search NFT'/>
              <BsSearch onclick={() =>openMenu(e)} className={Style.search_con}/>
            </div>
          </div>
        </div>
        {/* //End of left section */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* //DISCOVER MENU */}
            <p onClick={(e) => {}}>Discover</p>
            {discover &&(
            <div className={Style.navbar_container_right_discover_box}>
            <Discover/>
            </div>
            )}

            {/* HELP CENTER */}
            <div className={Style.navbar_container_right_help}>
              <p onClick={(e) => (openMenu(e))}>Help Center</p>
              {help &&(
                <div className={Style.navbar_container_right_help_box}>
                 <HelpCenter/>
                </div>
              )}
            </div>

            {/* NOTIFICATION */}
            <div className={Style.navbar_container_right_notify}>
              <MdNotifications className={Style.notify} onClick={() => openNotification}/>
              {notification && (<Notification/>)}
            </div>

            {/* CREATE BUTTON SECTION */}
            <div className={Style.navbar_container_right_button}>
              <Button btnText="Create"/>
            </div>

            {/* USER PROFILE */}
            <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image src={images.user1} 
              alt="Profile" 
              width={40} 
              height={40} 
              onClick={()=> openProfile()}
              className={Style.navbar_container_right_profile}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;