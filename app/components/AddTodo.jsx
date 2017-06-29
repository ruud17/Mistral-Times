import React from 'react';

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <form className="form-inline todoForm">
        <label className="sr-only" htmlFor="inlineFormInput">Name</label>
        <input type="text" className="form-control mb-3 mr-sm-3 mb-sm-0" id="inlineFormInput" value={this.props.inputValue} placeholder="To do item..." onChange={this.props.setInputField}/>
        <button type="submit" className="btn btn-primary" onClick={this.props.addItem}>Submit</button>
      </form>
    )
  }
}

export default AddTodoForm;
