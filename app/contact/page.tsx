export default function Contact() {
    return (
        <div className="about">
            <br />
            <center>
                <div className=" about-box">
                    <h1 className="about-h1">Contact Us</h1>
                    <form action="" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                placeholder="Enter your name"
                                className="input"
                                
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Your Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                placeholder="Enter your email"
                                className="input "
                                
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message:</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                placeholder="Enter your message" 
                                className="input"
                                
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="box2-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </center>
            <br />
        </div>
    );
}
