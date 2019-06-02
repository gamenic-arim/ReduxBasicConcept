import { MULTIPLY, SUB } from './CalculateAction';

const Inital = {
    defaultValue : 0
}
export default (state=Inital, action)=>{
    switch(action.type){
        case MULTIPLY:
            return{
                ...state,
                defaultValue : action.payload
            }
        case SUB:
                return{
                    ...state,
                    defaultValue : action.payload
                }
        default :
                return state
    }
}