/**
 * Attributes of single Metavillage villa meta data
 */
export interface VillaAttributes {
    neighborhood: string,
    district: string,
    block: string,
    foundation: string,
    house: string,
    foliage: string
}

/**
 * Metadata of single Metavillage villa
 */
export interface VillaMetadata {
    name: string;
    description: string,
    image: string,
    vpLink: string,
    attributes: VillaAttributes
}

/**
 * Data of single Metavillage villa
 */
export interface VillaData {
    mint: string,
    metadata: VillaMetadata,
}
