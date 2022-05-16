/*
const allQ = [...document.querySelectorAll('.m-choiceQuestion.u-questionItem.examMode')];
allQ.forEach((value, index) => {
  const q = value.querySelector('.f-richEditorText.j-richTxt');
  const item = q.childNodes;
  let fullQ = '';
  item.forEach(value => {
    fullQ += value.textContent;
  });
  fullQ = fullQ.replaceAll(/\s+/g, '');
  fullQ = fullQ.trim();

  console.dir(index + 1);


  fetch(`https://www.cuizilin.top:1234/mooc/qa?q=${fullQ}`).then(res => res.json())
    .then(data => {
      const choices = value.querySelector('.choices.f-cb');
      choices.childNodes.forEach((choice, index) => {
        const spans = [...choice.querySelectorAll('label .f-fl.f-richEditorText p span')];

        // console.dir(spans.length + "====> " + index)

        let fullChoice = '';
        if (spans.length < 1) {
          fullChoice = choice.querySelector('label .f-fl.f-richEditorText p').textContent;
        } else {
          spans.forEach(span => {
            fullChoice += span.textContent;
          });
        }
        // console.dir(fullChoice);

        const radio = choice.querySelector('input.u-tbi');

        fullChoice = fullChoice.replaceAll(/\s+/g, '');
        fullChoice = fullChoice.trim();
        if (data?.['a'] === fullChoice) {
          radio.checked = true;
        }
        // radio.checked = false;
      });
    });
  console.dir('========end========');
});*/


// const allQ = [...document.querySelectorAll('.m-choiceQuestion.u-questionItem.examMode')];
// allQ.forEach(async function(value, index) {
//   const q = value.querySelector('.f-richEditorText.j-richTxt');
//   const item = q.childNodes;
//   let fullQ = '';
//   item.forEach(value => {
//     fullQ += value.textContent;
//   });
//   fullQ = fullQ.replaceAll(/\s+/g, '');
//   fullQ = fullQ.trim();
//
//   console.dir(index + 1);
//
//   const wait = function(seconds) {
//     return new Promise(resolve => {
//       setTimeout(resolve, seconds * 1000);
//     });
//   };
//
//
//   const _ = await wait(1);
//   const data = await fetch(`https://www.cuizilin.top:1234/mooc/qa?q=${fullQ}`).then(res => res.json());
//
//
//   const choices = value.querySelector('.choices.f-cb');
//   choices.childNodes.forEach((choice, index) => {
//     const spans = [...choice.querySelectorAll('label .f-fl.f-richEditorText p span')];
//
//     let fullChoice = '';
//     if (spans.length < 1) {
//       fullChoice = choice.querySelector('label .f-fl.f-richEditorText p').textContent;
//     } else {
//       spans.forEach(span => {
//         fullChoice += span.textContent;
//       });
//     }
//
//     fullChoice = fullChoice.replaceAll(/\s+/g, '');
//     fullChoice = fullChoice.trim();
//     if (data?.['a'] === fullChoice) {
//       choice.style.backgroundColor = "#999"
//     }
//   });
// });

