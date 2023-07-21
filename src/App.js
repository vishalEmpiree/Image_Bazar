
import React, {useState} from "react";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";


const App = () => {
  let [info, setInfo] = useState("");

  // console.log(info);

  return (
    <div>
        <SearchBar  setInfo={setInfo}/> 
        <ImageList  images={info} />
    </div>
  )
} 

export default App;