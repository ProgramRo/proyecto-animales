const url = "https://programro.github.io/proyecto-animales/animales.json"
const getData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export default getData
