import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import User from "./pages/User";
import NotFound from "./pages/NotFound"
import Todos from "./pages/Todos";
import UserProvider from "./context/UserInformationContext"
import TodoProvider from "./context/TodoContext"

function App() {
  return (
    <UserProvider>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/todos" element={<Todos />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </UserProvider>
  );
}

export default App;
