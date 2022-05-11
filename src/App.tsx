import { Component, createResource, For } from "solid-js";
import { fetchUsers } from "./network/fetchUsers";
import { User } from "./network/User";
import styles from "./App.module.css";
import { Card } from "./User/Card";
import { Name } from "./User/Name";

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
