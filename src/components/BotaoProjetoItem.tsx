
type Props = {
    href: string
    children: React.ReactNode
}

export const BotaoProjetoItem = ({ href, children }: Props) => {
    return (
        <a href={href}
            target="_blank"
            className="border-2 border-yellow-200 rounded-lg px-4 py-2 hover:border-yellow-300 mt-2"
        >{children}</a>
    )
}