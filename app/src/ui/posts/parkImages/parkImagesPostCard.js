import React from 'react'
import Card from 'react-bootstrap/Card'

export function PostCard (props) {
	console.log(props)
	const {parkImage} = props
	return (
		<>
			<Card className="card text-center">
				<div className="card-body">
					<Card.Title>{parkImage.parkImageParkId}</Card.Title>
					<Card.Text >
						<p>{parkImage.parkImageUrl}</p>
					</Card.Text>
				</div>
			</Card>
		</>
	)
}