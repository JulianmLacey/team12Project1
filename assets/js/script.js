
var submitCity = document.getElementById("submit-city")

submitCity.addEventListener("click", function() {
    var searchInput = document.getElementById("city-search").value;
    searchCity(searchInput)
})

function searchCity(searchInput) {
    var searchForm = document.getElementById("search")
    
    var cityStateSelect = document.createElement("select");

        // const url = `https://find-places-to-live.p.rapidapi.com/location?query=${searchInput}`;
        // const options = {
	    // method: 'GET',
	    // headers: {
	    // 	'X-RapidAPI-Key': 'ef09a4f5bbmsh3dd4fee7e15cf2ep1c973ejsna3a2ad737be5',
	    // 	'X-RapidAPI-Host': 'find-places-to-live.p.rapidapi.com'
	    //     }
        // };
        
        // fetch(url, options)
        //     .then(function (response) {
        //         console.log(response)
        //         return response.json()
        // })
        //     .then(function (data) {
        //     console.log(data)

            // remember to change cities back to **data** after testing is done
            // iterate through the data array of all the different cities and turn them into
            // a dropdown menu for the user to select the correct city and state
            cities.forEach(city => {
                var cityOption = document.createElement("option")
                cityOption.textContent = `${city.label}, ${city.state}`
                cityOption.setAttribute("type", city.type)
                cityOption.setAttribute("name", city.urlFragment)
                cityOption.setAttribute("city", city.label)
                cityOption.setAttribute("state", city.state)
                cityStateSelect.appendChild(cityOption) 
            })
            
            searchForm.appendChild(cityStateSelect)

            cityStateSelect.addEventListener("change", function() {
                var selectedCity = cityStateSelect.options[cityStateSelect.selectedIndex]
                
                // will need to find a way to change city name textContent dynamically 
                var cityNameDisplay = document.getElementById("city-report");
                
                cityNameDisplay.textContent = selectedCity.textContent
                var cityUrl = selectedCity.getAttribute("name");
                var cityType = selectedCity.getAttribute("type");
                var cityName = selectedCity.getAttribute("city");
                var cityState = selectedCity.getAttribute("state")
              
                getRentPrices(cityUrl, cityType)
                getHouseOptions(cityName, cityState)

            })
       
    // })
}
// searchCity()




function getRentPrices(city, type) {
//     const url = `https://find-places-to-live.p.rapidapi.com/placesToLive?place=${city}&type=${type}`;
//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ef09a4f5bbmsh3dd4fee7e15cf2ep1c973ejsna3a2ad737be5',
// 		'X-RapidAPI-Host': 'find-places-to-live.p.rapidapi.com'
// 	}
// };

//     fetch(url, options).then(function (response) {
//         console.log(response)
//         return response.json()
//     }).then(function (data) {
//         console.log(data)

    var rent = document.getElementById("medianRent");
    var own = document.getElementById("medianHome");
        
    var medianRent = data["real-estate"]["Median Rent"]["value"];
    var medianHome = data["real-estate"]["Median Home Value"]["value"];
    
    rent.textContent = "Median Rent: " + "$" + medianRent.toString();
    own.textContent = "Median Home Price: " + "$" + medianHome.toString();
    
    var reportCard = data["report-card"];      
    var reportScores = Object.values(reportCard)

    
    var count = 0
    reportScores.forEach(score => {
        var li = document.createElement("li")
        li.textContent = Object.keys(reportCard)[count] + ": " + score["value"]
        count ++
        own.appendChild(li)
        })
        
    // })
}

