import React from 'react';

import './styles.css';
import { RootState } from '../../state/store';

import { useSelector, useDispatch } from 'react-redux'

const AccountsScreen: React.FC = () => {

  const count = useSelector((state: RootState) => state.accounts.data)
  const dispatch = useDispatch()

  return <div />;
}

export default AccountsScreen;