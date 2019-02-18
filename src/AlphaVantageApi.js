export class AlphaVantageApi {
  constructor(symbol) {
    this.symbol = symbol;
  }

  async getSymbolPrice() {
    const response = await fetch(this._quoteUrl(this.symbol));
    const data = await response.json();
    return {
      symbol: this.symbol,
      price: data["Global Quote"]["05. price"]
    };
  }

  _quoteUrl(symbol) {
    const ALPHAVANTAGE_API_KEY = "S0LN28NKL6IRPSB7";
    return `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`;
  }
}
