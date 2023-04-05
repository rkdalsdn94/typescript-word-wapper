describe('Word Wrapper 테스트', () => {
    test('nothing test', () => {
        expect(undefined).toBe(undefined);
    })

    test('Word Wrapper 테스트', () => {
        assertWraps(null, 1, '');
        assertWraps('', 1, '')
        assertWraps('x', 1, 'x')
        assertWraps('xx', 1, 'x\nx')
    })

    function assertWraps(s: string | null, width: number, expected: string) {
        expect(wrap(s, width)).toBe(expected);
    }

    function wrap(s: string | null, width: number) {
        if (s == null)
            return ""
        if (s.length <= width)
            return s;
        else
            return s.substring(0, width) + '\n' + s.substring(width);
    }
})
