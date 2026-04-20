import Footer from "./Footer"
import HeroSection from "./HeroSection"
import Investment from "./Investment"

const App = () => {
  return(
    <>
    <div className="App max-w-8xl mx-auto text-white">
        <HeroSection />
        <Investment />
        <Footer/>
    </div>
    </>
  )
}

export default App