function Swap(array, first, second) {
    var temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    return array;
}

function Sorted(array){
    sorted=false;
    if(array.length==1){
        return true
    }
    for(var x=0;x<array.length-1;){
        if(array[x]<=array[x+1]){
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


function permutationSort(array){
    var perm;
    var count=0;
    var weiner=-1;
    var returnarr;
    if(array.length<1){
        return count;
    }
    function Permutation_(array, FixIndex, count, iter) {
        count+=1;
        if(Sorted(array)){
            weiner=count;
            return weiner
        }
        for (var i = iter; i < array.length; i++) {
            Swap(array, FixIndex, i)
            Permutation_(array, FixIndex, count, iter + 1)
            if(weiner!=-1){
                return weiner;
            }
            Swap(array, FixIndex, i)
        }
    }
    return Permutation_(array,0,0,0)
}
