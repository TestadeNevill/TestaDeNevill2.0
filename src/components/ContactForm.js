import { useState } from "react";
import { submitToGoogleSheets } from "./GoogleSheetsAPI";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        subscribe: false
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const success = await submitToGoogleSheets(formData);

        if (success) {
            setStatus("Message sent successfully!");
            setFormData({ name: "", email: "", message: "", subscribe: false });
        } else {
            setStatus("Failed to send message. Try again.");
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "auto", textAlign: "center" }}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                <label>
                    <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} />
                    Subscribe to Newsletter
                </label>
                <button type="submit">Submit</button>
                <p>{status}</p>
            </form>
        </div>
    );
}
