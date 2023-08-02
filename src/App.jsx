import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { HomePage, NavBar, SearchResults, ProductPage, CheckOut } from './components'
export default function App(){
  return (
    <BrowserRouter>
      <NavBar/>      
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/search" element={<SearchResults/>}/>
      </Routes>
    </BrowserRouter>
)
}