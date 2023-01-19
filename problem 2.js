/*Now, given two sets of integers, 
write also two algorithms to print the sum of overlapping elements in two sets.
The elements in each set are unique or there are no duplicates within a set.
Example: 

Set 1: [12, 13, 6, 10]
Set 2: [13, 10, 16, 15]
Sum of overlapping elements: 46
Explanation: Common elements are 10, 13*/

function overlap (set1,set2){
    var sum=0
    for (var i=0;i<set1.length;i++){
        if(set2.includes(set1[i])){
            sum+=set1[i]
        }
    }
    for(var i=0;i<set2.length;i++){
       if(set1.includes(set2[i])){
            sum+=set2[i]
        } 
    }
    return sum
}