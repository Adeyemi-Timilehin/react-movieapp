import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import {Box} from "@chakra-ui/react"
import { Header,Search,Movie } from "./myComponent";

import axios from "axios";
function App() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const fetch = useCallback(() => {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${submit}`
      )
      .then((response) => response)
      .then((data) => setData(data));
    setLoading(false);
  }, [submit]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  function onhandleChange(e) {
    setName(e.target.value);
  }
  function onhandleClick() {
    setSubmit(name);
  }

  return (

<Box>
 
 <Header/>

   <Box m={3} p={10}>
 <Search onhandleChange={onhandleChange} onhandleClick={onhandleClick} value={name}/>
 <Movie data={data} loading={loading}/>
 </Box>
 </Box>

 
  );
}

export default App;
