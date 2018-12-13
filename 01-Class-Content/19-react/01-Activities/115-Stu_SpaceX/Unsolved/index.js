// import axios, a small library similar to $.ajax for making AJAX requests
import axios from "axios";

// Get SpaceX launch data and log the response
// If there is an error making the request, log the error
axios
  .get("https://api.spacexdata.com/v2/launches")
  .then(response => console.log(response))
  .catch(err => console.log(err));
