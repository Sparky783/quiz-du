import { useState } from "react"
import questions from '../assets/questions.json'

export function useQuestions() {
  const questionList = questions.map((question, index) => ({
    ...question,
    number: index + 1
  }))

  const [question, setQuestion] = useState({} as any)

  const randomQuestion = () => {
    setQuestion(() => {
      const questionIndex = Math.floor(Math.random() * questionList.length)
      return questionList[questionIndex]
    })
  }

  return {
    questionList,
    question,
    randomQuestion
  }
}