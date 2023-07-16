// *Jerome suggested that this be considered a stretch challenge, so only prioritize it after we complete core features

// let map;
// let center;

// async function initMap() {
//   const { Map } = await google.maps.importLibrary("maps");
//   const { LatLng, LatLngBounds } = await google.maps.importLibrary("core");

//   center = new LatLng(37.4161493, -122.0812166);
//   map = new Map(document.getElementById("map"), {
//     center: center,
//     zoom: 14,
//     // ...
//   });
//   findPlaces(LatLng, LatLngBounds);
// }

// async function findPlaces(LatLng, LatLngBounds) {
//   const { Place } = await google.maps.importLibrary("places");
//   //@ts-ignore
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
//   const request = {
//     query: "Tacos in Mountain View",
//     fields: [
//       "displayName",
//       "location",
//       "businessStatus",
//       "hasWheelchairAccessibleEntrance",
//     ],
//     includedType: "restaurant",
//     isOpenNow: true,
//     language: "en-US",
//     maxResultCount: 7,
//     minRating: 3.2,
//     region: "us",
//     useStrictTypeFiltering: false,
//   };
//   //@ts-ignore
//   const { places } = await Place.searchByText(request);
//   const bound = new LatLngBounds();

//   if (places.length) {
//     console.log(places);
//     // Loop through and get all the results.
//     places.forEach((place) => {
//       const markerView = new AdvancedMarkerElement({
//         map,
//         position: place.location,
//         title: place.displayName,
//       });

//       bound.extend(new LatLng(place.location));
//       console.log(place);
//     });
//     map.setCenter(bound.getCenter());
//   } else {
//     console.log("No results");
//   }
// }

// initMap();

// *Jerome suggested that this be considered a stretch challenge, so only prioritize it after we complete core features
// function dojCrime() {
//     var url = "https://data.ojp.usdoj.gov/resource/gcuy-rt5g.json?year=2021&$limit=500"
    
//     fetch(url).then(function (response) {
//         console.log(response)
//         return response.json()
//     }).then(function(data){
//         console.log(data)
//     })
// }

