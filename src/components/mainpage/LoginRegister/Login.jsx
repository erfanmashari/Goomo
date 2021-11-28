import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="lr-height w-full flex justify-center items-center bg-gray-200 px-8 sm:px-16 py-8">
            <form className="w-full sm:w-4/12 flex flex-col bg-white border border-gray-400 rounded-xl p-6 gap-4">
                <label htmlFor="username">نام کاربری/ایمیل</label>
                <input type="text" placeholder="نام کاربری یا ایمیل خود را وارد نمایید"
                id="username" className="w-full border border-gray-200 p-3 rounded-lg" />
                <label htmlFor="password">رمز عبور</label>
                <input type="password" placeholder="رمز عبور خود را وارد نمایید"
                id="password" className="w-full border border-gray-200 p-3 rounded-lg" />
                <button type="submit" className="w-full text-center border border-blue-600 rounded-lg p-3">ورود به پنل کاربری</button>
                <Link to="/password-forgot-email">
                    <button className="w-full text-right text-gray-500">رمز عبورم را فراموش کردم</button>
                </Link>
                <span className="w-full flex flex-row text-right gap-1.5">ثبت نام نکرده اید؟ 
                    <Link to="/register"><button className="text-right text-gray-500">ثبت نام</button></Link>
                </span>
            </form>
        </div>
    )
}

export default Login
