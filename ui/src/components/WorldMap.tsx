// WorldMap.tsx
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const WorldMap: React.FC = () => {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      style={{ width: "65em" }}
    >
      <ZoomableGroup zoom={1.1} maxZoom={20} minZoom={1}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#D6D6DA" },
                  hover: { fill: "#F53" },
                  pressed: { fill: "#E42" },
                }}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default WorldMap;
