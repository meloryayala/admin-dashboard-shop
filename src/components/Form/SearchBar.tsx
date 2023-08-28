import {FC} from "react";

interface SearchBarProps {
    placeholder?: string;
    value?: string;
}

const SearchBar:FC<SearchBarProps> = ({placeholder, value}) => {
  return(
      <div className="container-center my-6">
          <div className="join flex">
              <input className="input join-item w-full"
                     placeholder={placeholder}
                     value={value}
              />
              <button className="btn join-item bg-lime-300">Search</button>
          </div>
      </div>
  )
}

export default SearchBar