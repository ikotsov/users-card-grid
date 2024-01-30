import { isUser } from "./validation";

const MAIN_URL = "https://randomuser.me/api";

export const fetchUsers = async (total: number) => {
  const response = await fetch(`${MAIN_URL}/?results=${total}`);
  const json = await response.json();
  console.log(json.results.filter(isUser));
  return json.results.filter(isUser);
};
