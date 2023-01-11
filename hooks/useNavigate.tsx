import { useRouter } from 'next/router';
import { useCallback } from 'react';

const useNavigate = () => {
  const router = useRouter();

  const navigate = useCallback((path: string) => {
    router.push(path);
  }, [router]);

  return navigate;
};

export default useNavigate;