import { connect } from 'react-redux'
import Account from '../components/profile/account'
import { fetchAccount, createAccount, updateAccount } from '../actions/userActions'

const mapStateToProps = (state, ownProps) => {
  return {
    account: state.account
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAccount: () => {
      dispatch(fetchAccount())
    },
    createAccount: () => {
      dispatch(createAccount());
    },
    updateAccount: (account) => {
      dispatch(updateAccount(account));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
