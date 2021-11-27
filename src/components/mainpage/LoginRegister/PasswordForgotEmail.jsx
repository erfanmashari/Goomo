import { Link } from 'react-router-dom'

const PasswordForgotEmail = () => {
    return (
        <div className="w-full flex justify-center items-center bg-gray-200 px-8 sm:px-16 py-8">
            <form className="w-full sm:w-4/12 flex flex-col bg-white border border-gray-400 rounded-xl p-6 gap-4">
                <label htmlFor="email">ایمیل</label>
                <input type="email" placeholder="ایمیل خود را وارد نمایید"
                id="email" className="w-full border border-gray-200 p-3 rounded-lg" />
                <button type="submit" className="w-full text-center border border-blue-600 rounded-lg p-3">درخواست رمز عبور جدید</button>
                <Link to="/password-forgot-phone">
                    <button className="w-full text-right text-gray-500">می خواهم روش دیگری را امتحان کنم</button>
                </Link>
            </form>
        </div>
    )
}

export default PasswordForgotEmail
