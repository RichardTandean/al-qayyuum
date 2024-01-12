import Navbar from "./navbar";

export default function LandingPage(){
    return(
        <div className="LandingPage">
            <Navbar/>
            <div className="container">
                <div className="Landing-content">
                    <div className="Landing-text">
                        <div className="Landing-head">
                            <p style={{marginBottom:0}}>Nikmati <span style={{color: '#F98427'}}>ibadah</span> dan Travelling bersama kami</p>
                        </div>
                        <div className="Landing-subhead">
                        <p style={{marginBottom:0}}>Jelajahi keindahan dunia yang ada pada destinasi wisata unggulan kami</p>
                        </div>
                    </div>
                    <div className="Landingbtn-div">
                        <a className="Landing-btn" href="https://wa.me/6282180808182" target="_blank">Konsultasi Gratis</a>
                    </div>
                </div>
            </div>
        </div>
    )
}