// dojCrime()
var data = {
    "report-card": {
        "Overall Niche Grade": {
            "description": "Based on school quality, crime rates, cost of living, employment, and things to do in the area.",
            "value": 4.33
        },
        "Public Schools": {
            "description": "Based on statistics, student and parent reviews, and expert insights.",
            "value": 4.33
        },
        "Crime & Safety": {
            "description": "Based on violent and property crime rates.",
            "value": 2.33
        },
        "Housing": {
            "description": "Based on home values, property taxes, housing costs, local schools, and more.",
            "value": 2
        },
        "Nightlife": {
            "description": "Based on access to bars, restaurants, theaters, and other attractions. ",
            "value": 4
        },
        "Good for Families": {
            "description": "Based on school quality, safety, and family-friendly living.",
            "value": 4.33
        },
        "Diversity": {
            "description": "Based on ethnic and economic diversity. ",
            "value": 3.66
        },
        "Jobs": {
            "description": "Based on employment rates, job and business growth, and cost of living.",
            "value": 3.33
        },
        "Weather": {
            "description": "Based on number of sunny days, precipitation, and average temperatures.",
            "value": 4.33
        },
        "Cost of Living": {
            "description": "Based on the consumer price index and access to affordable housing. ",
            "value": 1.33
        },
        "Health & Fitness": {
            "description": "Based on community health statistics and access to healthcare.",
            "value": 4.33
        },
        "Outdoor Activities": {
            "description": "Based on weather, air quality, and access to parks and other recreational opportunities.",
            "value": 4
        },
        "Commute": {
            "description": "Based on typical commute time and method.",
            "value": 3.33
        }
    },
    "about": {
        "Population": {
            "value": 28109
        }
    },
    "real-estate": {
        "Median Home Value": {
            "value": 1682000,
            "national": 244900
        },
        "Median Rent": {
            "value": 2678,
            "national": 1163
        },
        "Area Feel": {
            "value": "Urban Suburban Mix"
        },
        "Rent vs. Own": {
            "value": {
                "Own": "0.563634704862695",
                "Rent": "0.436365295137305"
            }
        }
    },
    "rankings": {
        "Best Suburbs for Young Professionals in California": {
            "value": 21,
            "total": 528
        },
        "Best Suburbs to Live in California": {
            "value": 26,
            "total": 528
        },
        "Best Suburbs to Raise a Family in California": {
            "value": 55,
            "total": 528
        }
    },
    "crime-safety": {
        "Violent Crimes": {
            "Assault": {
                "value": 125.63,
                "national": 282.69
            },
            "Murder": {
                "value": 0,
                "national": 6.08
            },
            "Rape": {
                "value": 40.65,
                "national": 40.68
            },
            "Robbery": {
                "value": 25.87,
                "national": 135.53
            }
        },
        "Property Crimes": {
            "Burglary": {
                "value": 195.84,
                "national": 500.13
            },
            "Theft": {
                "value": 1237.85,
                "national": 2042.79
            },
            "Motor Vehicle Theft": {
                "value": 125.63,
                "national": 284.04
            }
        }
    },
    "residents": {
        "Age": {
            "10-17 years": 0.11,
            "18-24 years": 0.05,
            "25-34 years": 0.13,
            "35-44 years": 0.16,
            "45-54 years": 0.15,
            "55-64 years": 0.13,
            "65+ years": 0.15,
            "<10 years": 0.12
        },
        "Education Levels": {
            "Bachelor's degree": {
                "value": 0.35,
                "national": 0.21
            },
            "High school diploma or equivalent": {
                "value": 0.09,
                "national": 0.26
            },
            "Less than high school diploma": {
                "value": 0.02,
                "national": 0.11
            },
            "Master's degree or higher": {
                "value": 0.34,
                "national": 0.13
            },
            "Some college or associate's degree": {
                "value": 0.2,
                "national": 0.29
            }
        }
    },
    "working-in": {
        "Median Household Income": {
            "value": 178125,
            "national": 69021
        },
        "workplaces": {
            "RingCentral": {
                "review": {
                    "average": 5,
                    "count": 1
                }
            }
        }
    },
    "schools": {
        "Public Schools": {
            "Carlmont High School": {
                "location": "BELMONT, CA",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 3.91,
                    "count": 327
                }
            },
            "Summit Public School - Denali Campus": {
                "location": "SUNNYVALE, CA",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4
                    }
                },
                "review": {
                    "average": 3.9,
                    "count": 31
                }
            },
            "Hoover Elementary School": {
                "location": "BURLINGAME, CA",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4
                    }
                },
                "review": {
                    "average": 0,
                    "count": 0
                }
            },
            "Sandpiper Elementary School": {
                "location": "REDWOOD CITY, CA",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4
                    }
                },
                "review": {
                    "average": 5,
                    "count": 1
                }
            },
            "Fox Elementary School": {
                "location": "BELMONT, CA",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4
                    }
                },
                "review": {
                    "average": 0,
                    "count": 0
                }
            }
        },
        "Private Schools": {
            "The Nueva School": {
                "location": "HILLSBOROUGH, CA",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 4.55,
                    "count": 67
                }
            },
            "Crystal Springs Uplands School": {
                "location": "HILLSBOROUGH, CA",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 4.45,
                    "count": 47
                }
            },
            "Castilleja School": {
                "location": "PALO ALTO, CA",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 4.42,
                    "count": 60
                }
            },
            "Menlo School": {
                "location": "ATHERTON, CA",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 4.14,
                    "count": 84
                }
            },
            "Khan Lab School": {
                "location": "MOUNTAIN VIEW, CA",
                "grades": {
                    "Overall Niche Grade": {
                        "value": 4.33
                    }
                },
                "review": {
                    "average": 4.86,
                    "count": 28
                }
            }
        }
    },
    "reviews": {
        "reviews": [
            {
                "body": "Belmont is a pretty good city, a lot of fun activities to do. There are good restaurants and cafes and such, lots of places for younger people to get jobs as well. The school systems are good, commuting to said schools are also fine unless you require the 260 SamTrans bus in which case you're out of luck.  Lots of good programs for youth, I do several extracurriculars here. There isn't much to do past 8 PM though. Housing is expensive. Overall a pretty good place to live, though.",
                "created": "2023-03-29T01:05:23.41859Z",
                "rating": 4
            },
            {
                "body": "Overall, living in Belmont has been great. It is a great get away from the hustle and bustle of big cities like San Francisco or LA. And if you grow tired of the slow life, it's only a 30-40 minute drive to SF or Santa Cruz. For the most part, the schools and teachers really seem to care about the student's well being and scholastic success, and the students themselves are diverse and friendly. I have been a part of the Belmont education system since elementary school to high school, and there have been very little to no instances of bullying. Cyber-bullying is probably more prominent than physical, but it is still a relatively uncommon occurence, and school admins take swift action when it is reported to them. While the benefits far outweigh the cons,  one of my biggest issue with Belmont is cost to live here. Affordability is a big one, and one that you'd think would drive people to the suburbs. However the exorbitant rates seen in NYC and SF seem to continue in Belmont.",
                "created": "2021-03-01T03:40:47.195131Z",
                "rating": 4
            },
            {
                "body": "I've been living in Belmont for my whole life. I've spent my childhood here. Belmont is a beautiful city with very family-friendly neighbors. The beautiful views and amazing hills with bright green trees are perfect to go on a bike ride or walk with friends. The schools around are amazing! They provide all the resources you need and are at a very safe location. There are many job opportunities for teens in shopping centers around schools. House costing is a bit overpriced but worth living here with a huge loving community.",
                "created": "2020-04-22T23:13:18.640851Z",
                "rating": 5
            }
        ],
        "stars": {
            "count": 63,
            "value": 4.13
        },
        "ratings": {
            "1": 0,
            "2": 1,
            "3": 8,
            "4": 36,
            "5": 18
        }
    }
}

