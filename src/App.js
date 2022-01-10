import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Team from "./Components/Team";
import Timeline from "./Components/Timeline";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      mainData: {}
    };
  }

  readDataFromJson() {
    $.ajax({
      url: "./app_data.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ mainData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.readDataFromJson();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.mainData.main} />
        <About data={this.state.mainData.main} />
        <Team data={this.state.mainData.team} />
        <Timeline data={this.state.mainData.main} />
        <Footer data={this.state.mainData.main} />
      </div>
    );
  }
}

export default App;
