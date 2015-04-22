'use strict';

/**
 * @ngdoc function
 * @name vfwAngularRefactorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vfwAngularRefactorApp
 */
 
  var app = angular.module('vfwAngularRefactorApp', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
     ];  
    });

    app.controller('yearsCtrl', ['$scope', function ($scope) {
        $scope.vyears = [
            {yearC:'2015'},{yearC:'2014'},{yearC:'2013'},{yearC:'2012'},{yearC:'2011'},{yearC:'2010'},{yearC:'2009'},{yearC:'2008'},{yearC:'2007'},{yearC:'2006'},{yearC:'2005'},{yearC:'2004'},
            {yearC:'2003'},{yearC:'2002'},{yearC:'2001'},{yearC:'2000'},{yearC:'1999'},{yearC:'1998'},{yearC:'1997'},{yearC:'1996'},{yearC:'1995'},{yearC:'1994'},{yearC:'1993'},{yearC:'1992'},
            {yearC:'1991'},{yearC:'1990'},{yearC:'1989'},{yearC:'1988'},{yearC:'1987'},{yearC:'1986'},{yearC:'1985'},{yearC:'1984'},{yearC:'1983'},{yearC:'1982'},{yearC:'1981'},{yearC:'1980'},
            {yearC:'1979'},{yearC:'1978'},{yearC:'1977'},{yearC:'1976'},{yearC:'1975'},{yearC:'1974'},{yearC:'1973'},{yearC:'1972'},{yearC:'1971'},{yearC:'1970'},{yearC:'1969'},{yearC:'1968'},
            {yearC:'1967'},{yearC:'1966'},{yearC:'1965'},{yearC:'1964'},{yearC:'1963'},{yearC:'1962'},{yearC:'1961'},{yearC:'1960'},{yearC:'1959'},{yearC:'1958'},{yearC:'1957'},{yearC:'1956'},
            {yearC:'1955'},{yearC:'1954'},{yearC:'1953'},{yearC:'1952'},{yearC:'1951'},{yearC:'1950'},{yearC:'1949'},{yearC:'1948'},{yearC:'1947'},{yearC:'1946'},{yearC:'1945'},{yearC:'1944'},
            {yearC:'1943'},{yearC:'1942'},{yearC:'1941'},{yearC:'1940'},{yearC:'1939'},{yearC:'1938'},{yearC:'1937'},{yearC:'1936'},{yearC:'1935'},{yearC:'1934'},{yearC:'1933'},{yearC:'1932'},
            {yearC:'1931'},{yearC:'1930'},{yearC:'1929'},{yearC:'1928'},{yearC:'1927'},{yearC:'1926'},{yearC:'1925'},{yearC:'1924'},{yearC:'1923'},{yearC:'1922'},{yearC:'1921'},{yearC:'1920'},
            {yearC:'1919'},{yearC:'1918'}
        ];
    }]);   
  app.directive('headerDir', [function () {
        return {
          templateUrl: 'views/header.html',
          restrict: 'E'
        };
      }]);
      
      app.directive('form1Dir', [function () {
        return {
          templateUrl: 'views/form1.html',
          restrict: 'E'
        };
      }]);

      app.directive('form2Dir', [function () {
        return {
          templateUrl: 'views/form2.html',
          restrict: 'E'
        };
    }]);


