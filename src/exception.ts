import * as Status from 'http-status';

interface ExceptionBaseProps {
    code?: number;
    subcode?: number;
}

interface KV<T = any> {
    [key: string]: any;
}

interface ExceptionDefination<T extends KV> extends ExceptionBaseProps {
    message?: string;
    trace?: boolean;
    extra?: keyof T;
}

type ExceptionExtra<T extends KV> = {
    readonly [key in keyof T]: T[key];
}

export default abstract class Exception<T extends string, U extends KV> extends Error implements ExceptionExtra<U> {
    static define<T extends string, U extends KV>(name: T, define: ExceptionDefination<U> = {}) {
        const { code = 500, subcode = 0, message: defaultMessage = Status[code] } = define;

        return class extends Exception {
            constructor(message: string = defaultMessage, extra: ExceptionExtra<U> = {}) {
                new.target.name = name;
                super(message, {
                    code: define.code,
                    subcode,
                    ...extra,
                });
                if (define.trace === false) {
                    this.stack = null;
                }
            }

            get name() {
                return name;
            }
        };
    }

    readonly name: T;

    constructor(message: string, extra: ExceptionExtra<U & ExceptionBaseProps> = {}) {
        super(message);
        Object.keys(extra).forEach((key) => {
            this[key] = extra[key];
        });
    }
}
