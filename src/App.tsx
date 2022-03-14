import { Component, createResource } from "solid-js";
import styles from "./App.module.css";
import { fetchUsers } from "./fetchUsers";

const App: Component = () => {
  const [users] = createResource(5, fetchUsers);

  return (
    <div class={styles.App}>
      <span>{users.loading && "Loading..."}</span>
      <div>
        <pre style="margin: 0">{JSON.stringify(users(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
