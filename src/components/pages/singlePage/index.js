import { useState } from 'react';

import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCube } from 'swiper/modules';

import CardUser from "../../cards/cardUser";

import { getUsers } from "../../../utils";
import { getProducts } from "../../../utils";

import { BsShare } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { CgHeart } from "react-icons/cg";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';

import "./style.css";
import { toggleModalCallOpen } from '../../../store/featueres/modalCallUser';


const SinglePage = () => {
    const { productId } = useParams();
    const [isOpenCall, setIsOpenCall] = useState(false);
    const [isOpenMessage, setIsOpenMessage] = useState(false);

    const products = getProducts().filter((product) => product.id == productId);
    const product = products[0];
    const { data } = product;

    const users = getUsers().filter((user) => user.id === product.userId);
    const user = users[0];

    const toogleModalCall = () => toggleModalCallOpen();
    const toogleModalMessage = () => setIsOpenMessage(!isOpenMessage);

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
                        <div style={{ display: "flex", margin: "0" }}>
                            {product.title?.map((titleItem) => <h1>{titleItem}</h1>)}
                        </div>
                        <div>
                            {data && Object.keys(data)?.map(key => (
                                <div key={key} >
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
                <CardUser
                    user={user}
                    // isOpenCall={isOpenCall}
                    // isOpenMessage={isOpenMessage}
                    // toogleModalMessage={toogleModalMessage}
                />
            </div>
        </div>
    )
};

export default SinglePage;