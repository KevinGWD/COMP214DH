import React from 'react'
import {useForm} from 'react-hook-form'


export default function Signup() {

    const {register, handleSubmit, formState:{errors},reset}=useForm()
    
    const onSubmit=(data)=>{
      console.log(data);
      alert(JSON.stringify(data)+'     has been sent')
      reset()
    }

    const onCancel=()=>{
      reset()
    }
    
  return (
    <div>
        <div className="title"><h2>New Product</h2></div>
        <form onSubmit={(handleSubmit(onSubmit))}>

        <label htmlFor="name">Name{errors.name&&(<span className='error'>(Required)</span>)}</label>
        <input className="input" id='name' type="text" {...register('name',{required:true})}/>

        <label htmlFor="description">Description {errors.description&&(<span className='error'>(Required)</span>)}</label>
        <input className="input" id='description' type="text" {...register('description',{required:true})}/>

        <label htmlFor="category">Category</label>
        <select className="input" id='category' {...register('category',{required:true})}>
                <option value='men'>Men</option>
                <option value='women'>Women</option>
                <option value='teen'>Teen</option>
            </select>

        <label htmlFor="quantity">Quantity {errors.quantity&&(<span className='error'>(Required and must be a number)</span>)}</label>
        <input className="input" id='quantity' type="number" {...register('quantity',{required:true})}/>


        <label htmlFor="price">Price {errors.price&&(<span className='error'>(Required and must be a number)</span>)}</label>
        <input className="input" id='price' type="decimal" {...register('price',{required:true, pattern: /^-?\d*\.?\d+$/ })}/>

        <button className="submit">SUBMIIT</button>
        <button className="cancel" onClick={onCancel}>CANCEL</button>
        </form>
    </div>
  )
}