import React from 'react'
import {useHistory} from 'react-router'

export function ParkCard (props) {
  console.log(props)
  const history=useHistory()
  const {park}=props
  return(<>
    <div className="col-4 bg-light py-3">
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f0a23c8-5536-414b-b889-860a7a9f419b/d4teg4h-71a65b70-d1e4-423b-b5be-5cfa0e65ce1e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8xZjBhMjNjOC01NTM2LTQxNGItYjg4OS04NjBhN2E5ZjQxOWIvZDR0ZWc0aC03MWE2NWI3MC1kMWU0LTQyM2ItYjViZS01Y2ZhMGU2NWNlMWUucG5nIn1dXX0.aIdoTPYjO4n15fkYqluGF5JJV0eadJL3ozbnJyze40Y"
           alt="Park Picture" className="img-fluid" />
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