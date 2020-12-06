function customCustoms() {
  return true;
}

function differentAnswersInAGroup (groupAnswers){
  return groupAnswers.replace(/\n/g, '').split('').length;
}

export {customCustoms, differentAnswersInAGroup};
