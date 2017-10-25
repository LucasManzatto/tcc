import React, { Component } from 'react';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import _ from 'lodash';
//redux
import {connect} from 'react-redux';
import {trackLocation} from '../actions/index';

const blockStyle={
    height: 80,
    width: 120,
    border: '1px solid black'
}


const Block = props =>{
    const block = _.find(props.blocks,{'id' : props.block});
    console.log(block);
    /*const handleDrag = (e,ui) => {
       const deltaPosition ={
            x: x + ui.deltaX,
            y: y + ui.deltaY
        };
        props.trackLocation(deltaPosition);
    }
    */
    //const {x, y} = props.block.position;
    return(
        <Draggable bounds="parent" defaultPosition={{x: 0, y: 0}}>
            <div style={blockStyle}>
                {block.name}
            </div>
        </Draggable>
    );
}

const mapStateToProps = state =>{
    return{
        blocks : state.app.blocks.byId
    }
}

export default connect(mapStateToProps,{trackLocation})(Block);
