const odd = '홀수입니다';
const even = '짝수입니다';

// 두 가지 이상을 exports 하고 싶을 경우, 방법 1
exports.odd = odd;
exports.even = even;

// 두 가지 이상을 exports 하고 싶을 경우, 방법 2
// module.exports = {
//     odd,
//     even,
// };

// export default {
//     odd,
//     even,
// };

// 처음 값이 빈 객체
// module.exports === exports === {}

// module.exports === exports === { odd, even }

// 만약에 exports.~ 를 사용했을 경우, module.exports를 사용하면 안된다. exports.로 쭉 사용하고 중간에 module.exports를 사용하면 위에 선언한 것들이 무시된다. 왜? 참조관계가 끊긴다.
// 따라서 exports와 module.exports는 같이 사용할 수 없다.
// module.exports = {
//     odd,
//     even,
// };