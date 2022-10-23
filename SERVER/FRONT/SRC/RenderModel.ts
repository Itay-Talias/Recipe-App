class RenderModel {
    public static RenderContainer(
        objectToRender: object,
        containerName: string
    ) {
        const userhtml = $(`#${containerName}-template`).html();
        const template = Handlebars.compile(userhtml);
        const newHTML = template(objectToRender);
        $(`.${containerName}-container`).append(newHTML);
    }
    public static EmptyContainer(containerName: string) {
        $(`.${containerName}-container`).empty();
    }
}
