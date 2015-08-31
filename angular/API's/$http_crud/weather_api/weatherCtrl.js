   geonames.getWeather()
      .then(function(data) {
        console.log('data received frontend');
        console.log(data);
        $scope.weather = data;
        $scope.weatherDetails = data.weather[0];
      })
      .catch(function() {
        console.log('cannot fetch data');
      });