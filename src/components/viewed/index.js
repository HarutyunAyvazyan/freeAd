import "./style.css"

const Viewed = ({viewed}) => {
    return (
        <div className="viewedContainer" style={viewed ? {display:"flex"} : {display:"none"}}>
            <span className="viewedText">Просмотрено</span>
        </div>
    )
}

export default Viewed