import Link from "next/link"

export const Menu = () => {
    return (
        <nav
            className="bg-black border-b px-2 border-gray-400 container m-auto flex items-center max-sm:flex-col"
        >
            <div className="my-3  
            max-sm:border-b max-sm:border-gray-400 max-sm:w-screen max-sm:flex max-sm:flex-col max-sm:items-center max-sm:pb-4
            max-sm:my-0 max-sm:mt-3">
                <h1
                    className="text-3xl font-bold
                    max-sm:text-xl"
                >Leonardo Cunha</h1>
                <h6 className="text-gray-300  text-right
                max-sm:text-sm max-sm:ml-10"
                >Portifólio Pessoal</h6>
            </div>
            <ul className="flex flex-1 justify-center max-[400px]:text-sm">
                <li className="m-2 cursor-pointer">
                    <Link href="/">HOME</Link></li>
                <li className="m-2 cursor-pointer">
                    <Link href="/projetos">PROJETOS</Link>
                </li>
                <li className="m-2 cursor-pointer">
                    <Link href="/contato">CONTATO</Link> </li>
            </ul>
        </nav>
    )
}