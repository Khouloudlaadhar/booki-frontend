
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Activities from "./pages/Activities";
import ActivitiesDetails from "./pages/ActivitiesDetails";
import Hebergements from "./pages/Hebergements";
import HebergementDetails from "./pages/HebergementDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GlobalLoading from "./Components/GlobalLoading";


function App() {
  return (
    <>
    <GlobalLoading/>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/hebergements' component={Hebergements} />
        <Route exact path='/activities' component={Activities} />
        <Route exact path='/hebergemnts/:id' component={HebergementDetails} />
        <Route exact path='/activities/:id' component={ActivitiesDetails} />
        <Route  component={NotFound} />
      </Switch>
    </Router>
    </>

  );
}

export default App;
