// map 
// let users = [
//     {firstName : "Susan", lastName: "Steward"},
//     {firstName : "Daniel", lastName: "Longbottom"},
//     {firstName : "Jacob", lastName: "Black"}
//   ];
//   const userFullnames=users.map(element=>{
//       return element.firstName + " "+element.lastName
//   })
// console.log(userFullnames)



// solution 2


// const userUpadte=users.forEach(user=>{
//     const { firstName, lastName }=user
//     console.log(firstName,lastName)
// })


// let count=[22,33,44,55,66]
// const output=count.map(coun => coun += coun)
// console.log(output)



// const updateCount=count.forEach(coun =>{
//     const counter=coun+=coun
//     console.log(counter)
// })


















































// const titles = [{
//   1: { title: "Title 1" },
//   2: { title: "Title 2" },
//   3: { title: "Title 3" },
// }];
// const posts = [
//   { id: 1, post: "This is post 1" },
//   { id: 2, post: "This is post 3" },
//   { id: 3, post: "This is post 2" },
// ]
// // const rfrrf={...titles,...posts}

// // console.log(rfrrf)
// const rrrr=posts.map(rfe =>{ return (rfe)})
// console.log([rrrr,...titles])

// console.log(rrrr)
// for(let i=0;i<rrrr.length;i++){
//   for(j=i+1;j<titles.length;j++){
//   }
//   console.log(rrrr[i].concat(titles[j]))
// }


// // //Expected output
// // [
// //     { "id": 1, "title": "Title 1", "post": "This is post 1" },
// //     { "id": 2, "title": "Title 2", "post": "This is post 2" }, 
// //     { "id": 3, "title": "Title 3", "post": "This is post 3" }
// // ]

// const arrrrr= posts.map((user)=>{
//   return {...user,titles}
// })
// console.log(new Set(arrrrr))

// const completeDetail = posts.reduce((next, profile) => {
//   const id = profile
//   return { ...next, [id]: profile }
// }, {});
// console.log(completeDetail)

// const users = [
//   { id: 1, email: 'dcontreras@email.tld' },
//   { id: 2, email: 'afeher@email.tld' },
//   { id: 3, email: 'odj@email.tld' },
// ];

// const profiles = [
//   { userId: 1, firstName: 'Danielle', lastName: 'Contreras' },
//   { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' },
//   { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' },
// ];

// // Transform the profiles into an object keyed by the userId:
// const profilesByUserId = profiles.reduce((next, profile) => {
//   const { userId } = profile;
//   return { ...next, [userId]: profile };
// }, {});

// console.log(profilesByUserId)
// // profilesByUserId:
// // {
// //   1: { userId: 1, firstName: 'Danielle', lastName: 'Contreras' },
// //   2: { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' },
// //   3: { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' },
// // }

// // Look up the profiles by id:
// const usersWithProfiles = users.map((user) => {
//   return { ...user, profile: profilesByUserId[user.id] };
// });
// console.log(usersWithProfiles);
// usersWithProfiles:
// [
//   { id: 1, email: 'dcontreras@email.tld', profile: { userId: 1, firstName: 'Danielle', lastName: 'Contreras' } },
//   { id: 2, email: 'afeher@email.tld', profile: { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' } },
//   { id: 3, email: 'odj@email.tld', profile: { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' } },
// ]