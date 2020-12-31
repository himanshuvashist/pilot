import { connect } from 'react-redux';
import FormContainer from '../pages/Form';
import { updateData } from '../actions/formActions';

const mapStateToProps = (state) => ({
  state: state.formReducer,
});

const mapDispatchToProps = (dispatch) => ({
  updateData: (payload) => {
    dispatch(updateData(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
