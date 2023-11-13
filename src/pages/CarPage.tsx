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
            <div className="imageBlock leftSide">
                <div className="vingette"></div>
                <div className="imageContainer">
                    <img className="centerBottom" src="../assets/images/engine_view.png" alt="engine model" />
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
                                    <p>258 HP</p>
                                    <p>5000-6000 RPM <img src="../assets/images/icons/power_ico.png"/>
                                    </p>
                                </div>
                            </td>
                            <td>94.6 mm</td>
                            <td>Stroke</td>
                        </tr>
                        <tr>
                            <td>Fuel</td>
                            <td>
                                <div>
                                    <p>Petrol</p>
                                    <p>5.9-6.3 l/100km <img src="../assets/images/icons/fuel_type_ico.png"/>
                                    </p>
                                </div>
                            </td>
                            <td>82mm</td>
                            <td>Bore</td>
                        </tr>
                        <tr>
                            <td>Torque</td>
                            <td>
                                <div>
                                    <p>400 NM</p>
                                    <p>1500-4400 RPM <img src="../assets/images/icons/torque_ico.png"/>
                                    </p>
                                </div>
                            </td>
                            <td>
                                4
                            </td>
                            <td>Cylinders</td>
                        </tr>
                        <tr>
                            <td>Compression ratio</td>
                            <td>10.2</td>
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
                <div className="imageContainer">
                    <img className="centerRight" src="../assets/images/wheel_view.png" alt="wheel model" />
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
            <div id="priceInfo"></div>
            <div id="footer"></div>
        </>
    )
}

export default CarPage;