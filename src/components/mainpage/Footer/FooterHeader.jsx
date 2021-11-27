import React from 'react'

const FooterHeader = () => {
    return (
        <header className="w-full flex flex-row justify-between items-center text-white">
            <div className="flex flex-row text-2xl sm:text-3xl font-bold gap-1">
                <p>فروشگاه اینترنتی</p>
                <div>
                    <span className="text-yellow-500">گو</span>
                    <span className="text-blue-600">مو</span>
                </div>
            </div>
            <div className="hidden sm:flex flex-row-reverse text-5xl font-bold">
                <span className="text-yellow-500">goo</span>
                <span className="text-blue-600">mo</span>
            </div>
        </header>
    )
}

export default FooterHeader
