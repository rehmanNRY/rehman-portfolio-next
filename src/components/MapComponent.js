"use client"
// src/MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh' // Full height for display purposes
};

const center = {
  lat: 27.946672,
  lng: -82.482866
};

const styleArray = [
  {
    stylers: [
      { visibility: "off" }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      { visibility: "on" },
      { color: "#212121" },
      { lightness: 0 }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      { visibility: "on" },
      { color: "#000000" },
      { lightness: 20 }
    ]
  },
  {
    featureType: "landscape",
    elementType: "labels",
    stylers: [
      { visibility: "on" },
      { color: "#000000" },
      { lightness: 16 }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      { visibility: "on" },
      { color: "#4DBBE9" },
      { lightness: 17 }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      { visibility: "on" },
      { saturation: 36 },
      { color: "#000000" },
      { lightness: 16 }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "labels.icon",
    stylers: [
      { visibility: "on" }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { visibility: "on" },
      { color: "#000000" },
      { lightness: 16 }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text",
    stylers: [
      { visibility: "on" },
      { color: "#000000" },
      { lightness: 16 }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      { saturation: 36 },
      { color: "#ffffff" },
      { lightness: 40 }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      { visibility: "on" },
      { color: "#000000" },
      { lightness: 17 }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text",
    stylers: [
      { visibility: "on" },
      { color: "#000000" },
      { lightness: 16 }
    ]
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      { visibility: "on" },
      { color: "#ffffff" },
      { lightness: 40 }
    ]
  }
];

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_API}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={{
          disableDefaultUI: true,
          styles: styleArray
        }}
      />
    </LoadScript>
  );
}

export default MapComponent;