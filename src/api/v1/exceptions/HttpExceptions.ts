export default class HttpExceptions extends Error {
    constructor(message: string) {
        super(message);
        this.message = message;
    }
}