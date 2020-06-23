import React from 'react'
import Card from 'react-bootstrap/Card'

export function PostCard (props) {
  console.log(props)
  const {park} = props
  return (
    <>
      <Card className="card text-center">
        <div className="card-body">
          <Card.Title>{park.parkFullName}</Card.Title>
          <Card.Text >
            <p>{park.parkDescription}</p>
            {/*<p><small className="text-muted">{parks.misquoteSubmitter}</small></p>*/}
          </Card.Text>
        </div>
      </Card>
    </>
  )
}