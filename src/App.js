
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Activities from "./pages/Activities";
import ActivitiesDetails from "./pages/ActivitiesDetails";
import Hebergements from "./pages/Hebergements";
import HebergementsDetails from "./pages/HebergementsDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/hebergements' component={Hebergements} />
        <Route exact path='/activities' component={Activities} />
        <Route exact path='/hebergemnts/:id' component={HebergementsDetails} />
        <Route exact path='/activities/:id' component={ActivitiesDetails} />
        <Route  component={NotFound} />
      </Switch>
    </Router>

  );
}

export default App;
