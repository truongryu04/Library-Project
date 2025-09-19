import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getBooks = async () => {
    const res = await axios.get(`${API_URL}/books`);
    return res.data;
};
