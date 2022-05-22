import React, {useState} from "react";


function MovebleBlock (props) {
    const [position, setPosition] = useState({left: 10, top: 10});

    function dragEndHandler(event) {
      setPosition({
        left: event.pageX,
        top: event.pageY 
      })
    }

    return (
        <div 
            id={props.id}
            className="Moveble-block"
            style={{left: position.left, top: position.top}}
            draggable={true}
            onDragEnd={(event) => {dragEndHandler(event)}}
        >
          block
        </div>
    );
}


export default MovebleBlock;