import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Title from "./components/title/title"
import Top from "./components/top/top";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import Loading from "./components/loading/loading";
import Rank from "./components/rank";
import Search from "./components/search";
import store from "./store";
import "./common/css/reset.css";
import "./common/js/flexble";
import "./common/css/iconfont/iconfont.css";

//路由懒加载
let Home = Loadable({
  loader: () => import("./components/home"),
  loading: Loading
})
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Title/>
            {/*组件的渲染 */}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/rank" component={Rank} />
              <Route path="/search" component={Search} />
              <Redirect path="/" to="/home" />
            </Switch>

            {/*导航 */}
            <Top />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
