var app = angular.module('xmlformatterapp', [])
app.controller('xmlformatterappController', ['$scope',
    function($scope) {
        $scope.inputXml = '';
        $scope.resultXml = '';
        $scope.formatXml = function() {
            console.log($scope.inputXml);
            if($scope.inputXml!=''){
                $scope.resultXml = vkbeautify.xml($scope.inputXml);
            }
        };
        $scope.$watch("resultXml", function() {
           console.log("Changed"); 
            $scope.updateSize();
        });
        $scope.updateSize = function(){
            var element = angular.element(document.querySelector('#resultXMLField'));
            $scope.$evalAsync(function(event){
                element.css('height', element[0].scrollHeight + 'px');
            });
        }
    }    
]);