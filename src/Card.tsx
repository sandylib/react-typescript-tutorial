import React, {FunctionComponent} from 'react';
type CardProps = {
  title: string,
  paragraph: string
}

export const Card: FunctionComponent<CardProps> = ({title, paragraph}) => {

  return (
    <div style={{color: 'red', border: '1px solid yellow'}}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  )

}