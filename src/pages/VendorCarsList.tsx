import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";

function VendorCarsList () {
    return (
        <>
        <NavMenu></NavMenu>
        <div className="listBlock">
            <div className="header">Toyota cars showcase</div>
            <div className="companiesList">
                <a href="/car" className="company">
                    <img src="../assets/images/supra.png" alt="Toyota" />
                    <div className="textBlock">
                        <span>2020 Toyota Supra MK5 A90</span>
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

export default VendorCarsList;
