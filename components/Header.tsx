import "../styles/global.css"
import NavButton from "./NavButton"

const Header = () => {
    return ( 
        <>
            <div className='text-center mt-5 mb-5'>
                {/*This is the header title */}
                <h1 className='font-playfair font-bold text-3xl lg:text-6xl'>Macaulay Messenger</h1>
            </div>

            <nav className="border-t-2 border-b-2 border-solid border-black py-2 ">
                <div className="flex justify-around text-center px-2">
                    <NavButton url="/" text="Campus Life" />
                    <NavButton url="/" text="Queens College" />
                    <NavButton url="/" text="City College" />
                    <NavButton url="/" text="Hunter College" />
                    <NavButton url="/" text="Politics" />

                </div>
            </nav>
        </>
    );
}

export default Header;