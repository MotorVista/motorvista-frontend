import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";
import { Link } from "react-router-dom";

function CarListPage () {
    return (
        <>
        <NavMenu></NavMenu>
        <div className="listBlock">
            <div className="header">Car showcase</div>
            <div className="companiesList">
                <a href="/vendor/" className="company">
                    <img src="../assets/images/toyota_cars.jpg" alt="Toyota" />
                    <div className="textBlock">
                        <span>Toyota</span>
                        <div className="buttonBg"></div>
                        <div className="button">Go</div>
                    </div>
                </a>
                <a className="company">
                    <img src="../assets/images/ford_mustang_cars.jpg" alt="Ford Mustang" />
                    <div className="textBlock">
                        <span>Ford Mustang</span>
                        <div>
                            <div className="buttonBg"></div>
                            <div className="button">Go</div>
                        </div>
                    </div>
                </a>
                <a className="company">
                    <img src="../assets/images/aston_martin_cars.jpg" alt="Aston Martin" />
                    <div className="textBlock">
                        <span>Aston Martin</span>
                        <div className="buttonBg"></div>
                        <div className="button">Go</div>
                    </div>
                </a>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default CarListPage;