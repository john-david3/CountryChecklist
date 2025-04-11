// WorldMap.tsx
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";


/*
[Vatican United Kingdom Ukraine Switzerland Sweden Spain Slovakia Slovenia Serbia San Marino Romania Portugal Poland Norway Netherlands Montenegro Moldova Monaco Malta Macedonia Luxembourg Lithuania Liechtenstein Latvia Kosovo Italy Ireland Iceland Hungary Greece Germany France Finland Estonia Greenland Denmark Czechia N. Cyprus Cyprus Croatia Bulgaria Bosnia and Herz. Bolivia Belgium Belarus Austria Andorra Albania]
[Zimbabwe Zambia Micronesia Uganda Tunisia Togo Tanzania eSwatini S. Sudan Sudan South Africa Somalia Sierra Leone Seychelles Senegal São Tomé and Principe Rwanda Nigeria Niger Namibia Mozambique Morocco Mauritius Mauritania Mali Maldives Malawi Madagascar Libya Liberia Lesotho Kuwait Kenya Guinea-Bissau Guinea Ghana Gambia Gabon Ethiopia Eritrea Eq. Guinea Egypt Djibouti Côte d'Ivoire Dem. Rep. Congo Congo Comoros Chad Central African Rep. Cabo Verde Cameroon Burundi Burkina Faso Botswana Benin Angola Algeria]
[Yemen Vietnam Uzbekistan United Arab Emirates Turkmenistan Turkey Thailand Tajikistan Taiwan Syria Sri Lanka South Korea Singapore Saudi Arabia Russia Qatar Philippines Pakistan Oman North Korea Nepal Mongolia Malaysia Lebanon Laos Kyrgyzstan Kazakhstan Jordan Japan Israel Palestine Iraq Iran Indonesia India Georgia China Cambodia Myanmar Brunei Bhutan Bangladesh Bahrain Azerbaijan Armenia Afghanistan]
[Venezuela Uruguay Suriname Peru Paraguay Ecuador Colombia Chile Brazil Argentina]
[Puerto Rico United States of America Trinidad and Tobago St. Vin. and Gren. Saint Lucia St. Kitts and Nevis Panama Nicaragua Mexico Jamaica Honduras Haiti Guyana Guatemala Grenada El Salvador Dominican Rep. Dominica Cuba Costa Rica Canada Belize Barbados Bahamas Antigua and Barb.]
[Vanuatu Marshall Is. American Samoa Tonga Timor-Leste Solomon Is. Samoa Papua New Guinea Palau New Zealand Nauru Kiribati Fiji Australia]
[N. Mariana Is. U.S. Virgin Is. Guam S. Geo. and the Is. Br. Indian Ocean Ter. Saint Helena Pitcairn Is. Anguilla Falkland Is. Cayman Is. Bermuda British Virgin Is. Turks and Caicos Is. Montserrat Jersey Guernsey Isle of Man Somaliland Niue Cook Is. Aruba Curaçao W. Sahara St. Pierre and Miquelon Wallis and Futuna Is. St-Martin St-Barthélemy Fr. Polynesia New Caledonia Fr. S. Antarctic Lands Åland Faeroe Is. Macao Hong Kong Indian Ocean Ter. Heard I. and McDonald Is. Norfolk Island Ashmore and Cartier Is. Siachen Glacier Antarctica Sint Maarten]
*/


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
