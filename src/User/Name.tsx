import { children, Component, createEffect, createSignal } from "solid-js";
import styles from "./styles.module.css";

type Props = {
  children: string;
};
export function Name(props: Props) {
  const c = children(() => props.children);
  return <div class={styles.user__name}>{c()}</div>;
}
