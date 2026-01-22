import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { useQuestions } from '../hooks/useQuestions'

export default function Questions() {
  const ulVariants = {
    visible: { transition: { staggerChildren: 0.05 } }
  }

  const liVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const { questionList } = useQuestions()

  return (
    <div className="questions-page">
      <div className="questions-top">
        <h2>Liste des questions</h2>
        <Link to="/">Retour</Link>
      </div>
      <motion.ul className='question-list' initial="hidden" animate="visible" variants={ulVariants}>
        {questionList.map(question => (
          <motion.li key={question.number} className='question-card' variants={liVariants}>
            <div className='question-number'>{question.number}</div>
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