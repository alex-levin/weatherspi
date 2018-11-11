Application name: Weatherspi
Bing maps key: AuocNZZGFHV1k0cPvoe0isu3PUJWtKuATK6u9kUImXkzyBsC9p3yeMUA-043beei

http://dev.virtualearth.net/REST/v1/Locations?CountryRegion=US&postalCode=01760&key=AuocNZZGFHV1k0cPvoe0isu3PUJWtKuATK6u9kUImXkzyBsC9p3yeMUA-043beei
http://dev.virtualearth.net/REST/v1/Locations?CountryRegion=US&adminDistrict=MA&locality=natick&key=AuocNZZGFHV1k0cPvoe0isu3PUJWtKuATK6u9kUImXkzyBsC9p3yeMUA-043beei

{"authenticationResultCode":"ValidCredentials","brandLogoUri":"http:\/\/dev.virtualearth.net\/Branding\/logo_powered_by.png",
	"copyright":"Copyright © 2018 Microsoft and its suppliers. All rights reserved. This API cannot be accessed and the content and any results may not be used, reproduced or transmitted in any manner without express written permission from Microsoft Corporation.",
	"resourceSets":[{"estimatedTotal":1,
						"resources":[{"__type":"Location:http:\/\/schemas.microsoft.com\/search\/local\/ws\/rest\/v1",
										"bbox":[42.2478103637695,-71.4024887084961,42.3301391601562,-71.3029098510742],
										"name":"01760, MA",
										"point":{"type":"Point","coordinates":[42.2846603393555,-71.3477401733398]},
										"address":{"adminDistrict":"MA","adminDistrict2":"Middlesex County","countryRegion":"United States","formattedAddress":"01760, MA","locality":"Natick","postalCode":"01760"},"confidence":"High","entityType":"Postcode1","geocodePoints":[{"type":"Point","coordinates":[42.2846603393555,-71.3477401733398],"calculationMethod":"Rooftop","usageTypes":["Display"]}],"matchCodes":["Good"]}]}],"statusCode":200,"statusDescription":"OK","traceId":"1db4dcd1bc334b3685a8335690ff37eb|BN1CDACC19|7.7.0.0|Ref A: 5624B4D9AA544623A84E28448FB4FBC3 Ref B: BN3EDGE0821 Ref C: 2018-11-11T00:08:34Z"}

lat=42, lon=-71

https://api.weather.gov/points/42.2478103637695,-71.4024887084961

