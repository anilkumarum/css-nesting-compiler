/* *{
    box-sizing: border-box;
} */

exports.universalSelector = new Uint8Array([
	42, 123, 10, 32, 32, 32, 32, 98, 111, 120, 45, 115, 105, 122, 105, 110, 103, 58, 32, 98, 111, 114, 100, 101,
	114, 45, 98, 111, 120, 59, 10, 125,
]);

/*  div {
    height: 100%;
    padding-left: 0.4em;
    color: white;
} */
exports.tagSelector = new Uint8Array([
	100, 105, 118, 32, 123, 10, 32, 32, 32, 32, 104, 101, 105, 103, 104, 116, 58, 32, 49, 48, 48, 37, 59, 10, 32,
	32, 32, 32, 112, 97, 100, 100, 105, 110, 103, 45, 108, 101, 102, 116, 58, 32, 48, 46, 52, 101, 109, 59, 10,
	32, 32, 32, 32, 99, 111, 108, 111, 114, 58, 32, 119, 104, 105, 116, 101, 59, 10, 125,
]);

/* h1,
h2 {
    text-align: center;
} */
exports.multiTagSelector = new Uint8Array([
	104, 49, 44, 10, 104, 50, 32, 123, 10, 32, 32, 32, 32, 116, 101, 120, 116, 45, 97, 108, 105, 103, 110, 58, 32,
	99, 101, 110, 116, 101, 114, 59, 10, 125,
]);

/* div {
    height: 100%;
    padding-left: 0.4em;
    color: white;

    &.success {
        background-color: limegreen;
    }
} */
exports.nestedSelfSelector = new Uint8Array([
	100, 105, 118, 32, 123, 10, 32, 32, 32, 32, 104, 101, 105, 103, 104, 116, 58, 32, 49, 48, 48, 37, 59, 10, 32,
	32, 32, 32, 112, 97, 100, 100, 105, 110, 103, 45, 108, 101, 102, 116, 58, 32, 48, 46, 52, 101, 109, 59, 10,
	32, 32, 32, 32, 99, 111, 108, 111, 114, 58, 32, 119, 104, 105, 116, 101, 59, 10, 10, 32, 32, 32, 32, 38, 46,
	115, 117, 99, 99, 101, 115, 115, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111,
	117, 110, 100, 45, 99, 111, 108, 111, 114, 58, 32, 108, 105, 109, 101, 103, 114, 101, 101, 110, 59, 10, 32,
	32, 32, 32, 125, 10, 125,
]);

/* div {
    height: 100%;
    padding-left: 0.4em;
    color: white;

    & .success {
        background-color: limegreen;
    }
} */
exports.nestedChildSelector = new Uint8Array([
	100, 105, 118, 32, 123, 10, 32, 32, 32, 32, 104, 101, 105, 103, 104, 116, 58, 32, 49, 48, 48, 37, 59, 10, 32,
	32, 32, 32, 112, 97, 100, 100, 105, 110, 103, 45, 108, 101, 102, 116, 58, 32, 48, 46, 52, 101, 109, 59, 10,
	32, 32, 32, 32, 99, 111, 108, 111, 114, 58, 32, 119, 104, 105, 116, 101, 59, 10, 10, 32, 32, 32, 32, 38, 32,
	46, 115, 117, 99, 99, 101, 115, 115, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114,
	111, 117, 110, 100, 45, 99, 111, 108, 111, 114, 58, 32, 108, 105, 109, 101, 103, 114, 101, 101, 110, 59, 10,
	32, 32, 32, 32, 125, 10, 125,
]);

/* div {
    height: 100%;
    padding-left: 0.4em;
    color: white;

    & .success {
        background-color: limegreen;
    }

	&+svg {
        align-self: start;
        inline-size: 1.2em;
    }
} */
exports.nestedMultiChildSelector = new Uint8Array([
	100, 105, 118, 32, 123, 10, 32, 32, 32, 32, 104, 101, 105, 103, 104, 116, 58, 32, 49, 48, 48, 37, 59, 10, 32,
	32, 32, 32, 112, 97, 100, 100, 105, 110, 103, 45, 108, 101, 102, 116, 58, 32, 48, 46, 52, 101, 109, 59, 10,
	32, 32, 32, 32, 99, 111, 108, 111, 114, 58, 32, 119, 104, 105, 116, 101, 59, 10, 10, 32, 32, 32, 32, 38, 32,
	46, 115, 117, 99, 99, 101, 115, 115, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114,
	111, 117, 110, 100, 45, 99, 111, 108, 111, 114, 58, 32, 108, 105, 109, 101, 103, 114, 101, 101, 110, 59, 10,
	32, 32, 32, 32, 125, 10, 10, 9, 38, 43, 115, 118, 103, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 108,
	105, 103, 110, 45, 115, 101, 108, 102, 58, 32, 115, 116, 97, 114, 116, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32,
	105, 110, 108, 105, 110, 101, 45, 115, 105, 122, 101, 58, 32, 49, 46, 50, 101, 109, 59, 10, 32, 32, 32, 32,
	125, 10, 125, 32,
]);

