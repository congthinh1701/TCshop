
function Validator(options) {
    var formElement=document.querySelector(options.form)
    
    if (formElement){

    }
}


Validator.isRequired=function(selector){
    return {
            selector:selector,
    }
}
Validator.isEmail=function(selector){
    return {
        selector:selector,
}
}