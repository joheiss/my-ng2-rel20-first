export class User {

    constructor(public userId?: string,
                public userName?: string,
                public locked?: boolean,
                public roles?: string[]) {};
}