function getHouseOptions(city, state) {
    var Qcity = city, Qstate = state
    var Bed_rooms, bath_rooms, limit = 10;
    // function getHousing() {
    //       const settings = {
    //         async: true,
    //         crossDomain: true,
    //         url: 'https://realty-mole-property-api.p.rapidapi.com/saleListings?city=' + Qcity +"state=" + Qstate,
    //         data: {
    //           state: Qstate,
    //           bedrooms: Bed_rooms,
    //           bathrooms: bath_rooms
    //         },
    //         method: 'GET',
    //         headers: {
    //           'X-RapidAPI-Key': '1fc0b1137emsha592badbb2ae9fap1a1cbajsn46535d340b45',
    //           'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
    //         }
    //       };
    // }
    var includesKeys = ""
    var cityHomes = document.getElementById("city-homes");
    var homeSearch = document.getElementById("submit-rooms");
    var bedrooms = document.getElementById("bedrooms");
    var bathrooms = document.getElementById("bathrooms");

    homeSearch.addEventListener("click", function() {
        var bed_rooms = bedrooms.value
        var bath_rooms = bathrooms.value
        
        var filteredHomes = homes.filter(function(home) {
            return  home.bedrooms === parseInt(bed_rooms) && home.bathrooms === parseInt(bath_rooms);
        })
            filteredHomes.forEach(function(object) {
                var homeDetails = document.createElement("div");
                homeDetails.classList.add("object");

                for(var key in object) {
                    if (object.hasOwnProperty(key)) {
                        var propertyDetails = document.createElement("p");
                        propertyDetails.textContent = key + ":" + object[key]
                        homeDetails.appendChild(propertyDetails)
            
                    }
                }
                cityHomes.appendChild(homeDetails)
        })
    })        
}
getHouseOptions()

