import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import CreatePraiseOrCriticism from '../create/CreatePraiseOrCriticism';
import * as employeeActions from '../../actions/employeeActions';

class CreatePraiseOrCriticismContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getEmployees();
  }

  render() {
    return (
      <div>
        <CreatePraiseOrCriticism employees={this.props.employees}/>
      </div>
    )
  }
}

CreatePraiseOrCriticismContainer.propTypes = {
  employees: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {employees: state.employees}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePraiseOrCriticismContainer);
