import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

function Main() {
    return (
        <>
            <NavMenu></NavMenu>
            <div className="titleBlock">
                <div className="content">
                    <div className="header">
                        <p>Welcome to the Omnicars dealership</p>
                        <div className="line"></div>
                        <div className="links">    
                            <a className="hover-underline-animation" href="/car">Toyota</a>
                            <a className="hover-underline-animation" href="">Ford Mustang</a>
                            <a className="hover-underline-animation" href="">Aston Martin</a>
                            <br />
                            <a className="hover-underline-animation" href="">About us</a>
                            <button>Current Offers</button>
                        </div>
                    </div>
                    <div className="images">
                        <a href="/car">
                            <img src="../assets/images/toyota_cars.jpg" alt="Toyota" />
                        </a>
                        <a>
                            <img src="../assets/images/ford_mustang_cars.jpg" alt="Ford Mustang" />
                        </a>
                        <a>
                            <img src="../assets/images/aston_martin_cars.jpg" alt="Aston Martin" />
                        </a>
                        <a>
                            <p>Click for more options</p>
                            <p>...</p>
                        </a>
                        <a>
                            <p>Not available yet!</p>
                            <p>...</p>
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Main;