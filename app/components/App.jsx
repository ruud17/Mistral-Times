import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          text: 'Youtube'
        }, {
          id: 2,
          text: 'Facebook'
        }
      ],
      inputValue: ''
    };
    this.addItem = this.addItem.bind(this);
    this.setInputField = this.setInputField.bind(this);
  }

  addItem(event) {
    event.preventDefault();
    const newItem = {
      id: this.state.items.length + 1,
      text: this.state.inputValue
    };
    this.setState((prevState) => {
      return {
        items: [
          ...prevState.items,
          newItem
        ]
      }
    })
  }

  setInputField(event) {
    this.setState({inputValue: event.target.value});
  }

  render() {
    return (
      <div>
        <AddTodoForm
          inputValue={this.inputValue}
          setInputField={this.setInputField}
          addItem={this.addItem}
          />
        <TodoList items={this.state.items}/>
      </div>

    )
  }
}

export default App;
