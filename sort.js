let arr = [2,1,23,1,34,2,3,100,23];
console.log(arr)

// soluotion 1
console.log(arr.sort())



// solution 2
for(let i=0;i < arr.length;i++){
    for(let j=i+1; j < arr.length;j++){
        if(arr[i] > arr[j]){
            let arr2=arr[i]
            arr[i]=arr[j]
            arr[j]=arr2
        }

    } 
}
console.log(arr)




  