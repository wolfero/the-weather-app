# Content index

-   [Getting Started](#getting-started)
    -   [Pre-requisites](#pre-requisites-%EF%B8%8F)
    -   [Installation](#installation-)
    -   [Running the project](#running-the-project-)
-   [Abstract](#abstract)
-   [Acceptance Criteria](#acceptance-criteria)
-   [Tools & Dependencies](#tools--dependencies)
-   [Assumptions](#assumptions)
-   [Components](#components)
-   [End-to-End flow](#end-to-end-flow)
-   [Data structures](#data-structures)

# Getting Started
-   ## Pre-requisites ✔️
    It's necessary to create an .env file and add the API KEY in the following format:
    
    `REACT_APP_ACCESS_KEY = HERE YOUR API KEY`
-   ## Installation 🛠
    `npm install`
-   ## Running the project ✈

    `npm run start` [http://localhost:3000](http://localhost:3000) to view it in the browser.

    `npm run test` [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

# Abstract

A react app that is capable of displaying the weather forecast for 5 days.

# Acceptance Criteria

1. We want to see only 3 cards, the center card being for today's forecast.
2. We want to be able to navigate between the 5 days by clicking on right & left arrows.
3. We want to be able to search the weather forecast by city, Tunis being the default.
4. We want to be able to switch between temperature units (celsius & fahrenheit, celsius being the default), free to add more weather info per card.
5. (Bonus) We want to be able to see a barchart that displays all forecasts (5 days).
6. OpenWeatherMap API: https://api.openweathermap.org/data/2.5/forecastlat={lat}&lon={lon}&appid={apikey}.

# Tools & Dependencies:

1. Project should be published into github as public repository.
2. App should be created using create-react-app with typescript (noImplicitAny is false).
3. For fetching data, please use axios.
4. For testing : react testing library & MSW (Mock Service Worker) for mocking the api.
5. For managing state , we prefer that you use redux , but you are free to use whatever you feel comfortable with.
6. Free to use whatever UI library, for custom styling , please use css-in-js (any implementation stitches, styled-components, material ui ).

# Assumptions

-   When loading 5 days are today plus the 4 future days, as the API only provides us with future days.
-   When searching for a city that does not exist, let's control this with a warning and keeping the name in the search bar.
-   After performing a failed city search, when the search bar is emptied, it should show the last search performed without querying the API again.

# Supported use-cases

-   All requests are made using axios to the OpenWeatherMap API.
-   We can change the temperature units between Celsius or Fahrenheit.
-   A search by city name can be performed to obtain the weather data.
-   Can be navigated in two available ways:
    -   Clicking on the arrows.
    -   Dragging the cards as if it were a slider.
-   When an error occurs, it is controlled by displaying a message to the user.

# Used packages

    - [redux-toolkit](https://redux-toolkit.js.org/)
    - [axios](https://axios-http.com/es/)
    - [swiper](https://swiperjs.com/)
    - [react-apexcharts](https://apexcharts.com/)

# Components

![image](https://user-images.githubusercontent.com/64894110/196999161-8efd50bf-22c4-4585-9157-591e45d912b8.png)

# End-to-End flow

![image](https://user-images.githubusercontent.com/64894110/196999375-b43f8596-da1a-43d5-a473-5e1801ecbcea.png)
![image](https://user-images.githubusercontent.com/64894110/196999479-bae94978-9d4c-4293-bf4a-0ef8a902f118.png)

# Data structures

```{
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1666288800,
      "main": {
        "temp": 27.96,
        "feels_like": 27.38,
        "temp_min": 26.09,
        "temp_max": 27.96,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 1017,
        "humidity": 36,
        "temp_kf": 1.87
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.24,
        "deg": 120,
        "gust": 4.92
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-20 18:00:00"
    },
    {
      "dt": 1666299600,
      "main": {
        "temp": 25.25,
        "feels_like": 25.03,
        "temp_min": 23.43,
        "temp_max": 25.25,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1018,
        "humidity": 46,
        "temp_kf": 1.82
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.92,
        "deg": 94,
        "gust": 4.31
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-20 21:00:00"
    },
    {
      "dt": 1666310400,
      "main": {
        "temp": 22.15,
        "feels_like": 21.83,
        "temp_min": 22.15,
        "temp_max": 22.15,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1018,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.54,
        "deg": 88,
        "gust": 3.13
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-21 00:00:00"
    },
    {
      "dt": 1666321200,
      "main": {
        "temp": 21.04,
        "feels_like": 20.71,
        "temp_min": 21.04,
        "temp_max": 21.04,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1018,
        "humidity": 58,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.06,
        "deg": 106,
        "gust": 2.11
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-21 03:00:00"
    },
    {
      "dt": 1666332000,
      "main": {
        "temp": 20.3,
        "feels_like": 19.98,
        "temp_min": 20.3,
        "temp_max": 20.3,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1019,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 0.61,
        "deg": 206,
        "gust": 0.61
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-21 06:00:00"
    },
    {
      "dt": 1666342800,
      "main": {
        "temp": 23.07,
        "feels_like": 22.69,
        "temp_min": 23.07,
        "temp_max": 23.07,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 1020,
        "humidity": 48,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.35,
        "deg": 213,
        "gust": 1.21
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-21 09:00:00"
    },
    {
      "dt": 1666353600,
      "main": {
        "temp": 26.46,
        "feels_like": 26.46,
        "temp_min": 26.46,
        "temp_max": 26.46,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1018,
        "humidity": 36,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.32,
        "deg": 230,
        "gust": 2.45
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-21 12:00:00"
    },
    {
      "dt": 1666364400,
      "main": {
        "temp": 27.78,
        "feels_like": 27.03,
        "temp_min": 27.78,
        "temp_max": 27.78,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1017,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.46,
        "deg": 245,
        "gust": 2.41
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-21 15:00:00"
    },
    {
      "dt": 1666375200,
      "main": {
        "temp": 26.31,
        "feels_like": 26.31,
        "temp_min": 26.31,
        "temp_max": 26.31,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1018,
        "humidity": 36,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.97,
        "deg": 211,
        "gust": 2.01
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-21 18:00:00"
    },
    {
      "dt": 1666386000,
      "main": {
        "temp": 24.54,
        "feels_like": 24.09,
        "temp_min": 24.54,
        "temp_max": 24.54,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1019,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 0.81,
        "deg": 201,
        "gust": 0.82
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-21 21:00:00"
    },
    {
      "dt": 1666396800,
      "main": {
        "temp": 23.15,
        "feels_like": 22.77,
        "temp_min": 23.15,
        "temp_max": 23.15,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1019,
        "humidity": 48,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.99,
        "deg": 81,
        "gust": 2.01
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-22 00:00:00"
    },
    {
      "dt": 1666407600,
      "main": {
        "temp": 21.45,
        "feels_like": 20.96,
        "temp_min": 21.45,
        "temp_max": 21.45,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1019,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 1.84,
        "deg": 146,
        "gust": 1.91
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-22 03:00:00"
    },
    {
      "dt": 1666418400,
      "main": {
        "temp": 20,
        "feels_like": 19.36,
        "temp_min": 20,
        "temp_max": 20,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 1020,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 6
      },
      "wind": {
        "speed": 1.08,
        "deg": 182,
        "gust": 1.2
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-22 06:00:00"
    },
    {
      "dt": 1666429200,
      "main": {
        "temp": 23.34,
        "feels_like": 22.75,
        "temp_min": 23.34,
        "temp_max": 23.34,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 1021,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 4
      },
      "wind": {
        "speed": 1.81,
        "deg": 215,
        "gust": 2.41
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-22 09:00:00"
    },
    {
      "dt": 1666440000,
      "main": {
        "temp": 27.37,
        "feels_like": 26.58,
        "temp_min": 27.37,
        "temp_max": 27.37,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1020,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 2
      },
      "wind": {
        "speed": 3.32,
        "deg": 240,
        "gust": 3.71
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-22 12:00:00"
    },
    {
      "dt": 1666450800,
      "main": {
        "temp": 28.54,
        "feels_like": 27.32,
        "temp_min": 28.54,
        "temp_max": 28.54,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1018,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 2
      },
      "wind": {
        "speed": 2.74,
        "deg": 258,
        "gust": 2.91
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-22 15:00:00"
    },
    {
      "dt": 1666461600,
      "main": {
        "temp": 26.65,
        "feels_like": 26.65,
        "temp_min": 26.65,
        "temp_max": 26.65,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1019,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 2.12,
        "deg": 192,
        "gust": 2.11
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-22 18:00:00"
    },
    {
      "dt": 1666472400,
      "main": {
        "temp": 24.35,
        "feels_like": 23.73,
        "temp_min": 24.35,
        "temp_max": 24.35,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 1020,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.6,
        "deg": 226,
        "gust": 1.63
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-22 21:00:00"
    },
    {
      "dt": 1666483200,
      "main": {
        "temp": 23.39,
        "feels_like": 22.72,
        "temp_min": 23.39,
        "temp_max": 23.39,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1020,
        "humidity": 36,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.08,
        "deg": 254,
        "gust": 2.11
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-23 00:00:00"
    },
    {
      "dt": 1666494000,
      "main": {
        "temp": 22.21,
        "feels_like": 21.5,
        "temp_min": 22.21,
        "temp_max": 22.21,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1020,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.85,
        "deg": 223,
        "gust": 1.9
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-23 03:00:00"
    },
    {
      "dt": 1666504800,
      "main": {
        "temp": 21.02,
        "feels_like": 20.25,
        "temp_min": 21.02,
        "temp_max": 21.02,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 1020,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.87,
        "deg": 217,
        "gust": 1.9
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-23 06:00:00"
    },
    {
      "dt": 1666515600,
      "main": {
        "temp": 25.05,
        "feels_like": 24.42,
        "temp_min": 25.05,
        "temp_max": 25.05,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 1021,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.85,
        "deg": 229,
        "gust": 3.61
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-23 09:00:00"
    },
    {
      "dt": 1666526400,
      "main": {
        "temp": 28.8,
        "feels_like": 27.47,
        "temp_min": 28.8,
        "temp_max": 28.8,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1020,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 2
      },
      "wind": {
        "speed": 4,
        "deg": 252,
        "gust": 4.41
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-23 12:00:00"
    },
    {
      "dt": 1666537200,
      "main": {
        "temp": 29.89,
        "feels_like": 28.26,
        "temp_min": 29.89,
        "temp_max": 29.89,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1018,
        "humidity": 23,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 3.59,
        "deg": 250,
        "gust": 3.71
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-23 15:00:00"
    },
    {
      "dt": 1666548000,
      "main": {
        "temp": 27.31,
        "feels_like": 26.54,
        "temp_min": 27.31,
        "temp_max": 27.31,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1019,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 2.78,
        "deg": 238,
        "gust": 2.92
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-23 18:00:00"
    },
    {
      "dt": 1666558800,
      "main": {
        "temp": 24.84,
        "feels_like": 24.19,
        "temp_min": 24.84,
        "temp_max": 24.84,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1020,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.21,
        "deg": 217,
        "gust": 2.2
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-23 21:00:00"
    },
    {
      "dt": 1666569600,
      "main": {
        "temp": 23.62,
        "feels_like": 22.93,
        "temp_min": 23.62,
        "temp_max": 23.62,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1020,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.72,
        "deg": 267,
        "gust": 1.81
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-24 00:00:00"
    },
    {
      "dt": 1666580400,
      "main": {
        "temp": 22.79,
        "feels_like": 22.06,
        "temp_min": 22.79,
        "temp_max": 22.79,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1019,
        "humidity": 36,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.01,
        "deg": 272,
        "gust": 2.12
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-24 03:00:00"
    },
    {
      "dt": 1666591200,
      "main": {
        "temp": 21.94,
        "feels_like": 21.13,
        "temp_min": 21.94,
        "temp_max": 21.94,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 1020,
        "humidity": 36,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.53,
        "deg": 246,
        "gust": 2.6
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-24 06:00:00"
    },
    {
      "dt": 1666602000,
      "main": {
        "temp": 25.97,
        "feels_like": 25.97,
        "temp_min": 25.97,
        "temp_max": 25.97,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 1021,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.06,
        "deg": 235,
        "gust": 3.7
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-24 09:00:00"
    },
    {
      "dt": 1666612800,
      "main": {
        "temp": 29.44,
        "feels_like": 27.86,
        "temp_min": 29.44,
        "temp_max": 29.44,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1019,
        "humidity": 22,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.13,
        "deg": 256,
        "gust": 4.54
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-24 12:00:00"
    },
    {
      "dt": 1666623600,
      "main": {
        "temp": 30.17,
        "feels_like": 28.35,
        "temp_min": 30.17,
        "temp_max": 30.17,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1018,
        "humidity": 19,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.02,
        "deg": 256,
        "gust": 4.13
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-24 15:00:00"
    },
    {
      "dt": 1666634400,
      "main": {
        "temp": 27.2,
        "feels_like": 26.27,
        "temp_min": 27.2,
        "temp_max": 27.2,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1019,
        "humidity": 22,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.59,
        "deg": 264,
        "gust": 2.72
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-24 18:00:00"
    },
    {
      "dt": 1666645200,
      "main": {
        "temp": 24.93,
        "feels_like": 24.13,
        "temp_min": 24.93,
        "temp_max": 24.93,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1019,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.95,
        "deg": 251,
        "gust": 2.01
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-24 21:00:00"
    },
    {
      "dt": 1666656000,
      "main": {
        "temp": 23.64,
        "feels_like": 22.76,
        "temp_min": 23.64,
        "temp_max": 23.64,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1019,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.93,
        "deg": 288,
        "gust": 2.01
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-25 00:00:00"
    },
    {
      "dt": 1666666800,
      "main": {
        "temp": 22.54,
        "feels_like": 21.58,
        "temp_min": 22.54,
        "temp_max": 22.54,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1018,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.09,
        "deg": 279,
        "gust": 2.2
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-10-25 03:00:00"
    },
    {
      "dt": 1666677600,
      "main": {
        "temp": 21.75,
        "feels_like": 20.71,
        "temp_min": 21.75,
        "temp_max": 21.75,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1019,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.31,
        "deg": 268,
        "gust": 2.4
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-25 06:00:00"
    },
    {
      "dt": 1666688400,
      "main": {
        "temp": 26.43,
        "feels_like": 26.43,
        "temp_min": 26.43,
        "temp_max": 26.43,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1020,
        "humidity": 20,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.39,
        "deg": 252,
        "gust": 4.4
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-25 09:00:00"
    },
    {
      "dt": 1666699200,
      "main": {
        "temp": 29.88,
        "feels_like": 28.05,
        "temp_min": 29.88,
        "temp_max": 29.88,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1018,
        "humidity": 15,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.13,
        "deg": 262,
        "gust": 5.81
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-25 12:00:00"
    },
    {
      "dt": 1666710000,
      "main": {
        "temp": 30.32,
        "feels_like": 28.39,
        "temp_min": 30.32,
        "temp_max": 30.32,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1016,
        "humidity": 14,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 2
      },
      "wind": {
        "speed": 5.03,
        "deg": 269,
        "gust": 5.42
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2022-10-25 15:00:00"
    }
  ],
  "city": {
    "id": 2464461,
    "name": "Tunisia",
    "coord": {
      "lat": 34,
      "lon": 9
    },
    "country": "TN",
    "population": 10589025,
    "timezone": 3600,
    "sunrise": 1666243965,
    "sunset": 1666284274
  }
}
```
