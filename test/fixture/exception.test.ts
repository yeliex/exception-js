import * as assert from 'power-assert';
import Exception from '../../src';

describe('Exception', () => {
    it('constructs error object (new)', () => {
        const exception = new Exception();
        assert.equal(exception.name, 'Exception');
        assert.equal(exception.message, 'Unknown');
        assert.equal(exception.code, 500);
        assert.equal(exception.subcode, 0);
        assert.equal(exception.meta, undefined);
    });

    it('support custom message', () => {
        const exception = new Exception('ERROR');

        assert.equal(exception.message, 'ERROR');
    });

    it('support meta', () => {
        const exception = new Exception('ERROR', { userId: 1 });

        assert.equal(exception.message, 'ERROR');
        assert.deepEqual(exception.meta, { userId: 1 });
    });

    it('support toJSON', () => {
        const exception = new Exception('ERROR', { userId: 1 });

        const data = JSON.parse(JSON.stringify(exception));

        assert.equal(data.message, 'Exception: ERROR');
        assert.equal(data.code, 500);
        assert.equal(data.subcode, 0);
        assert.deepEqual(data.meta, { userId: 1 });
    });
});
