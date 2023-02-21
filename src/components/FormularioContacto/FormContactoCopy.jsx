import React from 'react'
import { useForm } from 'react-hook-form';


const FormContactoCopy = () => {


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
          <form className="Formulario1" onSubmit={handleSubmit(onSubmit)}>

            <input type="text" 
            placeholder="Nombre" 
            {...register("Nombre", {required: true, max: 25, min: 2, maxLength: 80})}
            className={`e`}
             />

            <input type="text" placeholder="Apellido" {...register("Apellido", {required: true, max: 25, min: 2, maxLength: 100})} />
            
            <input type="email"
             placeholder="Email"
              {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} 
              />
            <input type="tel" placeholder="Telefono" {...register("Telefono", {required: true, max: 18, min: 7, maxLength: 12})} />
            <textarea {...register("Mensaje", {required: true, max: 60, min: 10, maxLength: 100})} />

            <input type="submit" />
          </form>

          </div>
        </div>
      </div>
     </div> 


    
  )
}

export default FormContactoCopy