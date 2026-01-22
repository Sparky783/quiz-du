import { Link } from 'react-router-dom'
import questions from '../assets/questions.json'
import { motion } from 'motion/react'

export default function Questions() {
  const ulVariants = {
    visible: { transition: { staggerChildren: 0.05 } }
  }

  const liVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="questions-page">
      <div className="questions-top">
        <h2>Liste des questions</h2>
        <Link to="/">Retour</Link>
      </div>
      <motion.ul className='question-list' initial="hidden" animate="visible" variants={ulVariants}>
        {Object.entries(questions).map(([key, question]) => (
          <motion.li key={key} className='question-card' variants={liVariants}>
            <div className='question-number'>{parseInt(key) + 1}</div>
            <div className='question-content'>
              <div>
                <strong>Q:</strong>
                <span>{question.text}</span>
              </div>
              <div>
                <strong>R:</strong>
                <span>{question.answer}</span>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}