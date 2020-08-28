function sortByPriceAscending(jsonString) {

    var byPrice = JSON.parse(jsonString).slice(0);
    byPrice.sort(function(a,b) {
        var priceX = a.price;
        var priceY = b.price;

        if(a.price < b.price) {
            return -1
        } else if(a.price > b.price) {
            return 1
        } else {
            if(a.name < b.name) {
                return -1
            } else if(a.name > b.name) {
                return 1
            } else {
                return 0;
            }
        }

    });

    return JSON.stringify(byPrice);
  }
  
  console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":"4.04"},{"name":"rice","price":4.04}]'));