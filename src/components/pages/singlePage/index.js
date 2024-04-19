import {  Link, useParams } from "react-router-dom";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCube } from 'swiper/modules'

import { BsShare } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { CgHeart } from "react-icons/cg";

import { getUsers } from "../../../utils";
import { getProducts } from "../../../utils";

import house from '../../../assets/images/imageButtonsCategories/realEstate.png'
import car from '../../../assets/images/imageButtonsCategories/auto.jpg'
import clothes from '../../../assets/images/imageButtonsCategories/clothes.jpg'
import animals from '../../../assets/images/imageButtonsCategories/animals.jpg'
import garden from '../../../assets/images/imageButtonsCategories/sad.png'
import sport from '../../../assets/images/imageButtonsCategories/sport.jpg'
import working from '../../../assets/images/imageButtonsCategories/job.jpg'
import electronicDevices from '../../../assets/images/imageButtonsCategories/electroniks.jpg'
import child from '../../../assets/images/imageButtonsCategories/child.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';

import "./style.css"
import { useState } from 'react';
import ModalWindowCall from './modalWindowCall';
import ModalWindowMessage from './modalWindowMessage';



const SinglePage = () => {
    const {productId} = useParams()
  
  
    // console.log(id,"productId")

    const products = getProducts().filter((product) => `${product.id}` === productId)
    const product = products[0]
    console.log(product,"product")

    const users = getUsers().filter((user)=> user.id === product.userId)
    const user = users[0]

    const [isOpenCall, setIsOpenCall] = useState(false)
    const [isOpenMessage,setIsOpenMessage] = useState(false)
    const toogleModalCall = () => {
        setIsOpenCall(!isOpenCall)
    }
    const toogleModalMessage = () => {
        setIsOpenMessage(!isOpenMessage)
    }


    return (
        <div className='container'>
            <div className='singlePage'>
                <div className='singlePageAnnouncement'>
                    <div className='singlePageAnnouncementImages'>
                        <Swiper
                            effect={'cube'}
                            grabCursor={true}
                            cubeEffect={{
                                shadow: true,
                                slideShadows: true,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            }}
                            pagination={{
                                clickable: true,
                              }}
                            navigation={true}
                            modules={[EffectCube, Pagination, Navigation]}
                            className="swiperSinglePage"
                        >
                            {product.images.length &&
                                product.images.map((image) => (
                                    <SwiperSlide>
                                        <img src={image} className='singlePageAnnouncementImage' />
                                    </SwiperSlide>
                                ))
                           }
                        </Swiper>

                    </div>

                    <div className='singlePageAnnouncementDescription'>
                        {
                            <div>
                                <div className='singlePageAnnouncementPriceDiv'>
                                    <h2 className='singlePageAnnouncementPrice'>{product.price}</h2>
                                    <div className='singlePageAnnouncementIcons'>
                                        <BsShare />
                                        <CgHeart />
                                        <SlBasket />
                                    </div>
                                </div>
                                <h1 className='singlePageAnnouncementTitle'>
                                    {product.Մակնիշ} {product.Մոդել} {product.Տարի}
                                </h1>
                                <div className='singlePageAnnouncementText'>
                                    {product.description}
                                </div>
                                <span className='singlePageAnnouncementDatePosted'>{product.datePosted}</span>
                            </div>

                        }
                    </div>

                </div>
                <div className='singlePageUser'>
                    <Link to={`/user/${user.id}`}>
                    <h1>{user.firstName}</h1>
                    </Link>
                    <button className='singlePageUserTelephone' onClick={toogleModalCall}>
                        CALL
                    </button>
                    <ModalWindowCall user={user} isOpenCall={isOpenCall} toogleModalCall={toogleModalCall} />
                    <button className='singlePageUserMessage' onClick={toogleModalMessage}>
                        SMS
                    </button >
                    <ModalWindowMessage  user={user} isOpenMessage={isOpenMessage} toogleModalMessage={toogleModalMessage}/>
                    <h3 className='singlePageUsersCommentsTitle'>Comments</h3>
                    <div className='singlePageUsersCommentsInput'></div>
                </div>
            </div>
        </div>

    )
}

export default SinglePage