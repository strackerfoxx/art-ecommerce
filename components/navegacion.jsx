import Link from 'next/link'
import Image from 'next/image'


export default function Navegacion() {

    return(
        <div className='navegacion'>
        <Link href='/' >index</Link>
        <Link href='/shop' >shop</Link>
        <Link href='/' >best seller</Link>
        </div>
    )
}