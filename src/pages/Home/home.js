// import { useEffect } from "react";
import "./home.scss";
import Header from "../../layout/header/header";
import DButton from "./../../components/3dButton/3dButton.jsx";
import { MDBContainer } from "mdb-react-ui-kit";
const Home = () => {
  return (
    <div className="home">
      <section className="heroSection">
        <Header />
        <video src="/Videos/background-2.mp4" id="video" autoPlay muted loop />
        <MDBContainer>
          <div className="banner">
            <img src="/Images/logo.png" alt="logo" className="logo" />
            <span className="bannerText">
              Mint - Stake Nfts & Enjoy Lifetime Reward Contribute To The
              Environment
            </span>
            <DButton text1="Mint" text2="Nfts" />
          </div>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Home;
