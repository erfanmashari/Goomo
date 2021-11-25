import React from 'react'

const FooterTable = () => {
    return (
        <table className="w-full text-lg text-right">
            <tr className="w-4/12 h-12">
                <th>راهنمای خرید</th>
                <th>خدمات گومو</th>
                <th>نحوه پشتیبانی گومو</th>
            </tr>
            <tr className="w-4/12 h-8">
                <td><button>ثبت سفارش</button></td>
                <td><button>فروشگاه</button></td>
                <td>تلفن: 4004464 - 021</td>
            </tr>
            <tr className="w-4/12 h-8">
                <td><button>نحوه ارسال سفارش</button></td>
                <td><button>وبلاگمو</button></td>
                <td>ایمیل: support@goomo.com</td>
            </tr>
            <tr className="w-4/12">
                <td><button>شیوه های پرداخت</button></td>
            </tr>
        </table>
    )
}

export default FooterTable
