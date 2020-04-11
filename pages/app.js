import Layout from "../component/Layout";

const Content = () => {
    return(
        <>
            <h1>Mi App!</h1>
            <p>jiji</p> 
        </>
    );
}

const App = () => {
    return(
        <Layout>
            <Content/>
        </Layout>
    );
}

export default App;