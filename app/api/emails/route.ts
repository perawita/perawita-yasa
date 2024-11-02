import { NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: "ap-southeast-2",
  credentials: {
    accessKeyId: process.env.NEXT_AWS_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.NEXT_AWS_SECRET_ACCESS_KEY ?? "",
  },
});

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { name, email, message } = await req.json();

    const emailHtml = `
    <html>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333;">Contact Form Submission</h2>
          <p style="color: #555;">Message sent from <strong>${name}</strong> (<a href="mailto:${email}" style="color: #0066cc;">${email}</a>)</p>
          <div style="margin: 20px 0; padding: 10px; background-color: #f9f9f9; border-left: 3px solid #0066cc;">
            <p style="color: #333;">${message}</p>
          </div>
          <footer style="margin-top: 20px; color: #777;">
            <p>If you wish to respond, please do not hesitate to reach out.</p>
          </footer>
        </div>
      </body>
    </html>
    `;

    const params = {
      Source: `${process.env.NEXT_APP_EMAIL}`, // Email yang diverifikasi di SES
      Destination: {
        ToAddresses: [`${process.env.NEXT_APP_EMAIL}`], // Email penerima (dapat berupa list)
      },
      Message: {
        Subject: {
          Data: `Contact form submission from ${name}`,
        },
        Body: {
          Html: {
            Data: emailHtml,
          },
        },
      },
    };

    const res = await sesClient.send(new SendEmailCommand(params));
    return NextResponse.json(
      { message: "Email berhasil dikirim", data: res },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengirim email" },
      { status: 500 }
    );
  }
}
