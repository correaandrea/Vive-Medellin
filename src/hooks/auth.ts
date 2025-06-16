import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Login } from '../services/auth';
import { UserLogin, ResponseLogin } from '../interfaces/user';

export function useAuth() {
  const [name, setName] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async (form: UserLogin): Promise<ResponseLogin | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await Login(form);
      localStorage.setItem('token', response.access_token);
      localStorage.setItem('rol', response.rol);
      localStorage.setItem('name', response.name);
      setName(response.name);

      if (response.rol === 'admin') router.push('/Admin');
      else if (response.rol === 'user') router.push('/User');

      return response;
    } catch (err: any) {
      throw new Error(err.response?.data?.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('name');
    setName(null);
    router.push('/');
  };

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return { login, logout, loading, error, name }
}
