import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Nav from '../components/Nav';

const mapStateToProps=state=>({
    //state.shopping.categoriesをprops.categoriesに紐付け
    categories:state.shopping.categories
});

const mapDispatchToProps=dispatch=>({
    onClick(path){
        //onClick時にreact-router-reduxのpushでページ遷移を発生させる
        dispatch(push(path));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav);