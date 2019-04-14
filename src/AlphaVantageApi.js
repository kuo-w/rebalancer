export default class AlphaAdvantageApi {
  static async getSymbolPrice(symbol) {
    if (symbol == "") return;
    const response = await fetch(_quoteUrl(symbol));
    const data = await response.json();
    if (data["Global Quote"]["05. price"] == null) return -1;

    return data["Global Quote"]["05. price"].toString();
  }
}

function _quoteUrl(symbol) {
  const ALPHAVANTAGE_API_KEY = "S0LN28NKL6IRPSB7";
  return `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`;
}
