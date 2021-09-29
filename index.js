class Formatter {
  //add static methods here
  static capitalize(string) {
    return `${string.charAt(0).toUpperCase()}` + `${string.slice(1)}`;
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, "");
  }

  static titleize(string) {
    const leaveAlone = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const words = string.split(" ");
    const cleaned = words.map((word, index) => {
      if (!leaveAlone.includes(word) || index == 0) {
        return this.sanitize(this.capitalize(word));
      } else {
        return word;
      }
    }, Formatter);
    return cleaned.join(" ");
  }
}
