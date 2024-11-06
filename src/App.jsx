import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/main.css'
import './assets/css/contact.css'
import './assets/css/theme.css'
import Home from './views/Home'
import Contact from './views/Contact'
import Feature from './views/Feature'
import Faqs from './views/Faqs'
import QuestionProvider from './context/QuestionContext'


import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  

  return (
    <QuestionProvider>
      <BrowserRouter>
        <body className='main-body'> 
          <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />          
                <Route path="/Feature" element={<Feature />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/FAQ" element={<Faqs />} />              
              </Routes>
            </main>
          <Footer />
        </body>
      </BrowserRouter>
    </QuestionProvider>
  )
}

export default App
