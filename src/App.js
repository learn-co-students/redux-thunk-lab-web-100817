import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import CatList from "./CatList";
import * as actions from "./actions/catActions.js";

class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    console.log("props in app", this.props);
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics.pictures} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catPics: state.cats
});

const WrapperApp = connect(mapStateToProps, actions)(App);

module.exports = {
  WrapperApp,
  App
};
