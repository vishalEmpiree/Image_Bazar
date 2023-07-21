
import React,{useState, useEffect} from "react"; 
import axios from "axios";

// access data from .env 

// console.log("Client_id",process.env.REACT_APP_CLIENT_ID);


const SearchBar = ({setInfo}) => {
    let [search, setSearch] = useState("");

    useEffect(()=>{
        // console.log("I am working")
        getImages()
    },[])
   

    async function getImages(){
        // console.log("get images is also working")
        
        try{
          let request = await axios.get("https://api.unsplash.com/search/photos" , {
            params: {
                query : search || "nature" , 
            },
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
                // "Client-ID pExZujK3FmmB5nzeiFQmjcmmQR7J9MJm7DeGwKbNDYc"
            }
          })
            console.log(request.data.results);
            setInfo(request.data.results);

        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <input type="text" placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              value = {search}
            />
            <button onClick={getImages}>Search</button>
        </div>
    )
}

export default SearchBar;