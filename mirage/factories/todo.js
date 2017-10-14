import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    // id(i) {
    //     return `${i}`;
    // },
    title(i) {
    return `משימה ${i}`;
    },
    completed: false
});
