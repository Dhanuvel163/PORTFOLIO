import { skill } from "@/types/skill"

function Skillscard({
    title, skills
}:{
    title: string, skills: skill[]
}){
    return(
        <div className='bg-[white]/80 backdrop-blur-sm dark:bg-darksecondary/80 dark:text-[white] rounded-xl ring-1 ring-[rgb(51,65,85)]/[0.1] mt-3 shadow-lg relative hover:z-10 dark:ring-[rgb(255,255,255)]/[0.3] transition-all duration-300 hover:shadow-xl hover:scale-[1.02]'>
            <h3 className='font-bold text-xl text-[black] px-2 py-2 rounded border-b border-[#e5e7eb] dark:border-[rgb(255,255,255)]/[0.3] border-solid dark:text-[white] bg-gradient-to-r from-primary/5 to-transparent'>{title}</h3>
            <div className="flex flex-wrap justify-center gap-2 p-2 py-4">
                {
                    skills.map((skill)=>(
                        <div className={`text-4xl ${skill.class} group relative flex flex-col items-center transition-all duration-300 hover:scale-110 cursor-pointer`} key={skill.title}>
                            <skill.icon/>
                            <div className="absolute top-6 mt-6 hidden flex-col items-center group-hover:flex z-20 animate-fade-in">
                                <div className="-mb-2 h-3 w-3 rotate-45 bg-[black] dark:bg-[white]"></div>
                                <span className="whitespace-no-wrap relative z-10 bg-[black] dark:bg-[white] dark:text-[black] p-2 text-xs leading-none text-[white] shadow-lg rounded min-w-max backdrop-blur-sm">{skill.title}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Skillscard;