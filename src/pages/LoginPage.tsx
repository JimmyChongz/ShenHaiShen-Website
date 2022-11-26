import React from 'react';

export default function Login() {
    return (
        <><figure className="absolute inset-y-32 left-32 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-38 h-38 md:w-22 md:h-auto md:rounded-none rounded-full mx-auto" src="https://cdn2.ettoday.net/images/2798/d2798861.jpg" alt="" width="384" height="512"></img>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg text-white font-medium">
                        歡迎來到Seafood Coin!


                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                        Sarah Dayan
                    </div>
                    <div className="text-sky-200 dark:text-slate-500">
                        Staff Engineer, Algolia
                    </div>
                </figcaption>
            </div>
        </figure><div className="relative flex flex-col justify-left min-h-screen overflow-hidden">
                <div className="absolute inset-y-32 right-32 w-96 p-12 m-auto bg-white rounded shadow-2xl shadow-indio-500/50 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 ">
                        SeaFood
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                帳號
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                密碼
                            </label>
                            <input
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            忘記密碼？
                        </a>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                登入
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        還沒有帳號?{" "}
                        <a
                            href="#"
                            className="font-medium text-purple-600 hover:underline"
                        >
                            現在註冊
                        </a>
                    </p>
                </div>
            </div></>
    );
}