import React from 'react';
import "./Contact.css";

function Contact() {
    return (
        <div className="container mt-4 contact_cont" style={{ maxWidth: '800px', background: 'white', padding: '20px', borderRadius: '10px' }}>
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary contact_submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
