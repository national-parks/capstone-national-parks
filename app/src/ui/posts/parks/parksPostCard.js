import React from 'react'
import Card from 'react-bootstrap/Card'

export function PostCard (props) {
  console.log(props)
  const {parks} = props
  return (
    <>
      <Card className="card text-center">
        <div className="card-body">
          <Card.Title>{parks.parkFullName}</Card.Title>
          <Card.Text >
            <p>{parks.parkDescription}</p>
            <p><small className="text-muted">{parks.misquoteSubmitter}</small></p>
          </Card.Text>
        </div>
      </Card>
    </>
  )
}