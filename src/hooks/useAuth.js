import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'content-type': 'application/json',
      },
    };
    const { data: acces_token } = await axios.post(endPoints.auth.login, { email, password }, options);
    console.log(acces_token);
  };

  return {
    user,
    signin,
  };
}
