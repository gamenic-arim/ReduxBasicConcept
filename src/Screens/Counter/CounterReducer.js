import { INCREMENT, DECREMENT } from './CounterAction';
const Inital = {
    counter_value : 13
}
export default (state=Inital, action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                counter_value : action.payload
            }
        case DECREMENT:
                return{
                    ...state,
                    counter_value : action.payload
                }
        default :
                return state
    }
}