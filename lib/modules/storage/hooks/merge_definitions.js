import _ from 'lodash';

function onMergeDefinitions(targetDefinition, sourceDefinition, ClassName) {
  if (sourceDefinition.collection) {
    targetDefinition.collection = sourceDefinition.collection;
  }
  if (sourceDefinition.typeField) {
    targetDefinition.typeField = sourceDefinition.typeField;
  }
  if (sourceDefinition.transform !== undefined) {
    targetDefinition.transform = sourceDefinition.transform;
  }
  if (sourceDefinition.secured !== undefined) {
    targetDefinition.secured = _.extend(
      {},
      targetDefinition.secured,
      sourceDefinition.secured
    );
  }
};

export default onMergeDefinitions;