'use client'

import Link from "next/link"

const Page = () => {
  return (
    <main
      className="container mx-auto p-10 flex justify-around items-center
    max-lg:flex-col"
    >
      <div>
        <h1 className="text-3xl font-bold max-[380px]:text-2xl"
        >Olá, sou Leonardo Cunha</h1>
        <h6 className="text-gray-300 ml-2 my-1 text-base max-[380px]:text-sm"
        >Back-end Developer</h6>
        <h2 className="max-w-xl leading-7 my-2 max-[380px]:text-sm">
          Iniciei na área da programação em 2021. Estou cursando a graduação em Análise e Desenvolvimento de Sistemas
          na universidade Cruzeiro do Sul, que iniciei em janeiro de 2023. Tenho experiência em desenvolvimento web com HTML, CSS, javascript, TypeScript,
          Nodejs, Banco de dados e Git. Atualmente estou estudando ReactJs e NextJs.
        </h2>
        <Link href="/projetos">
          <button
            className=" border-2 mt-6 hover:text-gray-400 hover:border-gray-400 text-white font-bold py-2 px-4 rounded
            max-[380px]:text-sm">
            Projetos
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-16 max-lg:mt-4 ">
        <img src="img/js.png" alt="Javacript" className="h-24 m-2 max-[450px]:h-20" />
        <img src="img/ts.png" alt="Typescript" className="h-24 m-2 max-[450px]:h-20" />
        <img src="img/node.png" alt="Node JS" className="h-24 m-2 max-[450px]:h-20" />
        <img src="img/next.png" alt="Next.JS" className="h-24 m-2 max-[450px]:h-20" />
      </div>
    </main>
  )
}

export default Page