// the config of app router

import TestManagement from './components/testManagement/TestManagement.vue';
import UserGroup from './components/userGroup/UserGroup.vue';
import Help from './components/help/Help.vue';
import Feedback from './components/feedback/Feedback.vue';
import UserList from './components/user/UserList.vue';
import App from './App.vue'
export default [{
        path: '/index',
        component: App,
        children: [{
                name: '测试管理',
                path: 'testManagement',
                component: TestManagement
            },
            {
              name: '用户分群管理',
              path: 'userGroup',
              component:UserGroup
            },
            {
              name: '用户管理',
              path: 'userList',
              component: UserList
            },
            {
              name: '帮助中心',
              path: 'help',
              component:Help
            },
            {
              name: '意见反馈',
              path: 'feedback',
              component:Feedback
            },
        ]
    },
    {
        path: '*',
        redirect: '/index/testManagement'
    }
]
