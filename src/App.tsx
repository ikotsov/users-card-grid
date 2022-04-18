import { Component, createResource, For } from "solid-js";
import styles from "./App.module.css";
import { fetchUsers } from "./fetchUsers";
import { Card } from "./User/Card";
import { Name } from "./User/Name";

export type User = {
  gender: string;
  name: { first: string; last: string };
};

const App: Component = () => {
  const [users] = createResource<User[], number>(5, fetchUsers);

  return (
    <div class={styles.App}>
      <span>{users.loading && "Loading..."}</span>
      <For each={users()}>
        {(user) => (
          <Card>
            Gender: {user.gender},{" "}
            <Name>
              First name: {user.name.first}, Last name: 
              {user.name.last}
            </Name>
          </Card>
        )}
      </For>
    </div>
  );
};

export default App;
