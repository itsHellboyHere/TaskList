class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode
    }
}
const createCustomError=(mess,statusCode)=>{
    return new CustomAPIError(mess,statusCode)
}

module.exports={createCustomError,CustomAPIError}