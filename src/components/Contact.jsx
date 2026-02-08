export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <form action="https://formspree.io/f/yourformid" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}
