

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container nav-container">
                <a className="navbar-brand" href="/">
                    <img src="/Image/logo.png" id="nav-logo"/>
                </a>
                <div className="nav-text">
                    <p style={{margin:0}}>Al-Qayyuum</p>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <img style={{maxHeight: '40px'}}src="/Simbol/Menu.png"/>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <img src="/Image/logo.png" id="nav-logo"/>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Beranda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#AboutUs-container">Tentang Kami</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Destinasi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Galeri</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kontak</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}