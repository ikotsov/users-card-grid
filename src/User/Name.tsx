import { children, Component, createEffect, createSignal, JSX } from "solid-js";
import styles from "./styles.module.css";

type Props = {
  children: JSX.Element;
};
export function Name(props: Props) {
  const c = children(() => props.children);
  return <div class={styles.user__name}>{c()}</div>;
}
