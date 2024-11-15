import AnimatedSwitch from "../../ui/Animated/AnimatedSwitch";
import MAIN from "../../assets/image/main.jpg"
import "./main.css"
import Article from "../../ui/Article";
import Card from "../../ui/Card";

const MainPage = () => {
  return (
    <AnimatedSwitch>
      <img className="image" src={MAIN} alt="Картинка" />
      <div className="container content">
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
        </section>
        <section className="news">
          news

        </section>
      </div>
    </AnimatedSwitch>
  );
}

export default MainPage;