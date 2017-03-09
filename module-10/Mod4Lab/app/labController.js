app.controller("labController", [
    "$scope", "$timeout", "$q", "$http", "gitHub",
    function($scope, $timeout, $q, $http, gitHub) {
        $scope.model = {
            number: 0,
            language: "javascript",
            result: "Ready"
        };

        $scope.checkOddNumber = checkOddNumber;
        $scope.getRepos = getRepos;
        $scope.loadDetail = loadDetail;

        function loadDetail(name) {
            // $scope.model.detail = null;
            $scope.model.detail = gitHub.getDetail({ org: $scope.model.language, id: name });
        }

        function getRepos(input) {
            $scope.model.result = "Working...";
            $scope.model.repos = gitHub.getAll({ org: $scope.model.language });
            $scope.model.repos.$promise.then(function(result) {
                $scope.model.repos = result;
                $scope.model.result = "Ready";
            }, function(result) {
                $scope.model.repos = null;
                $scope.model.result = "Error: " + result.status + " " + result.statusText;
            });
        }

        function checkOddNumber(input) {
            $scope.model.result = "Working...";
            checkOddNumberHandler(input).then(function(result) {
                $scope.model.result = "Success: " + result;
            }, function(result) {
                $scope.model.result = "Error: " + result;
            });
        }

        function checkOddNumberHandler(input) {
            var defer = $q.defer();

            $timeout(function() {
                if (isNumberOdd(input)) {
                    defer.resolve("Yes, an odd number");
                } else {
                    defer.reject("Not an odd number");
                }
            }, 1000);

            return defer.promise;
        }

        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 == 1;
        }
    }
]);