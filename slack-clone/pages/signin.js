import {getCsrfToken } from "next-auth/client";

export default function Signin({csrfToken}) {
  return (
    <div class="grid place-items-center mt-32">
        <div class="text-center">
          <div class="inline-flex">
            <img src="" alt="Logo" class="object-contain h-8"/>
            <h1 class="text-3xl font-bold">casper</h1>
          </div>
        </div>

        <div class="my-3 p-1 font-semibold text-center">
          <h1 class="text-3xl font-bold">First,enter your email</h1>
          <p class="text">We suggest using the email address you use at work.</p>

          <form method="post" action="/" class="my-4">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div class="rounded-md shadow-sm ">
                <div>
                <input id="email" name="email" type="text" required class="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm" placeholder="name@work-email.com" />
                </div>
                    <button id="btnRegister" type="submit" class="text-white bg-purple-900 w-full mt-6 p-2 font-semibold">
                    Continue
                    </button>
            </div>


          <div class="flex items-center mt-2">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              It's okay to send me emails about Casper.
            </label>
          </div>
        </form>
      </div>

        <div class="mt-28 flex justify-center items-center flex-grow text-gray-500">
            <p class="mx-2">Privacy & Terms</p>
            <p class="mx-2">Contact Us</p>
            <p class="mx-2 inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Change region</p>
        </div> 
    </div> 
  );
}

export async function getServerSideProps(context) {
    const csrfToken = await getCsrfToken(context);
    return {
        props: {csrfToken},
    }
  }