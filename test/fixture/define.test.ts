import * as assert from 'power-assert';
import { define } from '../../src';

describe('Define Exception', () => {
    it('support define', () => {
        const Error = define('NotFound', {
            code: 404,
            subcode: 1,
        });

        const error = new Error();

        assert.equal(error.name, 'NotFound');
        assert.equal(error.message, 'Not Found');
        assert.equal(error.code, 404);
        assert.equal(error.subcode, 1);
    });
});
