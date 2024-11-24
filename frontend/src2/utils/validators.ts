export const isDeckValid = (deck: any[]): boolean => {
    return deck.length === 30
  }
  
  export const isEmailValid = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }