function solve(obj) {

if (obj.dizziness) {
let requiredWather = Number(obj.weight) * Number(obj.experience) * 0.1;
obj.levelOfHydrated +=requiredWather;
obj.dizziness = false;
}   
return obj

}
console.log(solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }    
  ));