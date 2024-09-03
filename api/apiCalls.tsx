const apiKey = import.meta.env.VITE_API_KEY;
interface ArticleProps {
    article: {
        section: string;
        title: string;
        abstract: string;
        published_date: string;
        url: string;
        byline: string;
        multimedia: MultiMedia[];
    }
}

interface MultiMedia {
    url: string;
    caption: string;
}

async function cleaner(data: Response, sectionName: string){
    let clean = data.results.filter(e => e.title !== "");
    let sparse = clean?.map(e => {
        let newObj : ArticleProps = {
            article: {

                "section": "", 
                "title" : "",
                "abstract" : "",
                "published_date" : "",
                "url": "",
                "byline" : "",
                "multimedia" : []
            }
        };
        newObj.article.section = sectionName; //apply var from fetch request, it's empty sometimes
        newObj.article.title = e.title;
        newObj.article.abstract = e.abstract;
        newObj.article.published_date = e.published_date;
        newObj.article.url = e.url;
        newObj.article.byline = e.byline;
        newObj.article.multimedia = e.multimedia;
        return newObj;
        
    });
    return sparse;
}

async function myFetch(sectionName: string) {
    try {
        const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=${apiKey}`);
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        let result = await cleaner(data, sectionName);
        console.log("myResults: ", result);
        return result;
     }
    catch (error) {
        console.error(`Could not get articles: ${error}`)
    }
}

export default myFetch;