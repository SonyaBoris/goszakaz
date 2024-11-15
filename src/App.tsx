import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import MainPage from "./pages/Main"
import ContactPage from "./pages/Contact"

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
