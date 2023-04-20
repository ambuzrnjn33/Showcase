import axios from "axios";
import { useState, useContext, createContext } from "react";
import Cookies from "js-cookie";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  // const url = "https://shmapi.qurinomsolutions.com";
  const url = "http://localhost:3000";
  const [user, setUser] = useState(
    Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null
  );
  const [token, setToken] = useState(
    Cookies.get("token") ? JSON.parse(Cookies.get("token")) : null
  );
  const [typeOfUser, setTypeOfUser] = useState(
    Cookies.get("type") ? Cookies.get("type") : null
  );
  const [loading, setLoading] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState([]);

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  // CLIENT REGISTER
  const registerClient = async (userInfo, navigate) => {
    try {
      setLoading(true);
      const response = await axios.post(`${url}/user/createuser`, userInfo);
      console.log(response);
      Cookies.set("user", JSON.stringify(response.data.data), { expires: 2 });
      setLoading(false);
      setUser(response.data.data);
      navigate("/verifyotp");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // LOGIN
  const loginEmail = async (userInfo, userType, navigate) => {
    try {
      if (userType === "client") {
        setLoading(true);
        const response = await axios.post(`${url}/user/login`, userInfo);
        console.log(response);
        Cookies.set("user", JSON.stringify(response.data.data), { expires: 2 });
        setUser(response.data.data);
        Cookies.set("token", JSON.stringify(response.data.token), {
          expires: 2,
        });
        setToken(response.data.token);
        setLoading(false);
        setTypeOfUser(userType);
        Cookies.set("type", userType, { expires: 2 });
        navigate("/");
      } else {
        setLoading(true);
        const response = await axios.post(`${url}/vendor/login`, userInfo);
        console.log(response);
        Cookies.set("user", JSON.stringify(response.data.data), {
          expires: 2,
        });
        setUser(response.data.data);
        Cookies.set("token", response.data.token, { expires: 2 });
        setToken(response.data.token);
        setLoading(false);
        setTypeOfUser(userType);
        Cookies.set("type", userType, { expires: 2 });
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // VERIFY CLIENT OTP
  const verifyOtpClient = async (formData, navigate) => {
    try {
      setLoading(true);
      const response = await axios.post(`${url}/user/verifyuser`, formData);
      console.log(response);
      setLoading(false);
      setToken(response.data.token);
      Cookies.set("token", response.data.token, { expires: 2 });
      setTypeOfUser("client");
      Cookies.set("type", "client", { expires: 2 });
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const signOut = (navigate) => {
    console.log("hello");
    Cookies.remove("token");
    Cookies.remove("user");
    Cookies.remove("type");
    setToken(null);
    setUser(null);
    navigate("/login");
    setTypeOfUser(null);
  };
  // VENDOR REGISTER
  const registerVendor = async (userInfo, navigate) => {
    try {
      setLoading(true);
      const response = await axios.post(`${url}/vendor/createvendor`, userInfo);
      console.log(response);
      Cookies.set("user", JSON.stringify(response.data.data), { expires: 2 });
      setLoading(false);
      setUser(response.data.data);
      navigate("/verifyotp/vendor");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  // Verify Otp vendor
  const verifyOtpVendor = async (formData, navigate) => {
    try {
      console.log(formData);
      setLoading(true);
      const response = await axios.post(`${url}/vendor/verifyuser`, formData);
      console.log(response);
      setLoading(false);
      setToken(response.data.token);
      Cookies.set("token", response.data.token, { expires: 2 });
      setTypeOfUser("vendor");
      Cookies.set("type", "vendor", { expires: 2 });
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // Login With Phone
  const loginPhone = async (formData, userType, navigate) => {
    try {
      if (userType === "client") {
        setLoading(true);
        const response = await axios.post(
          `${url}/user/loginby-phone`,
          formData
        );
        console.log(response);
        Cookies.set("user", JSON.stringify(response.data.data), { expires: 2 });
        setUser(response.data.data);

        navigate("/verifyotp");
        setLoading(false);
      } else {
        setLoading(true);
        const response = await axios.post(
          `${url}/vendor/loginby-phone`,
          formData
        );
        console.log(response);
        Cookies.set("user", JSON.stringify(response.data.data), { expires: 2 });
        setUser(response.data.data);

        navigate("/verifyotp/vendor");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const [productData, setProductData] = useState([]);
  const searchProducts = async (search, location, navigate) => {
    try {
      const { latitude, longitude } = location;
      let response;
      if (!latitude && !longitude) {
        response = await axios.post(`${url}/getproducts`, {
          inputSearch: search,
        });
      } else {
        response = await axios.post(
          `${url}/user/getproducts?lat=${latitude}&lang=${longitude}&sort=l`,
          {
            inputSearch: search,
          }
        );
      }
      setProductData(response.data.data);
      console.log(response);
      navigate(`/products?lat=${latitude}&lang=${longitude}&search=${search}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        registerClient,
        loading,
        verifyOtpClient,
        user,
        signOut,
        loginEmail,
        token,
        loginPhone,
        registerVendor,
        verifyOtpVendor,
        typeOfUser,
        productData,
        filteredProducts,
        setFilteredProducts,
        searchProducts,
        url,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
