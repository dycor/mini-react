import Home from "../Home/index.js";
import Login from "../Login/login.js";

const Router = function () {
    let routes = {};

    this.addRoute = function (path,componentClass) {
        routes[path] = componentClass;
    }

    this.getAllroutes =  function () {
        return routes;
    }

    this.render = function () {
        let root  = document.getElementById('root');

        var path  = Object.keys(routes).find(function(url) {
            return  window.location.pathname === url;
        });

        if(path) {
            const componentRender = routes[path];

            root.appendChild(componentRender);

        } else {
            root.appendChild('<h1> ERROR 404 </h1>');
        }
    }
};

export const router = new Router();

router.addRoute('/', Home("test"));
router.addRoute('/login',Login());
router.render();
