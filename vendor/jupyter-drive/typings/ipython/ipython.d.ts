declare module "base/js/namespace" {
    module Contents {
    }
}

declare module "base/js/utils"{
    function url_path_join(root:string, path:string):string;
    function url_path_split(path:string):string[];
    function promising_ajax(url:string, object:any):Promise<any>;
    function wrap_ajax_error(e:any):any;
}

declare module "base/js/dialog" {
    export var modal:any;
}

declare module "drive_utils" {
    export var NOTEBOOK_MIMETYPE:any;
    export var FOLDER_MIME_TYPE:any;
    export var set_user_info:any;
}

declare module "gapi_utils" {
    function gapi_ready()
    function execute()
    function upload_to_drive()
    export var config
}
