export default () => ({
  id: "eliminate-empty-lines",
  init: (deck) => {
    const pres = document.querySelectorAll("pre");

    for (const pre of pres) {
      pre.innerHTML = pre.innerHTML.replace(
        /^\ *(<[^\/<>]+>)* *\n/gm,
        "$1"
      );
      pre.innerHTML = pre.innerHTML.replace(/\n^\ *(<\/[^<>]+>)*\n?$/gm , '$1')
    }
  },
});
