
function ElementCompare2d(Twodarr,element2){
    var equal=false;
    for(x=0;x<Twodarr.length;x++){
        var count=0;
        for(y=0;y<element2.length;y++){
            if(Twodarr[x][y]==element2[y]){
                count++;
            }
            if(count>=element2.length){
                equal=true;
            }

        }
    }
    return equal
}

function IsElement(array,element){
    var ElementExists=false;
    for(var x=0;x<array.length;x++){
        if(array[x]==element){
            ElementExists=true
        }
    }
    return ElementExists
}

function Max(array){
    var max;
    for(var y=0; y<array.length;y++){
        if(array[y]<=array[y+1]){
            max=array[y+1]
        }
    }
    return max;
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

function Factorial(n){
    if(n==0){
        return 1;
    }
    return Factorial(n-1)*n
}
function perm(array){
    var permlist=[];
    while(permlist.length!=Factorial(array.length)){
        var perm=[];
        while(perm.length!=array.length){
            var generate=Math.floor((Math.random()*Math.max(...array)+1))
            if(IsElement(array,generate)&& IsElement(perm,generate)==false){
                perm.push(generate)
            }
        }
        if(ElementCompare2d(permlist,perm)==false){
            permlist.push(perm)
        }
    }   
    return permlist  
}

function permutationSort(array){
    var permlist=perm(array);
    var returnarr;
    var count=0;
    for(x=0;x<permlist.length;x++){
        if(Sorted(permlist[x])){
            returnarr=permlist[x]
        }
        count++;
    }
    return count
}
