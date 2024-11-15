'use client';
import React, {useState, useEffect, useCallback} from 'react'
import Image from 'next/image';
import {AiFillFire, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import { TbArrowBigLeftLines, TbArrowBigRightLine } from 'react-icons/tb';


//INTERNAL IMPORT
import Style from "./BigNFTSlider.module.css"
import image from '../../img';
import { Button } from '../Button/Button';
import { CLIENT_STATIC_FILES_RUNTIME_AMP } from 'next/dist/shared/lib/constants';

const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(1);

    const sliderData = [
        {
          title: "Hello NFT",
          id: 1,
          name: "Prakash",
          collection: "GYM",
          price: "00000064664 ETH",
          like: 243,
          image: image.user1,
          nftImage: image.nft_image_1,
          time: {
            days: 24,
            hours: 2,
            minutes: 34,
            seconds: 45,

          }
        },
        {
            title: "Buddy NFT",
            id: 1,
            name: "Hari",
            collection: "GYM",
            price: "00000064664 ETH",
            like: 243,
            image: image.user2,
            nftImage: image.nft_image_2,
            time: {
              days: 24,
              hours: 2,
              minutes: 34,
              seconds: 45,
  
            }
        },
        {
            title: "Gym NFT",
            id: 1,
            name: "Jain",
            collection: "Home",
            price: "000000999 ETH",
            like: 243,
            image: image.user3,
            nftImage: image.nft_image_3,
            time: {
              days: 24,
              hours: 2,
              minutes: 34,
              seconds: 45,
  
            }
        },
        {
            title: "Home NFT",
            id: 1,
            name: "Mack",
            collection: "Home",
            price: "000000999 ETH",
            like: 243,
            image: image.user4,
            nftImage: image.nft_image_4,
            time: {
              days: 24,
              hours: 2,
              minutes: 34,
              seconds: 45,
  
            }
        }
    ]
    return (
        <div className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        <div className={Style.bigNFTSlider_box_left_creator_profile}>
                            <Image src={sliderData[idNumber].image} 
                            alt='profile image'
                            width={50}
                            height={50}
                            />
                            <div className={Style.bigNFTSlider_box_left_creator_profile_image}>
                               <p>Creator</p>
                               <h4>{sliderData[idNumber].name} <span><MdVerified/></span></h4> 
                            </div>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_creator_collection}>
                            <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon}
                            />

                            <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                                <p>Collection</p>
                                <h4>{sliderData[idNumber].collection}</h4>
                            </div>
                        </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_bidding}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>{sliderData[idNumber].price} <span>$ 2252</span></p>
                        </div>

                        <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                            <MdTimer 
                              className={Style.bigNFTSlider_box_left_bidding_box_icon}
                            />
                            <span>Auction Ending In</span>  
                        </p>

                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.days}</p>
                                <span>Days</span>
                            </div>

                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.hours}</p>
                                <span>Hours</span>
                            </div>

                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.minutes}</p>
                                <span>Minutes</span>
                            </div>

                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.seconds}</p>
                                <span>Secs</span>
                            </div>
                        </div>

                    </div>

                    <div></div>
                </div>
            </div>
        </div>
    )
  
}

export default BigNFTSlider;