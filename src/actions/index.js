export const increment = (num) => {
    return {
      type: 'INCREMENT',
      payload: num
    }
  }
  
export const decrement = () => {
    return {
      type: 'DECREMENT'
    }
  }

export const nextPage = () => {
  return {
    type: 'NEXT'
  }
}

export const inputTerm = (term) => {
  return {
    type: 'TERM',
    payload: term
  }
}

export const fetch = () => {
  return {
    type: 'FETCH',
  }
}

export const star = (id) => {
  return {
    type: 'SET',
    id: id
  }
}