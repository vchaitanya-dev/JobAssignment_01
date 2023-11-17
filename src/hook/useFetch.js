import {useState,useEffect} from 'react'
function useFetch (){
const [data,setData] = useState([]);
const [loading,setLoading]=useState(false);
const url = "https://jsonplaceholder.typicode.com/users"
const fetchData = async ({url}) => {
     const response = await fetch(url);
     const data_response = await response.json()
     setData(data_response)      
     setLoading(false)
}
useEffect(() => {
     fetchData({url});
},[url]);
return {data,loading}
}

export default useFetch