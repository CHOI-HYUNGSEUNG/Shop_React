
import { useSelector, useDispatch } from 'react-redux';
import { changeName, increase, addCount, sortName } from '../store';
import Order from './Order';

function Cart() {

    // store의 state 가져오기
    const state = useSelector((state) => state);
    const cart = useSelector(state => state.cart);
    const { name, age } = state.user;

    // dispatch 함수
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center w-full space-y-5">

            <h5 className="text-xl font-bold text-gray-900 tracking-tight">
                {name} {age}의 장바구니
            </h5>

            <div className="max-w-7xl mx-auto px-4 w-full py-8">

                <div className="border border-gray-200 mb-5">
                    <table className="min-w-full divide-y divide-gray-200 text-left text-gray-500">

                        <thead className="bg-gray-50 text-gray-700 uppercase tracking-wider font-semibold">
                            <tr>
                                <th className="px-6 py-3.5">id</th>
                                <th className="px-6 py-3.5">상품명</th>
                                <th className="px-6 py-3.5">수량</th>
                                <th className="px-6 py-3.5 text-center">변경하기</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-100 text-gray-900">
                            {
                            cart.map((v, i) =>
                                <tr className="hover:bg-gray-50 transition-colors" key={i}>
                                    <td className="px-6 py-4 text-gray-400 font-normal">{v.id}</td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">{v.item}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full font-bold">{v.amount}개</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button className="inline-flex items-center justify-center w-7 h-7 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-all active:scale-90 font-bold shadow-sm" onClick={()=>{dispatch(addCount(v.id))}}> +</button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center">
                    <button className="border border-gray-300 text-gray-700 bg-white px-3.5 py-2 rounded-lg" onClick={()=>{dispatch(sortName())}}>
                        이름순 정렬
                    </button>
                </div>

            </div>
            <Order />

            <div className="flex flex-wrap justify-center gap-2.5 w-full">

                <button
                    onClick={() => dispatch(changeName())}
                    className="bg-blue-600 text-white px-4 py-2.5 rounded-xl"
                >
                    관우로 이름 바꾸기
                </button>

                <button
                    onClick={() => dispatch(increase(1))}
                    className="bg-emerald-600 text-white px-4 py-2.5 rounded-xl"
                >
                    나이 +
                </button>

                <button
                    onClick={() => dispatch(increase(-1))}
                    className="bg-gray-200 text-gray-700 px-4 py-2.5 rounded-xl"
                >
                    나이 -
                </button>

            </div>

        </div>
    );
}

export default Cart;
