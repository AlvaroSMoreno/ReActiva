import Layout from "../component/Layout";
import Link from 'next/link';

const Content = () => {
    return(
        <>
            <h1>Mi login!</h1>
            <p>jeej</p> <br/>
            <Link href="/app">Main App</Link>
        </>
    );
}

const Index = () => {
    return(
        <Layout>
            <Content/>
        </Layout>
    );
}

export default Index;