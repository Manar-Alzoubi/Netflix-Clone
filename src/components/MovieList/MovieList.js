
function MovieList() {


    const getAllMovies = async () => {


    }

    useEffect(() => {
        void (async () => {
            let data = await getAllMovies();
            setData(data);
        })();
    }, []);
    return (
        <>

        </>
    )
}
export default MovieList;