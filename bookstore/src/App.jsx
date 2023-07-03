import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import ContactUs from "./pages/ContactUs";
import BookStorep from "./pages/Bookstorep";
import DonorForm from "./components/DonorForm";
import BookSellForm from "./components/BookSellForm";

import Donor from "./pages/Donor";
import AboutUs from "./pages/Aboutus";
import Blog from "./pages/Blog";
import Cart from "./components/Cart";
import Signadi from "./pages/SignIn";
import Signupo from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";

import Aboutus from "./pages/Aboutus";
import Upload from "./pages/Upload";
import Protected from "./features/auth/Protected";
import Detected from "./features/auth/Detected";
import Address from "./components/Address";
import MyBooks from "./pages/MyBooks";
import { useEffect } from "react";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blogpage" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route
          path="/donor"
          element={
            <Protected>
              <Donor />
            </Protected>
          }
        />

        <Route
          path="/store"
          element={
            <Protected>
              <BookStorep />
            </Protected>
          }
        />

        <Route
          path="/donate"
          element={
            <Protected>
              <DonorForm />
            </Protected>
          }
        />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route
          path="/sell"
          element={
            <Protected>
              <BookSellForm />
            </Protected>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Signadi />} />
        <Route path="/register" element={<Signupo />} />
        <Route path="/edit" element={<Upload />} />
        <Route path="/address" element={<Address />} />
        <Route
          path="/myproduct"
          element={
            <Protected>
              <MyBooks />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
};
export default App;
