import { Route,Routes, BrowserRouter} from "react-router-dom";
import Index from "./pages/index";
import Create from "./pages/create";
import View from "./pages/view";
import Store from "./store/store";

function App() {
  return (
      <Store>
          <BrowserRouter>
              <Routes>
                    <Route path='/' element={<Index/>}/>
                    <Route path='create' element={<Create/>}/>
                    <Route path='view/:BookId' element={<View/>}/>
              </Routes>
          </BrowserRouter>
      </Store>
  );
}

export default App;
