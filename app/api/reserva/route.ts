import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      nombre,
      email,
      telefono,
      habitacion,
      fechaEntrada,
      fechaSalida,
      huespedes,
      mensaje,
    } = body;

    // Validar campos requeridos
    if (!nombre || !email || !habitacion || !fechaEntrada || !fechaSalida) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 },
      );
    }

    // Enviar email al administrador
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: "Alojamiento Rural <reservas@alojamientorural.com.ar>",
      to: ["alojamientorural11@gmail.com"],
      subject: `Nueva Reserva - ${nombre}`,
      // TODO: Para enviar a otros emails, verifica un dominio en resend.com/domains
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #292524; border-bottom: 2px solid #292524; padding-bottom: 10px;">
            Nueva Solicitud de Reserva
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #292524;">Información del Huésped</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #292524;">Detalles de la Reserva</h3>
            <p><strong>Habitación:</strong> ${habitacion}</p>
            <p><strong>Fecha de Entrada:</strong> ${new Date(fechaEntrada).toLocaleDateString("es-AR")}</p>
            <p><strong>Fecha de Salida:</strong> ${new Date(fechaSalida).toLocaleDateString("es-AR")}</p>
            <p><strong>Número de Huéspedes:</strong> ${huespedes}</p>
          </div>

          ${
            mensaje
              ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #292524;">Mensaje Adicional</h3>
            <p style="background-color: #f5f5f4; padding: 15px; border-radius: 5px;">
              ${mensaje}
            </p>
          </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e7e5e4; color: #78716c; font-size: 12px;">
            <p>Este es un mensaje automático del sistema de reservas de Alojamiento Rural.</p>
          </div>
        </div>
      `,
    });

    if (adminError) {
      console.error("Error enviando email al administrador:", adminError);
      return NextResponse.json(
        {
          error:
            "Error al enviar la notificación. Por favor intenta nuevamente.",
        },
        { status: 500 },
      );
    }

    // Enviar email de confirmación al cliente
    const { data: clientData, error: clientError } = await resend.emails.send({
      from: "Alojamiento Rural <reservas@alojamientorural.com.ar>",
      to: email,
      subject: "Confirmación de Reserva",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #292524; border-bottom: 2px solid #292524; padding-bottom: 10px;">
            Gracias por tu Solicitud de Reserva
          </h2>
          
          <p style="font-size: 16px; color: #44403c;">Hola ${nombre},</p>
          
          <p style="font-size: 16px; color: #44403c;">
            Hemos recibido tu solicitud de reserva y nos pondremos en contacto contigo a la brevedad 
            para confirmar la disponibilidad.
          </p>

          <div style="background-color: #f5f5f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #292524; margin-top: 0;">Resumen de tu Reserva</h3>
            <p><strong>Habitación:</strong> ${habitacion}</p>
            <p><strong>Fecha de Entrada:</strong> ${new Date(fechaEntrada).toLocaleDateString("es-AR")}</p>
            <p><strong>Fecha de Salida:</strong> ${new Date(fechaSalida).toLocaleDateString("es-AR")}</p>
            <p><strong>Número de Huéspedes:</strong> ${huespedes}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #292524;">Información de Contacto</h3>
            <p><strong>Dirección:</strong> Calle Andreoni s/n, San Rafael, Mendoza</p>
            <p><strong>Teléfono:</strong> 2615064907 / 2604595311</p>
            <p><strong>Email:</strong> alojamientorural11@gmail.com</p>
          </div>

          <p style="font-size: 16px; color: #44403c;">
            Si tienes alguna pregunta, no dudes en contactarnos.
          </p>

          <p style="font-size: 16px; color: #44403c;">
            ¡Esperamos verte pronto!<br>
            <strong>Alojamiento Rural</strong>
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e7e5e4; color: #78716c; font-size: 12px;">
            <p>Este es un mensaje automático. Por favor, no respondas a este email.</p>
          </div>
        </div>
      `,
    });

    if (clientError) {
      console.error("Error enviando email al cliente:", clientError);
      console.log(
        "⚠️ Para enviar emails a clientes, verifica un dominio en resend.com/domains",
      );
      // No falla - solo notifica al administrador
      return NextResponse.json(
        {
          success: true,
          message: "Reserva recibida. Te contactaremos pronto para confirmar.",
          adminEmailId: adminData?.id,
          clientEmailNotSent: true,
          note: "Email de confirmación al cliente pendiente (requiere dominio verificado)",
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Reserva enviada exitosamente",
        adminEmailId: adminData?.id,
        clientEmailId: clientData?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json(
      {
        error: "Error al procesar la reserva",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
