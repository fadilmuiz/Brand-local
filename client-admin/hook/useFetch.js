import { useState, useEffect } from "react";

export default function useFetch(entity = "", id = "") {
    const [clothes, setClothes] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const url = `${API_URL}/${entity}/${id}`;
    fetch(url)
      .then(async (res) => {
        if (!res.ok) {
          throw await res.text();
        }
        return res.json();
      })
      .then((val) => setData(val))
      .catch((err) => {
        setErrorMessage(err?.message || "Internal Server Error");
      })
      .finally(() => setLoading(false));
  }, [id, entity]);

  return {
    data,
    loading,
    errorMessage,
  };
}
