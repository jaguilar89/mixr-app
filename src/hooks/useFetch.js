import { useState, useEffect } from 'react';

export default function useFetch(endpoint) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const response = await fetch(endpoint)
                const result = await response.json()
                setData(result)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [endpoint]);

    return { data, loading, error }
}