'use strict';

import logger from "../utils/logger.js";
import appEmployee from "../models/app-employee.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    
    const viewData = {
      title: "About the Playlist app!",
      employee: appEmployee.getAppInfo()
    };
    
    //logger.debug(viewData);
    response.render('about', viewData);   
  },
};
 
export default about;