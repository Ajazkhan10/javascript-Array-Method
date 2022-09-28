// removing last element of an array

// solution 1

// function removeElement(arr) {
//   if(arr.length > 0)
//     arr.length --;
//   return arr
// };
// var myarr = [10,11,12,13,14,15,16,17]
// console.log(removeElement(myarr));
// console.log(removeElement(myarr));


// solution 2
// const arr1=[1,2,3,4,5,6,8]
// const arr= arr1.splice(arr.length,1)
// console.log(arr)

// solution 3

// const arr1=[1,2,3,4,5,6]
// // console.log(arr1.length -1)
// const arr=arr1.map((index) => index < arr1.length )
// console.log(arr)

// solution 4

// const arr1=[1,2,3,4,5,6]
// const arr=arr1.slice(0,-1)
// console.log(arr)

// solution 5

// const arr1=[1,2,3,4,5,6]
// const arr2 = arr1.filter((index)=> index < arr1.length)
// console.log(arr1)
// console.log(arr2)

// solution 6
// const arr=[1,2,3,4,5,6]
// arr.pop();
// console.log(arr)
