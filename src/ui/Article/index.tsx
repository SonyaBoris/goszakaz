import { FC } from "react";
import "./article.css"

type TProps = {
  size: string;
}

const Article: FC<TProps> = ({ size }) => {
  return (
    <article className={size === "m" ? "article" : "article small"}>
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
    </article>
  );
}

export default Article;