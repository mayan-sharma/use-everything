import { useState, useEffect } from "react";
import axios from 'axios';

const useAxios = (url, method = 'GET', headers = {}, params = {}, query = {}) => {

    const [res, setRes] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        makeRequest();
    }, [])

    const makeRequest = async () => {
        try {
            const res = await axios({ url, method, headers, params, query })
            setRes(res);
        } 
        catch (err) {
            setError(err);
        } 
        finally {
            setLoading(false);
        }
    }

    return { res, error, loading };
}

export default useAxios;