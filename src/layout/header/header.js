import "./header.scss";
import "./../../components/ConnectButton/connectButton";

const Header = ()=>{
    return(
        <>
        <logo>Logo</logo>
        <Menu>
            <menuitem>Home</menuitem>
            <menuitem>Dashboard</menuitem>
            <menuitem>Contact</menuitem>
            <menuitem>World</menuitem>
        </Menu>
        <ConnectButton/>
        </>
    )
}
export default Header;