import * as React from "react";
import styles from "./SearchForm.module.css";
import { Input } from "@fourkites/elemental-input";
import { Button } from "@fourkites/elemental-atoms";

function SearchForm() {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Search value:", searchValue);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <label htmlFor="searchInput" className={styles.visuallyHidden}>
        Search
      </label>
      <Input
        id="searchInput"
        size="medium"
        className={styles.searchInput}
        aria-label="Search input"
        value={searchValue}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        size="medium"
        theme="primary"
        variant="text only"
        className={styles.searchButton}
        aria-label="Submit search"
      />
    </form>
  );
}

export default SearchForm;
