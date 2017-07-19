import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

const CreatePraiseOrCriticism = (props) => {
  console.log('props',props);
  return (
    <div className="container main">
      <form>
        <div className="form-group">
          <label htmlFor="email">Select an employee:</label>
           <Typeahead labelKey="label" options={props.employees} placeholder="Choose an employee..."/>
        </div>
        <div className="form-group">
          <label htmlFor="ar">Enter a message:</label>
          <input type="area" className="form-control" id="ar"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  )
}

CreatePraiseOrCriticism.propTypes = {
  employees: PropTypes.array.isRequired,
};

export default CreatePraiseOrCriticism;