/* 
a[href*="example"] {
  font-size: 2em;
}
 */
exports.tagAttributeSelector = new Uint8Array([
	97, 91, 104, 114, 101, 102, 42, 61, 34, 101, 120, 97, 109, 112, 108, 101, 34, 93, 32, 123, 10, 32, 32, 102,
	111, 110, 116, 45, 115, 105, 122, 101, 58, 32, 50, 101, 109, 59, 10, 125,
]);

/* [class~="logo"] {
	font-size: 2em;
  } */

exports.attributeSelector = new Uint8Array([
	91, 99, 108, 97, 115, 115, 126, 61, 34, 108, 111, 103, 111, 34, 93, 32, 123, 10, 9, 102, 111, 110, 116, 45,
	115, 105, 122, 101, 58, 32, 50, 101, 109, 59, 10, 125,
]);

/* 
div {
    height: 100%;
    padding-left: 0.4em;
    color: white;
}

h1,
h2 {
    text-align: center;
}
*/

exports.multiRuleSelector = new Uint8Array([
	100, 105, 118, 32, 123, 10, 32, 32, 32, 32, 104, 101, 105, 103, 104, 116, 58, 32, 49, 48, 48, 37, 59, 10, 32,
	32, 32, 32, 112, 97, 100, 100, 105, 110, 103, 45, 108, 101, 102, 116, 58, 32, 48, 46, 52, 101, 109, 59, 10,
	32, 32, 32, 32, 99, 111, 108, 111, 114, 58, 32, 119, 104, 105, 116, 101, 59, 10, 125, 10, 10, 104, 49, 44, 10,
	104, 50, 32, 123, 10, 32, 32, 32, 32, 116, 101, 120, 116, 45, 97, 108, 105, 103, 110, 58, 32, 99, 101, 110,
	116, 101, 114, 59, 10, 125,
]);

/* 
div {
    height: 100%;
    padding-left: 0.4em;
    color: white;

    &.success {
        background-color: limegreen;

        & span {
            color: aqua;
        }
    }

    & span {
        color: red;
    }

}
*/

exports.deepNestedSelector = new Uint8Array([
	100, 105, 118, 32, 123, 10, 32, 32, 32, 32, 104, 101, 105, 103, 104, 116, 58, 32, 49, 48, 48, 37, 59, 10, 32,
	32, 32, 32, 112, 97, 100, 100, 105, 110, 103, 45, 108, 101, 102, 116, 58, 32, 48, 46, 52, 101, 109, 59, 10,
	32, 32, 32, 32, 99, 111, 108, 111, 114, 58, 32, 119, 104, 105, 116, 101, 59, 10, 10, 32, 32, 32, 32, 38, 46,
	115, 117, 99, 99, 101, 115, 115, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111,
	117, 110, 100, 45, 99, 111, 108, 111, 114, 58, 32, 108, 105, 109, 101, 103, 114, 101, 101, 110, 59, 10, 10,
	32, 32, 32, 32, 32, 32, 32, 32, 38, 32, 104, 49, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
	99, 111, 108, 111, 114, 58, 32, 97, 113, 117, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100,
	105, 115, 112, 108, 97, 121, 58, 32, 45, 119, 101, 98, 107, 105, 116, 45, 98, 111, 120, 59, 10, 32, 32, 32,
	32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 10, 32, 32, 32, 32, 38, 32, 115, 112, 97, 110, 32, 123,
	10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 108, 111, 114, 58, 32, 114, 101, 100, 59, 10, 32, 32, 32, 32,
	125, 10, 10, 125,
]);

/* @keyframes right-in-out {

    20%,
    90% {
        translate: 0 0;
    }
} */
exports.atRuleSelector = new Uint8Array([
	64, 107, 101, 121, 102, 114, 97, 109, 101, 115, 32, 114, 105, 103, 104, 116, 45, 105, 110, 45, 111, 117, 116,
	32, 123, 10, 10, 32, 32, 32, 32, 50, 48, 37, 44, 10, 32, 32, 32, 32, 57, 48, 37, 32, 123, 10, 32, 32, 32, 32,
	32, 32, 32, 32, 116, 114, 97, 110, 115, 108, 97, 116, 101, 58, 32, 48, 32, 48, 59, 10, 32, 32, 32, 32, 125,
	10, 125,
]);

