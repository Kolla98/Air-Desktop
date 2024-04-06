import Link from 'next/link';
interface Props {
    // Define the props for your component here
}

const Navbar = () => {
    // Implement your component logic here

    return (
        // JSX code for your component's UI goes here
        <nav className='border-2 border-red-2 flexBetween max-container padding-container relative z-30 py-5'>
            <Link href="/">link</Link>
        </nav>
    );
};

export default Navbar;