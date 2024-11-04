import { createContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios"; // Ensure axios is imported

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const currencySymbol = '₹';
    const [token, setToken] = useState(localStorage.getItem('token') || false);
    const [userData, setUserData] = useState(false);

    const loadUserProfileData = async () => {
        if (!backendUrl) {
            console.error("Backend URL is not set.");
            return;
        }
        try {
            const response = await axios.get(`${backendUrl}/api/user/get-profile`, {
                headers: { token }
            });
            if (response.data.success) {
                setUserData(response.data.userData);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error loading profile data:", error);
            toast.error("Failed to load profile data.");
        }
    };

    const value = {
        doctors,
        currencySymbol,
        token,
        setToken,
        backendUrl,
        userData,
        setUserData,
        loadUserProfileData
    };

    useEffect(() => {
        if (token) {
            loadUserProfileData();
        } else {
            setUserData(false);
        }
    }, [token]);

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
