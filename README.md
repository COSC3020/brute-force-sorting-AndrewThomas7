# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”- Andrew Thomas

## Sources

#1-https://www.baeldung.com/cs/array-generate-all-permutations

#2-https://ruslanledesma.com/2016/06/17/why-does-heap-work.html

#3-https://www.prepbytes.com/blog/heap/heap-algorithm-for-generating-permutations/

#4--https://www.prepbytes.com/blog/heap/heap-algorithm-for-generating-permutations/

#5--https://github.com/COSC3020/brute-force-sorting-DJReflexive- Looked at this repository for help with the time complexity and also used their code to check against mine in terms of output, because I couldn't get the unit tests to pass and wanted to see what the output should be.

#6-https://keploy.io/blog/community/javascript-random-number

#7- Got helped from some friends with getting the count to return proberly upon the recurssive stack closing.


## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


```Javascript
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
            Permutation_(array, FixIndex + 1, count, iter + 1)
            if(weiner!=-1){
                return weiner;
            }
            Swap(array, FixIndex, i)
        }
    }
    return Permutation_(array,0,0,0)
}
```
