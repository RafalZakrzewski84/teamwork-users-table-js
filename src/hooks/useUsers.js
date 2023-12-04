import { useEffect, useState, useCallback } from 'react';
import { getUsers } from '../utils';

export function useUsers(url) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [paginationNextUsers, setPaginationNextUsers] = useState('');
  const [paginationPreviousUsers, setPaginationPreviousUsers] = useState('');

  const fetchUsers = useCallback(async url => {
    setLoading(true);

    try {
      const result = await getUsers(url);

      if (result) {
        setUsers(result.users);
        setPaginationPreviousUsers(result.previous);
        setPaginationNextUsers(result.next);
        localStorage.setItem('users', JSON.stringify(result.users));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers('https://swapi.dev/api/people/');
  }, [fetchUsers]);

  return {
    loading,
    users,
    paginationNextUsers,
    paginationPreviousUsers,
    fetchUsers,
  };
}
