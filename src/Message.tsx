import React, {FunctionComponent} from 'react'

interface IMessage{
  title: string,
  message: string
}

export const Message: FunctionComponent<IMessage> = ({title, message}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{message}</p>
    </div>
  )
}
