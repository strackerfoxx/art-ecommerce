import { useEffect, useState } from 'react'

import '../styles/globals.css'
import '../styles/home.css'
import '../styles/us.css'
import '../styles/listado.css'
// import '../styles/carrito.css'

function MyApp({ Component, pageProps }) {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
  const [carrito, setCarrito] = useState(carritoLS)

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const [hidratacion, setHidratacion] = useState(false)

  useEffect(() => {
    setHidratacion(true)
  
  }, [])
  
  
  const agregarCarrito = producto => {
    // Comprobar si la producto ya esta en el carrito...
    if(carrito.some( productoActual =>  productoActual.id === producto.id )) {
        // Iterar para actualizar la cantidad
        const carritoActualizado = carrito.map( productoActual => {
            if( productoActual.id === producto.id ) {
                productoActual.cantidad = producto.cantidad;
            } 
            return productoActual;
        });
        // Se asigna al array
        setCarrito([...carritoActualizado]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    } else {
        // En caso de que el articulo no exista, es nuevo y se agrega
        setCarrito([...carrito, producto]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    }
}

const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}

const actualizarCantidad = producto => {
  const carritoActualizado = carrito.map( productoActual => {
    if(productoActual.id === producto.id ) {
      productoActual.cantidad = parseInt( producto.cantidad )
    } 
    return productoActual
  })
  setCarrito(carritoActualizado)
  window.localStorage.setItem('carrito', JSON.stringify( carrito ));
}

  return hidratacion ? <Component {...pageProps} 
         agregarCarrito={agregarCarrito}
         carrito={carrito}
  /> : null
}

export default MyApp
