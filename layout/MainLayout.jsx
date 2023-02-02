import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout