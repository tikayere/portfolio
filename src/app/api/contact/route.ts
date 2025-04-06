import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // For now, just log the data (replace with actual email sending logic later)
    console.log("Contact Form Submission:", { name, email, message });

    // Simulate email sending or database storage here
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { 
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use environment variables for security 
        },
    });
    await transporter.sendMail({
      from: email,
      to: "your-email@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: message,
    });
    console.log("Email sent successfully");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}