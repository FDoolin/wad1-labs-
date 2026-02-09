'use strict';
import logger from "../utils/logger.js";

const playlist = [
    {
        id: 1,
        title: "Piane Sonata No. 3",
        artist: "Beethoven"
    },
    {
        id: 2,
        title: "Piano Sonato No .7",
        artist: "Beethoven"
    },
    {
        id:3,
        title: "Piano Sonata No. 10",
        artist: "Beethoven"
    }
];

const dashboard = {
    createView(request, response){
        logger.info("Dashboard page loading!")
        logger.debug("loading the playlist",playlist);
        response.json(playlist);
    },
};

export default dashboard;