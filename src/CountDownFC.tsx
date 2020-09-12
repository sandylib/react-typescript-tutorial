import React, {FunctionComponent, useState, useEffect} from 'react'

type CountDownProps = {
  defaultMinutes: number,
  defaultSeconds: number
}

export const CountDownFC: FunctionComponent<CountDownProps> = ({ defaultMinutes,defaultSeconds }) => {

  const [minutes, setMinutes] = useState(defaultMinutes);
  const [seconds, setSeconds] = useState(defaultSeconds);

  useEffect( () => {
      const timer = setInterval( ()=> {

        if(seconds > 0) {
           setSeconds(seconds-1)
        }

        if(seconds === 0) {
          if(minutes === 0) {
             clearInterval(timer);
          }else {
            setMinutes(minutes -1);
            setSeconds(59);
          }
        }

      }, 1000)
      
      return () =>  clearInterval(timer);

  }, [minutes, seconds])

  return (
    <div>
      {
          minutes === 0 && seconds === 0 ? <h1>Busted!</h1> : <h1>The Remaining: {minutes}: {seconds < 10 ? `0${seconds}` : seconds}</h1>
        }
    </div>
  )
}

export default CountDownFC;
