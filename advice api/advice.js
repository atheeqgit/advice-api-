class Advice {
  async get() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const responseData = await response.json();

    return responseData.slip;
  }
}
