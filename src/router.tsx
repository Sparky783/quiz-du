import { createBrowserRouter } from "react-router-dom";
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Questions from './pages/Questions.tsx'

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "questions",
          element: <Questions />,
        }
      ]
    }
  ],
  {
    basename: "/quiz-du"
  }
)