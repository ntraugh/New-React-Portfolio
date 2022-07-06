import emailjs from '@emailjs/browser';


function Contact (){
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_h757pq6', 'template_zivpeap', e.target, 'VlQlNjYp5bfyIYVaX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    
    return (
        <section id="contact">
            <div className="container flex sm:flex-nowrap flex-wrap">
                <form
                    netlify onSubmit={sendEmail}
                    name="contact"
                    className="lg:w-1/3 lg:p-0 lg:pb-8 md:w-1/2 flex-col pb-8 pr-6 md:ml-auto md:mr-auto w-full mt-8 md:mt-0">
                    <h2 className="text-blue-500 sm:text-4xl text-3xl mb-4 font-medium title-font">
                         Contact Me
                    </h2>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                         Name
                        </label>
                         <input
                         type="text"
                        id="name"
                         name="name"
                        className="w-full bg-gray-800 rounded border border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                         />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-800 rounded border border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative  mb-4">
                        <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-400">
                        Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 rounded border border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-blue-500 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
            
      



        </section>

    )
}



export default Contact;