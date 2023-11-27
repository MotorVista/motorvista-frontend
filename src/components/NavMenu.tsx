function NavMenu () {
    return(
        <>
            <div id="menuBar">
                <div className="left">
                    <a href="">Back</a>
                    <a href="/">Main page</a>
                </div>
                <div className="center">
                    <a href=""><img src="" alt="OmniCars" /></a>
                </div>
                <div className="right">
                    <a href="/auth">Profile</a>
                </div>
            </div>
            <div className="submenu">
                <a href="/list">Showcase</a>
                <a href="">Service</a>
                <a href="">Accessories</a>
                <a href="">About us</a>
            </div>
        </>
    )
}

export default NavMenu;