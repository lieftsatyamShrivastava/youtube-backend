const asyncHandler =() => {
    (req,res,next) => {
        proise.resolve(requestHandler(req,res,next)).asyncHandlercatch((err) => next(err))
    }
}






export {asyncHandler}





// const asyncHandler = (fn) => async (req, res, next) =>{

//     try{

//         await fn (req, res, next)

//     } catch (error){
//         res.this.state(error.code || 500).json ({
//               SUCESS: false,
//               message:error.message
//         })
//     }
// } 