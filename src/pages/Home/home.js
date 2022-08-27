import "./home.scss";
import Header from "../../layout/header/header";
import DButton from "./../../components/3dButton/3dButton.jsx";
import { MDBContainer } from "mdb-react-ui-kit";
const Home = () => {
  return (
    <div className="home">
      <section className="heroSection">
        <Header />
        <img
          src="/Images/background-1.png"
          alt="img"
          className="homeBackground"
          autoPlay
          muted
          loop
        />
        <MDBContainer>
          <div className="banner">
            <img src="/Images/logo.png" alt="logo" className="logo" />
            <span className="bannerText">
              <span className="bannerText-1">
                Mint - Stake Nfts & Enjoy Lifetime Reward{" "}
              </span>
              <br />
              <span className="bannerText-2">
                Contribute To The Environment
              </span>
            </span>
            <DButton text1="Mint" text2="Nfts" />
          </div>
        </MDBContainer>
      </section>
      <section className="showcaseSection">
        <MDBContainer></MDBContainer>
      </section>
    </div>
  );
};

export default Home;
