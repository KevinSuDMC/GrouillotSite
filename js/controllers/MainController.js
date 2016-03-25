app.controller('ModalInstanceCntrl', function ($scope, $modalInstance, product)
{
    $scope.product = product;
});

app.controller('GrouCntrl', function($scope, $modal, $log){

  $scope.title = 'download this awesome stuff!';
  $scope.promo = 'this is the description text';
  $scope.products =

 [
   	{ 
     name: 'Bill',
     keywords: ['standing', 'man', 'america'],
     image: 'img/thumbnails/Bill.png'
  	},

    { 
     name: 'Francois ',
     keywords: ['man', 'sitting', 'europe'],
     image: 'img/thumbnails/Bill.png'
    },
    
    { 
     name: 'jack ',
     keywords: ['sitting'],
     image: 'img/thumbnails/Bill.png'
    },

    {
     name: 'jack ',
     keywords: ['walking', 'woman'],
     image: 'img/thumbnails/Bill.png'
    },

    {
     name: 'jack ',
     keywords: ['lying down','europe'],
     image: 'img/thumbnails/Bill.png'
    },

    {
       name: 'jack ',
     keywords: ['sitting', 'america'],
     image: 'img/thumbnails/Bill.png'
    },
];

    $scope.keywordsIncludes = [];


    $scope.includesKeywords = function(keywords) {
        var i = $.inArray(keywords, $scope.keywordsIncludes);
        if (i > -1) {
            $scope.keywordsIncludes.splice(i, 1);
        } 
        else {
            $scope.keywordsIncludes.push(keywords);
        }
    }
    
    $scope.keywordsFilter = function(products) {
        if ($scope.keywordsIncludes.length > 0) {            
                var arrayLength = $.inArray(products.keywords).length;
                for (var i in products.keywords) {
                    if ($scope.keywordsIncludes.indexOf(products.keywords[i]) != -1) {
                        return true;
                    }
                }
        }
        else {
            return products;
        }

    }

    $scope.query = "";

    $scope.search = function(products) {
        if ($scope.query.length <= 0) return true;
        var query = 
        (""+$scope.query).toLowerCase(),
        fullName = [product.keywords].join(" ").toLowerCase();
        return fullName.indexOf(query) > -1;
    }
    
     // MODAL WINDOW
    $scope.open = function (_product) {

        var modalInstance = $modal.open({
          controller: "ModalInstanceCtrl",
          templateUrl: 'myModalContent.html',
            resolve: {
                product: function()
                {
                    return _product;
                }
            }
             });

    }; 

});


