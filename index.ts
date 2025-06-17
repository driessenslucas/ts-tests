const world = "world";

export function hello(who:  string = world): string{
    return `hello ${who}`;
}

console.log(hello());
