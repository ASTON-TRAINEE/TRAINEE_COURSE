// function step1(callback) {
//     setTimeout(()=> {
//         console.log('Step 1 completed');
//         callback();
//     }, 1000)
// }
//
// function step2(callback) {
//     setTimeout(()=> {
//         console.log('Step 2 completed');
//         callback();
//     }, 1000)
// }
//
// function step3(callback) {
//     setTimeout(()=> {
//         console.log('Step 3 completed');
//         callback();
//     }, 1000)
// }
//
// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log('All steps completed');
//         });
//     });
// });
