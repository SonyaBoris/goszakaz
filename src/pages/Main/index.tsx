import MAIN from "../../assets/image/main.jpg"
import { lazy, Suspense } from "react";
import { motion } from 'framer-motion';
import "./main.css";

const Article = lazy(() => import('../../ui/Article'));
const Card = lazy(() => import('../../ui/Card'));
const Pagination = lazy(() => import('../../ui/Pagination'));
const News = lazy(() => import('../../components/News'));
const Footer = lazy(() => import("../../components/Footer"));

const MainPage = () => {
  return (
    <>
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        loading='lazy' className="image" src={MAIN} alt="Картинка" />
      <div className="container">
        <div className="content">
          <section className="articles">
            <Suspense fallback={<div>Loading...</div>}>
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
              <Pagination />
            </Suspense>
          </section>
          <News />
        </div>
      </div>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default MainPage;