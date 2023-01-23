import { validateUser } from "../services/empService.js";

let empController = async (req,res)=>{
    let user=req.body.username;
    let pass=req.body.userpass;
    console.log("username",user)
    console.log("userpass",pass)
    try {
        let result= await validateUser(user,pass);
        // console.log("result",result);
        if (result === "success") {
            res.render('dashboard.ejs',{name:user})
        }else{
            res.render('failedLogin.ejs');
        }
    } catch (error) {
        console.log(error)
    }


    // if (user=='adnan' && pass=="test") {
    //     res.render('dashboard.ejs',{name:user})
    // } else{
    //     res.render('failedLogin.ejs')
    // }
}

export {empController}