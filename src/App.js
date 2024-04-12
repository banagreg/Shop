import { useEffect } from "react"
import Navigation from './routes/Navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home/Home'
import Authentication from './routes/Authentication/Authentication'
import Shop from './routes/Shop/Shop'
import Checkout from './routes/Checkout/Checkout'
import { createUserDocFromAuth, getCurrentUser, onAuthStateChangedListener } from "./utils/firebase/firebase.utils"
import { checkUserSession, setCurrentUser } from "./store/user/user.action"
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
