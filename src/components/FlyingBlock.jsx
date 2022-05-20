import React, {useState} from "react";


const FlyingBlock = function () {

    const [blockPos, setBlockPos] = useState({x:0, y:0})

    function moveAt(pageX, pageY, shiftX = 0, shiftY = 0) {

        blockPos.x = pageX - shiftX + 'px';
        blockPos.y = pageY - shiftY + 'px';
        console.log("dragElement.style.left = ", blockPos.x)
        console.log("dragElement.style.top = ", blockPos.y)

        setBlockPos({
            x: blockPos.x,
            y: blockPos.y
        });
        
    }

    function onMouse(event) {
        //debugger;
    
        moveAt(event.pageX, event.pageY);
        
    }



    function onDown(event) {
        
        //let dragElement;
        let pageX = event.pageX;
        let pageY = event.pageY;

        let shiftX = event.clientX - event.target.getBoundingClientRect().left;
        let shiftY = event.clientY - event.target.getBoundingClientRect().right;
        
        event.target.style.position = 'absolute';
        event.target.style.zIndex = 1000;

        document.body.append(event.target);
        //debugger;
        moveAt(pageX, pageY, shiftX, shiftY)

        // передвигаем
        document.addEventListener('mousemove', onMouse)

        //отпускаем
        event.target.onmouseup = function() {
            //debugger;
            document.removeEventListener('mousemove', onMouse)
            
            event.target.onmouseup = null
            
        };
        console.log("shiftX = " + shiftX + "\nshiftY = " + shiftY)
        
    }

    return (
        
        <div id="rectangleBlock" className="flyingBlock" style={{
            left: blockPos.x, 
            top: blockPos.y,
              
            }}
            onMouseDown = {event => onDown(event)}
            //onMouseUp = {event => onUp(event)}
            onDragStart = {() => false}
        >
                dafasdfasfasfsdfdas
        </div>
        
    );
    

}

export default FlyingBlock