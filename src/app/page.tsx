import LandingPage from "./component/LandingPage"
import AboutUs from "./component/AboutUs"
import Destinasi from "./component/Destinasi"
import Umrah from "./component/Umrah"
import Testimoni from "./component/Testimoni"
import Contact from "./component/Contact"
import Footer from "./component/Footer"

export default function Home() {
  return (
    <div>
      <LandingPage/>
      <AboutUs/>
      <Destinasi/>
      <Umrah/>
      <Testimoni/>
      <Contact/>
      <Footer/>
    </div>
  )
}
