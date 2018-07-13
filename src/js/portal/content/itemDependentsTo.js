import request from "../request";

export function itemDependentsTo(id) {
    let portal = this;
    let url = `${portal.portalUrl}sharing/rest/content/items/${id}/dependencies/listDependentsTo`;
    let parameters = {
        token: portal.token,
        f: "json"
    };
    let options = {
        withCredentials: portal.withCredentials
    };
    debugger;
    return request.get(url, parameters, options);
}
