

export default function Footer(){
    return(
        <div className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/Image/logo.png" id="footer-logo"/>
                    </div>
                    <div className="footer-alamat">
                        <div className="alamat">
                            <p id="footer-text">Jl. Perhubungan No. 14A Laut Dendang - Percut Seui Tuan, Medan - Indonesia</p>
                            <div className="footer-detail">
                                <img src="/Simbol/Telephone.png"/>
                                <p id="footer-text">(061) 42074925</p>
                            </div>
                        </div>
                        <div className="alamat">
                            <p id="footer-text">Jl. Palem Raja Raya Utara Ruko Vanda No V3 Karawaci, Tangerang - Kantor Perwakilan Jakarta</p>
                            <div className="footer-detail">
                                <img src="/Simbol/WhatsApp1.png"/>
                                <a id="footer-text" href="https://wa.me/6282180808182" target="_blank">0821-8080-8182</a>
                            </div>
                        </div>
                    </div>
                    <div className="hubungi-kami">
                        <p id="footer-title">Hubungi kami di sini</p>
                        <div className="footer-detail">
                            <img src="/Simbol/Facebook.png"/>
                            <a id="footer-text" href="https://www.facebook.com/AlQayyuum.TourTravel/" target="_blank">PT. Al-Qayyuum Tour & Travel</a>
                        </div>
                        <div className="footer-detail">
                            <img src="/Simbol/Instagram.png"/>
                            <a id="footer-text" href="https://www.instagram.com/al.qayyuum_jakarta/" target="_blank">@Al.qayyuum_jakarta</a>
                        </div>
                        <div className="footer-detail">
                            <img src="/Simbol/Mail.png"/>
                            <a id="footer-text" href="https://mail.google.com/mail/?view=cm&fs=1&to=alqayyuumtravel@gmail.com&su=KONSULTASI&body=Halo, saya mau konsultasi!" target="_blank">alqayyuumtravel@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="footer-pt">
                    PT. Al-Qayyuum Mandiri Wisata
                </div>
            </div>
        </div>
    )
}