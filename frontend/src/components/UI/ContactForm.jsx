

const ContactForm = () => {

    const email = "vishal@google.com";

  return (
    <form
    className="w-full md:w-[70%] lg:w-full"
    > 
        <div
        className='text-white flex flex-col border-1 py-2 px-3 bg-gray-50/10 rounded-lg my-3'
        >
            <label className="text-sm">Email</label>
            <input type="email" name="email" value={email} readOnly
            className="focus:outline-none"
            />
        </div>
        <div
        className="text-white flex flex-col border-1 py-2 px-3 bg-gray-50/10 rounded-lg"
        >
            <label className="text-sm">Description</label>
            <textarea name="description" placeholder="enter your message here...." rows={12}
            className="focus:outline-none resize-none"
            ></textarea>
        </div>
        <div className="py-3">
            <button type="submit" className="bg-primary text-lg text-white w-full text-center py-3 rounded-lg cursor-pointer">Submit</button>
        </div>
    </form>
  )
}

export default ContactForm