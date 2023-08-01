import Skillscard from '@/components/skillscard/Skillscard';
import {frontend,backend,tools} from './data';

function About(){
    return(
        <section className="h-[calc(100vh-4.175rem)] flex justify-center items-center mt-10 mb-10 px-[5%] bg-[rgb(239,232,232)]/[50%]">
            <div>
                <h2 className="text-lg 300:text-2xl 350:text-3xl 750:text-4xl 1000:text-5xl 1250:text-6xl font-bold  text-center text-primary">Skills</h2>
                <div className='mt-6'>
                    <Skillscard title='Frontend' skills={frontend}/>
                    <Skillscard title='Backend' skills={backend}/>
                    <Skillscard title='Tools' skills={tools}/>
                </div>
            </div>
        </section>
    )
}

export default About;