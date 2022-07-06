import mapLogo from "./images/map.PNG"
import weather from "./images/newweather.PNG"
import pass from "./images/pass3.PNG"
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
        title: "Current Weather",
        subtitle: "Weather App",
        description:
          "Search for any city in the world and not only be presented with the current weather, but also a background image corresponding to the search. This app mainly uses OpenWeather API for weather and Unsplash for background images. ",
        image: weather,
        link: "https://ntraugh.github.io/Weather-App/",
      },
      {
        title: "Javascript password",
        subtitle: "Password Generator",
        description:
          "Take away the hassle of having to think of a tough password with this javascript password generator.  Answer the prompts and watch as the app creates a very strong password for you.",
        image: pass,
        link: "https://ntraugh.github.io/Password-Generator/",
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