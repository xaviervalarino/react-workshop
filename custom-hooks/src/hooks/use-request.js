import { useCallback, useState } from "react";

export default function useRequest() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const sendRequest = useCallback(async (config, callback) => {
    if (!callback) {
      callback = config;
      config = {};
    }
    const {
      url = "https://react-workshop-679c8-default-rtdb.firebaseio.com/tasks.json",
      method = "GET",
      headers = {},
      body = null,
    } = config;
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch(url, {
        method,
        headers,
        body: body && JSON.stringify(body),
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
