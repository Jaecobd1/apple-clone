import Image from './appleGiftLogo.svg'
import Gradient from './gradient.svg'
function Gift() {
    return (
        <div className="bg-darkBlue w-screen h-692 mt-2 flex justify-center items-center text-white ">
            <div className="container flex flex-col items-center ">
                <div className="imgHolder h-96 mb-10 p-5 relative">
                
                    <img src={Image} alt="" className="h-80 z-20 absolute mx-auto w-screen" />
                    <img src={Gradient} alt="" className="h-full top-0 z-0 w-full " />
                   
                </div>
                 <h1 className="text-4xl lg:text-6xl font-bold">Give WOW.</h1>
                <span className="w-96 text-center text-2xl">This holiday season, find the perfect gift for everyone on your list.</span>
                <div className="mt-2 mb-2">
                    <a href="#shop" className="text-lightBlue text-xl hover:underline">Shop the gift guide </a>
                <span className="text-lightBlue">></span>
                </div>
            </div>
        </div>
    )
}

export default Gift
