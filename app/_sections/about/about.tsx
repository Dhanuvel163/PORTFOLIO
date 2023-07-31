import Skillscard from '@/components/skillscard/Skillscard';
import {frontend,backend,tools} from './data';

function About(){
    return(
        <section className="flex justify-center items-center mt-10 mb-10 px-[5%]">
            <div>
                <h2 className="font-bold text-4xl text-center mb-8">Skills</h2>
                <Skillscard title='Frontend' skills={frontend}/>
                <Skillscard title='Backend' skills={backend}/>
                <Skillscard title='Tools' skills={tools}/>
            </div>
        </section>
    )
}

export default About;