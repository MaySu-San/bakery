import initialRender from "./initialRender";
import listener from "./listener";
import setup from "./setup";

export const init=() => {
    console.log("POS is running"); 
    initialRender();
    listener();
    setup();
}