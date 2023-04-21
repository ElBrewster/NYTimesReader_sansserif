async function myFetch(sectionName) {
    try {
        const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=3zPvKXZK3DW8O5MVU3GWnrCueyAt01jE`);
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(`Could not get articles: ${error}`)
    }
}
    
export default myFetch;