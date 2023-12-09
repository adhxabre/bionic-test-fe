import React from "react"

export default function Home() {
    return (
        <React.Fragment>
            <div className="w-full h-screen p-10 bg-white flex flex-col gap-3">
                <div className="w-full h-full bg-white flex flex-col md:h-3/4">
                    <div className="w-full basis-1/6 bg-blue-600 border-4 border-black flex justify-center items-center text-2xl text-black font-bold">1</div>
                    <div className="w-full basis-1/6 flex flex-col justify-center items-center md:flex-row">
                        <div className="w-full h-full bg-blue-600 border-4 border-black flex justify-center items-center text-2xl text-black font-bold">2</div>
                        <div className="w-full h-full bg-blue-600 border-4 border-black flex justify-center items-center text-2xl text-black font-bold">3</div>
                    </div>
                    <div className="w-full basis-4/6 flex flex-col justify-center items-center md:flex-row">
                        <div className="w-full h-2/3 flex flex-col justify-center items-center md:h-full md:w-2/3">
                            <div className="w-full h-full bg-blue-600 border-4 border-black flex justify-center items-center p-5">
                                <div className="w-full h-full bg-red-500 border-4 border-black flex justify-center items-center text-2xl text-black font-bold">4</div>
                            </div>
                            <div className="w-full h-full flex justify-center items-center bg-purple-400">
                                <div className="w-full h-full bg-blue-600 border-4 border-black flex justify-center items-center text-2xl text-black font-bold">5</div>
                                <div className="w-full h-full bg-blue-600 border-4 border-black flex justify-center items-center text-2xl text-black font-bold">6</div>
                                <div className="w-full h-full bg-blue-600 border-4 border-black flex justify-center items-center text-2xl text-black font-bold">7</div>
                            </div>
                        </div>
                        <div className="w-full h-1/3 bg-blue-600 border-4 border-black flex justify-center items-center p-2 gap-2 text-2xl text-black font-bold md:h-full md:w-1/3">
                            <div className="w-full h-full bg-red-500 border-4 border-black flex justify-center items-center text-2xl text-black font-bold">8</div>    
                            <div className="w-full h-full bg-red-500 border-4 border-black flex justify-center items-center text-2xl text-black font-bold">9</div>    
                            <div className="w-full h-full bg-red-500 border-4 border-black flex justify-center items-center text-2xl text-black font-bold">10</div>    
                        </div> 
                    </div> 
                </div>
                <div className="w-3/5 h-1/4 hidden border-4 border-black bg-blue-600 md:inline-flex md:h-1/4">
                    <div className="w-40 h-10 z-20 bg-red-500"></div>
                    <div className="w-40 h-24 z-30 bg-white absolute ml-20 mt-5"></div>
                    <div className="w-40 h-10 z-40 bg-red-500 absolute ml-40 mt-20"></div>
                    <div className="w-32 h-10 z-50 bg-red-500 absolute ml-[43rem] mt-0"></div>
                    <div className="w-32 h-10 z-[60] bg-red-500 absolute ml-[52rem] mt-20"></div>
                    <img src="/FIGHTING.png" className="w-32 h-32 z-[70] bg-red-500 absolute ml-[72rem] mt-0" />
                </div>
            </div>
        </React.Fragment>
    )
}