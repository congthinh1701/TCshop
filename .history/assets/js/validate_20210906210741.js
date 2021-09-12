
function Validator(options) {
    var selectorRules={}
    function Validate(inputElement,rule) {
        var errorMessage //=rule.test(inputElement.value)
        // lấy ra các rules
        var rules =selectorRules[rule.selector]
        // lặp qua từng rules và check
        for (var i=0;i<rules.length;i++){
            errorMessage= rules[i](inputElement.value)
            if (errorMessage){
                break;
            }
        }

        var errorElement=inputElement.parentElement.querySelector('.form-message')
            if (errorMessage){
                errorElement.innerText = errorMessage;
                inputElement.parentElement.classList.add('invalid')
                }
            else {
                errorElement.innerText ='';
                inputElement.parentElement.classList.remove('invalid')
                }
    }
    var formElement=document.querySelector(options.form)
    if (formElement){
        formElement.onsubmit = function
        options.rules.forEach(function(rule){
            // lưu lại rules
            if (Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }
            else{
                selectorRules[rule.selector]=[rule.test]
            }
            var inputElement=formElement.querySelector(rule.selector)
            if (inputElement){
                inputElement.onblur=function(){
                     Validate(inputElement,rule)
                }
            }
        })
    }
}


Validator.isRequired=function(selector,message){
    return {
            selector:selector,
            test:function(value) {
                return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
            }
    }
}
Validator.isEmail=function(selector,message){
    return {
        selector:selector,
        test:function (value) {
            var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là Email'
        }
    }
}