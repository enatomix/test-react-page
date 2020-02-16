function books(state=null,action){
    switch (action.type){
        case 'START_READING':
            return{
                ...state,
                status:1,
            };

        case 'FINISH_READING':
            return{
                ...state,
                status:2,
            };

        default:
            return state;
    }
}

const reducers={
    START_READING:(state,action)=>{
        return{
            ...state,
            status:1,
        };
    },
    FINISH_READING:(state,action)=>{
        return{
            ...state,
            status:2,
        };
    },
};

function books(state=null,action){
    if(!reducers[acttion.type]){
        return state;
    }
    return reducers[action.type](state,action)
}

function books(state=null,action){
    switch(action.type){
        case 'START_READING':
            return Object.assign({},state,{status:1});

        case 'FINISH_READING':
            return Object.assign({},state,{status:2});

        default:
            return state;
    }
}