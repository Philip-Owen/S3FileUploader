var app = angular.module('s3Uploader', ['fileModelDirective']);

app.controller('s3UploaderController', ['$http', function($http) {
  console.log('s3UploaderController loaded');
  var self = this;

  self.uploadFile = function(file) {

    let fd = new FormData();
    fd.append('myFile', file.upload);
    console.log(file);

    $http
      .post('/api/upload', fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
}]);
