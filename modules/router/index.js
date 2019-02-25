import {Martine} from "../../martine.js";
import {SayMyName} from "../../src/components/SayMyName/index.js";
import {Welcome} from "../../src/components/Welcome/index.js";
import {Home} from "../../src/components/Home/index.js";


const Router = function () {
    let routes = {};

    this.addRoute = function (path,componentClass) {
        routes[path] = componentClass;
    };

    this.getAllroutes =  function () {
        return routes;
    };


    this.getRender = function (className) {
        return new className().render()
    };

    this.render = function () {
        let root  = document.getElementById('root');
        var path  = Object.keys(routes).find(function(url) {
            return  window.location.pathname === url;
        });

        if(path) {
            const componentRender = this.getRender(routes[path]);

            root.appendChild(componentRender);

        } else {
            root.appendChild(Martine.createElement('h1', null, 'ERROR 404'));
        }
    };
};




export const router = new Router();

router.addRoute('/', Home);
router.addRoute('/say-my-name', SayMyName);
router.addRoute('/welcome', Welcome);