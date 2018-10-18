let age = document.getElementById('age');
console.log(age);
let Age = {
    value:age.value
};
 
function showUser(surname, name) {   
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);        
} 
showUser.apply(Age, ['murza','nin']);