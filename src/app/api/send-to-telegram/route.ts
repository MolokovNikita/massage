import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

export async function POST(request: Request) {
  try {
    const { name, phone, service } = await request.json();
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Все поля обязательны для заполнения" },
        { status: 400 }
      );
    }
    const message = [
      "Новая запись!",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Возможная ссылка на Whatsapp wa.me/+7${phone}`,
      `Услуга: ${service}`,
    ].join("\n\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramResponse.ok) {
      const error = await telegramResponse.json();
      throw new Error(error.description || "Ошибка Telegram API");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Ошибка отправки:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Внутренняя ошибка сервера",
      },
      { status: 500 }
    );
  }
}
