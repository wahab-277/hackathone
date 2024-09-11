
// const meraNaam = (name: string) =>{

//   return (`Respected ${name}, It is necessary to inform you that your U.S Visa application has
//     been approve please visit to the immegration office to claim it`)
// };

// console.log(meraNaam("Wahab"));


const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;

const skills = document.getElementById('skills') as HTMLElement;


toggleButton.addEventListener('click',()=>{
if (skills.style.display ==='none'){

  skills.style.display = 'block'

}
else{

  skills.style.display = 'none'
}
});
