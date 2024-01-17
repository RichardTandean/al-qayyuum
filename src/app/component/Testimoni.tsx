

export default function Testimoni(){
    return(
        <div className="container Testimoni-containter">
            <div className="testi-title">
                <p>Testimoni dari jamaah</p>
            </div>
            <div className="testi-div">
                <div className="testi1">
                    <img src="/Image/testi3.jpeg" style={{maxHeight:'300px', borderRadius:'30px'}}/>
                    <img src="/Image/testi1.jpeg" style={{maxHeight:'300px', borderRadius:'30px'}}/>
                </div>
                <div className="testi2">
                    <video controls style={{borderRadius:'30px', maxHeight:'700px'}}>
                        <source src="/Video/testi-vid1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    <img src="/Image/testi2.jpeg" style={{borderRadius:'30px', maxHeight:'600px'}}/>
                </div>
            </div>
        </div>
    )
}