function Profile () {
    return (
        <>
        <div className="profile">
            <p>Information:</p>
            <div className="profileParent">
                <div className="profileBlock">
                    <p>Name:</p>
                    <p>Admin adminovich228</p>
                    </div>
                <div className="profileBlock">
                    <p>Email:</p>
                    <p>a****@o*******.c**</p>
                </div>
                <div className="profileBlockBig">
                    <p>Change pass:</p>
                    <form action="">
                        <div className="changePass">
                            <label htmlFor="oldPass">Old password:</label>
                            <input type="password" id="oldPass"/>
                            <label htmlFor="newPass">New password:</label>
                            <input type="password" id="newPass"/>
                        </div>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
            <p>General:</p>
            <div className="profileParent">
                <div className="profileBlockBig">
                    <p>My orders:</p>
                    <p>2020 Toyota Supra MK5 A90</p>
                    <p>Awaiting consideration by the manager</p>
                </div>
                <div className="profileBlock">
                    <p>Change theme:</p>
                    <p><a>Dark</a> / <a>Light</a></p>
                </div>
            </div>
            <div className="profileBottom">
                <button>Log out</button>
            </div>
        </div>
        </>
    )
}

export default Profile;