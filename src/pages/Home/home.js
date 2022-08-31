import "./home.scss";
import CompositionImages from "../../components/compositionImages/compositionImages";
import { MDBContainer, MDBTypography, MDBRow, MDBCol } from "mdb-react-ui-kit";
import HeroSection from "./../../layout/heroSection/heroSection";
import Slider from "../../components/slider/slider";
import Birds from "./../../components/flyingBirds/flyingBirds";
import "./home.scss";

import pet1 from "../../assets/Images/pet1.png";

const Home = () => {
  const imgs = [pet1, pet1];

  return (
    <div className="home">
      <HeroSection />
      <section className="featuresSection">
        <MDBContainer>
          <MDBRow>
            <MDBCol size="md" className="card">
              <img alt="img" className="card-image" src={pet1} />
              <MDBTypography variant="h3" className="card-title">
                Spend
              </MDBTypography>
              <MDBTypography variant="p" className="card-description">
                Pay Anyone Instantly
              </MDBTypography>
            </MDBCol>
            <MDBCol size="md" className="card">
              <img alt="img" className="card-image" src={pet1} />
              <MDBTypography variant="h3" className="card-title">
                Spend
              </MDBTypography>
              <MDBTypography variant="p" className="card-description">
                Pay Anyone Instantly
              </MDBTypography>
            </MDBCol>
            <MDBCol size="md" className="card">
              <img alt="img" className="card-image" src={pet1} />
              <MDBTypography variant="h3" className="card-title">
                Spend
              </MDBTypography>
              <MDBTypography variant="p" className="card-description">
                Pay Anyone Instantly
              </MDBTypography>
            </MDBCol>
            <MDBCol size="md" className="card">
              <img alt="img" className="card-image" src={pet1} />
              <MDBTypography variant="h3" className="card-title">
                Spend
              </MDBTypography>
              <MDBTypography variant="p" className="card-description">
                Pay Anyone Instantly
              </MDBTypography>
            </MDBCol>
          </MDBRow>
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
        <div className="zooSection-birds">
          <Birds />
        </div>
        <MDBContainer>
          <MDBTypography variant="h1" className="title heading-secondary">
            Our Zoo's
          </MDBTypography>
          <div className="zooSection-birds-2">
            <Birds />
          </div>
          <Slider imgs={imgs} />
          <MDBTypography variant="h1" className="title heading-secondary">
            Our Pets
          </MDBTypography>
          <div className="zooSection-birds-3">
            <Birds />
          </div>
          <Slider imgs={imgs} />
          <div className="zooSection-birds-4">
            <Birds />
          </div>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Home;
