export default interface HasFormatter {
    type: string;
    format(): string;
}