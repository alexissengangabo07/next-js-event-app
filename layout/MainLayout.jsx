import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className='app'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout