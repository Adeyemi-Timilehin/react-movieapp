
import {Box, Input } from "@chakra-ui/react"
const Search=({name,onhandleChange,onhandleClick})=>{
    return(
        <Box >
          <div onClick={onhandleClick}>
            Search
          </div>
          <Input value={name} onChange={onhandleChange} size='lg'/>
        </Box>
    )
}
export default Search;