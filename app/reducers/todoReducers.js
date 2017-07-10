export const todo = (state = [], action) => {
  let todoId = 0;
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: todoId++,
        value:action.value
      }];

    default:
      return state
  }
}
