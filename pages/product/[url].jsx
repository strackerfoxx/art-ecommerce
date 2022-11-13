import Layout from '../../components/layout'
import Image from 'next/image'
import { useState } from 'react'

export default function Producto({producto, agregarCarrito}) {
  
  const [cantidad, setCantidad] = useState(1)
  const {nombre, descripcion, precio, imagen, stock} = producto.attributes
  const image = imagen.data.attributes.formats.medium.url
  const {id} = producto

  function handleSubmit(e){
      e.preventDefault()

      const producto = {
        id,
        nombre, 
        cantidad, 
        precio, 
        imagen: image, 
        stock
      }

      agregarCarrito(producto)
  }

  const arreglo = []
  for (let i = 0; i <= stock; i++) {
    arreglo.push(i);
    
  }

  return (
    <Layout>
      <div className='center'><h1>{nombre}</h1></div>
        <div className='contenedor producto full'>
         <Image src={image} alt={`imagen del producto: ${nombre}`} width={600} height={500} />
           <div className="contenido" >
               <h1 className='heading'>{nombre}</h1>
               <p>Unidades en existencia:<p className='precio'> {stock}</p></p>
                 <p>Unidades en precio:<p className='precio'> {precio}</p></p>    
                 <a href="/" className='enlace'>Comprar ahora</a>  

                <form onSubmit={handleSubmit} className='formulario' >
                    <label>Selecciona una cantidad</label>
                    
                    <select onChange={ e => setCantidad(+e.target.value) }  id='cantidad'>
                        {arreglo.map( i => (
                          <option value={i}>{i}</option>
                          ))}
                    </select>
                          <input type='submit' value='agregar al carrito' />
                 </form> 
                 
             </div>
         </div>
         <p className='description' >{descripcion}</p>
    </Layout>
  )
}

export async function getStaticPaths(){
  const respuesta = await fetch(`${process.env.API_URL}/products`)
  const {data} = await respuesta.json()

  const paths = data.map( productoActual => ({
    params: {
      url: productoActual.id.toString()
    }
  }))

  return{
    paths, 
    fallback: false
  }
}

export async function getStaticProps({params: {url}}){
    const respuesta = await fetch(`${process.env.API_URL}/products/${url}?populate=imagen`)
    const {data: producto} = await respuesta.json()

    console.log(producto)
    return{
      props: {
        producto
      }
    }
}