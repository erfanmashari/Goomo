import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="lr-height w-full flex justify-center items-center bg-gray-200 px-8 sm:px-16 py-8">
            <form className="w-full sm:w-4/12 flex flex-col bg-white border border-gray-400 rounded-xl p-6 gap-4">
                <label htmlFor="username">نام کاربری</label>
                <input type="text" placeholder="نام کاربری خود را وارد نمایید"
                id="username" className="w-full border border-gray-200 p-3 rounded-lg" />
                <label htmlFor="email">ایمیل</label>
                <input type="email" placeholder="ایمیل خود را وارد نمایید"
                id="email" className="w-full border border-gray-200 p-3 rounded-lg" />
                <label htmlFor="password">رمز عبور</label>
                <input type="password" placeholder="رمز عبور خود را وارد نمایید"
                id="password" className="w-full border border-gray-200 p-3 rounded-lg" />
                <label htmlFor="password-repeat">تکرار رمز عبور</label>
                <input type="password" placeholder="رمز عبور خود را دوباره وارد نمایید"
                id="password-repeat" className="w-full border border-gray-200 p-3 rounded-lg" />
                <p>با کلیک برروی ثبت نام شما تمام <span className="text-gray-500 cursor-pointer">قوانین گومو</span> را پذیرفته اید!</p>
                <button type="submit" className="w-full text-center border border-blue-600 rounded-lg p-3">ثبت نام در گومو</button>
                <span className="w-full flex flex-col sm:flex-row text-right gap-1.5">ثبت نام کرده اید؟ 
                    <Link to="/login"><button className="text-right text-gray-500">وارد پنل خود شوید</button></Link>
                </span>
            </form>
        </div>
    )
}

export default Register
