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

const MainNavigator: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
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
        </Router>
    );
}

export default MainNavigator;