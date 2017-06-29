const todo = (state, action) => {
  switch (action.type) {
     case ‘ADD_TODO’:
      return […state, action.text]

     case ‘ALERT_TODO’:
        return state.map(todo =>
                if (todo.text !== action.text) {
                  return todo
                }
            )

     default:
      return state
    }
}
