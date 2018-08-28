const QueatSetting = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/quest-setting');
const ProblemSet = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/problemSet');
const AnswerSet = () => import(/* webpackChunkName: "setting" */ '@src/general/app/subject/answer');
const BookSet = () => import(/* webpackChunkName: "setting" */ '@src/general/app/books/bookSet');
import questAll from './queat-setting';
import problemAll from './problemSet';
import answerAll from './answer'
import bookSetAll from './bookset'
export default [
    {
        path: 'queat-setting',
        meta:{name: '题库设定'},
        name: 'queatSetting',
        component: QueatSetting,
        children: questAll
    },
    {
        path: 'problemSet',
        name: 'problemSet',
        meta:{name: '组题系统'},
        component: ProblemSet,
        children: problemAll
    },
    {
        path: 'answer',
        name: 'answerSet',
        meta:{name: '答题系统'},
        component: AnswerSet,
        children: answerAll
    },
     {
    	path: 'bookSet',
        name: 'bookSet',
        meta:{name: '图书设置'},
        component: BookSet,
        children: bookSetAll
    }
]
/**
 * Created by Administrator on 2018/7/4.
 */
