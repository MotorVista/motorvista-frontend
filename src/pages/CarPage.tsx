import NavMenu from "../components/NavMenu";

function CarPage (){
    return (
        <>
            <NavMenu></NavMenu>
            <div id="titleBlock">
                <div id="light"></div>
                <div id="vignette"></div>
                <div className="content">
                    <img src="../assets/images/grsport_ico.png" alt="grsport ico" />
                </div>
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