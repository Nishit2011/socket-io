

const socket = io();

const button = document.querySelector("#increment");

socket.on("countupdated", (count)=>{
    console.log("Client received", count)
})

button.addEventListener("click", ()=>{
    console.log("clicked");
    socket.emit("increment")
})