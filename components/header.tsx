export default function Header() {
    return (
        <main>
            <div className="relative">
                <div className="flex justify-between w-screen h-[7%] fixed bg-blue-500 items-center px-8">
                    <h1 className="text-3xl text-white font-bold">Mern Auth</h1>
                    <div className="flex justify-between w-[10%] mr-8">
                        <button>login</button>
                        <button>Signup</button>
                    </div>
                </div>
            </div>
        </main>

    )
  }