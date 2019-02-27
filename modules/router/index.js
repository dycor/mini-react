import {SayMyName} from "../../src/components/SayMyName/index.js";
import {Welcome} from "../../src/components/Welcome/index.js";
import {Home} from "../../src/components/Home/index.js";
import {MartineDOM} from "../../martine.js";


const Router = function () {
    let routes = {};

    this.addRoute = function (path,componentClass) {
        routes[path] = componentClass;
    };

    this.getAllroutes =  function () {
        return routes;
    };


    this.getRender = function (className) {
        MartineDOM.render(new className(), MartineDOM.getRoot() )
    };

    this.render = function () {
        var path  = Object.keys(routes).find(function(url) {
            return  window.location.pathname === url;
        });

        if(path) {
          this.getRender(routes[path]);
        } else {
            MartineDOM.render('h1', null, 'ERROR 404');
        }
    };
};




export const router = new Router();

router.addRoute('/', Home);
router.addRoute('/say-my-name', SayMyName);
router.addRoute('/welcome', Welcome);