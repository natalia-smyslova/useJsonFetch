import useJsonFetch from "../hooks/useJsonFetch"
function Data() {
    const [{ data }] = useJsonFetch('data');
    return <div>Data: {data}</div>;
}
export default Data