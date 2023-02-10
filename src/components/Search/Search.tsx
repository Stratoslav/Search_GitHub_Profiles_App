import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

import { Button } from "components/Button";
interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}
type FormFields = {
  username: HTMLInputElement;
};
export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleForm = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const text = e.currentTarget.username.value;
    console.log(text);
    if (text) {
      onSubmit(text);
      e.currentTarget.reset();
    }
  };
  return (
    <form onSubmit={handleForm} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="username">
          <SearchIcon />
        </label>
        <input
          type="text"
          name="username"
          className={styles.textField}
          id="search"
          placeholder="Search gitHub username..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
