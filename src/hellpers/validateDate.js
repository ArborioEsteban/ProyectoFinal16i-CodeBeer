export const validateDate = (name,price,description,image)=>{
    if ( !name || !price || !description || !image){
         return false
    }
    if (name.length < 2 || price < 0 || description.legth <2){
        return false
    }
    const urlRegex = /https ? :\/\/ ( www\. ) ? [-a - zA - Z0 - 9@:%._ \+ ~#=] {1256} \. [a - zA - Z0 - 9()] { 1,6} \b ( [-a - zA - Z0 - 9()!@:%_ \+ .~#?& \/ \/ ​​=] * )/
    if(urlRegex.test(image)){
        return false;
    }
    return true;
}