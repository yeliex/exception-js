import { define } from './exception';

export const Continue = define<'Continue'>('Continue', {
    code: 100,
});

export const SwitchingProtocols = define<'SwitchingProtocols'>('SwitchingProtocols', {
    code: 101,
});

export const CheckPoint = define<'CheckPoint'>('CheckPoint', {
    code: 103,
});

export const Ok = define<'Ok'>('Ok', {
    code: 200,
});

export const Created = define<'Created'>('Created', {
    code: 201,
});

export const Accepted = define<'Accepted'>('Accepted', {
    code: 202,
});

export const NonAuthoritativeInformation = define<'NonAuthoritativeInformation'>('NonAuthoritativeInformation', {
    code: 203,
});

export const NoContent = define<'NoContent'>('NoContent', {
    code: 204,
});

export const ResetContent = define<'ResetContent'>('ResetContent', {
    code: 205,
});

export const PartialContent = define<'PartialContent'>('PartialContent', {
    code: 206,
});

export const MultiStatus = define<'MultiStatus'>('MultiStatus', {
    code: 207,
});

export const ImUsed = define<'ImUsed'>('ImUsed', {
    code: 226,
});

export const MultipleChoices = define<'MultipleChoices'>('MultipleChoices', {
    code: 300,
});

export const MovedPermanently = define<'MovedPermanently'>('MovedPermanently', {
    code: 301,
});

export const Found = define<'Found'>('Found', {
    code: 302,
});

export const SeeOther = define<'SeeOther'>('SeeOther', {
    code: 303,
});

export const NotModified = define<'NotModified'>('NotModified', {
    code: 304,
});

export const UseProxy = define<'UseProxy'>('UseProxy', {
    code: 305,
});

export const SwitchProxy = define<'SwitchProxy'>('SwitchProxy', {
    code: 306,
});

export const TemporaryRedirect = define<'TemporaryRedirect'>('TemporaryRedirect', {
    code: 307,
});

export const PermanentRedirect = define<'PermanentRedirect'>('PermanentRedirect', {
    code: 308,
});

export const BadRequest = define<'BadRequest'>('BadRequest', {
    code: 400,
});

export const Unauthorized = define<'Unauthorized'>('Unauthorized', {
    code: 401,
});

export const PaymentRequired = define<'PaymentRequired'>('PaymentRequired', {
    code: 402,
});

export const Forbidden = define<'Forbidden'>('Forbidden', {
    code: 403,
});

export const NotFound = define<'NotFound'>('NotFound', {
    code: 404,
});

export const MethodNotAllowed = define<'MethodNotAllowed'>('MethodNotAllowed', {
    code: 405,
});

export const NotAcceptable = define<'NotAcceptable'>('NotAcceptable', {
    code: 406,
});

export const ProxyAuthenticationRequired = define<'ProxyAuthenticationRequired'>('ProxyAuthenticationRequired', {
    code: 407,
});

export const RequestTimeout = define<'RequestTimeout'>('RequestTimeout', {
    code: 408,
});

export const Conflict = define<'Conflict'>('Conflict', {
    code: 409,
});

export const Gone = define<'Gone'>('Gone', {
    code: 410,
});

export const LengthRequired = define<'LengthRequired'>('LengthRequired', {
    code: 411,
});

export const PreconditionFailed = define<'PreconditionFailed'>('PreconditionFailed', {
    code: 412,
});

export const RequestEntityTooLarge = define<'RequestEntityTooLarge'>('RequestEntityTooLarge', {
    code: 413,
});

export const RequestUriTooLong = define<'RequestUriTooLong'>('RequestUriTooLong', {
    code: 414,
});

export const UnsupportedMediaType = define<'UnsupportedMediaType'>('UnsupportedMediaType', {
    code: 415,
});

export const RequestedRangeNotSatisfiable = define<'RequestedRangeNotSatisfiable'>('RequestedRangeNotSatisfiable', {
    code: 416,
});

export const ExpectationFailed = define<'ExpectationFailed'>('ExpectationFailed', {
    code: 417,
});

export const ImATeapot = define<'ImATeapot'>('ImATeapot', {
    code: 418,
});


export const EnhanceYourCalm = define<'EnhanceYourCalm'>('EnhanceYourCalm', {
    code: 420,
});

export const MisdirectedRequest = define<'MisdirectedRequest'>('MisdirectedRequest', {
    code: 421,
});

export const UnprocessableEntity = define<'UnprocessableEntity'>('UnprocessableEntity', {
    code: 422,
});

export const Locked = define<'Locked'>('Locked', {
    code: 423,
});

export const FailedDependency = define<'FailedDependency'>('FailedDependency', {
    code: 424,
});

