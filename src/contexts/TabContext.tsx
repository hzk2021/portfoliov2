import { createContext, Dispatch, SetStateAction } from "react";
import Tabs from "../enums/Tabs";

type tabProps = {
    tab : Tabs,
    setTab : Dispatch<SetStateAction<Tabs>>
}

const TabContext = createContext<tabProps | null>(null);

export default TabContext