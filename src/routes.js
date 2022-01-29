import { Switch, Route} from "react-router-dom";

const Page1 = () => <h1>Home</h1>;
const Page2 = () => <h1>Home</h1>;
const Page3 = () => <h1>Home</h1>;

const routes = (
    <Switch>
      <Route path="Page1" exact component={ Page1 } />
      <Route path="Page1" exact component={ Page2 } />
      <Route path="Page1" exact component={ Page3 } />
      
    </Switch>
  );
  
  export default routes;
