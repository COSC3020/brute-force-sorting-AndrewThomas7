function Swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
}


function ElementCompare2d(Twodarr, element2) {
    var equal = false;
    for (x = 0; x < Twodarr.length; x++) {
        var count = 0;
        for (y = 0; y < element2.length; y++) {
            if (Twodarr[x][y] == element2[y]) {
                count++;
            }
            if (count >= element2.length) {
                equal = true;
            }

        }
    }
    return equal
}

function Factorial(n) {
    if (n == 0) {
        return 1;
    }
    return Factorial(n - 1) * n
}

function Sorted(array){
    sorted=false;
    for(var x=0;x<array.length-1;){
        if(array[x]<array[x+1]){
            x++;
            sorted=true;
        }
        else{
            sorted=false;
            break;
        }
    }
    return sorted
}

function Permutation(array) {
    var perm;
    var permlist = []
    function Permutation_(array, FixIndex, count, iter) {
        if (FixIndex >= array.length - 1) {
            return permlist
        }
        for (var i = iter; i < array.length; i++) {
            Swap(array, FixIndex, i)
            if(ElementCompare2d(permlist,array.slice())==false){
                permlist.push(array.slice())
            }
            Permutation_(array, FixIndex + 1, count, iter + 1)
            Swap(array, FixIndex, i)
        }
        return permlist
    }
    return Permutation_(array,0,0,0)
}

function permutationSort(array){
    var permlist=Permutation(array);
    var returnarr;
    var count=0;
    for(x=0;x<permlist.length;x++){
        count++;
        if(Sorted(permlist[x])){
            returnarr=permlist[x]
            break
        }
    }
    return count+1
}
