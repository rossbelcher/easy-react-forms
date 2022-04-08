export function getInitialValue(paramSplit: string[], context: any): string | null | Function {
  const property = paramSplit[0];
  if (!context) {
    return null;
  }

  const propertValue = context[property];
  if (!propertValue === undefined || !propertValue === null) {
    return null;
  }
  const param = context[property];
  paramSplit.shift();

  if (paramSplit.length > 0) {
    return getInitialValue(paramSplit, param);
  } else {
    return param;
  }
}

export function setStateOfParent(path: string, value: any, schema: any, parentContext: any, error: any) {
  const newState = schema;
  const pList = path.split('.');
  const len = pList.length;
  for(let i = 0; i < len-1; i++) {
      const elem = pList[i];
      if( !schema[elem] ) schema[elem] = {}
      schema = schema[elem];
  }

  schema[pList[len-1]] = value;

  if (!newState.formErrors) newState.formErrors = [];

  const existingError = newState.formErrors.find(x => x.key === path);

  if (existingError) {
    if (error) {
      existingError.value = error;
    } else {

    }
  } else if (error) {
    newState.formErrors.push({
      key: path,
      value: error,
    });
  }

  parentContext.setState({...newState});
}
