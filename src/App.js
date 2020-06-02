import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Masthead from './components/Masthead'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css';
/*
class Hello extends React.Component{
  render(){
    return(
      <p>Hello {this.props.title}</p>
    )
  }
  
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      myState: 'My first state',
      saySomething: 'Hello World'
    }
    this.changeText = this.changeText.bind(this);
  }
  changeText(){
    this.setState({saySomething: 'How are we'});
  }


  render (){
    return (
      <div className="App">
        <p>{this.state.myState}</p>
        <p>{this.state.saySomething}</p>
        <button onClick={() => {
    this.setState({ saySomething: 'How are you?' })
  }}>Click you</button>
        <button onClick={this.changeText}>Click we</button>
        <Hello title="Kelvin"/>
      </div>
    );
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[getDerivedStateFromProps]');
    if (nextProps.title !== prevState.title) {
      return {
        title: nextProps.title 
      };
    }
    return null;
  }
  componentDidMount(){
    console.log('[componentDidMount]');
    this.setState({myState:'my second state' });
  }
}

export default App;
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Masthead/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;

