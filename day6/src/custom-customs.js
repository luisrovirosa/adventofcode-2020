function customCustoms(allGroupAnswersAsString) {
  return allGroupAnswersAsString.split('\n\n').map(differentAnswersInAGroup).reduce((a,b) => a + b);
}

function differentAnswersInAGroup (groupAnswersAsString){
  let groupAnswers = groupAnswersAsString.replace(/\n/g, '').split('');
  return [...new Set(groupAnswers)].length;
}

export {customCustoms, differentAnswersInAGroup};
