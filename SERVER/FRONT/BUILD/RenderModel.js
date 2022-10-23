"use strict";
class RenderModel {
    static RenderContainer(objectToRender, containerName) {
        const userhtml = $(`#${containerName}-template`).html();
        const template = Handlebars.compile(userhtml);
        const newHTML = template(objectToRender);
        $(`.${containerName}-container`).append(newHTML);
    }
    static EmptyContainer(containerName) {
        $(`.${containerName}-container`).empty();
    }
}