// commented dummy responses for testing purposes
// data refers to city report card api, cities array is for search parameters of report card
// homes is for housing options
 var data = {
    "report-card": {
        "Overall Niche Grade": {
            "description": "Based on school quality, crime rates, cost of living, employment, and things to do in the area.",
            "value": 4
        },
        "Public Schools": {
            "description": "Based on statistics, student and parent reviews, and expert insights.",
            "value": 3.66
        },
        "Crime & Safety": {
            "description": "Based on violent and property crime rates.",
            "value": 2
        },
        "Housing": {
            "description": "Based on home values, property taxes, housing costs, local schools, and more.",
            "value": 2.33
        },
        "Nightlife": {
            "description": "Based on access to bars, restaurants, theaters, and other attractions. ",
            "value": 4
        },
        "Good for Families": {
            "description": "Based on school quality, safety, and family-friendly living.",
            "value": 3.66
        },
        "Diversity": {
            "description": "Based on ethnic and economic diversity. ",
            "value": 4.33
        },
        "Jobs": {
            "description": "Based on employment rates, job and business growth, and cost of living.",
            "value": 3.66
        },
        "Weather": {
            "description": "Based on number of sunny days, precipitation, and average temperatures.",
            "value": 3.33
        },
        "Cost of Living": {
            "description": "Based on the consumer price index and access to affordable housing. ",
            "value": 2
        },
        "Health & Fitness": {
            "description": "Based on community health statistics and access to healthcare.",
            "value": 3.66
        },
        "Outdoor Activities": {
            "description": "Based on weather, air quality, and access to parks and other recreational opportunities.",
            "value": 3.66
        },
        "Commute": {
            "description": "Based on typical commute time and method.",
            "value": 3.66
        }
    },
    "about": {
        "Population": {
            "value": 944658
        }
    },
    "real-estate": {
        "Median Home Value": {
            "value": 381400,
            "national": 244900
        },
        "Median Rent": {
            "value": 1415,
            "national": 1163
        },
        "Area Feel": {
            "value": "Urban Suburban Mix"
        },
        "Rent vs. Own": {
            "value": {
                "Own": "0.4467894516741273",
                "Rent": "0.5532105483258727"
            }
        }
    },
    "rankings": {
        "Best Cities for Young Professionals in America": {
            "value": 19,
            "total": 228
        },
        "Best Cities to Live in America": {
            "value": 24,
            "total": 228
        },
        "Best Cities to Raise a Family in America": {
            "value": 33,
            "total": 228
        }
    },
    "schools": {
        "Public Schools": {
            "Liberal Arts & Science Academy": {
                "location": "AUSTIN, TX",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 4.14,
                    "count": 511
                }
            },
            "Westlake High School": {
                "location": "AUSTIN, TX",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 4.23,
                    "count": 524
                }
            },
            "Westwood High IB World School": {
                "location": "AUSTIN, TX",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 3.95,
                    "count": 670
                }
            },
            "Vandegrift High School": {
                "location": "AUSTIN, TX",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 4.08,
                    "count": 473
                }
            },
            "Forest Trail Elementary School": {
                "location": "AUSTIN, TX",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 5,
                    "count": 2
                }
            }
        },
        "Private Schools": {
            "St. Stephen's Episcopal School": {
                "location": "AUSTIN, TX",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 3.98,
                    "count": 94
                }
            },
            "St. Andrew's Episcopal School": {
                "location": "AUSTIN, TX",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 4.16,
                    "count": 77
                }
            },
            "Austin Peace Academy": {
                "location": "AUSTIN, TX",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 4.38,
                    "count": 116
                }
            },
            "St. Michael's Catholic Academy": {
                "location": "AUSTIN, TX",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 4.08,
                    "count": 59
                }
            },
            "Griffin School": {
                "location": "AUSTIN, TX",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 4.56,
                    "count": 41
                }
            }
        }
    },
    "neighborhoods": {
        "Gateway": {
            "location": "Neighborhood in Austin, TX",
            "grades": {
                "Overall Niche Grade": {
                    "value": 4.33
                },
                "Public Schools": {
                    "value": 4
                }
            },
            "review": {
                "average": 0,
                "count": 0
            }
        },
        "Hyde Park": {
            "location": "Neighborhood in Austin, TX",
            "grades": {
                "Overall Niche Grade": {
                    "value": 4.33
                },
                "Public Schools": {
                    "value": 4
                }
            },
            "review": {
                "average": 4.4375,
                "count": 16
            }
        },
        "West University": {
            "location": "Neighborhood in Austin, TX",
            "grades": {
                "Overall Niche Grade": {
                    "value": 4.33
                },
                "Public Schools": {
                    "value": 4
                }
            },
            "review": {
                "average": 3.8208955223880596,
                "count": 67
            }
        },
        "Upper Boggy Creek": {
            "location": "Neighborhood in Austin, TX",
            "grades": {
                "Overall Niche Grade": {
                    "value": 4.33
                },
                "Public Schools": {
                    "value": 4
                }
            },
            "review": {
                "average": 3.6666666666666665,
                "count": 3
            }
        },
        "Hancock": {
            "location": "Neighborhood in Austin, TX",
            "grades": {
                "Overall Niche Grade": {
                    "value": 4.33
                },
                "Public Schools": {
                    "value": 4
                }
            },
            "review": {
                "average": 3.1666666666666665,
                "count": 6
            }
        }
    },
    "crime-safety": {
        "Violent Crimes": {
            "Assault": {
                "value": 331.36,
                "national": 282.69
            },
            "Murder": {
                "value": 7.77,
                "national": 6.08
            },
            "Rape": {
                "value": 54.78,
                "national": 40.68
            },
            "Robbery": {
                "value": 97.47,
                "national": 135.53
            }
        },
        "Property Crimes": {
            "Burglary": {
                "value": 467.97,
                "national": 500.13
            },
            "Theft": {
                "value": 2425.64,
                "national": 2042.79
            },
            "Motor Vehicle Theft": {
                "value": 406.59,
                "national": 284.04
            }
        }
    },
    "residents": {
        "Age": {
            "10-17 years": 0.08,
            "18-24 years": 0.1,
            "25-34 years": 0.22,
            "35-44 years": 0.17,
            "45-54 years": 0.12,
            "55-64 years": 0.1,
            "65+ years": 0.09,
            "<10 years": 0.11
        },
        "Education Levels": {
            "Bachelor's degree": {
                "value": 0.34,
                "national": 0.21
            },
            "High school diploma or equivalent": {
                "value": 0.14,
                "national": 0.26
            },
            "Less than high school diploma": {
                "value": 0.09,
                "national": 0.11
            },
            "Master's degree or higher": {
                "value": 0.21,
                "national": 0.13
            },
            "Some college or associate's degree": {
                "value": 0.21,
                "national": 0.29
            }
        }
    },
    "working-in": {
        "Median Household Income": {
            "value": 78965,
            "national": 69021
        },
        "workplaces": {
            "Whole Foods Market": {
                "review": {
                    "average": 4.1,
                    "count": 268
                }
            },
            "Keller Williams Realty Inc.": {
                "review": {
                    "average": 4.52,
                    "count": 31
                }
            },
            "Kindred at Home - Girling Community Care": {
                "review": {
                    "average": 4.18,
                    "count": 11
                }
            }
        }
    },
    "reviews": {
        "reviews": [
            {
                "body": "Austin is such a friendly city. It has a wide variety of people engaged in different cultural and artistic expressions. It has a great community for raising children. There is a nice blend of hippie and southern hospitality. The cost of living has gone up significantly and the traffic is almost impossible to get through during peak hours. It is growing fast but hopefully it doesn’t lose its charm. Honestly, it’s getting a bit too packed for me but I appreciate how people are doing their thing here and there is space for an alternative lifestyle. I wish there were mountains and an ocean nearby but the lake and the hiking is enjoyable. Barton Springs and other swimming holes make summer more manageable with the heat and humidity.  There are great climbing gyms, parks, and the food is incredible!  Austin is a foodie city with an array of options. There is always something happening related to music with two big festivals happening annually. There is something for everyone here!",
                "created": "2023-01-29T18:17:49.532703Z",
                "rating": 5
            },
            {
                "body": "Austin Texas! An above average kind/caring community. The city is easy to move around with their metro transportation. Cost of living here in apt, or house has definitely cost more with in the past couple years. Maybe this is do to out-of-state citizens have been moving here like the locus plague from Moses. other than that, there are plenty of free events and parks that people of all ages can attend for entertaining themselves. The city has a yearly calendar that they sell, and it informs everyone who buys it all of the upcoming events for that year.",
                "created": "2023-05-07T00:35:35.389942Z",
                "rating": 4
            },
            {
                "body": "Austin is an enjoyable city to visit. There are many attractions you can see with family and friends. For example, there is Lady Bird Lake, Congress, Farmer's Markets, Music Festivals, great Mexican food, The capital, and much more. Austin is pretty diverse and overall an enjoyable city to live in. There are occasional negative issues like conservatives and not-so-welcoming faces but for the most part, people are very welcoming!",
                "created": "2022-11-30T20:10:58.890246Z",
                "rating": 4
            }
        ],
        "stars": {
            "count": 2456,
            "value": 4.2
        },
        "ratings": {
            "1": 11,
            "2": 49,
            "3": 397,
            "4": 988,
            "5": 1011
        }
    }
}

