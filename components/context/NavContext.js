import { createContext, useContext, useState } from "react";

const NavCtx = createContext();

function NavContext({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <NavCtx.Provider value={[isOpen, setIsOpen]}>
            {
                children
            }
        </NavCtx.Provider>
    )
}

function useNavContext() {
    return useContext(NavCtx);
}

export { useNavContext }

export default NavContext




