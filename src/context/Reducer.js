const Reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_START":
        return{
            userdata:null,
isFetching:true,
error:false,
        };
        case "LOGIN_SUCCESS":
        return{
userdata:action.payload,
isFetching:false,
error:false,
        };
        case "LOGIN_FAILURE":
        return{
            userdata:null,
isFetching:false,
error:true,
        };
        default:
            return state;
    }
};
export default Reducer;