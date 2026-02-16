'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const appEmployee ={
    store: new JsonStore('./models/app-employee.json', { employee: {}}),
    collection: 'employee',


    getAppInfo(){
        return this.store.findAll(this.collection);
    },

};

export default appEmployee;