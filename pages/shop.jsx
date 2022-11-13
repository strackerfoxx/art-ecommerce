import Layout from '../components/layout'
import Listado from '../components/listado'

export default function Shop({productos}) {
  return (
    <Layout>
        <Listado productos={productos} />
    </Layout>
  )
}

export async function getStaticProps(){
    const respuesta = await fetch(`${process.env.API_URL}/products?populate=imagen`)
    const {data: productos} = await respuesta.json()

    return{
        props: {
            productos
        }
    }
}