import heroImg from '../../images/Hero.jpeg'
function Hero() {
    return (
        <div className="flex flex-col justify-items-center w-screen items-center">
            <h1 className="text-4xl lg:text-6xl mt-20 font-bold">iPhone 14</h1>
            <h2 className="text-2xl lg:text-3xl mb-2">Big and better.</h2>
            <div className="links text-1xl lg:text-2xl flex  justify-between md:w-64  w-48 text-lightBlue ">
                <div className="link">
                    <a href="#LearnMore" className="hover:underline ">Learn more </a>
                    <span> ></span>
                </div>
                <div className="link">
                    <a href="#Buy" className="hover:underline ">Buy </a>
                    <span> ></span>
                </div>
                
            </div>
            <div className="imgHolder lg:h-heroImgLg w-5/6 md:h-heroImgMd h-heroImgSm">
                <img className="object-cover w-full h-full " src={heroImg }alt="" />
            </div>
        </div>
    )
}

export default Hero
