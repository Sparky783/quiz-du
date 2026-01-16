import { Link } from 'react-router-dom'
import questions from '../assets/questions.json'

export default function Questions() {
  return (
    <div className="questions-page">
      <div className="questions-top">
        <h2>Liste des questions</h2>
        <Link to="/">Retour</Link>
      </div>
      <ul className='question-list'>
        {Object.entries(questions).map(([key, question]) => (
          <li key={key} className='question-card'>
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
          </li>
        ))}
      </ul>
    </div>
  )
}