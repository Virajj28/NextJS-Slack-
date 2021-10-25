const login = () => {
    return (
        <div class="grid place-items-center mt-48">
            <div class="text-center">
                <div class="inline-flex">
                    <img src="" alt="Logo" class="object-contain h-8"/>
                    <h1 class="text-3xl font-bold">casper</h1>
                </div>
            </div>   

            <div class="my-4 p-1 font-semibold text-center">
                <h1 class="text-3xl">Sign in to Casper</h1>
                <p class="text">We'll get you back to the app in just a minute.</p>
            
                <div class="m-2">
                    <div class='text-center border rounded-md border-blue-500 py-1 mt-3 w-full'>
                        <div class="inline-flex">
                            <img src='https://developers.google.com/identity/images/g-logo.png' height="25px" width="25px"/>
                            <span class="pl-4">Sign in with Google</span>
                        </div>
                    </div>
                    <div class='text-center border rounded-md border-gray-800 py-1 mt-3 w-full'>
                        <div class="inline-flex">
                            <img src='https://e7.pngegg.com/pngimages/310/159/png-clipart-apple-electric-car-project-logo-business-apple-heart-logo.png' height="25px" width="25px" class="bg-transparent"/>
                            <span class="pl-4">Sign in with Apple</span>
                        </div>
                    </div>
                </div>

                <p class="text-center m-2">OR</p>

                <form class="my-4">
                    <div class="rounded-md shadow-sm">
                        <div>
                        <input id="email" name="email" type="email" required class="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm" placeholder="name@work-email.com" />
                        </div>
                        <div>
                        <input id="password" name="password" type="password" required class="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm" placeholder="Enter password" />
                        </div>
                        <button id="btnSignIn" class="text-white bg-purple-900 w-full mt-6 p-2 font-semibold">
                        Sign In with Email
                        </button>
                    </div>
                </form>

            </div>

            <div class="relative top-40 flex justify-center items-center flex-grow text-gray-500">
                <p class="mx-2">Privacy & Terms</p>
                <p class="mx-2">Contact Us</p>
                <p class="mx-2 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Change region</p>
            </div>

        </div>
    )
}

export default login;