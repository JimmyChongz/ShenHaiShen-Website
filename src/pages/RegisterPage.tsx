import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { useToast } from '@chakra-ui/react'
export const RegisterPage = () => {
    const nevigate = useNavigate();
    const toast = useToast();
    return (
        <> <NavBar />
            <Box bgImage='https://topeat.tw/images/bg-bottom.webp'>

                <figure className="absolute inset-y-32 left-32 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-pink-100">
                </figure><div className="relative flex flex-col justify-left min-h-screen overflow-hidden">
                    <div className=" w-96 p-12 mt-auto top-0 self-center left-96 right-96  bg-white rounded shadow-2xl shadow-indio-500/50 lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-pink-500 ">
                            會員註冊
                        </h1>
                        <form className="mt-6">
                            <div className="mb-2">
                                <label
                                    htmlFor="account"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    帳號
                                </label>
                                <input
                                    type="account"
                                    className="block w-full px-4 py-2 mt-2 text-black-500 bg-white border rounded-md focus:border-pink-100 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
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
                                    className="block w-full px-4 py-2 mt-2 text-black-500 bg-white border rounded-md focus:border-pink-100 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    重複密碼
                                </label>
                                <input
                                    type="password"
                                    className="block w-full px-4 py-2 mt-2 text-black-500 bg-white border rounded-md focus:border-pink-100 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    信箱
                                </label>
                                <input
                                    type="email"
                                    className="block w-full px-4 py-2 mt-2 text-black-500 bg-white border rounded-md focus:border-pink-100 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    手機
                                </label>
                                <input
                                    type="number"
                                    className="block w-full px-4 py-2 mt-2 text-black-500 bg-white border rounded-md focus:border-pink-100 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <button className="w-full px-4 py-2 mt-8 tracking-wide bottom-3 text-white transition-colors duration-200 transform bg-pink-300 rounded-md hover:bg-pink-400 focus:outline-none focus:bg-pink-500"
                                    onClick={() => {
                                        toast({
                                            title: 'Account created.',
                                            description: "We've created your account for you.",
                                            status: 'success',
                                            duration: 9000,
                                            isClosable: true,
                                        })
                                    }}>
                                    註冊
                                </button>
                            </div>
                        </form>

                        <p className="mt-8 text-xs font-light text-center text-gray-700">
                            {" "}
                            已經有帳號了?{" "}
                            <a
                                href="#"
                                className="font-medium text-purple-600 hover:underline"
                                onClick={() => { nevigate(`/Login`) }}
                            >
                                現在登入
                            </a>
                        </p>
                    </div>

                </div>
            </Box >
        </>
    );
}

