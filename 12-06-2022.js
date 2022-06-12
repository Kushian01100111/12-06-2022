// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(array) {
    let arr = array.map(n=>{
      if(n % 2 === 0){
        return n
      }
    });
   let sortArray = array.map(n =>{
          if(n % 2 === 1){
            return n
          }
        }).filter(n=> n !== undefined).sort((a,b)=> a - b)
   
        let ruru = []; 

   for(let i = 0 ; i < sortArray.length ; i++){
        for(let x = 0 ; x < arr.length; x++){
            if(arr[x] == undefined){
                arr[x]= sortArray[i]
                break
            }
        }
     }
     return arr
   }
