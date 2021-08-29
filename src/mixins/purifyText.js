import DOMPurify from "dompurify";
export default{
    computed:{
        purifyText(value) {
            return DOMPurify.sanitize(value);
         },  
    }
}