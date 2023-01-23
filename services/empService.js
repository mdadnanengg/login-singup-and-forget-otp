import empModel from "../models/empModel.js"

const validateUser=async (username,userpass)=>{
    console.log("name is validate",username)
    console.log("pass in validate",userpass)
    try {
        const data = await empModel.find({name:username,password:userpass});
        console.log("data", data)
        if (data.length !== 0) {
            return 'success'
        } 
        else {
            return 'failed'
        }
    } catch (error) {
        console.log(error)
    }
}

export {validateUser}