import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from "./pages/Register";
import Transaction from "./pages/Transaction";
import transfer from "./pages/transfer";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/wallet" component={Wallet} />
        <Route exact path="/transfer/:user_id" component={transfer} />
        <Route exact path="/user/transaction/:user_id" component={Transaction} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch >
    </BrowserRouter>


  );
}

export default App;
