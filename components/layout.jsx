import Header from './header'
import Footer from './footer'

export default function Layout({children}) {
  return (
    <>
        <Header/>
            <div className='hijo'>
                {children}
            </div>
        <Footer/>
    </>
  )
}
