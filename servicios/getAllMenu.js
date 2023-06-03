export const getAllMenu = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    const result= await res.json()
    return result
}