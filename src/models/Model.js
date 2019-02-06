import invariant from 'invariant';
import { pick, merge } from 'lodash/fp';

// TODO: Move to lib
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
// See: https://github.com/substack/deep-freeze
function deepFreeze(obj) {
    Object.freeze(obj);

    Object.getOwnPropertyNames(obj).forEach((prop) => {
        if (obj[prop] !== null
            && (typeof obj[prop] === 'object' || typeof obj[prop] === 'function')
            && !Object.isFrozen(obj[prop])) {
            deepFreeze(obj[prop]);
        }
    });

    return obj;
}

// TODO: Check immutability, references, cloneDeep, etc
class Model {
    constructor(data) {
        const { fields } = this.constructor;

        invariant(
            typeof fields === 'object',
            'Model must define a static "fields" property.'
        );

        const fieldKeys = Object.keys(fields);
        const pickFields = pick(fieldKeys);

        let mergedFields = merge(fields, pickFields(data));

        if (typeof this.constructor.filter === 'function') {
            mergedFields = this.constructor.filter(mergedFields, data);
        }

        Object.assign(this, mergedFields);

        return deepFreeze(this);
    }
}

export default Model;
