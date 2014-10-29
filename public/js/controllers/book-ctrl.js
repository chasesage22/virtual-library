angular.module('VirtualBook').controller('BookCtrl', function($scope, BookService) { 
    BookService.getBooks().then(function(response) {
        $scope.books = response.data;
    });
});