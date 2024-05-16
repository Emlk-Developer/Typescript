

    
    //fetch API data
export async function getData(url: string){
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error (
                "Unable to fetch API data"
            );
        }
        const slip = await response.json();
        return slip;
    } catch (error) {
        console.error('Error occured', error)
        throw(error)
    }
}  