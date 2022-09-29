const slist = function(l) {
    l.join(", ");
}

class Advanced {
    constructor (runtime) {
        this.runtime = runtime;
    }
    
    getInfo () {
        return {
            id: 'advanced',
            name: 'Advanced Math',
            blocks: [
                {
                    opcode: 'exp',
                    blockType: 'reporter',
                    text: '[a] ^ [b]',
                    arguments: {
                        a: {
                            type: "number",
                            defaultValue: ''
                        },
                        b: {
                            type: "number",
                            defaultValue: ''
                        }
                    }
                }
            ];
            exp({a, b}) {
                return a^b;
            };
        };
    }
}
class Vector {
    constructor (runtime) {
        this.runtime = runtime;
    }
    
    getInfo () {
        return {
            id: 'vector',
            name: 'Vector Math',
            blocks: [
                {
                    opcode: 'vec2',
                    blockType: 'reporter',
                    text: 'vec2 [x] [y]',
                    arguments: {
                        x: {
                            type: "number",
                            defaultValue: ''
                        },
                        y: {
                            type: "number",
                            defaultValue: ''
                        }
                    }
                },
                {
                    opcode: 'vec3',
                    blockType: 'reporter',
                    text: 'vec2 [x] [y] [z]',
                    arguments: {
                        x: {
                            type: "number",
                            defaultValue: ''
                        },
                        y: {
                            type: "number",
                            defaultValue: ''
                        },
                        z: {
                            type: "number",
                            defaultValue: ''
                        }
                    }
                }
            ];
            vec2({x, y}) {
                return slist([x, y]);
            }
            vec3({x, y, z}) {
                return slist([x, y, z]);
            }
        };
    }
}
