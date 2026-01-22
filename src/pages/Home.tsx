import { useMemo, useState } from "react"
import questions from '../assets/questions.json'
import { motion } from "motion/react"

export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [question, setQuestion] = useState({} as any)
  const [showAnswer, setShowAnswer] = useState(false)

  const answerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const revealAnswer = () => {
    if (showAnswer) {
      setQuestionNumber(questionNumber + 1)
      setShowAnswer(false)
      loadQuestion()
    } else {
      setShowAnswer(true)
    }
  }

  const loadQuestion = () => {
    setQuestion(() => {
      // get random number between 1 and total number of questions
      const totalQuestions = Object.keys(questions).length
      const questionNumber = Math.floor(Math.random() * totalQuestions)
      return (questions as any)[questionNumber]
    })
  }

  useMemo(() => {
    loadQuestion()
  }, [])

  // Update the size of the card when the question changes
  return (
    <div className="home-page">
      <p>
        Question {questionNumber}
      </p>
      <motion.div className="home-card" key={questionNumber} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <p className='home-text'>
          {question.text}
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