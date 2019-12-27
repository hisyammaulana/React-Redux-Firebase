const initState = {
    projects: [
        {id: '1', title: 'Title 1', content: 'wkwkwkwkwkwkww'},
        {id: '2', title: 'Title 2', content: 'wkwkwkwkwkwkww'},
        {id: '3', title: 'Title 3', content: 'wkwkwkwkwkwkww'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_PROJECT_SUCCESS':
        console.log('create project success');
        return state;
      case 'CREATE_PROJECT_ERROR':
        console.log('create project error');
        return state;
      default:
        return state;
    }
  };

export default projectReducer