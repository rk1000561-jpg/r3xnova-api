export default async function handler(req, res) {
  try {
    const { type, term } = req.query;

    const response = await fetch(
      `http://Api.subhxcosmo.in/api?key=KRISHRDP2&type=${type}&term=${term}`
    );

    const data = await response.json();

    data.owner = "@r3xnova";

    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
