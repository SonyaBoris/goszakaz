import Form from "../../ui/Form";
import "./news.css"

const mockNews = [
  {
    id: 1,
    text: "ITAM&SAMDay – самая настоящая удача!",
    date: "13 дек 2020"
  },
  {
    id: 2,
    text: "Секреты лицензирования. Всё, что вы хотели знать про Microsoft, SAP и Oracle, но не знали, у кого спросить ...",
    date: "13 дек 2020"
  },
  {
    id: 3,
    text: "Менеджмент XXI века. Надо ли готовиться к изменениям или мы давно уже должны были измениться?",
    date: "13 дек 2020"
  },

]

const News = () => {
  return (
    <article className="news">
      <h3 className="news__title">Популярные новости</h3>
      {
        mockNews.map(item =>
          <div className="new">
            <h4 className="new__title">{item.text}</h4>
            <span className="new__date">{item.date}</span>
          </div>
        )}
        <Form />

    </article>
  );
}

export default News;