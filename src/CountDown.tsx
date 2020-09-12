import React, { Component } from 'react'

type State = {
  minutes: number,
  seconds: number
}

export default class CountDown extends Component<{}, State> {
  private timer: any;


  componentWillMount(){
    this.setState({minutes: 2, seconds: 10});

  }

  componentDidMount() {
    this.timer = setInterval( ()=> {

      const {seconds, minutes} = this.state;

      if(seconds>0){
        this.setState( ()=>({
          seconds: seconds -1
        }))
      }

      if(seconds === 0) {

        if(minutes === 0) {
          clearInterval(this.timer);
        }else {
          this.setState(()=>({
            minutes: minutes-1,
            seconds: 59
          }))

        }


      }


    }, 1000)


  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {

    const { minutes, seconds } = this.state;

    return (
      <div>
        {
          minutes === 0 && seconds === 0 ? <h1>Busted!</h1> : <h1>The Remaining: {minutes}: {seconds < 10 ? `0${seconds}` : seconds}</h1>
        }
      </div>
    )
  }
}
