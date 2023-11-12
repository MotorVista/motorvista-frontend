import NavMenu from "../components/NavMenu";

function CarPage (){
    return (
        <>
            <NavMenu></NavMenu>
            <div id="titleBlock">
                <div id="light"></div>
            </div>
            <div className="imageBlock"></div>
            <div className="infoBlock"></div>
            <div className="imageBlock"></div>
            <div className="infoBlock"></div>
            <div id="priceInfo"></div>
            <div id="footer"></div>
        </>
    )
}

export default CarPage;