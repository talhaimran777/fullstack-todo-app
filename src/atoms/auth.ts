import { atomWithReset } from "jotai/utils";

const authAtom = atomWithReset<{
  isAuthenticated: boolean;
  user: {};
  status: "authenticated" | "unauthenticated" | "loading";
}>({
  isAuthenticated: false,
  user: {},
  status: "loading",
});

export default authAtom;
