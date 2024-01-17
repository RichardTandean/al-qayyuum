

export default function AboutUs(){
    return(
        <div className="AboutUs-container" id="TentangKami">
            <div className="container AU-container">
                <div className="AU-company">
                    <div className="company-logo">
                        <img src="/Image/logo.png" id="AU-company-logo"/>
                    </div>
                    <div className="company-profile">
                        <div className="company-head">
                            <p id="profile-name">Al-Qayyuum Tour & Travel</p>
                            <p id="profile-subname">Agensi Tour & Travel <span style={{fontFamily:'LibreBold', color:'#F98427'}}>Terpercaya</span> sejak 2018</p>
                        </div>
                        <p id="profile-desc">Berdiri sejak tahun 2018, Al-Qayyuum Tour & Travel selalu memberikan kepuasan bagi para pecinta traveling dengan memberikan pelayanan terbaik. </p>
                    </div>
                </div>
            </div>
            <div className="AU-benefit">
                <div className="benefit">
                    <div className="benefit-box">
                        <img src="/Simbol/Benefit/Globe.png" id="benefit-logo"/>
                        <div className="benefit-text">
                            <p id="benefit-title">Banyak pilihan destinasi</p>
                            <p id="benefit-desc">Al-Qayyuum Tour & Travel memiliki banyak destinasi pilihan yang akan bisa anda nikmati.</p>
                        </div>
                    </div>
                    <div className="benefit-line"></div>
                    <div className="benefit-box">
                        <img src="/Simbol/Benefit/Plane.png" id="benefit-logo"/>
                        <div className="benefit-text">
                            <p id="benefit-title">Transportasi Pilihan</p>
                            <p id="benefit-desc">Segala jenis transportasi yang akan digunakan selama perjalanan telah dipilih sesuai dengan kebutuhan.</p>
                        </div>
                    </div>
                    <div className="benefit-line"></div>
                    <div className="benefit-box">
                        <img src="/Simbol/Benefit/Bedroom.png" id="benefit-logo"/>
                        <div className="benefit-text">
                            <p id="benefit-title">Akomodasi Unggul</p>
                            <p id="benefit-desc">Selama wisata traveller akan disediakan tempat beristirahat yang nyaman dan bersih.</p>
                        </div>
                    </div>
                </div>
                <div className="benefit">
                <div className="benefit-line1"></div>
                <div className="benefit-box">
                        <img src="/Simbol/Benefit/Food.png" id="benefit-logo"/>
                        <div className="benefit-text">
                            <p id="benefit-title">Makanan yang enak</p>
                            <p id="benefit-desc">Al-Qayyuum Tour & Travel selalu memastikan kualitas makanan yang disajikan kepada traveller.</p>
                        </div>
                    </div>
                    <div className="benefit-line"></div>
                    <div className="benefit-box">
                        <img src="/Simbol/Benefit/Visa.png" id="benefit-logo"/>
                        <div className="benefit-text">
                            <p id="benefit-title">Pengurusan Visa</p>
                            <p id="benefit-desc">Traveller tidak perlu pusing mengurus VISA karena akan dihandle sendiri oleh Al-Qayyuum Tour & Travel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}