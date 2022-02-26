export const VITALUS_ARWEAVE_LINK = "https://arweave.net/Wf4tTu3F7FwzLLKpghJ4tUZhUO6YU6KO3eaxYNwUP7Y";

export const titlize = (str: string) => {
  let words = str.includes(" ") ? str.split(" ") : str.split("_");
  let cappedWords = words.map((w) => {
    return w[0].toUpperCase() + w.slice(1);
  });

  return cappedWords.join(" ");
}

export interface VillaAttributes {
  neighborhood: string,
  district: string,
  block: string,
  foundation: string,
  house: string,
  foliage: string
}

export interface VillaMetadata {
  name: string;
  description: string,
  image: string,
  vpLink: string,
  attributes: VillaAttributes
}

export interface VillaData {
  mint: string,
  metadata: VillaMetadata,
}