/**
 * Describes the structure of an asset that is loaded through musk-ox.
 */
export default interface Asset {
    type: string;
    key: string;
    src: (string | Array<string>);
    data?: any;
}
