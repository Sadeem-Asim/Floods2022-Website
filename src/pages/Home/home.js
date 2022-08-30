import "./home.scss";
import CompositionImages from "../../components/compositionImages/compositionImages";
import { MDBContainer, MDBTypography, MDBRow, MDBCol } from "mdb-react-ui-kit";
import HeroSection from "./../../layout/heroSection/heroSection";
import Slider from "../../components/slider/slider";
import "./home.scss";

const Home = () => {
  const imgs = [
    "https://cdn.vectorstock.com/i/1000x1000/46/65/animals-of-zoo-in-cartoon-style-vector-20704665.webp",
    "https://c8.alamy.com/comp/2J96XPC/zoo-cartoon-illustration-with-safari-animals-elephant-giraffe-lion-monkey-panda-zebra-and-visitors-on-territory-on-forest-background-2J96XPC.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVddAyA97JMRktsHd4mYBulU9AsvIJWbwsLA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvDEYu0ysjFVKh1atBzowW91BAo24lsf20gpNhA8Jl&s",
    "https://image.shutterstock.com/image-vector/zoo-entrance-gates-cartoon-poster-260nw-1081891775.jpg",
  ];

  return (
    <div className="home">
      <HeroSection />
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
        <MDBContainer>
          <MDBTypography variant="h1" className="title heading-secondary">
            lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet
          </MDBTypography>
          <Slider imgs={imgs} />
          <MDBTypography variant="h1" className="title heading-secondary">
            lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet
          </MDBTypography>
          <Slider imgs={imgs} />
        </MDBContainer>
      </section>
    </div>
  );
};

export default Home;
