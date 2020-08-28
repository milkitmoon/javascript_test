

function sockMerchant(n, ar) {

/*
    var groupBy = function(ar) {
        return ar.reduce(function(rv, x) {
//          (rv[x] = rv[x] || []).push(x);
//          (rv[x] = rv[x]).

            if (!rv.hasOwnProperty(x)) {
                rv[x] = 0;
            }
            rv[x]++;

            return rv;
        }, {});
      };
*/

/*
    const countMap = new Map([...new Set(ar)].map(
        x => [x, ar.filter(y => y === x).length]
    ));
*/
    const countMap = ar.reduce(
        (acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map()
    );

//console.log(countMap);

    var count = getPairSockCount(countMap);



//console.log(count);

      return count;
}

function getPairSockCount(countMap) {
    let pairSockCount = 0 ;
    for (const [key, value] of countMap.entries()) {
        if(value > 1) {

//console.log((value / 2) >> 0);

            pairSockCount += (value / 2) >> 0;
        }
    }

    return pairSockCount
}

function count(arr) {
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}


let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

sockMerchant(n, ar);
