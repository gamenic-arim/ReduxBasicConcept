export const MULTIPLY = 'MULTIPLY';
export const SUB = 'SUB';


export const Multiply = ( num1,num2)=>{
    return{
        type : MULTIPLY,
        action : num1 * num2
    }
}
export const Subtraction = ( num1,num2)=>{
    return{
        type : SUB,
        action : num1 - num2
    }
}