# Technical Assessment - Javascript and React

## Setup Instructions
    Add the file .env in the root directory
    Add `NODE_PATH=src/` for absolute paths in .env file
    Add REACT_APP_BASE_URL=http://localhost:3000 in .env file
    Add REACT_APP_WEATHER_APP_ID=[your open weather api  app Id here ]
            PS: For the test purposes I am going to share the weather app api so that you can test.
            so final .env should be as follows

            - .env
                NODE_PATH=src/
                REACT_APP_WEATHER_APP_ID=58941b4dad8943b8955dce4470b70430
                REACT_APP_BASE_URL=http://localhost:3000



    - run `npm install`
    - run `npm start`
    - Hit localhost:3000 Bingo All set :)

## General Flow
    The Landing page shows the weather of the current area and 7 days forecast as well. There is and option to copy share url to clipboard which can be shared anywhere. Toggle for Celsius  and Fahrenheit is present on the home page as well.

    And a generic test case is written using enzyme, which checks if the app renders without crashing.

## Thanks!
