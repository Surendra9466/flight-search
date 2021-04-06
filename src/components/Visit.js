import React from 'react'
import Destination from './Destination'
import Source from './Source'

export default function Visit({citiesName,setSource,setDestination}) {
    return (
        <div>
            <Source citiesName={citiesName} setSource={setSource} />
            <Destination citiesName={citiesName} setDestination={setDestination}/>
        </div>
    )
}
