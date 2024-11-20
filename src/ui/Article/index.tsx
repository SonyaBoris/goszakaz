import { FC } from "react";
import { motion } from "framer-motion";
import "./article.css";

type TProps = {
  size: string;
}

const Article: FC<TProps> = ({ size }) => {
  return (
    <motion.article
      tabIndex={0}
      className={size === "m" ? "article" : "article small"}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className={size === "m" ? "article__content" : "article__content-small"}>
        <header className="article__head">
          <span className="article__head-category">Категория 1</span>
          <span className="article__head-date">13 дек 2020</span>
        </header>
        <h3>Управление ИТ-активами – скучная рутина или творческая задача?</h3>
        {
          size === "m" && <p className="article__text">Размышляя об управлении ИТ-активами, я вспомнил один учебный пример. Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще.</p>
        }
      </div>
    </motion.article>
  );
}

export default Article;