import {Link} from "react-router-dom";

function Others() {
    return (
        <>
            <div className={'other'}>
                <div className={'search'}>
                    <form>
                        <input type="text" placeholder={'Search...'}/>
                        <button type={'submit'}>Go</button>
                    </form>
                </div>

                <div className={'icon-cart'}>
                    <img id={'cart'}
                         src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cart-icon-for-your-project-png-image_5214151.jpg"
                         alt=""/>
                </div>
                <div className={'icon-user'}>
                    <Link to={'/login'}><img id={'user'} src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                                             alt=""/></Link>
                </div>
            </div>
        </>
    );
}

export default Others;