import React /*, { useEffect } */ from 'react';
import { Button } from '../../stories/Button/Button';
import { Card } from '../../stories/Card/Card';
import { TitleBar } from '../../stories/Titlebar/TitleBar';

import './styles.css';
// import { RootState } from '../../state/store';

// import { useSelector, useDispatch } from 'react-redux'
// import { loadAccounts } from '../../state/features/accounts';

const AccountsScreen: React.FC = (props) => {
  const saveButton = <Button label="Create Account" primary={true} />
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

  return <>
    <TitleBar title="Accounts" button={saveButton}/>
    <Card child={<div>Hey</div>} />

  </>;
}

export default AccountsScreen;