import Producto from './producto'

export default function Listado({productos}) {
  return (
    <>
      <div className='productos-grid' >      
        {productos.map( producto => (
              <Producto producto={producto} key={producto.id}/>
        ))}
        </div>
    </>
  )
}
