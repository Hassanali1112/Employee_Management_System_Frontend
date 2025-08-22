import { useCallback, useState } from "react";
import axios from "axios";


export const useLoginForm = () =>{
const [form, setForm] = useState({ email : "", password : ""})
const [isSubmitting, setIsSubmitting] = useState(null);
const [errors, setErrors] = useState({});


const handleChange = useCallback(
  (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value}));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    
  },
  [errors]
);

const validateForm = useCallback(()=>{

  const newErrors = {}
  console.log("start")
  if(!form.email.trim()){
    console.log("required email")
    newErrors.email = "Email is required"
  } else if(!/\S+@\S+\.\S+/.test(form.email)){
    console.log("Invalid email");

    newErrors.email = "Email is invalid";
  }

  if(!form.password.trim()){
    console.log("required password");

    newErrors.password = "Password is required";
  } else if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(form.password)){
    console.log("Invalid password");
    
    newErrors.password = "Password must be at least 8 characters with one Uppercase, lowercase, number and special character";

    
  }
  console.log("new errors", newErrors);
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
},[form])


   const handleSubmit = useCallback(
   
     async (e, onSuccess) => {
      console.log(form)
       e.preventDefault();

        const result = validateForm();
        console.log("validation result", result);

       if (!validateForm()) {
       
        console.log("invalid error")
         return;
       }
       console.log(form)
       setIsSubmitting(true);

       try {
         const response = await axios.post(
           "http://localhost:6392/api/v1/users/auth/login",
           form,
           {
             withCredentials: true,
           }
         );
         console.log("response :",response)

         if (response?.data?.success) {
           // Reset form on success
           setForm({ email: "", password: "" });
           setErrors({});

           // Call success callback with user data
           if (onSuccess) {
             onSuccess(response.data.user);
           }

           return { success: true, user: response.data.user };
         }
       } catch (error) {
         console.error("Login error:", error);

         // Handle server validation errors
         if (error.response?.data?.errors) {
           setErrors(error.response.data.errors);
         } else if (error.response?.data?.message) {
           setErrors({ general: error.response.data.message });
         } else {
           setErrors({
             general:
               "Login failed. Please check your credentials and try again.",
           });
         }

         return {
           success: false,
           error: error.response?.data?.message || "Login failed",
         };
       } finally {
        
        console.log("done")
         setIsSubmitting(false);
       }
     },
     [form, validateForm]
   );

  const resetForm = useCallback(() => {
    setForm({ email: "", password: "" });
    setErrors({});
  }, []);


return {
  form,
  errors,
  isSubmitting,
  handleChange,
  handleSubmit,
  resetForm,
}
}

