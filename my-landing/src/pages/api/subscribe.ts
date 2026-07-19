import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  formData.set("access_key", import.meta.env.WEB3FORMS_KEY);

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json() as { success: boolean; message: string };

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: "Error al enviar el formulario" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
