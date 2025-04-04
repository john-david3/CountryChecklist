# Travel Checklist v1 Roadmap

## Features
- Users should be presented with a blank map of country all greyed out
- Users can add a country to their checklist by selecting the check box underneath the map
  - If a user clicks on a country, the map focuses in on that country
    - Users can select cities/towns in that country that they have been to
    - Can also use coordinates for this
  - Possibly display these cities on the larger world map as well (may not look good)
- When a country is selected as being visited, it should be coloured in
  - What colours? Flags?
- Logged-in users have persisted data. Logged-out users only get sessions

## Technologies
- Frontend Visualiser - React
- Backend for handling operations - Go
- Database for storing information - PostgreSQL
- JSON to parse information between React and Go?