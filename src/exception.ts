import Status = require('http-status');

interface ExceptionBaseProps<T = any> {
    code?: number;
    subcode?: number;
    meta?: T;
}

interface ExceptionDefination<T> extends ExceptionBaseProps<T> {
    message?: string;
    trace?: boolean;
}

export default class Exception<T extends string, U = any> extends Error {
    readonly name: T;
    readonly code: number;
    readonly subcode: number;

    readonly meta: U;

    constructor(message?: string, meta?: U) {
        super(message);
        this.meta = meta;
    }

    toJSON() {
        return {
            code: this.code,
            subcode: this.subcode,
            message: this.message,
            meta: this.meta,
        };
    }
}

export const define = <T extends string, U = any>(name: T, define: ExceptionDefination<U> = {}): typeof Exception => {
    const { code = 500, subcode = 0, message: defaultMessage = (Status as any)[code], meta: defaultMeta } = define;

    function CustomException(message: string = defaultMessage, meta: U = defaultMeta): typeof Exception {
        const exception = Exception.call(this, message, meta);
        exception.code = code;
        exception.subcode = subcode;
        exception.name = name;
        return exception;
    }

    CustomException.prototype = Object.create(Exception.prototype, {
        code: {
            get(): number {
                return code;
            },
            enumerable: true,
            configurable: false,
        },
        subcode: {
            get(): number {
                return subcode;
            },
            enumerable: true,
            configurable: false,
        },
    });

    CustomException.prototype.constructor = CustomException;

    CustomException.captureStackTrace = Exception.captureStackTrace;
    CustomException.stackTraceLimit = Exception.stackTraceLimit;

    return CustomException as any;
};