export const UpgradeRequest = define<'UpgradeRequest'>('UpgradeRequest', {
    code: 426,
});

export const PreconditionRequired = define<'PreconditionRequired'>('PreconditionRequired', {
    code: 428,
});

export const TooManyRequests = define<'TooManyRequests'>('TooManyRequests', {
    code: 429,
});

export const RequestHeaderFieldsTooLarge = define<'RequestHeaderFieldsTooLarge'>('RequestHeaderFieldsTooLarge', {
    code: 431,
});

export const LoginTimeOut = define<'LoginTimeOut'>('LoginTimeOut', {
    code: 440,
});

export const NoResponse = define<'NoResponse'>('NoResponse', {
    code: 444,
});

export const RetryWith = define<'RetryWith'>('RetryWith', {
    code: 449,
});

export const BlockedByWindowsParentalControls = define<'BlockedByWindowsParentalControls'>('BlockedByWindowsParentalControls', {
    code: 450,
});

export const Redirect = define<'Redirect'>('Redirect', {
    code: 451,
});

export const UnavailableForLegalReasons = define<'UnavailableForLegalReasons'>('UnavailableForLegalReasons', {
    code: 451,
});

export const RequestHeaderTooLarge = define<'RequestHeaderTooLarge'>('RequestHeaderTooLarge', {
    code: 494,
});

export const SSLCertificateError = define<'SSLCertificateError'>('SSLCertificateError', {
    code: 495,
});

export const SSLCertificateRequired = define<'SSLCertificateRequired'>('SSLCertificateRequired', {
    code: 496,
});

export const HttpRequestSendToHttpsPort = define<'HttpRequestSendToHttpsPort'>('HttpRequestSendToHttpsPort', {
    code: 497,
});

export const InvalidToken = define<'InvalidToken'>('InvalidToken', {
    code: 498,
});

export const ClientClosedRequest = define<'ClientClosedRequest'>('ClientClosedRequest', {
    code: 499,
});

export const TokenRequired = define<'TokenRequired'>('TokenRequired', {
    code: 499,
});

export const InternalServerError = define<'InternalServerError'>('InternalServerError', {
    code: 500,
});

export const NotImplemented = define<'NotImplemented'>('NotImplemented', {
    code: 501,
});

export const BadGateway = define<'BadGateway'>('BadGateway', {
    code: 502,
});

export const ServiceUnavailable = define<'ServiceUnavailable'>('ServiceUnavailable', {
    code: 503,
});

export const GatewayTimeout = define<'GatewayTimeout'>('GatewayTimeout', {
    code: 504,
});

export const HttpVersionNotSupported = define<'HttpVersionNotSupported'>('HttpVersionNotSupported', {
    code: 505,
});

export const VariantAlsoNegotiates = define<'VariantAlsoNegotiates'>('VariantAlsoNegotiates', {
    code: 506,
});

export const InsufficientStorage = define<'InsufficientStorage'>('InsufficientStorage', {
    code: 507,
});

export const LoopDetected = define<'LoopDetected'>('LoopDetected', {
    code: 508,
});

export const BandwidthLimitExceeded = define<'BandwidthLimitExceeded'>('BandwidthLimitExceeded', {
    code: 509,
});

export const NotExtended = define<'NotExtended'>('NotExtended', {
    code: 510,
});

export const NetworkAuthenticationRequired = define<'NetworkAuthenticationRequired'>('NetworkAuthenticationRequired', {
    code: 511,
});

export const UnknownError = define<'UnknownError'>('UnknownError', {
    code: 520,
});

export const WebServerIsDown = define<'WebServerIsDown'>('WebServerIsDown', {
    code: 521,
});

export const ConnectionTimedOut = define<'ConnectionTimedOut'>('ConnectionTimedOut', {
    code: 522,
});

export const OriginIsUnreachable = define<'OriginIsUnreachable'>('OriginIsUnreachable', {
    code: 523,
});

export const ATimeoutOccurred = define<'ATimeoutOccurred'>('ATimeoutOccurred', {
    code: 524,
});

export const SSLHandshakeFailed = define<'SSLHandshakeFailed'>('SSLHandshakeFailed', {
    code: 525,
});

export const InvalidSSLCertificate = define<'InvalidSSLCertificate'>('InvalidSSLCertificate', {
    code: 526,
});

export const RailgunError = define<'RailgunError'>('RailgunError', {
    code: 527,
});

export const SiteIsFrozen = define<'SiteIsFrozen'>('SiteIsFrozen', {
    code: 530,
});

export const NetworkReadTimeoutError = define<'NetworkReadTimeoutError'>('NetworkReadTimeoutError', {
    code: 598,
});
