import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'
import Collection from './pages/Collection'
import DeckBuilder from './pages/DeckBuilder'
import Profile from './pages/Profile'
import Shop from './pages/Shop'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/game',
    element: <Game />,
  },
  {
    path: '/collection',
    element: <Collection />,
  },
  {
    path: '/deck-builder',
    element: <DeckBuilder />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
])
