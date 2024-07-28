const arr = [3, 45, 23, 61, 4, 2, 76,879];

// const summation = arr.reduce(
//   (prevValue, CurrentValue) => CurrentValue + prevValue,
//   0
// );
// console.log(summation);

// const sort = arr.sort((a, b) => b - a);
// console.log(sort);

// const name = arr.findIndex((val)=> v5l===2);
// console.log(name);

const student = {
    name: "Arman Hossen",
    age: 23,
    profession: "Full Stack Developer",
    company: "AGAMiLabs",
    company_Info: {
        address: "1no University Street,Hathazari,Chattogram",
        phone: "01883350119",
    
    }
}
    
// console.log(student['name']);
console.log(Object.create(student));
   
// for (const key in student) {
//     if (Object.hasOwnProperty.call(student, key)) {

//         const element = student[key];
//         console.log(element);
        
//     }
// }
// console.log(playWithObj);