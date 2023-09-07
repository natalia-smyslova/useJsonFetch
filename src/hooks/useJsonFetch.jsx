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
        const data = await response.json();

        if(!response.ok){
          setError(`Ошибка! ${data.status}`)
        }
        setData(`Данные загружены. Статус: ${data.status}`);
      } catch (e) {
        setError(`Ошибка! ${e}`);
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