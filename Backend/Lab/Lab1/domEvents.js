import {EventEmitter} from "node:events"
function createDomElements(){
    const emitter=new EventEmitter();
    return{
        addEventListener(eventType,listener){
            emitter.on(eventType,listener);
        },
        removeEventListener(eventType,listener){
            emitter.on(eventType,listener);
        },
        dispatchEvent(event){
            event.target=this;
            event.currentTarget=this;
            emitter.emit(event.eventType,event)
        }
        function handleClick(event){

        }
        GamepadButton.
    }
}
