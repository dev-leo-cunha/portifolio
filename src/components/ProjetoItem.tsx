import { BotaoProjetoItem } from "./BotaoProjetoItem"
import { useState } from 'react'

type ProjetoItemProps = {
    title: string,
    deploy: string,
    repo: string,
    repo2?: string,
    description: string,
    img: string
}
export const ProjetoItem = ({ title, deploy, repo, repo2, description, img }: ProjetoItemProps) => {
    const [expand, setExpand] = useState(false)
    return (
        <div
            className={`border-2 border-gray-400 rounded-lg
            flex flex-col items-center justify-center bg-zinc-900/80
            hover:border-yellow-300 h-80 ${expand ? 'p-0' : 'p-4'}
            `}
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
        >
            {expand ? (
                <>
                    <div className=" flex justify-center items-center flex-col w-full h-full p-6 rounded-lg">
                        <h2 className="text-center max-[540px]:text-xs">{description}</h2>
                        <div className="mt-2 flex justify-around w-full">
                            <div className="flex justify-center items-center max-[540px]:text-xs">
                                <BotaoProjetoItem href={deploy}>Deploy</BotaoProjetoItem>
                            </div>
                            <div className="flex flex-col justify-center items-center max-[540px]:text-xs" >
                                <BotaoProjetoItem href={repo}>{repo2 ? 'Repositório Front' : 'Repositório'}</BotaoProjetoItem>
                                {repo2 && <BotaoProjetoItem href={repo2}>Repositório Back</BotaoProjetoItem>}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl font-bold p-2 text-yellow-200 my-2 max-[540px]:text-xl">
                            {title}
                        </h1>
                        <img src={img} alt={title} className="rounded-3xl mt-2 mb-6 h-56 max-[540px]:w-64 max-[540px]:h-44" />
                    </div>
                </>
            )}
        </div>
    )
}