import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import {
  Instagram,
  Send,
  Mail,
  Github,
  Youtube,
  ArrowRight,
  Download,
} from "lucide-react";

const ICONS = {
  instagram: Instagram,
  telegram: Send,
  mail: Mail,
  github: Github,
  youtube: Youtube,
};
return (
<section className="grid items-center gap-14 py-12 lg:grid-cols-2">

<div>

<div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-400">
🚀 Available for Freelance
</div>

<h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
Hi 👋
<br />

<span className="text-cyan-400">
{PROFILE.name}
</span>

</h1>

<div className="mt-5 text-2xl font-semibold text-gray-300">

<TypeAnimation

sequence={[

"Web Developer",

2000,

"AI Creator",

2000,

"UI Designer",

2000,

"Content Creator",

2000,

]}

wrapper="span"

repeat={Infinity}

/>

</div>

<p className="mt-6 max-w-xl leading-8 text-gray-400">

{PROFILE.about[0]}

</p>

<div className="mt-10 flex flex-wrap gap-4">

<Link

href="#contact"

className="flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition hover:scale-105"

>

Contact Me

<ArrowRight size={18}/>

</Link>

<a

href="/resume.pdf"

className="flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 hover:bg-white/10"

>

<Download size={18}/>

Resume

</a>

</div>

<div className="mt-10 flex gap-4">

{SOCIALS.map((item)=>{

const Icon=ICONS[item.label.toLowerCase() as keyof typeof ICONS];

if(!Icon) return null;

return(

<a

key={item.label}

href={item.href}

target="_blank"

className="rounded-full border border-white/10 p-3 transition hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"

>

<Icon size={20}/>

</a>

)

})}

</div>

</div>

<div className="relative flex justify-center">

<div className="absolute h-72 w-72 rounded-full bg-cyan-500/30 blur-[100px]"/>

<Image

src="/profile.jpg"

width={340}

height={340}

alt={PROFILE.name}

className="relative rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_70px_rgba(34,211,238,0.5)]"

/>

</div>

</section>
);
