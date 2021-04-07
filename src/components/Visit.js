import React from 'react'
import Destination from './Destination'
import Source from './Source'
import './css/visit.css'

export default function Visit({citiesName,setSource,setDestination}) {
    return (
        <div className="visit">
            <Source citiesName={citiesName} setSource={setSource} />
            <Destination citiesName={citiesName} setDestination={setDestination}/>
        </div>
    )
}
