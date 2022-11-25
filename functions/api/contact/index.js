/**
 * POST /api/contact/
 */
export async function onRequestPost({ request }) {
  try {
    const body = await request.json();
    console.log("I received your request, congrats.");
    const hello = "I created a response for you...";
    const { name, email, message } = body;
    const reqBody = {
      hello,
      name,
      email,
      message,
    };
    const json = JSON.stringify(reqBody, null, 2);
    let response = new Response(json, {
      headers: {
        "content-type": "application/json",
      },
    });

    return response;
  } catch (err) {
    return new Response(err, { status: 500 });
  }
}
