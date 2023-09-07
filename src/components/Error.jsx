import useJsonFetch from "../hooks/useJsonFetch"
function Error() {
    const [{ error }] = useJsonFetch('error');
    return <div>Error: {error}</div>;
}
export default Error