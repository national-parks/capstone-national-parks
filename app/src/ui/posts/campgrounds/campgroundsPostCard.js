import React from 'react'
import Card from 'react-bootstrap/Card'

export function PostCard (props) {
	console.log(props)
	const {campground} = props
	return (
		<>
			<Card className="card text-center">
				<div className="card-body">
					<Card.Title>{campground.Name}</Card.Title>
					<Card.Text >
						<p>{campgrounds.misquoteContent}</p>
						<p><small className="text-muted">{campgrounds.misquoteSubmitter}</small></p>
					</Card.Text>
				</div>
			</Card>
		</>
	)
}