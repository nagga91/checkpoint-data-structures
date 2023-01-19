/*Given two sets of elements, find the sum of all distinct elements from the set.
 In other words, find the sum of all elements which are present in either 
 of the given set.
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )*/

function distinct(set1,set2){
    var sum=0
    for (var i=0;i<set1.length;i++){
        if(!set2.includes(set1[i])){
            sum+=set1[i]
        }
    }
    for(var i=0;i<set2.length;i++){
       if(!set1.includes(set2[i])){
            sum+=set2[i]
        } 
    }
    return sum
}