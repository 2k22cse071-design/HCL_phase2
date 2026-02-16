// export default function Contact() {
//   const teamMembers = [
//     { name: "Mukilan", email: "2k22cse098@gmail.com" },
//     { name: "Kathirraj", email: "2k22cse071@gmail.com" },
//     { name: "Kaviyashree", email: "gkaviyashree01@gmail.com" },
//     { name: "Deeksha", email: "deekshamkt@gmail.com" }
//   ];

//   return (
//     <div style={{ padding: '20px', lineHeight: '1.6' }}>
//       <h1>Contact Details</h1>
      
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
//         {teamMembers.map((member, index) => (
//           <div key={index} style={{ 
//             border: '1px solid #ddd', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             minWidth: '250px',
//             backgroundColor: '#f9f9f9'
//           }}>
//             <p><strong>Name:</strong> {member.name}</p>
//             <p>
//               <strong>Email:</strong> 
//               <a 
//                 href={`mailto:${member.email}?subject=Hello from React`}
//                 style={{ marginLeft: '10px', color: '#0078d4', textDecoration: 'none', fontWeight: 'bold' }}
//               >
//                 {member.email}
//               </a>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//         alert('Thank you for your message! We will get back to you soon.');
//         setFormData({ name: '', email: '', message: '' });
//     };

//     return (
//         <div className="contact-container">
//             <div className="contact-header">
//                 <h2 className="contact-title">Get in Touch</h2>
//                 <p className="contact-subtitle">Have questions? We'd love to hear from you.</p>
//             </div>

//             <div className="contact-content">
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label className="form-label" htmlFor="name">Name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             className="form-input"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                             placeholder="John Doe"
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label className="form-label" htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             className="form-input"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             placeholder="john@example.com"
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label className="form-label" htmlFor="message">Message</label>
//                         <textarea
//                             id="message"
//                             name="message"
//                             className="form-textarea"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                             placeholder="How can we help you?"
//                         ></textarea>
//                     </div>

//                     <button type="submit" className="submit-button">Send Message</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Contact;

// import React, { useState } from 'react';

// export default function Contact() {
//   const [message, setMessage] = useState("");

//   const teamMembers = [
//     { name: "Mukilan", email: "2k22cse0@gmail.com" },
//     { name: "Kathirraj", email: "2k22cse@gmail.com" },
//     { name: "Kaviyashree", email: "gkaviyashree01@gmail.com" },
//     { name: "Deeksha", email: "deekshamkt@gmail.com" }
//   ];

//   const handleSendEmail = (recipientEmail) => {
//     // encodeURIComponent ensures spaces and symbols in your message don't break the URL
//     const mailtoLink = `mailto:${recipientEmail}?subject=Message from Project App&body=${encodeURIComponent(message)}`;
//     window.location.href = mailtoLink;
//   };

//   return (
//     <div style={{ padding: '20px', lineHeight: '1.6' }}>
//       <h1>Contact Team</h1>

//       {/* Message Input Box */}
//       <div style={{ marginBottom: '30px' }}>
//         <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
//           Type your message here:
//         </label>
//         <textarea 
//           rows="4" 
//           style={{ width: '100%', maxWidth: '515px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//           placeholder="Write something to the team..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//       </div>
      
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
//         {teamMembers.map((member, index) => (
//           <div key={index} style={{ 
//             border: '1px solid #ddd', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             minWidth: '250px',
//             backgroundColor: '#f9f9f9'
//           }}>
//             <p><strong>Name:</strong> {member.name}</p>
//             <p><strong>Email:</strong> {member.email}</p>
            
//             <button 
//               onClick={() => handleSendEmail(member.email)}
//               style={{
//                 marginTop: '10px',
//                 padding: '8px 15px',
//                 backgroundColor: '#0078d4',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '4px',
//                 cursor: 'pointer'
//               }}
//             >
//               Submit to {member.name}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    // List of team members for the dropdown
    const teamMembers = [
        { name: "Mukilan", email: "2k22cse0@gmail.com" },
        { name: "Kathirraj", email: "2k22cse@gmail.com" },
        { name: "Kaviyashree", email: "gkaviyashree01@gmail.com" },
        { name: "Deeksha", email: "deekshamkt@gmail.com" }
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        recipient: teamMembers[0].email // Default to the first person
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Construct the mailto link
        // encodeURIComponent ensures special characters in the message don't break the link
        const subject = `Message from ${formData.name}`;
        const body = `User Email: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        
        const mailtoLink = `mailto:${formData.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open Outlook / Default Mail Client
        window.location.href = mailtoLink;

        // Reset message field only (keep name/email if they want to send another)
        setFormData(prev => ({ ...prev, message: '' }));
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-subtitle">Select a team member to send them a direct message.</p>
            </div>

            <div className="contact-content">
                <form onSubmit={handleSubmit}>
                    {/* Recipient Dropdown */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="recipient">Send To</label>
                        <select
                            id="recipient"
                            name="recipient"
                            className="form-input"
                            value={formData.recipient}
                            onChange={handleChange}
                        >
                            {teamMembers.map((member, index) => (
                                <option key={index} value={member.email}>
                                    {member.name} ({member.email})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-textarea"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;