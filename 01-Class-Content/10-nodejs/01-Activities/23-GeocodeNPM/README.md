# GeoCode NPM

## Files

* [`geocode.js`](Unsolved/geocode.js)

## Instructions

* Sign up for the [Mapquest API](https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register) and obtain an API key which will be required for this activity. After signing up and logging in, you can find your API key [here](https://developer.mapquest.com/user/me/profile).

* Create a Node application which makes use of the [node-geocoder](https://www.npmjs.com/package/node-geocoder) NPM package to obtain detailed geocoding information about a location. 

* Be sure to replace `YOUR-MAPQUEST-API-CONSUMER-KEY` in the `options` object with your actual MapQuest API key.

* Then `console.log` the geocoding information to display in your terminal.

* You can choose to make one of two assumptions when completing this application.

  * Easier: The user will always provide a location in the following format: "City, State" (example: "Atlanta, GA", "Houston, TX").

  * Harder: The user can provide a location in any format. In fact, they can even provide a landmark instead of an address. ("151 Sip Ave, Jersey City NJ", "1600 Pennsylvania Ave NW, Washington, DC 20500", etc.)

### Hints

* Remember to log the output using `JSON.stringify` in a pretty-print format.
