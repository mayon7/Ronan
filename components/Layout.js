import Navbar from "./navbar";
import Head from "next/head";

const Layout = (props) =>(
    <div>
        <Head>
            <title>Le site de Ronan</title>
        </Head>

        <Navbar/>
        {props.children}
    </div>

);

export default Layout;
