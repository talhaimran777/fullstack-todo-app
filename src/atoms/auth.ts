import { atomWithReset } from "jotai/utils";

const authAtom = atomWithReset({ isAuthenticated: false, user: {} });

export default authAtom;
