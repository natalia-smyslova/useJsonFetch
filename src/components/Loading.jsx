import useJsonFetch from "../hooks/useJsonFetch"
function Loading() {
    const [{ loading }] = useJsonFetch('loading');
    return <div>Loading: {loading}</div>;

}
export default Loading