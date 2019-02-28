import {Martine} from "../../martine.js";
import {MartineDOM} from "../../martine.js";

import {SayMyName} from "../../src/components/SayMyName/index.js";
import {Welcome} from "../../src/components/Welcome/index.js";
import {Home} from "../../src/components/Home/index.js";
import {PropTypeTest} from "../../src/components/PropTypeTest/index.js";


const Router = function () {
    let routes = {};

    this.addRoute = function (path,componentClass) {
        routes[path] = componentClass;
    };

    this.getAllroutes =  function () {
        return routes;
    };


    this.getRender = function (className,rootDom) {
        // return new className().render()
      MartineDOM.render(new className(), rootDom);

    };

    this.render = function (rootDom) {

        var path  = Object.keys(routes).find(function(url) {
            return  window.location.pathname === url;
        });

        if(path) {
          const componentRender = this.getRender(routes[path],rootDom);
          // console.log('componentRender',componentRender)
          // console.log(routes[path])
          // console.log(rootDom)
          // rootDom.appendChild(componentRender);

        } else {
          rootDom.appendChild(Martine.createElement('h1', null, 'ERROR 404'));
        }
    };
};




export const router = new Router();

router.addRoute('/', Home);
router.addRoute('/say-my-name', SayMyName);
router.addRoute('/welcome', Welcome);
router.addRoute('/propTypeTest', PropTypeTest);