// const allQ = [...document.querySelectorAll('.m-choiceQuestion.u-questionItem.examMode')];
// allQ.forEach(async function(value, index) {
//   const q = value.querySelector('.f-richEditorText.j-richTxt');
//   const item = q.childNodes;
//   let fullQ = '';
//   item.forEach(value => {
//     fullQ += value.textContent;
//   });
//   fullQ = fullQ.replaceAll(/\s+/g, '');
//   fullQ = fullQ.trim();
//
//   const duo = value.querySelector('.duo');
//   const pan = value.querySelector('.pan');
//   let type = 0;
//   if (duo !== null) type = 1;
//   if (pan !== null) type = 2;
//   // console.dir(type)
//   // console.dir(index + 1);
//
//   const wait = function(seconds) {
//     return new Promise(resolve => {
//       setTimeout(resolve, seconds * 1000);
//     });
//   };
//
//
//   const _ = await wait(1);
//   const data = await fetch(`https://www.cuizilin.top:1234/mooc/qa?q=${fullQ}`).then(res => res.json());
//
//   const choices = value.querySelector('.choices.f-cb');
//   choices.childNodes.forEach((choice, index1) => {
//     const spans = [...choice.querySelectorAll('label .f-fl.f-richEditorText p span')];
//
//     let fullChoice = '';
//     if (spans.length < 1) {
//       fullChoice = choice.querySelector('label .f-fl.f-richEditorText p')?.textContent;
//     } else {
//       spans?.forEach(span => {
//         fullChoice += span.textContent;
//       });
//     }
//
//     let answer = data?.['a'];
//     fullChoice = fullChoice?.replaceAll(/\s+/g, '');
//     fullChoice = fullChoice?.trim();
//
//
//     if (type === 0) {
//       console.dir(fullChoice);
//       if (answer === fullChoice) {
//         choice.style.backgroundColor = '#999';
//       }
//     } else if (type === 1) {
//       //多项
//       const duoAnswers = answer.split(';');
//       for (const duoAnswer of duoAnswers) {
//         if (fullChoice === duoAnswer) {
//           choice.style.backgroundColor = '#999';
//         }
//       }
//     } else if (type === 2) {
//       //判断
//       if (answer === '正确') {
//         const correct = choice.querySelector('.u-icon-correct');
//         if (correct !== null) {
//           correct.style.backgroundColor = '#999';
//         }
//       } else {
//         const wrong = choice.querySelector('.u-icon-wrong');
//         if (wrong !== null) {
//           wrong.style.backgroundColor = '#999';
//         }
//       }
//     }
//   });
// });

const allQ = [...document.querySelectorAll('.m-choiceQuestion.u-questionItem.examMode')];
allQ.forEach(async function(value) {
  const q = value.querySelector('.f-richEditorText.j-richTxt');
  const item = q.childNodes;
  let fullQ = '';
  item.forEach(value => {
    fullQ += value.textContent;
  });
  fullQ = fullQ.replaceAll(/[，。“”（）()"\s\\n]/g, '');
  fullQ = fullQ.trim();

  const duo = value.querySelector('.duo');
  const pan = value.querySelector('.pan');
  let type = 0;
  if (duo !== null) type = 1;
  if (pan !== null) type = 2;

  const data = await fetch(`https://www.cuizilin.top:1234/moocNew/qa?q=${fullQ}`).then(res => res.json());

  const choices = value.querySelector('.choices.f-cb');
  choices.childNodes.forEach((choice, index1) => {
    const spans = [...choice.querySelectorAll('label .f-fl.f-richEditorText p span')];

    let fullChoice = '';
    if (spans.length < 1) {
      fullChoice = choice.querySelector('label .f-fl.f-richEditorText p')?.textContent;
    } else {
      spans?.forEach(span => {
        fullChoice += span.textContent;
      });
    }

    let answer = data?.['a'];
    fullChoice = fullChoice?.replaceAll(/[，。“”,（）()"\s\\n]/g, '');
    fullChoice = fullChoice?.trim();


    if (type === 0) {
      if (answer === fullChoice) {
        choice.style.backgroundColor = '#69db7c';
      }
    } else if (type === 1) {
      //多项
      const duoAnswers = answer?.split(';');

      if(duoAnswers !== undefined){
        for (const duoAnswer of duoAnswers) {
          if (fullChoice === duoAnswer) {
            choice.style.backgroundColor = '#69db7c';
          }
        }
      }
    } else if (type === 2) {
      //判断
      if (answer === '正确') {
        const correct = choice.querySelector('.u-icon-correct');
        if (correct !== null) {
          const parent = correct.closest(".u-tbl.f-pr.f-cb")
          parent.style.backgroundColor = '#69db7c';
        }
      } else {
        const wrong = choice.querySelector('.u-icon-wrong');
        if (wrong !== null) {
          const parent = wrong.closest(".u-tbl.f-pr.f-cb")
          parent.style.backgroundColor = '#69db7c';
        }
      }
    }
  });
});




