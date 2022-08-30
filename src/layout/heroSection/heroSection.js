import { MDBContainer } from "mdb-react-ui-kit";
import DButton from "./../../components/3dButton/3dButton.jsx";
import "./heroSection.scss";
import video from "./../../assets/Videos/1.mp4";
import logo from "./../../assets/Images/logo.png";
const HeroSection = () => {
  return (
    <section className="heroSection">
      <video src={video} className="homeBackground" autoPlay muted loop />
      <MDBContainer>
        <div className="banner">
          <img src={logo} alt="logo" className="logo" />
          <span className="bannerText">
            <span className="bannerText-1">
              Mint - Stake Nfts & Enjoy Lifetime Reward
            </span>
            <br />
            <span className="bannerText-2">Contribute To The Environment</span>
          </span>
          <DButton text="Mint Nfts" />
        </div>
      </MDBContainer>
    </section>
  );
};
export default HeroSection;
