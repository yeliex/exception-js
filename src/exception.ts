import Status = require('http-status');

interface ExceptionBaseProps<T = any> {
    code?: number;
    subcode?: number;
    meta?: T;
}

interface ExceptionDefination<T> extends ExceptionBaseProps<T> {
    message?: string;
}

export default class Exception<T extends string = 'Exception', U = any> extends Error {
    name: T;
    code: number;
    subcode: number;

    meta: U;

    constructor(message: string = 'Unknown', meta?: U) {
        super(message);
        this.meta = meta;
        this.code = 500;
        this.subcode = 0;
        this.name = 'Exception' as T;

        Object.defineProperties(this, {
            toJSON: {
                value: Exception.prototype.toJSON,
                enumerable: false,
                writable: false,
                configurable: false,
            },
        });
    }

    toJSON() {
        return {
            code: this.code,
            subcode: this.subcode,
            message: `${this.name}: ${this.message}`,
            meta: this.meta,
        };
    }
}

export const define = <T, U = any>(name: T, define: ExceptionDefination<U> = {}): typeof Exception => {
    const {
        code = 500,
        subcode = 0,
        message: defaultMessage = (Status as any)[code],
        meta: defaultMeta,
    } = define;

    function CustomException(message: string = defaultMessage, meta: U = defaultMeta): Exception {
        const exception = new Exception(message, meta);

        exception.subcode = subcode;

        Object.defineProperties(exception, {
            code: {
                get() {
                    return code;
                },
                configurable: false,
            },
            name: {
                get() {
                    return name;
                },
                configurable: false,
            },
        });

        return exception;
    }

    // for nodejs stack
    CustomException.captureStackTrace = Exception.captureStackTrace;
    CustomException.stackTraceLimit = Exception.stackTraceLimit;

    return CustomException as any;
};
