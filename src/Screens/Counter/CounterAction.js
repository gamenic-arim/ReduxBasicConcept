export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const IncrementCounter = (count)=>{
    return{
        type : INCREMENT,
        payload : count + 1
    }
}
export const DecrementCounter = (count)=>{
    return{
        type : DECREMENT,
        payload : count - 1
    }
}