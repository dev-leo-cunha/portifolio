'use client'
import { ProjetoItem } from "@/components/ProjetoItem"
import { ProjetosData } from "@/data/ProjetosData"
const PageProjetos = () => {
    return (
        <div className="container grid grid-cols-2 gap-x-16
        gap-y-10 p-6 m-auto max-lg:grid-cols-1
        ">
            {ProjetosData.map(projeto => {
                return (
                    <ProjetoItem key={projeto.id}
                        title={projeto.title}
                        deploy={projeto.urlDeploy}
                        repo={projeto.urlRepo}
                        repo2={projeto.urlRepo2}
                        description={projeto.description}
                        img={projeto.img}
                    />
                )
            })}
        </div>
    )
}
export default PageProjetos