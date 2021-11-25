import React from 'react'

const FooterBottom = () => {
    return (
        <footer className="w-full flex flex-row justify-between items-end pt-4">
            <p className="text-2xl">All Rights Reserved ©</p>
            <div className="flex flex-row-reverse gap-4">
                <img src="./img/eetemad.png" alt="e-etemad"
                className="w-20 h-20" />
                <img src="./img/country bussines.png" alt="e-etemad"
                className="w-20 h-20" />
                <img src="./img/rez.png" alt="e-etemad"
                className="w-20 h-20" />
            </div>
        </footer>
    )
}

export default FooterBottom