/* *::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0.01);
    width: 2px;
} */
exports.psuedoClassSelector = new Uint8Array([
	42, 58, 58, 45, 119, 101, 98, 107, 105, 116, 45, 115, 99, 114, 111, 108, 108, 98, 97, 114, 32, 123, 10, 32,
	32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 45, 99, 111, 108, 111, 114, 58, 32, 114, 103, 98,
	97, 40, 48, 44, 32, 48, 44, 32, 48, 44, 32, 48, 46, 48, 49, 41, 59, 10, 32, 32, 32, 32, 119, 105, 100, 116,
	104, 58, 32, 50, 112, 120, 59, 10, 125,
]);

/* :is(shape-box, pen-box, arrow-box, comment-box) {
    display: flex;
    gap: 0.4em;
} */
exports.isPsuedoSelector = new Uint8Array([
	58, 105, 115, 40, 115, 104, 97, 112, 101, 45, 98, 111, 120, 44, 32, 112, 101, 110, 45, 98, 111, 120, 44, 32,
	97, 114, 114, 111, 119, 45, 98, 111, 120, 44, 32, 99, 111, 109, 109, 101, 110, 116, 45, 98, 111, 120, 41, 32,
	123, 10, 32, 32, 32, 32, 100, 105, 115, 112, 108, 97, 121, 58, 32, 102, 108, 101, 120, 59, 10, 32, 32, 32, 32,
	103, 97, 112, 58, 32, 48, 46, 52, 101, 109, 59, 10, 125,
]);

// h1 {
//     text-align: center;
//     align-self: start;
//     inline-size: 1.2em;
// }

// /* div {
//     display: inline-block;
//     backdrop-filter: blur(5px);
//     background-color: limegreen;
// } */

// span{
//     vertical-align: middle;
// }

exports.ruleComment = new Uint8Array([
	104, 49, 32, 123, 10, 32, 32, 32, 32, 116, 101, 120, 116, 45, 97, 108, 105, 103, 110, 58, 32, 99, 101, 110,
	116, 101, 114, 59, 10, 32, 32, 32, 32, 97, 108, 105, 103, 110, 45, 115, 101, 108, 102, 58, 32, 115, 116, 97,
	114, 116, 59, 10, 32, 32, 32, 32, 105, 110, 108, 105, 110, 101, 45, 115, 105, 122, 101, 58, 32, 49, 46, 50,
	101, 109, 59, 10, 125, 10, 10, 47, 42, 32, 100, 105, 118, 32, 123, 10, 32, 32, 32, 32, 100, 105, 115, 112,
	108, 97, 121, 58, 32, 105, 110, 108, 105, 110, 101, 45, 98, 108, 111, 99, 107, 59, 10, 32, 32, 32, 32, 98, 97,
	99, 107, 100, 114, 111, 112, 45, 102, 105, 108, 116, 101, 114, 58, 32, 98, 108, 117, 114, 40, 53, 112, 120,
	41, 59, 10, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 45, 99, 111, 108, 111, 114, 58, 32,
	108, 105, 109, 101, 103, 114, 101, 101, 110, 59, 10, 125, 32, 42, 47, 10, 10, 115, 112, 97, 110, 123, 10, 32,
	32, 32, 32, 118, 101, 114, 116, 105, 99, 97, 108, 45, 97, 108, 105, 103, 110, 58, 32, 109, 105, 100, 100, 108,
	101, 59, 10, 125,
]);

// div {
//     display: inline-block;
//     backdrop-filter: blur(5px);
//     /* background-color: limegreen; */
// }

exports.declaratioComment = new Uint8Array([
	100, 105, 118, 32, 123, 10, 32, 32, 32, 32, 100, 105, 115, 112, 108, 97, 121, 58, 32, 105, 110, 108, 105, 110,
	101, 45, 98, 108, 111, 99, 107, 59, 10, 32, 32, 32, 32, 98, 97, 99, 107, 100, 114, 111, 112, 45, 102, 105,
	108, 116, 101, 114, 58, 32, 98, 108, 117, 114, 40, 53, 112, 120, 41, 59, 10, 32, 32, 32, 32, 47, 42, 32, 98,
	97, 99, 107, 103, 114, 111, 117, 110, 100, 45, 99, 111, 108, 111, 114, 58, 32, 108, 105, 109, 101, 103, 114,
	101, 101, 110, 59, 32, 42, 47, 10, 125,
]);
