import {ORM, fk, many, attr, Model} from 'redux-orm';
import * as consts from '../../constants';

export class UI extends Model {
    static reducer(action,UI,session) {
        switch(action.type){
            default:
                return null;
            case consts.BLOCK_CLICKED:
                UI.withId(0).clickedBlock = action.payload;
        }
    }
}
UI.modelName = 'UI';
UI.fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    clickedBlock : attr(),
    currentProject : attr(),
};


export class Block extends Model {
    static reducer(action,Block,session) {
        switch(action.type){
            default:
                return null;
        }
    }
}
Block.modelName = 'Block';
Block.fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    name: attr(),
    frequency : attr(),
    amplitude : attr()
    //authors: many('Author', 'books'),
    //publisher: fk('Publisher', 'books'),
};
export class Project extends Model {
    static reducer(action,Project,session) {
        switch(action.type){
            default:
                return null;
            case consts.ADD_TO_PROJECT:
                Project.withId(0).blocks.add(action.payload);
                break;
            case consts.TRACK_LOCATION:
                const block = action.payload.block;
                block.position = action.payload.deltaPosition;
                Project.withId(0).blocks.update(block);
                break;
        }
    }
}
Project.modelName = 'Project';
Project.fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    name: attr(),
    blocks: many('Block')
    //authors: many('Author', 'books'),
    //publisher: fk('Publisher', 'books'),
};

export const orm = new ORM();
orm.register(Block,Project,UI);

// const initialState = orm.getEmptyState(); // getDefaultState -> getEmptyState
// const session = orm.session(initialState); // .session instead of .from

export default orm;
