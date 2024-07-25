export default function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, delay: number) {
    let timer: NodeJS.Timeout;

    return (...args: Parameters<T>): void => {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
