   function getWeather() {
      var url = "http://api.openweathermap.org/data/2.5/weather?q=," + $stateParams.countryCode;
      return $http.jsonp(url, {
        params: {
          callback: 'JSON_CALLBACK',
          units: 'imperial'
        }
      })
      .then(function(response) {
        console.log('fetching data');
        return response.data;
      });
    }