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

#1-https://www.baeldung.com/cs/array-generate-all-permutations- Here I learned that you could represent the permutations as a binary tree, inspiring me to implement my code in that way. I did not take any code from this website, I used it purely to resarch and better understand the topic. I also initally wanted to use heaps algorithm and learned about that here too.

#2-https://ruslanledesma.com/2016/06/17/why-does-heap-work.html- I had planned on using heaps algorithm to generate my Permutations but decided not to, I left this in from when I was working on that angle. But later decided to change to a tree implementation.

#3-https://www.prepbytes.com/blog/heap/heap-algorithm-for-generating-permutations/- Here I took insperation from the code snippet listed on heaps alogorithm but did not copy any code explicitly.

#4--https://www.prepbytes.com/blog/heap/heap-algorithm-for-generating-permutations/- This is a copy of the source above, I put this here by mistake.

#5--https://github.com/COSC3020/brute-force-sorting-DJReflexive- Looked at this repository for help with the time complexity and also used their code to check against mine in terms of output, because I couldn't get the unit tests to pass and wanted to see what the output should be.

#6-https://keploy.io/blog/community/javascript-random-number- Learned about generating random numbers here, one of my previous implementaions used random numbers to generate permutations, but I ultimatley swictched to the tree implemenation.

#7- Got helped from some friends with getting the count to return proberly upon the recurssive stack closing. My friends psudo coded how I could fix my incorrect count return and I used that to implement what I have in my final product.


## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Answer

Here we start off with some constant time operations just declaring varaibles and doing an if statement, we then have a function closure which creates permutations and checks them to be sorted or not. Here The Sorted function which I made runs first, checking to see if the list is sorted or not.  The Sorted function loops through the entire length of the array giving us $O(n)$  for that operation. 

We then have the for-loop which genrates the permutations recursively by performing swaps. This process generates all the permutations for a list of length $n$ and it is a well known mathematical fact that such a list has $n!$ permutations. Thus this process along with the if-statement we have to check for which item was sorted and return the count for gives us $n!+1$. Additonally considering the outer if statement we have $n!+2$.

All together this gives us a time complexity of $$n+n!+2=n!=\theta(n!)$$

### Best Case

The best case for this algorithm is that the list is already sorted. When this happens we just run the Sorted functuon which has a complexity of $O(n)$, meaning the best case is also $\theta(n)$.

### Worst Case

The worst case is something like when the list is in reverse and also has a time complexity of $\theta(n!)$ because it would have to check all permutations

How would this complexity change if you generated permutations randomly without memory instead of systematically trying them?

- The time complexity would become large so fast that it's possible the program would never stop running. The amount of operations you have to perform to get the correct random numbers is huge. I actually even tried this on one of my first implementations and it ran over 5 mintues without givng any output.


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
