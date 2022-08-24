import { useCallback, useState } from "react";

export default function useRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendRequest = useCallback(async (config, callback) => {
    const { url, method, headers, body } = config;
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch(url, {
        method: method || 'GET',
        headers: headers || {},
        body: body ? JSON.stringify(body) : null,
      });
      if (!res.ok) {
        throw new Error("Request failed");
      }
      const data = await res.json();
      callback(data);
    } catch (error) {
      console.error(error);
      setIsError(error.message);
    }
    setIsLoading(false);
  }, []);
  return { isLoading, isError, sendRequest };
}
