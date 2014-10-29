angular.module('VirtualBook').service('BookService', function($http) {
    this.getBooks = function() {
        return $http({method:'GET', url:'/api/books'});
    }
});