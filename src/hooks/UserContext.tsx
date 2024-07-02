"use client";

import { createContext, useContext, useState } from "react";

type TAppContext = {
  userId: string,
  userName: string,
}

const AppContext = createContext<TAppContext>({
  userId: '19',
  userName: 'Daryaman',
});

export function AppWrapper ({ children } : {
  children: React.ReactNode;
}) {

  let [state, setState] = useState({
    AppContext
  });

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext () {
  return useContext(AppContext);
}















// import React, {
//   createContext,
//   Dispatch,
//   ReactElement,
//   ReactNode,
//   SetStateAction,
//   useContext,
//   useState
// } from "react";

// type AuthContextType = {
//   user: { [key: string]: any } | null;
//   setUser: Dispatch<SetStateAction<{ [key: string]: any } | null>>;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// function useAuth(): AuthContextType {
//   const context = useContext(AuthContext);
//   if (!context) {
//       throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// const AuthProvider = (props: { children: ReactNode }): ReactElement => {
//   const [user, setUser] = useState<{ [key: string]: any } | null>(null);

//   return <AuthContext.Provider {...props} value={{ user, setUser }} />;
// };

// export { AuthProvider, useAuth };