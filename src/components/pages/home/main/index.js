import { useEffect, useState } from "react"
import { getProducts } from "../../../../utils"
import "./style.css"
import Card from "../../../cards"


const Main = () => {
    const [data, setData] = useState()
    // const getData = async () => {
    //   return fetch(productsAPI)
    //         .then((res) => res.json())
    //         // .then((data) => {
    //         //     return
    //         // })
    // }
    // useEffect(async () => {
    //   const state = await getData();
    //   console.log(state, "data")

    // }, [])

    const getData = () => {
        const result = getProducts()
        setData(result)
    }

    useEffect(() => {
        getData();
    }, []);

    const card = data && data.map((item,index) => (
        <div key={index}>
            <p key={item.id}>{item.price}</p>
        </div>
    ))

    return (
            <div className="main">
                <h1 className="mainTitle">Recommendations</h1>
                <div className="mainCards">
                {data && data.map((dataItem) =>( 
                <Card product ={dataItem} key={dataItem.id} />
            ))}
                </div>
            </div>

    )
}
export default Main