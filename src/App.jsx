import React from "react";
import { BrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Products } from "./pages";
import ClientSignup from "./pages/ClientSignup";
import Feedback from "./pages/Feedback";
import InviteFriends from "./pages/InviteFriends";
import Login from "./pages/Login";
import SavedVideos from "./pages/SavedVideos";
import VendorSignup from "./pages/VendorSignup";
import SignupLayout from "./pages/SignupLayout";
import PurchasedProduct from "./pages/PurchaseProducts";
import UserProfile from "./pages/UserProfile";
import VendorProfile from "./pages/VendorProfile";
import MyProfile from "./pages/MyProfile";
import ShowcaseReview from "./pages/ShowcaseReview";
import TermsAndConditions from "./pages/Terms&conditions";
import Comments from "./pages/Comments";
import Clothes from "./pages/Clothes";
import Reviews from "./pages/Reviews";
import AddProduct from "./pages/AddProduct";

import VerifyOtp from "./pages/VerifyOtp";
import VerifyOtpVendor from "./pages/VerifyOtpVendor";
import UploadedProduct from "./pages/UploadedProduct";
import Subscription from "./pages/Subscription";
import PaymentMethod from "./pages/PaymentMethod";
import Payment from "./pages/Payment";
import ProductList from "./pages/Products/ProductList";
import PaymentSuccess from "./pages/PaymentSuccess";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <SignupLayout />,
//     children: [
//       {
//         path: '/',
//         element: <ClientSignup />
//       },
//       {
//         path: '/vendor',
//         element: <VendorSignup />
//       }
//     ]
//   }
// ])

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/savedvideos/:productId" element={<SavedVideos />} />
        <Route path="/signup" element={<SignupLayout />}>
          <Route path="/signup" element={<ClientSignup />} />
          <Route path="/signup/vendor" element={<VendorSignup />} />
        </Route>
        <Route path="/friends" element={<InviteFriends />} />
        <Route path="/purchasedproducts" element={<PurchasedProduct />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/vendorprofile" element={<VendorProfile />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/reviews/:productId" element={<ShowcaseReview />} />
        <Route path="/terms&conditions" element={<TermsAndConditions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/comments/:productId" element={<Comments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Clothes />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/addproduct" element={<AddProduct />} />

        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/verifyotp/vendor" element={<VerifyOtpVendor />} />
        <Route path="/uploaded" element={<UploadedProduct />} />
        <Route path="/:productId/purchace" element={<PurchasedProduct />} />
        <Route path="/sub" element={<Subscription />} />
        <Route path="/paymentmethod" element={<PaymentMethod />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
