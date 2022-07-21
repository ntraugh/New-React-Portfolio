import mapLogo from "./images/map.PNG"
import weather from "./images/newweather.PNG"
import pass from "./images/trailblaze.PNG"
import node from "./images/screenshot.PNG"

export const projects = [
    {
        title: "Maps || The Fingerprint of the Past",
        subtitle: "Map Comparisons",
        description:
          "Maps are scattered all over the internet. With this app you can compare and contrast centruries worth of data.  Using OpenWeather API, Leaflet.js, and LOC API allows you to search for any city in the world.",
        image: mapLogo,
        link: "https://hreichgelt.github.io/Maps---The-Fingerprint-of-the-Past/",
      },
      {
        title: "Trailblazers",
        subtitle: "Park Finder || Full Stack",
        description:
          "Using Sequelize, MYSQL, handlebars.js, OAUTH, this app allows the user to search for a state and an activity and they will get parks in return. Users must login to see the favorite feature.",
        image: pass,
        link: "https://intense-fjord-45584.herokuapp.com/",
      },
      {
        title: "Current Weather",
        subtitle: "Weather App",
        description:
          "Search for any city in the world and not only be presented with the current weather, but also a background image corresponding to the search. This app mainly uses OpenWeather API for weather and Unsplash for background images. ",
        image: weather,
        link: "https://ntraugh.github.io/Weather-App/",
      },
      {
        title: "Node employee generator",
        subtitle: "Node",
        description:
          "Create your own database with this CLI.  You are able to put any employee into the database as well as delete and update the employees roles whenever you like. Uses node,express, and JS",
        image: node,
        link: "https://www.youtube.com/watch?v=WB6zXUxDVO0",
      },
]