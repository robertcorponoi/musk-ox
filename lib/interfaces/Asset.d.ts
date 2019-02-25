/**
 * Describes the structure of an Asset.
 */
interface Asset {
    type: string;
    key: string;
    src: (string | Array<string>);
    data?: any;
}
