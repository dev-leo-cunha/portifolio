
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
const PageContato = () => {
    return (
        <div className="container mx-auto flex justify-center items-center flex-col" >
            <h1 className='text-3xl font-bold my-10 max-[340px]:text-2xl' >Minhas Redes Sociais</h1>
            <div className='flex justify-center items-center'
            >
                <a href="https://www.instagram.com/leonardo.cunha_/" target='_blank' className='m-4'>
                    <FaInstagram className="w-14 h-14" />
                </a>
                <a href="https://github.com/dev-leo-cunha" target='_blank' className='m-4'>
                    <FaGithub className="w-14 h-14" />
                </a>
                <a href="https://www.linkedin.com/in/dev-leo-cunha/" target='_blank' className='m-4'>
                    <FaLinkedin className="w-14 h-14" />
                </a>
            </div>
            <div className='mt-4'>
                <a href="mailto:leonardo.cunha.2203@gmail.com">leonardo.cunha.2203@gmail.com</a>
            </div>
        </div>
    )
}
export default PageContato