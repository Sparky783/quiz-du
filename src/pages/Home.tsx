import { useEffect, useState } from "react"
import questions from '../assets/questions.json'

export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [question, setQuestion] = useState({} as any)
  const [showAnswer, setShowAnswer] = useState(false)

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

  useEffect(() => {
    loadQuestion()
  }, [])

  return (
    <div className="home-page">
      <p>
        Question {questionNumber}
      </p>
      <div className="home-card">
        <p className='home-text'>
          {question.text}
        </p>

        {showAnswer &&
          <p className='home-answer'>{question.answer}</p>
        }
      </div>

      <button onClick={revealAnswer}>
        {showAnswer ? "Question suivante" : "Révéler la réponse"}
      </button>
    </div>
  )
}