import { Component, createEffect } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { fetchUsers } from './fetchUsers';

const App: Component = () => {
  createEffect(async() => {
    const users = await fetchUsers(5);
    console.log(users);
  });

  return (
    <div class={styles.App}>
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
