export const API_CONFIG = {
    BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api',
    TIMEOUT: 5000,
    HEADERS: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }