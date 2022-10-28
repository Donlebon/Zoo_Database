import {useState, useEffect, useRef} from 'react';

export function useFetch(url){
    const [animalGroup, setanimalGroup] = useState(null)
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(false)
    const [count, setCount] = useState(0)

    const testing = useRef("")

    useEffect(() => {
        const fetchData = async () => {{
            setPending(true)
            const res = await fetch(url)
            const json = await res.json()
            setPending(false)
            setData(json)
            setanimalGroup(json)
            testing.current = json
        }}
        fetchData()
    }, [url, count])
    return {
        data, isPending, animalGroup, setCount, setData, setanimalGroup, testing
    }
}



