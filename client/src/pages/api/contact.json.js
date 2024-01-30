export async function POST({ request }) {
  const body = await request.json();
  console.log({ body });
  try {
    const res = await fetch("http://localhost:3000/contact", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("This is the response:", res);

    switch (res.status) {
      case 200:
        return new Response(
          JSON.stringify({
            message: "Success!",
          })
        );
      case 400:
        return new Response(
          JSON.stringify({
            message: "Bad Request!",
          })
        );
      case 500:
        return new Response(
          JSON.stringify({
            message: "Internal Server Error!",
          })
        );
      default:
        return new Response(
          JSON.stringify({
            message: "Something went wrong!",
          })
        );
    }
  } catch (error) {
    console.log("There was an error", error);
  }

  return new Response(
    JSON.stringify({
      message: "This was a POST!",
    })
  );
}
