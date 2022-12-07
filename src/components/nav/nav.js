import apple from './apple.svg'
import bag from './bag.svg'
import search from './search.svg'
function Nav() {
    return (
        <div className="w-screen h-12 bg-grey flex justify-center items-center text-sm">
            <div className="container w-5/8 flex md:justify-between justify-between text-white items-center">
                <div className="hamburger flex flex-col p-5 cursor-pointer">
                    <div className="line w-5 border-b-2 text-white">

                    </div>
                    <div className="line w-5 border-b-2 text-white mt-2">

                    </div>
                </div>
                <img src={apple} alt="" className="p-4"/>
                <a href="#Store" className="navLink md:navLinkMd">Store</a><a href="#Mac" className="navLink md:navLinkMd">Mac</a><a href="#iPad" className="navLink md:navLinkMd">iPad</a><a href="iPhone" className="navLink md:navLinkMd">iPhone</a><a href="#Watch" className="navLink md:navLinkMd">Watch</a><a href="#airpods" className="navLink md:navLinkMd">AirPods</a><a href="Tv" className="navLink md:navLinkMd">TV & Home</a><a href="Ooa" className="navLink md:navLinkMd">Only on Apple</a><a href="#Accessories" className="navLink md:navLinkMd">Accessories</a><a href="Supposrt" className="navLink md:navLinkMd">Support</a>
                <div className="overflow-hidden h-5 navLink md:navLinkMd mr-5">
                    <img className="-translate-y-3"   src={search} alt="" />
                </div>
                <img src={bag} alt=""/>
            </div>
        </div>
    )
}

export default Nav
