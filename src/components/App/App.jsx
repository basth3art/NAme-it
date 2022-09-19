import React from 'react';
import Header from '../header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../searchBox/searchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
  state = {
    HeaderText: 'Name It!',
    headerExpanded: true,
    suggestedNames: [],
  };

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText,
      suggestedNames:inputText? name(inputText):[],
    });
  };
  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headerTitle={this.state.HeaderText}
        />

        {/* <h1>{this.state.HeaderText}</h1> */}
        {/* <button onClick={() =>{
         this.setState({
            HeaderText : 'woah this is my new header text' ,

         })
         
    }}>
          Magic button
        </button> */}

        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
