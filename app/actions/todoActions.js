export const addTodo = (text) => {
  return {
    type: ‘ADD_TODO’,
    text
  }
}

export const alertTodo = (text) => {
  return {
    type:'ALERT_TODO',
    text
  }
}
