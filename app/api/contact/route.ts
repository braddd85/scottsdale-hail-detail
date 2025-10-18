import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7).optional().or(z.literal("")),
  message: z.string().min(5),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return new Response("Invalid input", { status: 400 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      to: process.env.CONTACT_TO_EMAIL || "info@scottsdalehail.com",
      from: "Scottsdale Hail & Detail <noreply@scottsdalehail.com>",
      subject: "New Contact Form Submission",
      html: `
        <h2>New website inquiry</h2>
        <p><strong>Name:</strong> ${parsed.data.name}</p>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
        <p><strong>Phone:</strong> ${parsed.data.phone || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${parsed.data.message}</p>
      `,
    });
    return Response.json({ success: true });
  } catch (e) {
    return new Response("Server error", { status: 500 });
  }
}

