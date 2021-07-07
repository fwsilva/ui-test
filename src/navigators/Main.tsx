import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AccountsScreen from "../screens/Accounts/Accounts";
import BalancesScreen from "../screens/Balances/Balances";
import PricesScreen from "../screens/Prices/Prices";
import TradeScreen from "../screens/Trade/Trade";
import { Sidebar } from "../stories/Sidebar/Sidebar";

const MainNavigator: React.FC = () => {
    const pages = [{ id: 'p1', title: 'Trade' }, { id: 'p2', title: 'Balances' }, { id: 'p3', title: 'Accounts' }, { id: 'p4', title: 'Prices' }];
    return (
        <div className="appContainer">
            <Router>
                <Sidebar pageList={pages} />
                <div>
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
            </Router>
        </div>
    );
}

export default MainNavigator;