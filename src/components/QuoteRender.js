import React, { Component } from "react";
import "./QuoteRender.css";

export default class QuoteRender extends Component {
  state = {
    quotes: ["first", "second", "third", "fourth", "fifth"],
    text: "first load"
  };
  generateRandomQuote = () => {
    let quotes = this.state.quotes;
    var new_text = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({
      text: new_text
    });
  };

  render() {
    return (
      <div>
        <p id="text">{this.state.text}</p>
        <p id="author">Some author</p>
        <button onClick={this.generateRandomQuote} id="new-quote">
          New Quote
        </button>
      </div>
    );
  }
}
