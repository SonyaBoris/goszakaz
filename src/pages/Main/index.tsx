import AnimatedSwitch from "../../ui/Animated/AnimatedSwitch";
import Pagination from "../../ui/Pagination";
import Article from "../../ui/Article";
import Card from "../../ui/Card";
import MAIN from "../../assets/image/main.jpg"
import News from "../../components/News";
import "./main.css"
import Footer from "../../components/Footer";

const MainPage = () => {
  return (
    <AnimatedSwitch>
      <img className="image" src={MAIN} alt="Картинка" />
      <div className="container">
        <div className="content">
          <section className="articles">
            <Article size="m" />
            <div className="articles__container-one">
              <Article size="m" />
              <Card />
            </div>
            <div className="articles__container-two">
              <Card />
              <div className="articles__container-three">
                <Article size="s" />
                <Article size="s" />
              </div>
            </div>
            <div className="articles__container-one">
              <Article size="m" />
              <Card />
            </div>
            <div className="articles__container-two">
              <Card />
              <div className="articles__container-three">
                <Article size="s" />
                <Article size="s" />
              </div>
            </div>
          </section>
          <News />
        </div>
        <Pagination />
      </div>
      <Footer />
    </AnimatedSwitch>
  );
}

export default MainPage;