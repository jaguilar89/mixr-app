import { useState, useEffect } from 'react';

export default function useFetch(endpoint) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        //added AbortController to account for Heroku cold start delays
        const controller = new AbortController()
        const signal = controller.signal

        async function fetchData() {
            try {
                setLoading(true)
                const response = await fetch(endpoint, { signal })
                const result = await response.json()
                setData(result)
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()

        return () => controller.abort()
    }, [endpoint]);

    return { data, loading, error }
}