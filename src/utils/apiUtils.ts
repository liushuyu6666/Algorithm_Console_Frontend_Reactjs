const domain = process.env.REACT_APP_BASE_URL
const port = process.env.REACT_APP_API_PORT

export default async function fetchData(api: string, option?: any): Promise<any> {
    return fetch(`http://${domain}:${port}/${api}`, option).then((res) => {
        return res.json();
    });
}
