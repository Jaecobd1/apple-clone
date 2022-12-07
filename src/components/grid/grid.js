import airPods from './airPods.jpeg'
import iPhone from './iphone.jpeg'
import iPad from './ipad.jpeg'
import Watch from './watch.jpeg'
import iPad2 from './ipad2.jpeg'
import Watch2 from './watch2.jpeg'
// import './grid.css'
function grid() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 justify-evenly gap-2 ">
            <div className="w-full  md:m-5 bg-black h-heroImgSm text-white flex flex-col items-center overflow-hidden mt-2">
                <h1 className="text-2xl font-bold mt-5 lg:text-4xl">iPhone 14 Pro</h1>
                <h2>Pro. Beyond.</h2>
                <div className="flex space-x-2 text-lightBlue">
                    <a href="#Learn-More" className="hover:underline">Learn more </a>
                    <span>></span>
                    <br />
                     <a href="#Buy" className="hover:underline">Buy </a>
                    <span>></span>
                   
                </div>
                <div className="w-full">
                    <img src={iPhone} className="object-cover h-full w-full" alt=""/>
                 </div>
            </div>
            <div className="w-full bg-lightGrey flex flex-col items-center md:m-5 mt-2 p-5 overflow-hidden h-heroImgSm">
                <h1 className="text-2xl font-bold mt-5 lg:text-4xl 
                " >iPad</h1>
                <h2>Lovable. Drawable. Magical.</h2>
                <div className="flex space-x-2 text-lightBlue">
                    <a href="#Learn-More" className="hover:underline">Learn more </a>
                    <span>></span>
                    <br />
                     <a href="#Buy" className="hover:underline">Buy </a>
                    <span>></span>
                   
                </div>
                <img src={ iPad} className="object-cover h-full w-full" alt=""/>
            </div>
            <div className="w-full p-5 md:m-5  h-heroImgSm  flex flex-col items-center overflow-hidden airPods mt-2 ">
                <h1 className="text-2xl font-bold mt-5 lg:text-4xl">AirPods</h1>
                <h2>Share the joy.</h2>
                <div className="flex space-x-2 mt-2 text-lightBlue">
                    <a href="#shop" className="hover:underline">Shop </a>
                    <span>></span>
                  
                   
                </div>
                 <img src={airPods} className="object-cover h-full w-full"  alt=""/>
            </div>
            <div className="w-full bg-lightGrey flex flex-col items-center md:m-5 mt-2 p-5 overflow-hidden h-heroImgSm">
                <h1 className="text-2xl font-bold mt-5 lg:text-4xl 
                " >Watch</h1>
                <span className="text-orange">ULTRA</span>
                <h2>Adventure awaits.</h2>
                <div className="actions">
                    <a href="#Learn-More" className="hover:underline">Learn more </a>
                    <span>></span>
                    <br />
                     <a href="#Buy" className="hover:underline">Buy </a>
                    <span>></span>
                   
                </div>
                <img src={ Watch} className="object-cover h-full w-full" alt=""/>
            </div>
             <div className="w-full p-5 md:m-5  h-heroImgSm  flex flex-col items-center overflow-hidden airPods mt-2 bg-black text-white">
                <h1 className="text-2xl font-bold mt-5 lg:text-4xl">Watch</h1>
                <span className="uppercase text-red font-bold text-sm">Series 8</span>
                <h2>A healthy leap ahead.</h2>
                <div className="actions">
                    <a href="#shop" className="hover:underline">Learn more </a>
                    <span>></span>
                    <a href="#buy" className="hover:underline">Buy </a>
                    <span>></span>
                  
                   
                </div>
                 <img src={Watch2} className="object-cover h-full w-full"  alt=""/>
            </div>
            <div className="w-full bg-black text-white flex flex-col items-center md:m-5 mt-2 p-5 overflow-hidden h-heroImgSm">
                <h1 className="text-2xl font-bold mt-5 lg:text-4xl 
                " >iPad Pro</h1>
                
                <h2>Supercharged by M2.</h2>
                <div className="actions">
                    <a href="#Learn-More" className="hover:underline">Learn more </a>
                    <span>></span>
                    <br />
                     <a href="#Buy" className="hover:underline">Buy </a>
                    <span>></span>
                   
                </div>
                <img src={ iPad2} className="object-cover h-full w-full" alt=""/>
            </div>
            
        </div>
    )
}

export default grid
