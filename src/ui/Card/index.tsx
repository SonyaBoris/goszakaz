import { motion } from "framer-motion"
import './card.css'

const Card = () => {
  return (
    <motion.article
      tabIndex={0}
      className='card'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="card__head">
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="card__head-category"
        >Категория 1</motion.span>
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}>ITAM&SAMDay – самая настоящая удача!</motion.h3>
      </div>
      <motion.span
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.9 }}
      >13 дек 2020</motion.span>
    </motion.article>
  );
}

export default Card;