import React, { Component } from "react";
// import LoadingBar from "react-top-loading-bar";

import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//if it is a function based component then there is no need to keep this 
//if it is a class based componet  then there is need to keep (this.) to access the elements
export default class App extends Component {
  pageSize = 6;
  apikey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
        
          <Navbar />
          
          <Switch>
            <Route exact path="/">
              <News apikey={this.apikey} 
                // key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>

            <Route exact path="/entertainment">
              <News apikey={this.apikey} 
                // key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/business">
              <News apikey={this.apikey} 
                // key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route path="/health">
              <News apikey={this.apikey}  pageSize={this.pageSize} country="in" category="health" />
            </Route>
            <Route path="/science">
              <News apikey={this.apikey} 
                // key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/general">
              <News apikey={this.apikey} 
                // key="general"

                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/sports">
              <News apikey={this.apikey}  pageSize={this.pageSize} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News apikey={this.apikey} 
                // key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
