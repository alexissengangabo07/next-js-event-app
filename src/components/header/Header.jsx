import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className='header-container'>
                    {/* <Image alt="logo" src={'/images/event-logo.png'} width={50} height={50} /> */}
                    Image
                    <nav className='navbar'>
                        <ul>
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/events">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us">
                                    About us
                                </Link>
                            </li>
                        </ul>
                    </nav>
        </header>
    );
};

export default Header;