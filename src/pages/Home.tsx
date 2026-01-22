import { useMemo, useState } from "react"
import { motion } from "motion/react"
import { useQuestions } from "../hooks/useQuestions"

export default function Home() {
  const answerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const [showAnswer, setShowAnswer] = useState(false)
  const { question, randomQuestion } = useQuestions()
  const [questionNumber, setQuestionNumber] = useState(1)

  const revealAnswer = () => {
    if (showAnswer) {
      setShowAnswer(false)
      randomQuestion()
      setQuestionNumber(questionNumber + 1)
    } else {
      setShowAnswer(true)
    }
  }

  useMemo(() => {
    randomQuestion()
  }, [])

  return (
    <div className="home-page">
      <p>
        Question {questionNumber}
      </p>
      <motion.div className="home-card" key={question.number} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <p className='home-text'>
          #{question.number} : {question.text}
        </p>

        {showAnswer &&
          <motion.p className='home-answer' initial="hidden" animate="visible" variants={answerVariants}>{question.answer}</motion.p>
        }
      </motion.div>

      <button onClick={revealAnswer}>
        {showAnswer ? "Question suivante" : "Révéler la réponse"}
      </button>
    </div>
  )
}