var cities = [
    {
        "type": "Neighborhood",
        "label": "Belmont",
        "tagline": "Neighborhood in New York City, NY",
        "grade": 2,
        "state": "NY",
        "urlFragment": "belmont-new-york-city-ny"
    },
    {
        "type": "Town",
        "label": "Belmont",
        "tagline": "Suburb of San Francisco, CA",
        "grade": 4.33,
        "state": "CA",
        "urlFragment": "belmont-san-mateo-ca"
    },
    {
        "type": "Town",
        "label": "Belmont",
        "tagline": "Suburb of Boston, MA",
        "grade": 4.33,
        "state": "MA",
        "urlFragment": "belmont-middlesex-ma"
    },
    {
        "type": "Neighborhood",
        "label": "Belmont",
        "tagline": "Neighborhood in Dayton, OH",
        "grade": 2.66,
        "state": "OH",
        "urlFragment": "belmont-dayton-oh"
    },
    {
        "type": "Town",
        "label": "Belmont",
        "tagline": "Suburb of Charlotte, NC",
        "grade": 4,
        "state": "NC",
        "urlFragment": "belmont-gaston-nc"
    },
    {
        "type": "Town",
        "label": "Belmont",
        "tagline": "Town in New Hampshire",
        "grade": 2.66,
        "state": "NH",
        "urlFragment": "belmont-belknap-nh"
    },
    {
        "type": "Town",
        "label": "Belmont",
        "tagline": "Suburb in Virginia",
        "grade": 4.33,
        "state": "VA",
        "urlFragment": "belmont-loudoun-va"
    },
    {
        "type": "Neighborhood",
        "label": "Belmont",
        "tagline": "Neighborhood in Charlotte, NC",
        "grade": 3.66,
        "state": "NC",
        "urlFragment": "belmont-charlotte-nc"
    },
    {
        "type": "Neighborhood",
        "label": "Belmont",
        "tagline": "Neighborhood in Philadelphia, PA",
        "grade": 1.66,
        "state": "PA",
        "urlFragment": "belmont-philadelphia-pa"
    },
    {
        "type": "Town",
        "label": "Belmont",
        "tagline": null,
        "grade": 2.66,
        "state": "PA",
        "urlFragment": "belmont-cambria-pa"
    }
]

// var submitCity = document.getElementById("submit-city")

// submitCity.addEventListener("click", function() {
//     var searchInput = document.getElementById("city-search").value;
//     searchCity(searchInput)
// })
console.log(data)
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
                cityStateSelect.appendChild(cityOption) 
            })
            
            searchForm.appendChild(cityStateSelect)

            cityStateSelect.addEventListener("change", function() {
                var selectedCity = cityStateSelect.options[cityStateSelect.selectedIndex]
                
                // will need to find a way to change city name textContent dynamically 
                var cityNameDisplay = document.getElementById("city-1");

                cityNameDisplay.textContent = selectedCity.textContent
                var cityUrl = selectedCity.getAttribute("name");
                var cityType = selectedCity.getAttribute("type");
                
                // if (selectedCity == selectedCity) {
                //     getRentPrices(cityUrl, cityType)
                // }

                getRentPrices(cityUrl, cityType)
                debugger
            })
        // })
        debugger
    // })
}
// searchCity()




function getRentPrices(city, type) {
//     const url = `https://find-places-to-live.p.rapidapi.com/placesToLive?place=${city}&type=${type}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ef09a4f5bbmsh3dd4fee7e15cf2ep1c973ejsna3a2ad737be5',
// 		'X-RapidAPI-Host': 'find-places-to-live.p.rapidapi.com'
// 	}
// };

    // fetch(url, options).then(function (response) {
    //     console.log(response)
    //     return response.json()
    // }).then(function (data) {
    //     console.log(data)
    var rent = document.getElementById("medianRent")
    var own = document.getElementById("medianHome")
        
    var medianRent = data["real-estate"]["Median Rent"]["value"];
    var medianHome = data["real-estate"]["Median Home Value"]["value"];
    
    rent.textContent = "Median Rent: " + "$" + medianRent.toString();
    own.textContent = "Median Home Price: " + "$" + medianHome.toString();
    
    var reportCard = data["report-card"];
    var reportArr =  Object.keys(reportCard)
    console.log(reportArr)
    
    var htmlString = '';
    var targetElement = document.getElementById("cityReport");

    for (var key in reportCard) {
      if (reportCard.hasOwnProperty(key)) {
        htmlString += '<p>' + key + ': ' + reportCard[key] + '</p>';
      }
    }
    
    targetElement.innerHTML = htmlString;
    
    debugger
    //    var cityOne = document.getElementById("city-one");

    //    var rent = document.createElement("ul")
    //    rent.textContent = medianRent

    //    var reportCardList = Object.keys(reportCard);
    //    console.log(reportCardList)

    //    // need job income. will attempt to set background color of median income based on earning
    //    if (medianRent < jobIncome) {
    //        medianRent.style.backgroundColor = "green"
    //    } else if (Math.floor(jobIncome *.5) < medianRent) {
    //        medianRent.style.backgroundColor = "yellow"
    //    } else {
    //        medianRent.style.backgroundColor = "red"
    //    }


        
    // })
}

 getRentPrices()

