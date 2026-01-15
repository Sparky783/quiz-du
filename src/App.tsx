import { useEffect, useState } from 'react'
import './App.css'
import questions from './assets/questions.json'

function App() {
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
    <>
      <div className="content">
        <h1>Quiz DU</h1>
        <p>
          Question {questionNumber}
        </p>
        <div className="question-card">
          <p className='question-text'>
            {question.text}
          </p>

          {showAnswer &&
            <p className='question-answer'>{question.answer}</p>
          }
        </div>

        <button onClick={revealAnswer}>
          {showAnswer ? "Révéler la réponse" : "Question suivante"}
        </button>
      </div>
      <div className="footer">
        <p>
          Base de données de {Object.keys(questions).length} questions sur le DU.
        </p>
        <p>
          Made with ❤️ by <a href="https://github.com/florentlavignotte">Florent Lavignotte</a>
        </p>
      </div>
    </>
  )
}

export default App
