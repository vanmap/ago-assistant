export function itemSearch(searchItems){
    //searchItems is an arry
    //{
    //  name:name of item,
    //  value: value to search,
    //  equal: equal or like
    //}
    let portal = this;
    let url = `${portal.portalUrl}sharing/rest/search/`;

    var query = ''; //'title:' + title;
    searchItem.each(function(item){
        query += item.name + ":" + item.equal ? item.value : '?' + item.value;
        query += ' AND ';
    });
    //if(type)
    //query += ' and type:' + type;
    let parameters = {
        token: portal.token,
        q:query,
        f: "json"
    };
    let options = {
        withCredentials: portal.withCredentials
    };
 
    return request.get(url, parameters, options);
}