describe('Word Wrapper 테스트', () => {
    test('nothing test', () => {
        expect(undefined).toBe(undefined);
    })

    test('Word Wrapper 테스트', () => {
        expect(wrap('word word', 4)).toBe('word\nword');
        expect(wrap('a dog', 5)).toBe('a dog');
    })

    function wrap(s: string, width: number) {
        return s.length > width ? s.replace(' ', '\n') : s;
    }
})
