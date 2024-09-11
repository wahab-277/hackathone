// const meraNaam = (name: string) =>{
//   return (`Respected ${name}, It is necessary to inform you that your U.S Visa application has
//     been approve please visit to the immegration office to claim it`)
// };
// console.log(meraNaam("Wahab"));
var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