var cities = [
    {
        "type": "Town",
        "label": "Austin",
        "tagline": "City in Texas",
        "grade": 4,
        "state": "TX",
        "urlFragment": "austin-travis-tx"
    },
    {
        "type": "Neighborhood",
        "label": "Austin",
        "tagline": "Neighborhood in Chicago, IL",
        "grade": 1.66,
        "state": "IL",
        "urlFragment": "austin-chicago-il"
    },
    {
        "type": "Town",
        "label": "Austin",
        "tagline": "Town in Minnesota",
        "grade": 3.33,
        "state": "MN",
        "urlFragment": "austin-mower-mn"
    },
    {
        "type": "Town",
        "label": "Austin",
        "tagline": "Town in Indiana",
        "grade": 1.66,
        "state": "IN",
        "urlFragment": "austin-scott-in"
    },
    {
        "type": "Town",
        "label": "Austin",
        "tagline": "Suburb of Little Rock, AR",
        "grade": 3.33,
        "state": "AR",
        "urlFragment": "austin-lonoke-ar"
    },
    {
        "type": "Town",
        "label": "Austin",
        "tagline": "Town in Pennsylvania",
        "grade": 2.33,
        "state": "PA",
        "urlFragment": "austin-potter-pa"
    },
    {
        "type": "Town",
        "label": "Austintown Township",
        "tagline": "Suburb in Ohio",
        "grade": 3.33,
        "state": "OH",
        "urlFragment": "austintown-township-mahoning-oh"
    },
    {
        "type": "County",
        "label": "Austin County",
        "tagline": "County in Texas",
        "grade": 3.33,
        "state": "TX",
        "urlFragment": "austin-county-tx"
    },
    {
        "type": "Town",
        "label": "Austintown",
        "tagline": "Suburb in Ohio",
        "grade": 3.33,
        "state": "OH",
        "urlFragment": "austintown-mahoning-oh"
    }
]

