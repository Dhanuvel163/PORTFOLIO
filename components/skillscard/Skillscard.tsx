import { skill } from "@/types/skill"

function Skillscard({
    title, skills
}:{
    title: string, skills: skill[]
}){
    return(
        <div className='group/card bg-[white]/90 backdrop-blur-md dark:bg-darksecondary/90 dark:text-[white] rounded-2xl ring-1 ring-[rgb(51,65,85)]/[0.1] shadow-lg relative hover:z-10 dark:ring-[rgb(255,255,255)]/[0.3] transition-all duration-500 hover:shadow-2xl hover:scale-[1.03]'>
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent dark:from-primary/30 rounded-bl-[100%] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary/15 to-transparent dark:from-darkprimary/25 rounded-tr-[100%] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

            <h3 className='font-bold text-xl text-[black] px-4 py-3 border-b border-[#e5e7eb] dark:border-[rgb(255,255,255)]/[0.3] border-solid dark:text-[white] bg-gradient-to-r from-primary/10 via-primary/5 to-transparent relative'>
                <span className="relative z-10">{title}</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3 p-4 py-6 relative">
                {
                    skills.map((skill, index)=>{
                        const Icon = skill.icon;
                        return (
                            <div
                                className={`text-4xl ${skill.class} group relative flex flex-col items-center transition-all duration-300 hover:scale-125 cursor-pointer hover:drop-shadow-lg`}
                                key={skill.title}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="relative p-2 rounded-lg transition-all duration-300 group-hover:bg-white/50 dark:group-hover:bg-white/10">
                                    {skill.title === "Ruby" ? <div className="p-1"><Icon className="h-7 w-8"/></div> : <Icon/>}
                                </div>
                                <div className="absolute top-8 mt-8 hidden flex-col items-center group-hover:flex z-20 animate-in fade-in duration-200">
                                    <div className="-mb-2 h-3 w-3 rotate-45 bg-[black] dark:bg-[white]"></div>
                                    <span className="whitespace-nowrap relative z-10 bg-[black] dark:bg-[white] dark:text-[black] px-3 py-2 text-xs font-medium leading-none text-[white] shadow-xl rounded-md min-w-max backdrop-blur-sm">{skill.title}</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}
export default Skillscard;