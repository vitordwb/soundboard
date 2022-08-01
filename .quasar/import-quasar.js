/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

import lang from 'quasar/lang/pt-br'

import iconSet from 'quasar/icon-set/mdi-v3'


import Vue from 'vue'

import {Quasar,QList,QItem,QItemSection,QItemLabel,QSeparator,QAvatar,QLayout,QHeader,QDrawer,QPageContainer,QPage,QToolbar,QToolbarTitle,QBtn,QIcon,Ripple,Notify} from 'quasar'


Vue.use(Quasar, { config: {},lang: lang,iconSet: iconSet,components: {QList,QItem,QItemSection,QItemLabel,QSeparator,QAvatar,QLayout,QHeader,QDrawer,QPageContainer,QPage,QToolbar,QToolbarTitle,QBtn,QIcon},directives: {Ripple},plugins: {Notify} })
