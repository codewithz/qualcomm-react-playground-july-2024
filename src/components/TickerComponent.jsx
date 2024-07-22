import React, { Component } from 'react'

export default class TickerComponent extends Component {

    state={
        tickerCount:0
    }

    componentDidMount(){
        this.timer=setInterval(this.tick,1000)
    }

    tick= ()=>{
       this.setState({
        tickerCount:this.state.tickerCount+1
       })
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
  render() {
    return (
      <div>
            <h3>Ticker Component -- Class State</h3>
            <br />
            <br />
            Time Elapsed : {this.state.tickerCount}

      </div>
    )
  }
}
