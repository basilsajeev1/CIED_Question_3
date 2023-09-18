function transformItemStructure(input) {
  const output = [];

  function transform(item, parent) {
    const { name, id, parent: nestedParent } = item;
    
    if(parent == null){
      transformedItem = { name, id};
    }else{
      transformedItem = { name, id, parent };
    }
    if (nestedParent) {
      transform(nestedParent, transformedItem);
    } else {
      output.push(transformedItem);
    }
    
  }

  input.forEach(item => {
    transform(item, null);
  });

  return output;
}

const input = [
  {
    name: "Menu3",
    id: "1",
    parent: {
      name: "Menu2",
      id: "2",
      parent: {
        name: "Menu1",
        id: "3",
      },
    },
  },
  {
    name: "Menu44",
    id: "11",
    parent: {
      name: "Menu33",
      id: "22",
      parent: {
        name: "Menu22",
        id: "33",
        parent: {
          name: "Menu11",
          id: "44",
        },
      },
    },
  },
];

const output = transformItemStructure(input);
console.log(output);
