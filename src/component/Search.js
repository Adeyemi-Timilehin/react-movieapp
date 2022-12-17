import classes from './Search.module.css'
import {Box, Input } from "@chakra-ui/react"
const Search=({name,onhandleChange,onhandleClick})=>{
    return(
        <Box className={classes.search}>
          <div className={classes.button} onClick={onhandleClick}>
            Search
          </div>
          <Input value={name} onChange={onhandleChange} size='lg'/>
        </Box>
    )
}
export default Search;