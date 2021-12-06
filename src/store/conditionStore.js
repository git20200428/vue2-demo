const condition = {
    state:{
        name: 'zhangsan',
        age:18,
        num:1
    },
    mutations:{
        changeName(state, val){
            state.name = val;
        },
        changeAge(state, val){
            state.age = val;
        },
        addNum(state, val){
            state.num += val;
        },
        subNum(state, val){
            state.num -= val;
        }
    },
    actions:{
        changeName(context, val) {
            context.commit('changeName',val);
        },
        changeAge(context, val) {
            context.commit('changeAge',val);
        },
        addNum(context, val) {
            console.log('condition addNum:'+val)
            context.commit('addNum',val);
        },
        subNum(context, val) {
            context.commit('subNum',val);
        }
    }
};
export default condition;