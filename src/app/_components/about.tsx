import Image from 'next/image'
import about1Imag from '../../../public/about-1.png'
import about2Imag from '../../../public/about-2.png'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { Check, MapPin } from 'lucide-react'

export function About() {
    return (
        <section className="bg-[#fdf6ec] py-16">
            <div className="container px-4 mx-auto ">
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className='relative' >
                        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
                            <Image
                                src={about1Imag}
                                alt='Foto do cachorro'
                                fill
                                quality={100}
                                priority
                                className='object-cover hover:scale-110 duration-300'
                            />
                        </div>

                        <div className='absolute w-40 h-40 right-4 -bottom-8 border-4 border-white rounded-lg'>
                            <Image
                                src={about2Imag}
                                alt='Foto do cachorro 2'
                                fill
                                quality={100}
                                priority
                            // className='object-cover hover:scale-110 duration-300'
                            />
                        </div>
                    </div>
                
                    <div className='space-y-6 mt-10'>
                        <h2 className='text-4xl font-bold'>SOBRE</h2>

                        <p className=''>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum, provident,
                            accusamus quam rerum eaque, obcaecati optio dolor explicabo voluptatem inventore laboriosam voluptates.
                            Natus cum repellat hic architecto accusantium dolor?
                        </p>

                        <ul className='space-y-4'>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                Aberto desde 2006
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                Equipe com mais de 10 veterinários
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                Qualidade é nossa prioridade
                            </li>
                        </ul>

                        <div className='flex gap-2'>
                            <a
                                href=""
                                className='bg-[#e84c3d] text-white flex items-center justify-center w-fit gap-2 px-4 py-4 rounded-md'
                            >
                                <WhatsappLogo className='w-5 h-5 text-white' />
                                Contato via WhatsApp
                            </a>
                            <a
                                href=""
                                className='text-black flex items-center justify-center w-fit gap-2 px-4 py-4 rounded-md'
                            >
                                <MapPin className='w-5 h-5 text-black' />
                                Endereço da loja
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}