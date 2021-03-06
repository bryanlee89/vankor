import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Dashboard from './Dashboard';
import PostNew from './posts/PostNew';
import PostDetail from './posts/PostDetail';
import Footer from './Footer';

import OccupationBoardContainer from '../containers/OccupationBoardContainer';
import OccupationForm from '../containers/OccupationForm';

const Landing = () => <div>LANDING PAGE</div>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderOccupationSection(props) {
    return (
      <div>
        <Route exact path="/jobs" component={OccupationBoardContainer} />
        <Route path="/jobs/new" component={OccupationForm} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="row" style={{ marginBottom: '0px', backgroundColor: '#4c6896' }}>
              <div className="col s2 hide-on-small-only" style={{}}>
                SIDE MENU
              </div>
              <div className="col s12 m10 indigo lighten-5" style={{ position: 'relative' }}>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/posts" component={Dashboard} />
                <Route path="/jobs" render={props => this.renderOccupationSection(props)} />
                <Route path="/posts/new" component={PostNew} />
                <Route path="/posts/:id" component={PostDetail} />
              </div>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
