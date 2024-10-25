import './assets/css/main.css'
import './assets/css/theme.css'
import Clients from './components/Clients'
import Contacts from './components/Contacts'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import How from './components/How'
import Partners from './components/Partners'
import Show from './components/Show'
import Subscribe from './components/Subscribe'


function App() {
  
  return (
    <>
    <body className='main-body'> 
     <Header /> 
     <main>
      <Hero />
      <Partners />
      <Features />
      <How />
      <Show />
      <Contacts />
      <Clients />
      <Faq />
      <Subscribe />
     </main>
     <Footer />
    </body>
    </>
  )
}

export default App
