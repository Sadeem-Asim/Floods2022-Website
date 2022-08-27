import "./home.scss";
import Header from "../../layout/header/header";
import DButton from "./../../components/3dButton/3dButton.jsx";
import CompositionImages from "../../components/compositionImages/compositionImages";
import { MDBContainer, MDBTypography, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <section className="heroSection">
        <Header />
        {/* <img src="/Images/background-1.png" alt="img" /> */}
        <video
          src="/Videos/1.mp4"
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
                Mint - Stake Nfts & Enjoy Lifetime Reward
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
        <MDBContainer>
          <MDBTypography variant="h1" className="title heading-secondary">
            lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet
          </MDBTypography>
          <MDBRow>
            <MDBCol md="4" className="left-side">
              <h3 class="heading-tertiary u-margin-bottom-small">
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <p class="paragraph u-margin-bottom-small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus alias dicta nobis assumenda illo ipsam, modi nemo amet
                odio neque, vitae error earum deleniti fugiat quos, voluptatem
                nesciunt laudantium officia.
              </p>
              <h3 class="heading-tertiary u-margin-bottom-small">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="paragraph u-margin-bottom-small">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus alias dicta nobis assumenda illo ipsam, modi nemo amet
                odio neque,
              </p>
            </MDBCol>
            <MDBCol md="8" className="right-side">
              <CompositionImages />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className="zooSection">
        <MDBTypography variant="h1" className="title heading-secondary">
          lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet
        </MDBTypography>
      </section>
    </div>
  );
};

export default Home;
