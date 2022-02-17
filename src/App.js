import Home from './comp/Home'
import Login from './comp/Login'

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </BrowserRouter>
      
    </>
  );
}

export default App;
