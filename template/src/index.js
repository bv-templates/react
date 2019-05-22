import React from 'react'
import { render } from "react-dom"
import Routers from '$routers'
/**
 * 修改index.html页面会重新加载
 * 如果index.html不常修改，即使修改也是手动刷新，则可以去掉这个require
 */
if (process.env.NODE_ENV === 'development') {
  require('./index.html')

}
console.log(11112221231233)
import './index.scss'

render(<Routers />, document.querySelector('#main'));
