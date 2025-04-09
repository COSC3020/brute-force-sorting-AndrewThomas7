
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
    for(x=0;x<Factorial(array.length);x++){
        var perm=[];
        while(perm.length!=array.length){
            var generate=Math.floor((Math.random()*Max(array)+1))
            if(IsElement(array,generate)&& IsElement(perm,generate)==false){
                perm.push(generate)
            }
        }
        if(IsElement(permlist,perm)==false){
            permlist.push(perm)
        }
    }   
    return permlist  
}

function permutationSort(array){
    var permlist=perm(array);
    var returnarr;
    for(x=0;x<permlist.length;x++){
        if(Sorted(permlist[x])){
            returnarr=permlist[x]
        }
    }
    return returnarr
}