{
    "properties": {
        "@id": "https://api.weather.gov/points/42.2478,-71.4025",
        "@type": "wx:Point",
        "cwa": "BOX",
        "forecastOffice": "https://api.weather.gov/offices/BOX",
        "gridX": 60,
        "gridY": 69,
        "forecast": "https://api.weather.gov/gridpoints/BOX/60,69/forecast",
        "forecastHourly": "https://api.weather.gov/gridpoints/BOX/60,69/forecast/hourly",
        "forecastGridData": "https://api.weather.gov/gridpoints/BOX/60,69",
        "observationStations": "https://api.weather.gov/gridpoints/BOX/60,69/stations"

https://api.weather.gov/gridpoints/BOX/60,69/forecast
{
    "properties": {
        "updated": "2018-11-11T14:28:59+00:00",
        "units": "us",
        "forecastGenerator": "BaselineForecastGenerator",
        "generatedAt": "2018-11-11T16:49:59+00:00",
        "updateTime": "2018-11-11T14:28:59+00:00",
        "validTimes": "2018-11-11T08:00:00+00:00/P8DT6H",
        "elevation": {
            "value": 75.895200000000003,
            "unitCode": "unit:m"
        },
        "periods": [
            {
                "number": 1,
                "name": "Veterans Day",
                "startTime": "2018-11-11T11:00:00-05:00",
                "endTime": "2018-11-11T18:00:00-05:00",
                "isDaytime": true,
                "temperature": 41,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "7 to 13 mph",
                "windDirection": "W",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "shortForecast": "Sunny",
                "detailedForecast": "Sunny, with a high near 41. West wind 7 to 13 mph, with gusts as high as 29 mph."
            },
            {
                "number": 2,
                "name": "Tonight",
                "startTime": "2018-11-11T18:00:00-05:00",
                "endTime": "2018-11-12T06:00:00-05:00",
                "isDaytime": false,
                "temperature": 24,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "5 mph",
                "windDirection": "W",
                "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
                "shortForecast": "Mostly Clear",
                "detailedForecast": "Mostly clear, with a low around 24. West wind around 5 mph."
            },
            {
                "number": 3,
                "name": "Monday",
                "startTime": "2018-11-12T06:00:00-05:00",
                "endTime": "2018-11-12T18:00:00-05:00",
                "isDaytime": true,
                "temperature": 47,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "5 mph",
                "windDirection": "SW",
                "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
                "shortForecast": "Sunny",
                "detailedForecast": "Sunny, with a high near 47. Southwest wind around 5 mph."
            },
            {
                "number": 4,
                "name": "Monday Night",
                "startTime": "2018-11-12T18:00:00-05:00",
                "endTime": "2018-11-13T06:00:00-05:00",
                "isDaytime": false,
                "temperature": 36,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "3 mph",
                "windDirection": "SE",
                "icon": "https://api.weather.gov/icons/land/night/bkn/rain,90?size=medium",
                "shortForecast": "Mostly Cloudy then Light Rain Likely",
                "detailedForecast": "Rain likely between 2am and 4am, then rain and patchy fog. Mostly cloudy, with a low around 36. Southeast wind around 3 mph. Chance of precipitation is 90%. New rainfall amounts between a tenth and quarter of an inch possible."
            },
			...
            {
                "number": 13,
                "name": "Saturday",
                "startTime": "2018-11-17T06:00:00-05:00",
                "endTime": "2018-11-17T18:00:00-05:00",
                "isDaytime": true,
                "temperature": 46,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "6 mph",
                "windDirection": "NW",
                "icon": "https://api.weather.gov/icons/land/day/rain_showers,30/rain_showers,40?size=medium",
                "shortForecast": "Chance Rain Showers",
                "detailedForecast": "A chance of rain showers. Partly sunny, with a high near 46. Chance of precipitation is 40%."
            },
            {
                "number": 14,
                "name": "Saturday Night",
                "startTime": "2018-11-17T18:00:00-05:00",
                "endTime": "2018-11-18T06:00:00-05:00",
                "isDaytime": false,
                "temperature": 30,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "6 mph",
                "windDirection": "NW",
                "icon": "https://api.weather.gov/icons/land/night/rain_showers,40/snow,30?size=medium",
                "shortForecast": "Chance Rain Showers then Chance Rain And Snow Showers",
                "detailedForecast": "A chance of rain showers before midnight, then a chance of rain and snow showers. Mostly cloudy, with a low around 30. Chance of precipitation is 40%."
            }

https://api.weather.gov/gridpoints/BOX/60,69/forecast/hourly
{
    "properties": {
        "updated": "2018-11-11T14:28:59+00:00",
        "units": "us",
        "forecastGenerator": "HourlyForecastGenerator",
        "generatedAt": "2018-11-11T16:54:13+00:00",
        "updateTime": "2018-11-11T14:28:59+00:00",
        "validTimes": "2018-11-11T08:00:00+00:00/P8DT6H",
        "elevation": {
            "value": 75.895200000000003,
            "unitCode": "unit:m"
        },
        "periods": [
            {
                "number": 1,
                "name": "",
                "startTime": "2018-11-11T11:00:00-05:00",
                "endTime": "2018-11-11T12:00:00-05:00",
                "isDaytime": true,
                "temperature": 38,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "13 mph",
                "windDirection": "W",
                "icon": "https://api.weather.gov/icons/land/day/few?size=small",
                "shortForecast": "Sunny",
                "detailedForecast": ""
            },
            {
                "number": 2,
                "name": "",
                "startTime": "2018-11-11T12:00:00-05:00",
                "endTime": "2018-11-11T13:00:00-05:00",
                "isDaytime": true,
                "temperature": 40,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "12 mph",
                "windDirection": "W",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=small",
                "shortForecast": "Sunny",
                "detailedForecast": ""
            },
			...
            {
                "number": 155,
                "name": "",
                "startTime": "2018-11-17T21:00:00-05:00",
                "endTime": "2018-11-17T22:00:00-05:00",
                "isDaytime": false,
                "temperature": 38,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "5 mph",
                "windDirection": "NW",
                "icon": "https://api.weather.gov/icons/land/night/rain_showers?size=small",
                "shortForecast": "Chance Rain Showers",
                "detailedForecast": ""
            },
            {
                "number": 156,
                "name": "",
                "startTime": "2018-11-17T22:00:00-05:00",
                "endTime": "2018-11-17T23:00:00-05:00",
                "isDaytime": false,
                "temperature": 37,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "6 mph",
                "windDirection": "NW",
                "icon": "https://api.weather.gov/icons/land/night/rain_showers?size=small",
                "shortForecast": "Chance Rain Showers",
                "detailedForecast": ""
            }			