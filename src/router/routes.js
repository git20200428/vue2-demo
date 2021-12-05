import Home from "@/pages/Home"
import Content from "@/pages/Content"
import About from "@/pages/About"
import HomeMessage from "@/pages/home/HomeMessage";
import HomeAbout from "@/pages/home/HomeAbout";
import HomeMessageDetail from "@/pages/home/message/HomeMessageDetail"
import HomeMessageNew from "@/pages/home/message/HomeMessageNew"
const routes =  [
    {
        path:'/home',
        // name: 'home',
        component:Home,
        children:[
            {
                // path: 'message',//简写形式，不能写成:'/message' 否则会导致路由匹配出错
                path: 'message',
                name: 'message',
                component: HomeMessage,
                children:[
                    {
                        path: 'detail',
                        name: 'detail',
                        component: HomeMessageDetail
                    },
                    {
                        path: 'new',
                        // name: 'new',
                        component: HomeMessageNew
                    }
                ]
            },
            {
                path: '/home/about',
                name: 'homeAbout',
                component: HomeAbout
            }
        ]
    },
    {
        path:'/content/:keyword?',
        // name: 'content',
        // path:'/content',
        // meta:{ aaa:'abc'},
        // meta:['aaa','bbb'],
        // meta: 'abc',
        // props:true,
        // props: {
        //     name:'zhangsan'
        // },
        props(rou,a,b){
            console.log(a,b)
            const {keyword} = rou.params;
            return {keyp: keyword}
        },
        component:Content
    },
    {
        path:'/about/:keywork?',
        // name: 'about',
        component:About
    }
    // {
    //     path: '/',
    //     redirect: '/about'
    // }
]
export default routes;