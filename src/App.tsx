import { Component, createResource } from "solid-js";
import styles from "./App.module.css";
import { fetchUsers } from "./fetchUsers";
import logo from "./logo.svg";
import { Name } from "./User/Name";

const App: Component = () => {
  const [users] = createResource(5, fetchUsers);

  return (
    <div class={styles.App}>
      <span>{users.loading && "Loading..."}</span>
      <div>
        <pre>{JSON.stringify(users(), null, 2)}</pre>
      </div>
      <Name>John</Name>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
