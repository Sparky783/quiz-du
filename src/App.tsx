import './App.css'
import questions from './assets/questions.json'
import { Link, Outlet } from 'react-router-dom'

export default function App() {
  return <>
    <div className="page-content">
      <h1>Quiz DU</h1>
      <Outlet />
    </div>
    <div className="footer">
      <p>
        <Link to="questions">Liste des questions</Link><br />
        Base de données de {Object.keys(questions).length} questions sur le DU.
      </p>
      <p>
        Made with ❤️ by <a href="https://github.com/Sparky783" target="_blank">Florent Lavignotte</a>
      </p>
    </div>
  </>
}