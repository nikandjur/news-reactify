import { useEffect, useState } from "react";

interface FetchFunction<Params, Result> {
  (params?: Params): Promise<Result>;
}

interface UseFetchResult<Result> {
  data: Result | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <Result, Params>(
  fetchFunction: FetchFunction<Params, Result>,
  params?: Params
): UseFetchResult<Result> => {
  const [data, setData] = useState<Result | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        const res = await fetchFunction(params);
        setData(res);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsloading(false);
      }
    })();
  }, [fetchFunction, stringParams]);
  return { data, isLoading, error };
};
