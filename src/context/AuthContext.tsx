"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);

interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};