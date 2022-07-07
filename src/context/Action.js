export const LoginStart=(useCredentials)=>({
    type:"LOGIN_START",
})
export const LoginSuccess=(userdata)=>({
    type:"LOGIN_SUCCESS",
    payload:userdata,
})
export const LoginFailuer=()=>({
    type:"LOGIN_FAILURE"
})