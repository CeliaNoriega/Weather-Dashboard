$(document).ready(function () {
  //search input & button
  $('#search-button').on('click', function () {
    var searchTerm = $('#search-value').val()
    console.log(searchTerm)
    weatherSearch(searchTerm)
  })

  //first ajax call
  function weatherSearch(searchTerm) {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=8f0fa8364b82a56ff6b29b97a2963b6e&units=imperial",
      method: "GET",


    }).then(function (data) {
      console.log(data)
      $('#today').empty()
      // create html content for current weather
      var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
      var card = $("<div>").addClass("card");
      var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
      var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
      var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
      var cardBody = $("<div>").addClass("card-body");
      var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      title.append(img)
      cardBody.append(title, temp, humid, wind)
      card.append(cardBody)
      $('#today').append(card)

    })

  }
  //ajax call for 5 day forecast
  function forecast(searchTerm) {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchTerm + "&appid=8f0fa8364b82a56ff6b29b97a2963b6e&units=imperial",
      method: "GET",


    }).then(function (data) {
      console.log(data)
    })

  }
  //set and get from local search history


})