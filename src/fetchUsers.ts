const MAIN_URL = "https://randomuser.me/api";

export const fetchUsers = async (total: number) =>
  (await fetch(`${MAIN_URL}/?results=${total}`)).json();
