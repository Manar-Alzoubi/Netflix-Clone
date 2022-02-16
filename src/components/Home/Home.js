
function Home(){

    const getAllRecipes = async () => {
       
        return await axios.get(`https://movies-manar123.herokuapp.com/trending`)
            .then(result => {
                console.log(result.data);
                return result.data;
            }).catch((err) => {
                console.log(err);
            })

    return (
        <>
         <p> Movies list</p>
        </>
    )
}


export default Home;