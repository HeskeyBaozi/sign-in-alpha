'use strict';


/**
 * li is a single element in the form list.
 */
export default class Li {
    constructor(name, placeholder, type) {
        this.name = name;
        this.placeholder = placeholder;
        this.type = type;
        this.value = undefined;
    }
};