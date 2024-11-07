/**
 * API Endpoint
 *
 * Purpose: Fetch pages
 *
 * Example:
 * ```
 * fetch('/.netlify/functions/get-pages', {
 *   method: 'POST'
 * })
 * ```
 *
 */

exports.handler = async () => {
  try {
    console.log("--------------------------------");
    console.log("Retrieving pages...");
    console.log("--------------------------------");
    const result = await fetch(
      process.env.DIRECTUS_API_ENDPOINT + "/items/pages",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());

    if (result.errors) {
      console.log({ errors: result.errors });
    } else if (!result || !result.data) {
      console.log({ result });
      return "No results found.";
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result.data),
    };
  } catch (error) {
    console.log(error);
  }
};
