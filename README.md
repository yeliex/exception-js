# exception-js

Javascript exception with ts for both server-side and clients

## Installation

```bash
npm install exception-js --save
# OR
yarn add exception-js
```

## Usage

```typescript
import * as Exceptions from 'exception-js';

app.use('/not_found', async () => {
    throw new Exceptions.NotFound();
});
```

### Create Exception Instance

```typescript
const error = new Exceptions.NotFound();

// error.code => 404
// error.name => NotFound
// error.subcode => 0
// error.message => Not Found
```

### Create Exception Instance With Custom Message

```typescript
const error = new Exceptions.NotFound('resource not found');

// error.code => 404
// error.message => resource not found
```

### Create Exception Instance With Custom MetaData

```typescript
const error = new Exceptions.NotFound('resource not found', {
    requestId: 'xxxxxx',
});

// error.code => 404
// error.message => resource not found
// error.meta => { requestId: 'xxxxxx' }
```

### toJSON

```typescript
const error = new Exceptions.NotFound('resource not found', {
    requestId: 'xxxxxx',
});

console.log(error.toJSON());
// {
//     code: 404,
//     subcode: 0,
//     message: 'resource not found',
//     meta: {
//         requestId: 'xxxxxx'
//     }
// }
```

### Define Custom Exception

```typescript
import { define } from './exception';

const BusinessException = define<'BusinessException'>('BusinessException', {
    code: 500,
    subcode: 1,
    message: 'something went wrong', // default message
    meta: { // default meta info
        api: 'xxx'
    }, // default 
})
```

## API Reference

### Exception
```typescript
interface ExceptionBaseProps<T = any> {
    code?: number;
    subcode?: number;
    meta?: T;
}

interface ExceptionDefination<T> extends ExceptionBaseProps<T> {
    message?: string;
}

declare const define: <T, U = any>(name: T, define: ExceptionDefination<U> = {}) => typeof Exception

declare class Exception<T extends string = 'Exception', U = any> extends Error {
    constructor(message?: string, meta?: U)

    readonly name: T;
    readonly code: number;
    readonly subcode: number;
    readonly meta: U;

    toJSON(): {
        code: number;
        subcode: number;
        message: string;
        meta: U;
    }
}
```
