export default function useReady() {
    return useState('ready', () => ({
        state1: false,
        state2: false,
    }));
}
