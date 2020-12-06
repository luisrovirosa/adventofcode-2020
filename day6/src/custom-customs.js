function customCustoms(allGroupAnswersAsString) {
  return allGroupAnswersAsString.split('\n\n').map(differentAnswersInAGroup).reduce((a, b) => a + b);
}

function differentAnswersInAGroup(groupAnswersAsString) {
  const groupAnswers = groupAnswersAsString.split('\n').map((answersAsString) => answersAsString.split(''));

  const sameAnswer = groupAnswers.reduce((result, element) => result.filter(value => element.includes(value)), groupAnswers[0]);

  return [...new Set(sameAnswer)].length;
}

export {customCustoms, differentAnswersInAGroup};
