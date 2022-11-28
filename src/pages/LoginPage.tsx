import React from 'react';

export default function Login() {
    return (
        <><figure className="absolute inset-y-32 left-32 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-38 h-38 md:w-22 md:h-auto md:rounded-none rounded-full mx-auto" src="data:image/jpeg;base64,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" alt="" width="384" height="512"></img>
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