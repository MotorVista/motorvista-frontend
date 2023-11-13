import NavMenu from "../components/NavMenu";

function CarPage (){
    return (
        <>
            <NavMenu></NavMenu>
            <div id="titleBlock">
                <div id="light"></div>
                <div id="vignette"></div>
                <div className="content">
                    <img id="icon" src="../assets/images/icons/grsport_ico.png" alt="grsport ico" />
                    <img id="car" src="../assets/images/car_model.png" alt="car model" />
                </div>
            </div>
            <div className="imageBlock">
                <div className="imageContainer">
                    <img src="../assets/images/engine_view.png" alt="engine model" />
                </div>
                <div className="header">
                    <img src="../assets/images/icons/engine_ico.png" alt="engine icon" id="icon" />
                    <div className="headerText">Engine</div>
                    <div className="headerDesc">B46B2001</div>
                </div>
            </div>
            <div className="infoBlock"></div>
            <div className="imageBlock"></div>
            <div className="infoBlock"></div>
            <div id="priceInfo"></div>
            <div id="footer"></div>
        </>
    )
}

export default CarPage;