import * as React from "react";
import { useEffect, useState } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { Trash2, Truck, SquareArrowRight, Droplet } from "lucide-react";
import { useGet } from "../manager/hooks/useGet";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../assets/container.png";
import { useAddition } from "../manager/hooks/useAddition";

// Replace with your actual Mapbox access token
const MAPBOX_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const routeLayer = {
  id: "route-line",
  type: "line",
  layout: { "line-join": "round", "line-cap": "round" },
  paint: { "line-color": "#3887be", "line-width": 5, "line-opacity": 0.75 },
};

const MapDiv = () => {
  const [routeData, setRouteData] = useState(null);
  const [markers, setMarkers] = useState([]);
  // const [sewage, setSewage] = useState([]);
  const [skipData, setSkipData] = useState(false);
  const [menuData, setMenuData] = useState({ visible: false, x: 0, y: 0 });
  const [position, setPosition] = useState({ lng: 0.0, lat: 0.0 });
  const [activateMarker, setActivateMarker] = useState(true);
  const [typeView, setTypeView] = useState(false);

  const { add } = useAddition();

  const getRoute = async (start, end) => {
    const coords = `${start[0]},${start[1]};${end[0]},${end[1]}`;

    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${coords}?geometries=geojson&access_token=${MAPBOX_TOKEN}`;
    const query = await fetch(url);
    const json = await query.json();
    return json.routes[0].geometry; // This is the GeoJSON LineString
  };

  const handleContextMenu = (e) => {
    e.originalEvent.preventDefault();
    setActivateMarker(false);
    const { clientX, clientY } = e.originalEvent;
    const { lng, lat } = e.lngLat;
    setPosition({ lng, lat });
    setMenuData({ visible: true, x: clientX, y: clientY });
    console.log(menuData);
  };

  const handleClick = () => {
    setActivateMarker(true);
    setMenuData({ ...menuData, visible: false });
  };

  const handleSetContainer = async (type, lat, lon) => {
    add("addSkip.php", { type, lat, lon });
  };

  const handleSetSewage = async (lat, lon) => {
    add("addSewer.php", { lat, lon });
  };

  // const { getAll } = useGet({ setData: { ...markers, setMarkers } });
  const { getAll } = useGet({ setData: setMarkers });
  // const { getAllSewerPoints } = useGet({setData: setSewage});

  useEffect(() => {
    getAll("getSkips.php");
    getAll("getSewer.php");
    getRoute(
      [46.66552995808539, 24.728567923662084],
      [46.6500164769478, 24.755603060745138],
    ).then((geometry) => {
      setRouteData({
        type: "Feature",
        properties: {},
        geometry: geometry,
      });
    });
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [getAll]);

  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      initialViewState={{
        longitude: 46.66552995808539,
        latitude: 24.728567923662084,
        zoom: 14,
      }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 15,
        left: 0,
        borderRadius: 10,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onContextMenu={handleContextMenu}
    >
      {routeData && (
        <Source id="my-data" type="geojson" data={routeData}>
          <Layer {...routeLayer} />
        </Source>
      )}
      {markers &&
        markers.map((marker, index) => {
          // console.log(skip);
          return (
            <div
              onMouseEnter={() => setSkipData(true)}
              onMouseLeave={() => setSkipData(false)}
              key={index}
            >
              {menuData.visible && (
                <AnimatePresence>
                  <motion.ul
                    initial={{ width: 0, height: 0 }}
                    animate={{ width: 300, height: 108 }}
                    exit={{ width: 0, height: 0 }}
                    className={`bg-white m-0 z-1000`}
                    style={{
                      position: "absolute",
                      top: menuData.y,
                      left: menuData.x,
                    }}
                  >
                    <li className="flex justify-around p-2 hover:bg-gray-200 w-full cursor-pointer">
                      <span>{position.lng}</span>
                      <span>{position.lat}</span>
                    </li>
                    <li
                      onMouseEnter={() => setTypeView(true)}
                      onMouseLeave={() => setTypeView(false)}
                      className="relative p-2 hover:bg-gray-200 w-full cursor-pointer"
                    >
                      <div className="flex justify-between">
                        <span>Set a container</span>
                        <span>
                          <SquareArrowRight size={20} />
                          {/* <ArrowBigRight /> */}
                        </span>
                      </div>
                      {typeView && (
                        <motion.div
                          initial={{ width: 0, height: 0 }}
                          animate={{ width: 300, height: 108 }}
                          exit={{ height: 0 }}
                          className="bg-white absolute left-full top-0"
                        >
                          <ul>
                            <li
                              onClick={() =>
                                handleSetContainer(
                                  "bin",
                                  position.lat,
                                  position.lng,
                                )
                              }
                              className="p-2 hover:bg-gray-200 w-full cursor-pointer"
                            >
                              Bin
                            </li>
                            <li
                              onClick={() =>
                                handleSetContainer(
                                  "wheeled container",
                                  position.lat,
                                  position.lng,
                                )
                              }
                              className="p-2 hover:bg-gray-200 w-full cursor-pointer"
                            >
                              Wheeled Container
                            </li>
                            <li
                              onClick={() =>
                                handleSetContainer(
                                  "dumpster",
                                  position.lat,
                                  position.lng,
                                )
                              }
                              className="p-2 hover:bg-gray-200 w-full cursor-pointer"
                            >
                              Dumpster
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </li>
                    <li
                      onClick={() =>
                        handleSetSewage(position.lat, position.lng)
                      }
                      className="p-2 hover:bg-gray-200 w-full cursor-pointer"
                    >
                      Set a sewage point
                    </li>
                  </motion.ul>
                </AnimatePresence>
              )}
              <Marker
                longitude={marker.lon}
                latitude={marker.lat}
                // key={marker.id}
                className=""
              >
                <AnimatePresence>
                  {skipData && activateMarker && (
                    <motion.div
                      initial={{ width: 0, height: 0 }}
                      animate={{ width: 200, height: 400 }}
                      exit={{ width: 0, height: 0 }}
                      className={`bg-gray-50 z-100`}
                    >
                      <img src={Container} className="w-full h-full" />
                    </motion.div>
                  )}
                </AnimatePresence>
                {marker.type ? <Trash2 className="" /> : <Droplet />}
              </Marker>
            </div>
          );
        })}
      <Marker longitude={46.6500164769478} latitude={24.755603060745138}>
        <Truck />
      </Marker>
    </Map>
  );
};

export default MapDiv;
