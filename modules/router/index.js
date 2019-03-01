import {Martine} from "../../martine.js";
import {MartineDOM} from "../../martine.js";

import {SayMyName} from "../../src/components/SayMyName/index.js";
import {Welcome} from "../../src/components/Welcome/index.js";
import {PropTypeTest} from "../../src/components/PropTypeTest/index.js";
import {Router1} from "../../src/components/Router/index.js";
import {Counter} from "../../src/components/Counter/index.js";


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

router.addRoute('/', Welcome);
router.addRoute('/say-my-name', SayMyName);
router.addRoute('/props', PropTypeTest);
router.addRoute('/router', Router1);
router.addRoute('/counter', Counter);