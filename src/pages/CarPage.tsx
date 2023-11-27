import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { API, checkResponse } from "../api";

function CarPage (){
    const [car, setCar] = useState({
        power: undefined,
        year: undefined,
        model: undefined,
        variation: undefined,
        powerPerLitre: undefined,
        bore: undefined,
        torque: undefined,
        stroke: undefined,
        minTorqueRpm: undefined,
        maxTorqueRpm: undefined,
        cylinders: undefined,
        compressionRate: undefined
    });
    useEffect(() => {
        API.get("/car/1").then((res) => {
            if (checkResponse(res)) {
                setCar(res.data);
            }
        }).catch(e => alert(e));
    }, []);

    return (
        <>
            <NavMenu></NavMenu>
            <div className="titleBlock">
                <div id="light"></div>
                <div id="vignette"></div>
                <div className="content">
                    <img id="icon" src="../assets/images/icons/grsport_ico.png" alt="grsport ico" />
                    <img id="car" src="../assets/images/car_model.png" alt="car model" />
                </div>
            </div>
            <div className="nameBlock">
                <p>{car.year} {car.model} {car.variation}</p>
                <div className="line"></div>
                <p>An impressive car for an impressive people!</p>
            </div>
            <div className="imageBlock leftSide">
                <div className="vingette"></div>
                <div className="imageContainer centerBottom">
                    <img src="../assets/images/engine_view.png" alt="engine model" />
                </div>
                <div className="header">
                    <img src="../assets/images/icons/engine_ico.png" alt="engine icon" className="icon" />
                    <div className="headerText">Engine</div>
                    <div className="headerDesc">B46B2001</div>
                </div>
            </div>
            <div className="infoBlock">
                <div className="header">Engine specifications</div>
                <div className="tableContainer">
                    <table>
                        <tr>
                            <td>Power</td>
                            <td>
                                <div>
                                    <p>{car.power} HP</p>
                                    <p>5000-6000 RPM <img src="../assets/images/icons/power_ico.png"/>
                                    </p>
                                </div>
                            </td>
                            <td>{car.stroke} mm</td>
                            <td>Stroke</td>
                        </tr>
                        <tr>
                            <td>Fuel</td>
                            <td>
                                <div>
                                    <p>Petrol</p>
                                    <p>{car.powerPerLitre} l/100km <img src="../assets/images/icons/fuel_type_ico.png"/>
                                    </p>
                                </div>
                            </td>
                            <td>{car.bore}mm</td>
                            <td>Bore</td>
                        </tr>
                        <tr>
                            <td>Torque</td>
                            <td>
                                <div>
                                    <p>{car.torque} NM</p>
                                    <p>{car.minTorqueRpm}-{car.maxTorqueRpm} RPM <img src="../assets/images/icons/torque_ico.png"/>
                                    </p>
                                </div>
                            </td>
                            <td>
                                4
                            </td>
                            <td>{car.cylinders}</td>
                        </tr>
                        <tr>
                            <td>Compression ratio</td>
                            <td>{car.compressionRate}</td>
                            <td>***</td>
                            <td>other specs..</td>
                        </tr>
                        <tr>
                            <td>other specs..</td>
                            <td>***</td>
                            <td>***</td>
                            <td>other specs..</td>
                        </tr>
                        <tr>
                            <td>other specs..</td>
                            <td>***</td>
                            <td>***</td>
                            <td>other specs..</td>
                        </tr>
                        <tr>
                            <td>other specs..</td>
                            <td>***</td>
                            <td>***</td>
                            <td>other specs..</td>
                        </tr>
                        <tr>
                            <td>other specs..</td>
                            <td>***</td>
                            <td>***</td>
                            <td>other specs..</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="imageBlock rightSide">
                <div className="vingette"></div>
                <div className="imageContainer centerRight">
                    <img src="../assets/images/wheel_view.png" alt="wheel model" />
                </div>
                <div className="header">
                    <img src="../assets/images/icons/wheel_ico.png" alt="engine icon" className="icon" />
                    <div className="headerText">Wheels</div>
                    <div className="headerDesc">17`</div>
                </div>
            </div>
            <div className="infoBlock">
            <div className="header">Wheels specifications</div>
                <div className="tableContainer">
                    <table>
                        <tr>
                            <td>other specs..</td>
                            <td>***</td>
                            <td>***</td>
                            <td>other specs..</td>
                        </tr>
                        <tr>
                            <td>other specs..</td>
                            <td>***</td>
                            <td>***</td>
                            <td>other specs..</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div id="priceInfo">
                <p>I have no idea what should be here</p>
            </div>
            <Footer></Footer>
        </>
    )
}

export default CarPage;