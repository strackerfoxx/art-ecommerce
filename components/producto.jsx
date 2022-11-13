import Image from 'next/image'
import Link from 'next/link'

export default function Producto({producto}) {
  const {nombre, descripcion, precio, imagen} = producto.attributes
  const {id} = producto
  const image = imagen.data.attributes.formats.medium.url
  return (
    <Link href={`/product/${id}`} >
    <div className='producto'>
        <Image className='imagen' src={image} alt="papas" width={300} height={250} />
        <div className='contenido'>
            <h3>{nombre}</h3>
            <p className='descripcion'>{descripcion}</p>
            <p className='precio'>{precio}$</p>
            
            <Link className="enlace" href={`/product/${id}`}>Ver Producto</Link>
        </div>
    </div>
    </Link>
  )
}