var homes = [
    {
      "price": 265000,
      "county": "Travis",
      "propertyType": "Land",
      "addressLine1": "2212 Big Horn Dr",
      "city": "Austin",
      "state": "TX",
      "zipCode": "78734",
      "formattedAddress": "2212 Big Horn Dr, Austin, TX 78734",
      "lastSeen": "2023-07-15T00:00:00.000Z",
      "listedDate": "2022-05-19T00:00:00.000Z",
      "status": "Active",
      "removedDate": null,
      "daysOnMarket": 423,
      "createdDate": "2020-09-15T04:00:54.343Z",
      "lotSize": 10498,
      "id": "2212-Big-Horn-Dr,-Austin,-TX-78734",
      "latitude": 30.372577,
      "longitude": -97.916294
    },
    {
      "price": 330000,
      "county": "Hays",
      "propertyType": "Land",
      "addressLine1": "364 Seneca Dr",
      "city": "Austin",
      "state": "TX",
      "zipCode": "78737",
      "formattedAddress": "364 Seneca Dr, Austin, TX 78737",
      "lastSeen": "2023-07-15T00:00:00.000Z",
      "listedDate": "2022-12-30T00:00:00.000Z",
      "status": "Active",
      "removedDate": null,
      "daysOnMarket": 198,
      "createdDate": "2020-09-15T04:10:54.051Z",
      "bedrooms": 0,
      "lotSize": 14680,
      "id": "364-Seneca-Dr,-Austin,-TX-78737",
      "latitude": 30.190639,
      "longitude": -97.990657
    },
    {
      "price": 149900,
      "county": "Travis",
      "propertyType": "Land",
      "addressLine1": "6133 Old Fredericksbrg Rd",
      "city": "Austin",
      "state": "TX",
      "zipCode": "78749",
      "formattedAddress": "6133 Old Fredericksbrg Rd, Austin, TX 78749",
      "lastSeen": "2023-07-15T00:00:00.000Z",
      "listedDate": "2023-03-10T00:00:00.000Z",
      "status": "Active",
      "removedDate": null,
      "daysOnMarket": 128,
      "createdDate": "2020-09-15T05:26:05.423Z",
      "bedrooms": 0,
      "lotSize": 9714,
      "id": "6133-Old-Fredericksbrg-Rd,-Austin,-TX-78749",
      "latitude": 30.234778,
      "longitude": -97.853519
    },
    {
      "bathrooms": 1,
      "bedrooms": 1,
      "price": 223000,
      "squareFootage": 394,
      "county": "Travis",
      "propertyType": "Condo",
      "addressLine1": "1010 W 23rd St",
      "addressLine2": "Apt 16",
      "city": "Austin",
      "state": "TX",
      "zipCode": "78705",
      "formattedAddress": "1010 W 23rd St, Apt 16, Austin, TX 78705",
      "lastSeen": "2023-07-15T00:00:00.000Z",
      "listedDate": "2023-05-04T00:00:00.000Z",
      "status": "Active",
      "removedDate": null,
      "daysOnMarket": 73,
      "createdDate": "2020-09-15T08:40:00.491Z",
      "yearBuilt": 1975,
      "id": "1010-W-23rd-St,-Apt-16,-Austin,-TX-78705",
      "latitude": 30.287441,
      "longitude": -97.749068
    },
    {
      "bathrooms": 1,
      "bedrooms": 2,
      "price": 225000,
      "squareFootage": 814,
      "county": "Travis",
      "propertyType": "Condo",
      "addressLine1": "11404 Walnut Ridge Dr",
      "addressLine2": "Unit 118",
      "city": "Austin",
      "state": "TX",
      "zipCode": "78753",
      "formattedAddress": "11404 Walnut Ridge Dr, Unit 118, Austin, TX 78753",
      "lastSeen": "2023-07-15T00:00:00.000Z",
      "listedDate": "2023-07-14T00:00:00.000Z",
      "status": "Active",
      "removedDate": null,
      "daysOnMarket": 2,
      "createdDate": "2020-09-15T08:40:00.493Z",
      "lotSize": 5097,
      "yearBuilt": 1984,
      "id": "11404-Walnut-Ridge-Dr,-Unit-118,-Austin,-TX-78753",
      "latitude": 30.376735,
      "longitude": -97.668298
    },
    {
      "bathrooms": 2.5,
      "bedrooms": 2,
      "price": 244000,
      "squareFootage": 1105,
      "county": "Travis",
      "propertyType": "Condo",
      "addressLine1": "2018 W Rundberg Ln",
      "addressLine2": "Apt 10C",
      "city": "Austin",
      "state": "TX",
      "zipCode": "78758",
      "formattedAddress": "2018 W Rundberg Ln, Apt 10C, Austin, TX 78758",
      "lastSeen": "2023-07-15T00:00:00.000Z",
      "listedDate": "2023-05-28T00:00:00.000Z",
      "status": "Active",
      "removedDate": null,
      "daysOnMarket": 49,
      "createdDate": "2020-09-15T10:33:37.071Z",
      "lotSize": 2439,
      "yearBuilt": 1984,
      "id": "2018-W-Rundberg-Ln,-Apt-10C,-Austin,-TX-78758",
      "latitude": 30.37381,
      "longitude": -97.718783
    },
    {
      "bathrooms": 1,
      "bedrooms": 1,
      "price": 269999,
      "squareFootage": 442,
      "county": "Travis",
      "propertyType": "Condo",
      "addressLine1": "4004 Banister Ln",
      "addressLine2": "Unit 101",
      "city": "Austin",
      "state": "TX",
      "zipCode": "78704",
      "formattedAddress": "4004 Banister Ln, Unit 101, Austin, TX 78704",
      "lastSeen": "2023-07-15T00:00:00.000Z",
      "listedDate": "2023-07-13T00:00:00.000Z",
      "status": "Active",
      "removedDate": null,
      "daysOnMarket": 3,
      "createdDate": "2020-09-15T10:33:37.073Z",
      "lotSize": 41861,
      "yearBuilt": 2023,
      "id": "4004-Banister-Ln,-Unit-101,-Austin,-TX-78704",
      "latitude": 30.229888,
      "longitude": -97.778147
    },
    {
      "price": 750000,
      "county": "Travis",
      "propertyType": "Land",
      "addressLine1": "8417 Lakewood Ridge Cv",
      "city": "Austin",
      "state": "TX",
      "zipCode": "78738",
      "formattedAddress": "8417 Lakewood Ridge Cv, Austin, TX 78738",
      "lastSeen": "2023-07-15T00:00:00.000Z",
      "listedDate": "2022-06-16T00:00:00.000Z",
      "status": "Active",
      "removedDate": null,
      "daysOnMarket": 395,
      "createdDate": "2020-09-15T18:20:57.279Z",
      "lotSize": 45128,
      "id": "8417-Lakewood-Ridge-Cv,-Austin,-TX-78738",
      "latitude": 30.295995,
      "longitude": -98.03995
    },
    {
      "bathrooms": 1.5,
      "bedrooms": 2,
      "price": 375000,
      "squareFootage": 980,
      "county": "Travis",
      "propertyType": "Condo",
      "addressLine1": "2101 Polaris Ave",
      "addressLine2": "Apt 3",
      "city": "Austin",
      "state": "TX",
      "zipCode": "78757",
      "formattedAddress": "2101 Polaris Ave, Apt 3, Austin, TX 78757",
      "lastSeen": "2023-07-15T00:00:00.000Z",
      "listedDate": "2023-07-07T00:00:00.000Z",
      "status": "Active",
      "removedDate": null,
      "daysOnMarket": 9,
      "createdDate": "2020-09-15T18:20:57.297Z",
      "lotSize": 2208,
      "yearBuilt": 1968,
      "id": "2101-Polaris-Ave,-Apt-3,-Austin,-TX-78757",
      "latitude": 30.367907,
      "longitude": -97.724967
    },
    {
      "bathrooms": 2.5,
      "bedrooms": 2,
      "price": 325000,
      "squareFootage": 1328,
      "county": "Travis",
      "propertyType": "Condo",
      "addressLine1": "6211 Manor Rd",
      "addressLine2": "Apt 129",
      "city": "Austin",
      "state": "TX",
      "zipCode": "78723",
      "formattedAddress": "6211 Manor Rd, Apt 129, Austin, TX 78723",
      "lastSeen": "2023-07-15T00:00:00.000Z",
      "listedDate": "2023-06-21T00:00:00.000Z",
      "status": "Active",
      "removedDate": null,
      "daysOnMarket": 25,
      "createdDate": "2020-09-15T19:06:31.620Z",
      "lotSize": 3215,
      "yearBuilt": 1968,
      "id": "6211-Manor-Rd,-Apt-129,-Austin,-TX-78723",
      "latitude": 30.307734,
      "longitude": -97.674461
    }
  ]