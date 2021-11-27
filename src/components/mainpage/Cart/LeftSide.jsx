import React from 'react'

const LeftSide = () => {
    return (
        <div className="w-full sm:w-3/12 flex flex-col items-center gap-8 p-4">
            <h1 className="text-xl font-bold">شما هنوز وارد حساب خود نشده اید!</h1>
            <button className="font-extrabold border border-black rounded-xl p-3">ورود به پنل کاربری</button>
        </div>
    )
}

export default LeftSide
