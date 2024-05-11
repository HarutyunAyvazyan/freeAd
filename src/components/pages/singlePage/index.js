import { Link, useParams } from "react-router-dom";


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
import CardUser from "../../cards/cardUser";



const SinglePage = () => {
    const { productId } = useParams()


    // console.log(id,"productId")
    // const [zoom,setZoom] = useState(false)
    const products = getProducts().filter((product) => `${product.id}` === productId)
    const product = products[0]
    // console.log(product, "product")

    const users = getUsers().filter((user) => user.id === product.userId)
    const user = users[0]

    const [isOpenCall, setIsOpenCall] = useState(false)
    const [isOpenMessage, setIsOpenMessage] = useState(false)
    const toogleModalCall = () => {
        setIsOpenCall(!isOpenCall)
    }
    const toogleModalMessage = () => {
        setIsOpenMessage(!isOpenMessage)
    }
// const handleZoom = () => {
//     setZoom(!zoom)
// }
    const data = product.data
    return (
        <div className='container'>
            <div className='singlePage'>
                <div className='singlePageAnnouncement'>
                <div className='singlePageAnnouncementIcons'>
                            <BsShare />
                            <CgHeart />
                            <SlBasket />
                        </div>
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
                    <div style={{display:"flex",margin:"0"}}>{product.title?.map((titleItem) => <h1>{titleItem}</h1>)}</div>

                        <div>
                            {data && Object.keys(data)?.map(key => (

                                <div key={key} >
                                    {/* {console.log(key,"key")} */}
                                    <h2 className="descriptionTitleGroup">{key}</h2>
                                    <div>
                                        {Object.entries(data[key])?.map(([label, value]) => (
                                            <div style={{ display: "flex", flexDirection: "row" }}>
                                                <p key={label} style={{ textAlign: "left", width: "50%", margin: "0", padding: "4px 0" }}>{label} </p>
                                                <p style={{ textAlign: "left", width: "50%", margin: "0", padding: "4px 0" }}><strong>{value}</strong></p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <h2 className="descriptionTitleGroup">Nkaragir</h2>
                            <p style={{ textAlign: "left" }}>
                                {product.nkaragir}
                            </p>

                        </div>
                    </div>

                </div>
                {/* <div className='singlePageUser'> */}
                <CardUser user={user} isOpenCall={isOpenCall} isOpenMessage={isOpenMessage} toogleModalCall={toogleModalCall} toogleModalMessage={toogleModalMessage}/>
                {/* </div> */}
                {/* <div className='singlePageUser'>
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
                    <ModalWindowMessage user={user} isOpenMessage={isOpenMessage} toogleModalMessage={toogleModalMessage} />
                    <h3 className='singlePageUsersCommentsTitle'>Comments</h3>
                    <div className='singlePageUsersCommentsInput'></div>
                </div> */}
            </div>
        </div>

    )
}

export default SinglePage