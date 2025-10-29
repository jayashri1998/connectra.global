import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }

    // 1️⃣ Create mail transporter (use your email service credentials)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP config for your domain
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // your app password
      },
    });

    // 2️⃣ Email to your company
    await transporter.sendMail({
      from: `"Connectra Technologies" <${process.env.SMTP_USER}>`,
      to: "jayashrimatale28@gmail.com", // your company email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 3️⃣ Confirmation email to client
    await transporter.sendMail({
      from: `"Connectra Technologies" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Connectra Technologies",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to <b>Connectra Technologies</b>! 
        We have received your message and will get back to you soon.</p>
        <br/>
        <p>Best Regards,<br/>Team Connectra Technologies</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
