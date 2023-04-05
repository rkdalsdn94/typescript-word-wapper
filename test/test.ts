describe('Word Wrapper 테스트', () => {
    test('nothing test', () => {
        expect(undefined).toBe(undefined);
    })

    test('Word Wrapper 테스트', () => {
        assertWraps(null, 1, '');
        assertWraps('', 1, '')
        assertWraps('x', 1, 'x')
        assertWraps('xx', 1, 'x\nx')
        assertWraps('xxx', 1, 'x\nx\nx')
        assertWraps('x x', 1, 'x\nx')
        assertWraps('x xx', 3, 'x\nxx')
        assertWraps('four score and seven years ago our fathers brought forth upon this continent', 7,
            "four\nscore\nand\nseven\nyears\nago our\nfathers\nbrought\nforth\nupon\nthis\ncontine\nnt");

    })

    function assertWraps(s: string | null, width: number, expected: string) {
        expect(wrap(s, width)).toBe(expected);
    }

    function wrap(s: string | null, width: number): string {
        if (s == null)
            return ""
        if (s.length <= width)
            return s;
        else {
            let breakPint = s.lastIndexOf(' ', width);
            if (breakPint == -1)
                breakPint = width;
            return s.substring(0, breakPint) + '\n' + wrap(s.substring(breakPint).trim(), width);
        }
    }
})
