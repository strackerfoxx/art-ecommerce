import Layout from '../components/layout'

export default function Carrito({carrito}) {
  console.log(carrito)
  return (
    <Layout>
        <h1>{carrito.length > 0 ? <h1>Productos</h1> : 'No hay productos en el carrito'}</h1>

        {carrito.length > 0 ? carrito.map( producto => (
          <p>{producto.nombre}</p>
        )) : null}

    </Layout>
  )
}
