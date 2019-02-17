import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
class App extends Component {

  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax call here to get the data from API
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Lowell', 'Cambridge', 'New Bedford', 'Springfield'],
        datasets:[{
            label:'Population',
            data:[
              617594,
              181045,
              106519,
              105162,
              95072,
              153060
          ],
          backgroundColor:[
            'rgba(255,99,32,0.6)',
            'rgba(54,162,130,0.6)',
            'rgba(128,153,128,0.6)',
            'rgba(255,255,75,0.6)',
            'rgba(255,86,255,0.6)',
            'rgba(64,159,128,0.6)',
            'rgba(255,192,32,0.6)'
          ]
        }
      ]
    }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
