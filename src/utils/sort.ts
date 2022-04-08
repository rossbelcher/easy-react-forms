export function dynamicSort(property: any): any {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a: { [x: string]: any; },b: { [x: string]: any; }) {
        var result = 0;
        var sortProperty = a.data[property].sortValue === null || a.data[property].sortValue === undefined ? 'value' : 'sortValue';
        let sort1 = a.data[property][sortProperty];
        let sort2 = b.data[property][sortProperty];
        if (typeof(sort1) === "boolean") sort1 = sort1.toString();
        if (typeof(sort2) === "boolean") sort2 = sort2.toString();
  
  
        result = (sort1 < sort2) ? -1 : (sort1 > sort2) ? 1 : 0;
  
        const thenBy = a.data[property].sortThenBy;
        if (result == 0 && thenBy !== null && thenBy !== undefined) {
          var thenByProperty = a.data[thenBy].sortValue === null || a.data[thenBy].sortValue === undefined ? 'value' : 'sortValue';
          let sort3 = a.data[thenBy][thenByProperty];
          let sort4 = b.data[thenBy][thenByProperty];
          if (typeof(sort3) === "boolean") sort3 = sort3.toString();
          if (typeof(sort4) === "boolean") sort4 = sort4.toString();
  
          result = (sort3 < sort4) ? -1 : (sort3 > sort4) ? 1 : 0;
        }
  
        return result * sortOrder;
    }
  }
  
  export function dynamicSortMultiple() {
    /*
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    var props = arguments;
    return function (obj1: any, obj2: any) {
        var i = 0, result = 0, numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
  }
  