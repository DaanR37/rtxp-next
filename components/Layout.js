import NavBar from "./navbar/NavBar";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}

export default Layout;