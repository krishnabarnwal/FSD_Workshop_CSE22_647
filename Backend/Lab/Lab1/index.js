import EventEmmiter from "node:events";
const myEmmiter=new EventEmmiter();
myEmmiter.on("greet",()=>{
    console.log("class started")
})
myEmmiter.on("exit",()=>{
    console.log("class finished");
})

myEmmiter.emit("greet",'');
myEmmiter.emit("exit",'');