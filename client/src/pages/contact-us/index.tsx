import { Contact } from "@/assets";

export default function __contactUs() {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-28 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col justify-between text-gray-300">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-600"> We'd love to hear from you! Please reach out with any questions, comments, or feedback.</div>
		</div>
		<img src={Contact} alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form  className="space-y-6 text-gray-300">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-background border-gray-300 outline-none border" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded bg-background border-gray-300 outline-none border" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows={3} className="w-full p-3 rounded bg-background border-gray-300 outline-none border"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-primary text-black">Send Message</button>
	</form>
</div>
  )
}
