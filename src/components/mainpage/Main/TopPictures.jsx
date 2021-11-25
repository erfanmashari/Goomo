import React from 'react'

const TopPictures = () => {
    return (
        <div className="w-full flex flex-row-reverse bg-blue-900 px-16 py-8 gap-6">
            <img src="./img/Black Friday.jpg" alt="black-friday" 
            className="w-6/12 h-96 rounded-2xl cursor-pointer" />
            <div className="w-6/12 flex flex-col gap-8">
                <div className="w-full flex flex-row gap-6">
                    <img src="./img/small pic 3.jpg" alt="pic" 
                    className="w-6/12 h-44 rounded-xl cursor-pointer" />
                    <img src="./img/small pic 1.jpg" alt="pic" 
                    className="w-6/12 h-44 rounded-xl cursor-pointer" />
                </div>
                <div className="w-full flex flex-row gap-6">
                    <img src="./img/small pic 2.jpg" alt="pic" 
                    className="w-6/12 h-44 rounded-xl cursor-pointer" />
                    <img src="./img/small pic 4.jpg" alt="pic" 
                    className="w-6/12 h-44 rounded-xl cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default TopPictures
