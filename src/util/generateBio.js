export function generateBio(user) {
    let bio = `Hey there! I'm ${user.name},`;
  
    // Check if gender is provided
    if (user.gender) {
      bio += ` a ${user.gender.toLowerCase()},`;
    }
  
    // Check if grade and school are provided
    if (user.grade && user.school) {
      bio += ` in ${user.grade}th grade at ${user.school}.`;
    } else {
      bio += ` a student.`
    }
  
    // Check if languages are provided
    if (user.languages && user.languages.length > 0) {
      bio += ` Fluent in ${user.languages.map(lang => lang.language).join(', ')},`;
    }
  
    // Check if GPA is provided
    if (user.GPA) {
      bio += ` I'm not just a student with a GPA of ${user.GPA},`;
    }
  
    // Check if sports and dream job are provided
    if (user.sports && user.sports.length > 0 && user.dreamjob) {
      bio += ` but also an avid ${user.sports[0].sport} player with a dream of becoming a ${user.dreamjob}.`;
    }
  
    // Check if clubs and awards are provided
    if (user.clubs && user.clubs.length > 0 && user.awards && user.awards.length > 0) {
      bio += ` As a member of ${user.school}'s ${user.clubs[0].club} team and ${user.clubs[0].club} Club, I've been recognized as the "${user.awards[0].award}."`;
    }
  
    // Default closing statement
    bio += ` With my passion for learning and dedication to excellence, I'm ready to make my mark both academically and beyond.`;
  
    return bio;
  }