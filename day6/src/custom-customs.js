function customCustoms() {
  return true;
}

function differentAnswersInAGroup (groupAnswersAsString){
  let groupAnswers = groupAnswersAsString.replace(/\n/g, '').split('');
  return [...new Set(groupAnswers)].length;
}

export {customCustoms, differentAnswersInAGroup};
