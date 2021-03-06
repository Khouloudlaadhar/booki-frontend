
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Activities from "./pages/Activities";
import ActivitiesDetails from "./pages/ActivitiesDetails";
import Hebergements from "./pages/Hebergements";
import HebergementDetails from "./pages/HebergementDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GlobalLoading from "./components/GlobalLoading";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { login } from "./redux/actions/userActionCreators";
import { useDispatch } from "react-redux";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import CustomRoute from "./routes/CustomRoute";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassoword from "./pages/ResetPassoword";






function App() {

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  if (token && user) {
    dispatch(login(user, token))
  }

  return (
    <>
      <GlobalLoading />
      <Router>
        <Switch>
          <PublicRoute exact path='/login' component={Login} />
          <PublicRoute exact path='/register' component={Register} />
          <PublicRoute exact path='/forgot-password' component={ForgotPassword} />
          <PublicRoute exact path='/password-reset/:id/:token' component={ResetPassoword} />
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute exact path='/hebergements' component={Hebergements} />
          <PrivateRoute exact path='/activities' component={Activities} />
          <PrivateRoute exact path='/hebergemnts/:id' component={HebergementDetails} />
          <PrivateRoute exact path='/activities/:id' component={ActivitiesDetails} />
          <CustomRoute component={NotFound} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
