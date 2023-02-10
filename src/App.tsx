import { Header } from "./components/Header";
import { Container } from "components/Container";
import { Search } from "components/Search";
import { UserCart } from "components/UserCart";
import { DefaultUser } from "mock";
import { GitHubError, GitHubUser, LocalGitHubUser } from "types";
import { IsGitHubUser } from "util/typeguards";
import { useState } from "react";
import { extractLocalUser } from "util/extract-local-user";

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null>(DefaultUser);
  const fetchUser = async (text: string) => {
    const res = await fetch(`https://api.github.com/users/${text}`);
    const user = (await res.json()) as GitHubUser | GitHubError;
    console.log(user);
    if (IsGitHubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };
  return (
    <>
      <Container>
        <Header />
        <Search hasError={!user} onSubmit={fetchUser} />
        {user && <UserCart {...user} />}
      </Container>
    </>
  );
}

export default App;
