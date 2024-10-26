import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = () => {
  const [user, setUser] = useState<{ email: string; password: string } | null>(
    null,
  );

  const login = async (email: string, password: string) => {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.email === email && userData.password === password) {
        setUser(userData);
        return true;
      }
    }
    return false;
  };

  const register = async (email: string, password: string) => {
    const newUser = { email, password };
    await AsyncStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = async () => {
    setUser(null);
  };

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  return { user, login, register, logout };
};
