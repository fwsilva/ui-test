import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useSelector } from 'react-redux'
import AccountsScreen from "../screens/Accounts/Accounts";
import BalancesScreen from "../screens/Balances/Balances";
import PricesScreen from "../screens/Prices/Prices";
import TradeScreen from "../screens/Trade/Trade";
import { RootState } from "../state/store";
import { Sidebar } from "../stories/Sidebar/Sidebar";
import './Main.css';

const MainNavigator: React.FC = () => {

    const pages = useSelector((state: RootState) => state.sidebarMenu.data);

    return (
        <div className="appContainer">
            <Router>
                <Sidebar pageList={pages} />
                <div className="mainContainer">
                    <div>Header Goes here</div>
                    <div className="pageContainer">
                        <Switch>
                            <Route path="/" exact={true}>
                                <TradeScreen />
                            </Route>
                            <Route path="/balances">
                                <BalancesScreen />
                            </Route>
                            <Route path="/accounts">
                                <AccountsScreen />
                            </Route>
                            <Route path="/prices">
                                <PricesScreen />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default MainNavigator;