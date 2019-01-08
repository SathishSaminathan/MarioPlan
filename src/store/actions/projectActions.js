export const createProject = project => {
  return (dispatch, getstate, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstNameL: "Sathish",
        authourLastName: "Saminathan",
        authorId: 123456,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project
        });
      })
      .catch(err => {
        dispatch({
          type: "CREATE_PROJECT_ERR",
          err
        });
      });
  };
};
