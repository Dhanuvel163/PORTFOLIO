import {LiaReact} from 'react-icons/lia';
import {
    BiLogoJavascript,BiLogoNodejs,BiLogoAngular,BiLogoVuejs,BiLogoTypescript,
    BiLogoMongodb, BiLogoPostgresql,BiLogoFirebase,BiLogoAws,
} from 'react-icons/bi';
import {SiNextdotjs,SiMysql,SiRubyonrails,SiLangchain,SiGooglegemini,SiRuby} from 'react-icons/si';
import { DiPython, DiDocker, DiGoogleCloudPlatform } from "react-icons/di";

export const language = [
    // {
    //     title: 'Html',
    //     icon: AiFillHtml5,
    //     class: 'text-[#e54c21]'
    // },
    {
        title: 'Javascript',
        icon: BiLogoJavascript,
        class: 'text-[#f0dc4e]'
    },
    {
        title: 'Ruby',
        icon: SiRuby,
        class: 'text-red'
    },
    {
        title: 'Python',
        icon: DiPython,
        class: 'text-[#366d9c]'
    },
    {
        title: 'Typescript',
        icon: BiLogoTypescript,
        class: 'text-[#2f74c0]'
    },
    // {
    //     title: 'Css',
    //     icon: BiLogoCss3,
    //     class: 'text-[#167dbe]'
    // },
]

export const frontend = [
    {
        title: 'React Js',
        icon: LiaReact,
        class: 'text-[#149eca]'
    },
    {
        title: 'Angular',
        icon: BiLogoAngular,
        class: 'text-[#de002d]'
    },
    {
        title: 'Vue Js',
        icon: BiLogoVuejs,
        class: 'text-[#3fb984]'
    },
    {
        title: 'Next Js',
        icon: SiNextdotjs,
        class: 'text-[#000] text-[1.75rem] p-1'
    }
]

export const backend = [
    {
        title: 'Node Js',
        icon: BiLogoNodejs,
        class: 'text-[#f0dc4e]'
    },
    {
        title: 'Ruby on Rails',
        icon: SiRubyonrails,
        class: 'text-[#d30001]'
    },
]

export const database = [
    {
        title: 'MongoDB',
        icon: BiLogoMongodb,
        class: 'text-[#479d41]'
    },
    {
        title: 'MySQL',
        icon: SiMysql,
        class: 'text-[#f29110]'
    },
    {
        title: 'PostgreSQL',
        icon: BiLogoPostgresql,
        class: 'text-[#31648c]'
    }
]

export const tools = [
    {
        title: 'Aws',
        icon: BiLogoAws,
        class: 'text-[#ff9900]'
    },
    {
        title: 'Firebase',
        icon: BiLogoFirebase,
        class: 'text-[#ffcb2b]'
    },
    {
        title: 'Docker',
        icon: DiDocker,
        class: 'text-[#0255d6]'
    },
    {
        title: 'GCP',
        icon: DiGoogleCloudPlatform,
        class: 'text-[#0255d6]'
    }
]

export const ai = [
    {
        title: 'Langchain (AI Agents)',
        icon: SiLangchain,
        class: 'text-[#1c3a3a]'
    },
    {
        title: 'LLM (Gemini)',
        icon: SiGooglegemini,
        class: 'text-[#457cf1]'
    }
]