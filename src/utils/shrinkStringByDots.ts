export default function shrinkStringByDots (text: string, maxLength: number): string {
    if (text.length > maxLength) {
        return `${text.substring(0, maxLength)}...`;
    }
    return text;
}
