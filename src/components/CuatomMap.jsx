import React, { useState, useRef } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

function CustomMap({ shopLocation, myLocation }) {
  console.log(shopLocation);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBv7P_WIm7Y33DkTnCp9CCdivzHwKYVvpU",
  });

  const [map, setMap] = React.useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  async function calculateRoute() {
    console.log("Hello");
    if (shopLocation === null || myLocation === null) {
      return;
    }
    console.log("HI");
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    console.log(myLocation, shopLocation);
    const results = await directionsService.route({
      origin: { lat: myLocation.lat, lng: myLocation.lng },
      destination: { lat: shopLocation.lat, lng: shopLocation.lng },
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    console.log(results);
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="">
      <input type="checkbox" id="map" className="modal-toggle" />
      <label htmlFor="map" className="modal cursor-pointer">
        <label className="w-screen h-[500px] p-2 relative" htmlFor="">
          <button
            onClick={calculateRoute}
            className="absolute font-semibold top-5 right-5 z-30 bg-sky-600 text-white px-2 rounded-md shadow-sm py-[1px] "
          >
            Find Route
          </button>
          {isLoaded ? (
            <GoogleMap
              center={shopLocation}
              zoom={15}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: true,
                fullscreenControl: false,
              }}
              onLoad={(map) => setMap(map)}
              onUnmount={onUnmount}
            >
              <Marker position={shopLocation} />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          ) : (
            <></>
          )}
        </label>
      </label>
    </div>
  );
}

export default React.memo(CustomMap);
