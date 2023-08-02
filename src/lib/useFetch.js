import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();
    fetch(url, {
      signal: abortController.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("There is an error");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data.data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setLoading(false);
          console.log(err.message);
          setError(err.message);
        }
      });
    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
}
