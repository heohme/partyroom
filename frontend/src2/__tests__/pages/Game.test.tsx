import { render, screen } from '@testing-library/react'
import Game from '../../pages/Game'

describe('Game Page', () => {
  it('renders game board', () => {
    render(<Game />)
    expect(screen.getByTestId('game-board')).toBeInTheDocument()
  })

  it('initializes game state', () => {
    // TODO: Add more test cases
  })
})
