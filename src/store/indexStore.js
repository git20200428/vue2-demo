const index = {
    namespaced:true,
    state:{
        num: 0
    },
    mutations:{
        addNum(state, val){
            state.num += val;
        },
        addNum(state, val){
            state.num +=  +val + 2;
        },
        subNum(state, val){
            state.num -= val;
        }
    },
    actions:{
        addNum(context, val) {
            console.log('index addNum1:'+val)
            context.commit('addNum',val);
        },
        addNum(context, val,a) {
            console.log('index addNum2:'+val,a)
            context.commit('addNum',val);
        },
        subNum(context, val) {
            context.commit('subNum',val);
        }
    }
};
export default index;