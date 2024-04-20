import { useEffect, lazy, Suspense } from "react"
import { Route, Routes } from 'react-router-dom'
import { createUserDocFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils"
import { setCurrentUser } from "./store/user/user.slice"
import { useDispatch } from 'react-redux'
import Spinner from "./components/Spinner/Spinner"

const Navigation = lazy(() => import('./routes/Navigation/Navigation'));

const Shop = lazy(() => import('./routes/Shop/Shop'));
const Checkout = lazy(() => import('./routes/Checkout/Checkout'));
const Home = lazy(() => import('./routes/Home/Home'));
const Authentication = lazy(() => import('./routes/Authentication/Authentication'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
