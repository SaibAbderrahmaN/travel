import * as api from '../api/index.js';



export const signIn= (formData , navigate) => async (dispatch)=>{
     try {
      const {data} = await api.signIn(formData)
      dispatch({type:'AUTH',data})
      navigator("./", { replace: true })
     } catch (error) {
        console.log(error);

        
     }


}

export const signup = (formData , navigator) => async (dispatch)=>{
    try {
       
    
      const {data} = await api.signup(formData)
      dispatch({type:'AUTH',data})
      navigator("./", { replace: true })
    } catch (error) {
        console.log(error);

       
    }


}