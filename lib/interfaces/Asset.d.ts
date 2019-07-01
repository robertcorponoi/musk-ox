export default interface Asset {
    type: string;
    key: string;
    src: (string | Array<string>);
    data?: any;
}
