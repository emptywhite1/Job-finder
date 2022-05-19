import React from "react";
import { FilledInput, Icon } from "@material-ui/core"

function SearchInput({ placeholder }) {
  return (
    <div>
      <FilledInput placeholder={placeholder} disableUnderline fullWidth style={{ marginLeft: "-5px" }}></FilledInput>
      <Icon></Icon>
    </div>
  )
}

export default SearchInput;