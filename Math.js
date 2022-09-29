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
            ]
        };
    }
    exp({a, b}) {
        return Math.pow(a, b);
    };
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
            ]
        };
    }
    vec2({x, y}) {
        return slist([x, y]);
    };
    vec3({x, y, z}) {
        return slist([x, y, z]);
    };
}
function findReactComponent(element) {
    let fiber = element[Object.keys(element).find(key => key.startsWith("__reactInternalInstance$"))];
    if (fiber == null) return null;

    const go = fiber => {
        let parent = fiber.return;
        while (typeof parent.type == "string") {
            parent = parent.return;
        }
        return parent;
    };
    fiber = go(fiber);
    while(fiber.stateNode == null) {
        fiber = go(fiber);
    }
    return fiber.stateNode;
}

window.vm = findReactComponent(document.getElementsByClassName("stage-header_stage-size-row_14N65")[0]).props.vm;

(function() {
    var extensionInstance = new Advanced(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
    var extensionInstance = new Vector(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
