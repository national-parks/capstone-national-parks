import React from 'react'
import {useHistory} from 'react-router'
import { useSelector } from 'react-redux'

export function ParkCard (props) {
  console.log(props)
  const history=useHistory()
  const {park}=props
  const parkImage=useSelector(state => {
    return state.parkImages
      ? state.parkImages.find(parkImage => parkImage.parkImageParkId === park.parkId)
      : []
  })
  console.log(parkImage)
  return(<>
    <div className="col-4 bg-light py-3">
      {parkImage && <img src={`${parkImage.parkImageUrl}?width=300`}
           alt={parkImage.parkImageCaption} className="img-fluid" />}
    </div>
    <div className="col-8 bg-light py-3">
      <div className="row">
        <div className="col">
          <h2 onClick={() => {history.push(`/parkPage/${park.parkId}`)}}>{park.parkFullName}</h2>
        </div>
      </div>
      <div className="row">
        {park.parkDescription}
      </div>
    </div>
  </>)
}