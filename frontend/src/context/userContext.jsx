import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export default function ProvideUser({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function currentUser() {
      try {
        const res = await fetch(
          "http://localhost:3003/v1/api/auth/current-user",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!res.ok) {
          const errorData = await res.json();
          setError(errorData.message);
          setIsLoading(false);
        }

        const data = await res.json();
        setUser(data.user);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    currentUser();
  }, []);

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3003/v1/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Logout failed");
      }
      console.log(data);

      setUser(null); // Clear user state
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{ user, error, setUser, isLoading, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
