import { atom } from "recoil";

export const pageAtom = atom<number>({ key: "npf.page", default: 1 });
