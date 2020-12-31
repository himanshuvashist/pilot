import { connect } from 'react-redux';
import FormContainer from '../pages/Form';
import { updateData } from '../../../actions/formTwoActions';

const mapStateToProps = (state) => ({
  state: state.formTwoReducer,
});

const mapDispatchToProps = (dispatch) => ({
  updateData: (payload) => {
    dispatch(updateData(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
