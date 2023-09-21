// import { MOVIE_ACCESS_TOKEN, MOVIE_BASE_URL } from "@/app/config";

// export async function searchMoviesByName(movieName: string) {
//   if (!MOVIE_BASE_URL) {
//     return new Response("Movie base URL not available", {
//       status: 404,
//     });
//   }
//   if (!MOVIE_ACCESS_TOKEN) {
//     return new Response("Movie API token not available", {
//       status: 400,
//     });
//   }

//   try {
//     const request = await fetch(
//       `${MOVIE_BASE_URL}/3/search/movie?query=${encodeURIComponent(movieName)}`
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${MOVIE_ACCESS_TOKEN}`,
//         },
//       }
//     );

//     if (!request.ok) {
//       throw new Error(`Request failed with status: ${request.status}`);
//     }

//     const responseJson = await request.json();
//     return new Response(JSON.stringify(responseJson), {
//       status: 200,
//       statusText: "Success",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }
