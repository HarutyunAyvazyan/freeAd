import { Link } from "react-router-dom"


const WatchTheAd = ({...props}) => {
    return (
        <div style={props.style}>
            <div>
                {props.data}
            </div>
            <button type="button" onClick={props.onClickPopoxel} >
                popoxel
            </button>
            <button onClick={props.onClickTexadrel}>
                <Link to={"/"}>
                texadrel
                </Link>
            </button>
        </div>
    )
}

export default WatchTheAd