# Open Weather API Weather App! 

Nothing too fancy here, just trying my hand at a weather app using JavaScript, Fetch and Async/Await when dealing with API's. This app has four main files: 

### 1. Weather.js 

This file connects to the OpenWeatherAPI and conducts two get requests to the API to return current and forecast weather data as an object. This method is then called in app.js

### 2. App.js 

This file contains the events and the instantiation of the `Weather()`, `Time()` and `UI()` objects. It also contains an event handler that executes the main logical flow. On click, if location enabled, the users position data is passed to the success callback which then passes the position coordinates to the fetch call, which returns the the current and forecast data objects as promises. This data is accessed using the .then() method and the data object is passed to the UI methods that use it.

### 3. UI.js

This file has two main methods: `forecast(data)` and `currentWeather(data)`. Both methods take in the data object, target the `now` and `forecast` objects respectively, and output data to the DOM through the `.innerHTML()` method. 

### 4. Time.js

This is a simple library I made that helps with time conversion from UTC timestamps to 12 and 24 hour time. 

## TO DO 

- [x] Build out weather.js file to fetch data from the OpenWeatherAPI based on the window object location object.
- [x] Build the UI.js file to:
    - [x] Build a current weather update based on the users location.
    - [x] Build a 5 day forecast based on the users location.
- [x] Connect the Unsplash API to output a background image to the body that corresponds with the weather.
- [ ] Connect button to refresh page through event bubbling


## Bugs
- [ ] UI.js - Background image conditional for night produces some random and non related images; perhaps chose the first image of the array instead of random. 
- [ ] WEATHER.js - Console Warning: Violation Only request geolocation information in response to a user gesture. Useful links: [1](https://stackoverflow.com/questions/47581575/only-request-geolocation-information-in-response-to-a-user-gesture)
- [ ] CSS: Forecast table overflow from container
