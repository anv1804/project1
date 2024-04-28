import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex w-full h-100vh justify-center pt-20"><div className="text-center mt-20">
            <h1 className="mt-20 mb-4 text-6xl font-semibold text-red-500">404</h1>
            <p p className="mb-4 text-lg text-gray-600" > Oops! Looks like you're lost.</p>
            <div div className="animate-bounce" >
                <svg
                    className="mx-auto h-16 w-16 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                </svg>
            </div >
            <p className="mt-4 text-gray-600">
                Let's get you back{" "}
                <Link to={`/home`} className="text-blue-500">
                    home
                </Link>
                .
            </p>
        </div ></div>

    )
}

export default NotFound