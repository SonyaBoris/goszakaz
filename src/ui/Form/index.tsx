import Button from "../Button";
import Input from "../Input";
import { motion } from "framer-motion";
import "./form.css";

const Form = () => {
  return (
    <motion.form 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 2}}
    className="form">
      <div className="form__container">
        <h3>Подписка на рассылку</h3>
        <div className="form__content">
          <Input placeholder="Email@gmail.com" />
          <Button type="main">
            <span>Подписаться</span>
          </Button>
        </div>
      </div>
    </motion.form>
  );
}

export default Form;