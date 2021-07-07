import React /*, { useEffect } */ from 'react';

import './styles.css';
// import { RootState } from '../../state/store';

// import { useSelector, useDispatch } from 'react-redux'
// import { loadAccounts } from '../../state/features/accounts';

const AccountsScreen: React.FC = (props) => {

  //console.log(props);

  // const accountList = useSelector((state: RootState) => state.accounts.data)
  // const dispatch = useDispatch();

  // function loadData(){
  //   dispatch(loadAccounts);
  // }

  // useEffect(() => {
  //   console.log(accountList);
  // }, [accountList]);

  // useEffect(() => {
  //   loadData();
  // }, [])

  return <div>Accounts</div>;
}

export default AccountsScreen;