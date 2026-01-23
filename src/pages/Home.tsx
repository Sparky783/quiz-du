import { useMemo, useState } from "react"
import { motion } from "motion/react"
import { useQuestions } from "../hooks/useQuestions"
import { Switch } from '../components/Switch'

export default function Home() {
  const answerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const [autoEvaluationMode, setAutoEvaluationMode] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false)
  const { question, randomQuestion } = useQuestions()
  const [questionNumber, setQuestionNumber] = useState(1)
  const [questionsHistory, setQuestionsHistory] = useState<Array<{ question: any; isCorrect: boolean }>>([])

  const revealAnswer = () => {
    if (showAnswer) {
      setShowAnswer(false)
      randomQuestion()
      setQuestionNumber(questionNumber + 1)
    } else {
      setShowAnswer(true)
    }
  }

  const validateAnswer = (isCorrect: boolean) => {
    setQuestionsHistory([...questionsHistory, { question: question, isCorrect }])
    revealAnswer()
  }

  useMemo(() => {
    randomQuestion()
  }, [])

  return (
    <div className="home-page">
      <main>
        <Switch label="Mode auto-évaluation" initialState={autoEvaluationMode} onChange={setAutoEvaluationMode} />
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

        {showAnswer ?
          autoEvaluationMode ?
            <>
              <button onClick={() => validateAnswer(true)}>
                Bonne réponse
              </button>
              <button onClick={() => validateAnswer(false)}>
                Mauvaise réponse
              </button>
            </> :
            <button onClick={revealAnswer}>
              Question suivante
            </button>
          :
          <button onClick={revealAnswer}>
            Révéler la réponse
          </button>
        }

      </main>

      {autoEvaluationMode &&
        <aside>
          <div className="eval-header">
            <h2>Réponses précedentes</h2>
            <button onClick={() => setQuestionsHistory([])}>Réinitialiser</button>
          </div>
          <ul>
            {questionsHistory.map((item, index) => (
              <li key={index} className={item.isCorrect ? "correct" : "incorrect"}>
                #{item.question.number} : {item.question.text}
              </li>
            ))}
          </ul>
        </aside>
      }
    </div>
  )
}