import { Resend } from 'resend';

export async function handler(event, context) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }

    const data = JSON.parse(event.body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        await resend.emails.send({
            from: "bustedtopcandles@gmail.com",
            to: "bustedtopcandles@gmail.com",
            subject: "New Order Placed",
            html: `
                <h2>New Order</h2>
                <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Address:</strong> ${data.address} ${data.address2}</p>
                <p><strong>City:</strong> ${data.city}</p>
                <p><strong>Zip:</strong> ${data.zip}</p>
            `
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true })
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: "Failed to send email" })
        };
    }
}