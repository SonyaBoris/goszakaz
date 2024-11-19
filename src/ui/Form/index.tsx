import Button from "../Button";
import Input from "../Input";
import "./form.css"

const Form = () => {
  return (
    <form className="form">
      <div className="form__container">
        <h3>Подписка на рассылку</h3>
        <div className="form__content">
          <Input placeholder="Email@gmail.com" />
          <Button type="main">
            <span>Подписаться</span>
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Form;