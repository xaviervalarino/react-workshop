import { useCallback, useState } from "react";

export default function useRequest(method) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const baseUrl =
    "https://react-workshop-679c8-default-rtdb.firebaseio.com/tasks.json";

  async function sendHTTP(url, opts, callback) {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch(url, opts);
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
  }

  // GET request
  let sendRequest = useCallback(
    (callback) => {
      sendHTTP(baseUrl, { method }, callback);
    },
    [method]
  );

  if (method === "DELETE") {
    sendRequest = useCallback(
      (id, callback) => {
        const url = baseUrl.replace(".json", `/${id}.json`);
        return sendHTTP(url, { method }, callback);
      },
      [method]
    );
  }
  if (method === "POST") {
    sendRequest = useCallback(
      (body, callback) => {
        const opts = {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        };
        return sendHTTP(baseUrl, opts, callback);
      },
      [method]
    );
  }
  if (method === "PUT") {
    sendRequest = useCallback(
      (id, body, callback) => {
        const url = baseUrl.replace(".json", `/${id}.json`);
        const opts = {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        };
        return sendHTTP(url, opts, callback);
      },
      [method]
    );
  }

  return { isLoading, isError, sendRequest };
}
