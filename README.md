# CountryChecklist
An App for visualizing all the countries that you have been to

## Prerequisites
- React v18
- NodeJS
- npm
- vite `npm install -D vite`
- Make

## Startup
- Clone the repository using `git clone https://github.com/john-david3/CountryChecklist/`
- Ensure you have installed all of the prerequisites
- On Mac or Linux run `make run dev`, to launch the program
  - If you are on Windows then the Makefile commands will not work for you, follow these instruction instead:
    - In a new terminal, run `cd cmd`, and then `go run main.go` to run the backend server
    - Open another new terminal and run `cd ui`, followed by `npm run dev` to run the frontend server
  - Windows support for the Makefile commands will be addressed in a later release
- Your app is now running, and can be viewed at `localhost:5173`

## Dependencies
- [react-simple-maps](https://www.react-simple-maps.io/)
- [d3-geo](https://github.com/d3/d3-geo)
