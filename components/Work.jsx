import { workData } from '@/assests/assets'
import React from 'react'

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I am a frontend web developer with a passion for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, and React, and I am always eager to learn new technologies and improve my skills. Here are some of the services I offer:
            </p>

            <div>
                {workData.map(()=>(
                    <div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work
