let profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr =>{
  profileDataArr.forEach(profileElement => console.log(profileElement));

};

printProfileData(profileDataArgs);
