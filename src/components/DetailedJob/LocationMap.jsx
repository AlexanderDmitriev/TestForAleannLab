import { GoogleMap } from '@react-google-maps/api';
import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  margin-left: -60px;
  padding-top: 31px;
`;

const LocationMap = ({ center }) => {
  const containerStyle = {
    width: '363px',
    height: '363px',
  };
  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <MapContainer>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </MapContainer>
  );
};

export default LocationMap;
