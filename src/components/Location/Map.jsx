import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import "./Map.css"


const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Location = () => {

  const location = {
    address: 'Tsukishima Monja Street',
    lat: 35.6643,
    lng: 139.7825,
  }

  return (
    <div className='pt-3 pl-2'>
      <p className='text-[28px] font-bold pb-3'>Location</p>
    <div className="map border-[1px] border-black shadow-customShadow rounded-md">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={13}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
  </div>
  )
}

export default Location
