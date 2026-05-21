"use server";
import { Resend } from 'resend';

// It will look for RESEND_API_KEY in your .env.local file.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  // Basic validation to prevent blank emails
  if (!name || !phone) {
    return { success: false, error: "Missing required fields" };
  }

  try {
    await resend.emails.send({
      // Keep this as onboarding@resend.dev until you verify a custom domain
      from: 'CN Constructions <onboarding@resend.dev>', 
      to: 'akshay.cnconstructions@gmail.com', 
      subject: `New Lead: ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
          <div style="background-color: #000; padding: 15px; text-align: center; margin-bottom: 20px;">
             <h1 style="color: #ea580c; margin: 0; font-size: 20px; font-style: italic; text-transform: uppercase;">CN Constructions</h1>
          </div>
          <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px; font-size: 16px;">NEW PROJECT INQUIRY</h2>
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Contact Number:</strong> ${phone}</p>
          <p><strong>Service Type:</strong> ${service}</p>
          <div style="background: #f9f9f9; padding: 15px; margin-top: 20px; border-left: 4px solid #ea580c;">
            <strong>Project Message:</strong><br/>
            ${message}
          </div>
          <p style="font-size: 10px; color: #aaa; margin-top: 30px; text-transform: uppercase; letter-spacing: 1px;">
            Sent from CN Constructions Web Portal • Amravati
          </p>
        </div>
      `
    });
    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false };
  }
}