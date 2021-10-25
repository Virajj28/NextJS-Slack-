export default function Navbar() {
    return (
            <div class="flex justify-between p-2 cursor-pointer">
                    <p class="text-xs">Navbar</p>
                    <a href="./dashboard" class="mx-4">Dashboard</a>
                    <a href="/" class="mx-4">Register</a>
                    <a href="./login" class="mx-4">Login</a>
            </div>
    )
}