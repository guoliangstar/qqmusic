import Immutable from "immutable";


const defualtState = Immutable.fromJS({})

export default (state=defualtState,action)=>{
    console.log(action)
    switch(action.type){
        case "GET_DATE_PEDING":
            //state.info="正在请求"
        case "GET_DATE_FULFILLED":
           // state.info=action.payload
            console.log(action.payload)
        case "GET_DATE":
    }
    return state;
}