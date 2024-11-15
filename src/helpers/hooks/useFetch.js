import { useEffect, useState } from 'react'

export const useFetch = (fetchFunction, params = '') => {

  const [data, setData] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const [error, setError] = useState(null)

  const stringParams = params ? new URLSearchParams(params).toString() : ''

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true)
        const res = await fetchFunction(params)
        setData(res)
      } catch (error) {
        setError(error)
      } finally {
        setIsloading(false)
      }
    })()
  }, [fetchFunction, stringParams])
  return { data, isLoading, error }
}
