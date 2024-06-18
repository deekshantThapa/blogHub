function Contact(){
    return(
        <section className="contact-section">
            <div className="container-sm">
                <div className="heading-wrap">
                    <h3 className="entry-title">Contact</h3>
                    <span>Love to hear your thoughts, fears & feelings...</span>
                </div>
                <div className="contact-form">
                    <form action="">
                        <div className="input-wrap">
                            <label htmlFor="">Name*</label>
                            <input type="text" name="" id="" placeholder="Enter your name" />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="">Email*</label>
                            <input type="email" name="" id="" placeholder="Enter your email" />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="">Message*</label>
                            <textarea name="" id="" cols="30" rows="5" placeholder="Enter your message"></textarea>
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;