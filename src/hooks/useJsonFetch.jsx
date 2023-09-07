import { useEffect, useState } from "react";

function useJsonFetch( request, options = null){
 {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (query) => {
      setLoading(`Идёт загрузка...`);

      try {
        const response = await fetch(import.meta.env.VITE_URL + query, options);
        console.log(import.meta.env.VITE_URL);
        const data = await response.json();
        setData(`Данные загружены. Статус: ${data.status}`);
      } catch (e) {
        setError(`Ошибка!`);
      } finally {
        setLoading(false);
      }
    };

    fetchData(request);
  }, [request, options]);

  return [{data, loading, error}];
}
}
export default useJsonFetch