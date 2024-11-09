


const joke = document.querySelector("#list");
const button = document.getElementById('btn');
const remove = document.querySelector("#del");
const randomJoke = async() =>{
    try{
        const config = {headers:{Accept:'application/json'}};
        const res = await axios.get(`https://icanhazdadjoke.com/`, config); //? axios returns JSON format.
        
        const newLI = document.createElement('LI');
        newLI.append(res.data.joke);
        joke.append(newLI);
    }catch(e) {
        console.log("ERROR", e);
    }
}
button.addEventListener('click', randomJoke);

function deleteAll(){
    joke.innerHTML = "";
};
remove.addEventListener('click',deleteAll);

