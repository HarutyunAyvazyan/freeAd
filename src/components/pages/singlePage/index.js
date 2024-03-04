import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCube } from 'swiper/modules'

import { BsShare } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { CgHeart } from "react-icons/cg";

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

const dataUser =
{
    id: 1,
    name: "Arman",
    telephone: "05689754354",
    password: "******",
    confirmPassword: "******",
    announcement: [
        {
            userId:2,
            id: 1,
            title: "Title",
            price: "18000",
            description: "kajssssssssskajhskajsh kjsahskjah kahss kjashash kjahdsjah akjha aldlj alksadklsj akjlakdj ",
            datePosted: "64545",
            images: [house, car, clothes, animals, garden, sport, working, electronicDevices, child]
        }
    ]
}

const SinglePage = () => {
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
                            pagination={true}
                            navigation={true}
                            modules={[EffectCube, Pagination, Navigation]}
                            className="swiperSinglePage"
                        >
                            {dataUser.announcement.map((data) => (
                                data.images.map((image) => (
                                    <SwiperSlide>
                                        <img src={image} className='singlePageAnnouncementImage' />
                                    </SwiperSlide>
                                ))
                            ))}
                        </Swiper>

                    </div>

                    <div className='singlePageAnnouncementDescription'>
                        {dataUser.announcement.map((data) => (
                            <div>
                                <div className='singlePageAnnouncementPriceDiv'>
                                    <h2 className='singlePageAnnouncementPrice'>{data.price}</h2>
                                    <div className='singlePageAnnouncementIcons'>
                                        <BsShare />
                                        <CgHeart />
                                        <SlBasket />
                                    </div>
                                </div>
                                <h1 className='singlePageAnnouncementTitle'>
                                    {data.title}
                                </h1>
                                <div className='singlePageAnnouncementText'>
                                    {data.description}
                                </div>
                                <span className='singlePageAnnouncementDatePosted'>{data.datePosted}</span>
                            </div>

                        ))}
                    </div>

                </div>
                <div className='singlePageUser'>
                    <h1>{dataUser.name}</h1>
                    <button className='singlePageUserTelephone' onClick={toogleModalCall}>
                        CALL
                    </button>
                    <ModalWindowCall dataUser={dataUser} isOpenCall={isOpenCall} toogleModalCall={toogleModalCall} />
                    <button className='singlePageUserMessage' onClick={toogleModalMessage}>
                        SMS
                    </button >
                    <ModalWindowMessage  dataUser={dataUser} isOpenMessage={isOpenMessage} toogleModalMessage={toogleModalMessage}/>
                    <h3 className='singlePageUsersCommentsTitle'>Comments</h3>
                    <div className='singlePageUsersCommentsInput'></div>
                </div>
            </div>
        </div>

    )
}

export default SinglePage