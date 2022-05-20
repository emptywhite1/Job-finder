import React, {useState} from "react";
import { FilledInput, Icon } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

//const [filteredData,setFilteredData] = useState([])

function SearchInput({ placeholder, jobsData }) {
  return (
    <div>
      <FilledInput
        placeholder={placeholder}
        disableUnderline
        style={{ marginLeft: "-5px" }}
        fullWidth
        endAdornment={
          <InputAdornment position="end"><SearchIcon/></InputAdornment>}>
      </FilledInput>
      
      
    </div>
  )
}

export default SearchInput;