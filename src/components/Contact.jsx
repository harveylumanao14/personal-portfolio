const Contact = () => {
    return ( 
        <div name="contact" className="w-full md:h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/08efd15d-b954-467a-b7de-cd17d91b24c9" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-gray-300 font-bold text-4xl inline border-b-4 border-pink-600">Contact</p>
                    <p className="pt-4 text-gray-300">// Submit the form below or shoot me an email - <span className="text-1xl font-bold text-gray-300"> hlumanao41@gmail.com </span></p>
                    <p className="text-gray-300">// Contact No.: <span className="text-1xl font-bold text-gray-300">+639167758258</span></p>
                </div>
                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
                <input className="bg-[#ccd6f6] my-4 p-2" type="email" placeholder="Email" name="email" />
                <textarea className="bg-[#ccd6f6] p-2" rows="10" placeholder="Message" name="message"></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
                    Let's Collaborate
                </button>
            </form>
        </div>
     );
}
 
export default Contact;