import Button from "../Button";
import Input from "../Input";
import "./form.css"

const Form = () => {
  return (
    <form className="form">
      <h3>Подписка на рассылку</h3>
      <Input placeholder="Email@gmail.com" />
      <Button type="main">
        <span>Подписаться</span>
      </Button>
    </form>
  );
}

export default Form;