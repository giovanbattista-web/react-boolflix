import Homepage from '../pages/Homepage';
import Search from '../components/Search';

const Layout = () => {
    return (
        <>
            <header>
                <div className='container header'>
                    <h1 className='logo'>BOOLFLIX</h1>
                    <Search />
                </div>
            </header>
            <main>
                <Homepage />
            </main>
        </>
    )
};

export default Layout;