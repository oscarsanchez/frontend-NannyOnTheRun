angular.module('AngularScaffold.Controllers')
  .controller('NavbarController', ['AuthService','$state', '$scope', '$rootScope', '$sessionStorage',  function (authService,$state, $scope, $rootScope, $sessionStorage) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;

      $scope.logout = function(){
        authService.Logout().then(function(response){
          alert('logged out correctly');
          $sessionStorage.$reset();
          $state.go('main');
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.login = function(user){
        authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
          $state.go('home');
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.register = function(){
        var user = {username: $scope.user.username, password:  $scope.user.password, status: true, scope: 'regular'};
        authService.Register(user).then(function(response){
          alert('Registered in correctly!');
          $scope.login({username: user.username, password: user.password});
        }).catch(function(err){
          console.log(err);
          alert(err.data.error + " " + err.data.message);
        })
      };

      $scope.goProfile = function(){
        $state.go('profile');
      };
      $scope.goHome = function(){
        $state.go('home');
      };


  }]);
